import { CameraType, CameraView  } from "expo-camera";
import { useCameraPermissions, } from "expo-image-picker";
import { useRef, useState } from "react"
import { View,Text,Button, TouchableOpacity,StyleSheet, Alert } from "react-native"
import { Image, type ImageSource } from "expo-image";
import * as MediaLibrary from 'expo-media-library';
import React from "react";
import { useNavigation, NavigationProp,StackActions  } from '@react-navigation/native';
 //{uri:string};//allows the route to accept a parameter
type RootStackParamList = {
    'AddPost' : {uri:string}
    'ViewStack' : undefined
  };
  
export const CameraScreen =() =>{
    //const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const navigation = useNavigation();
    //const popToAction = StackActions.popTo('Profile', { user: 'jane' });
    const [facing,setFacing] = useState<CameraType>('back');
    const [permission,requestPermissionCamera] = useCameraPermissions();
    const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
    const [image,setImage] = useState<any>();
    const [cameraProps, setCameraProps] = useState({
        zoom:0,
        flash:'one',
        animateShutter:false,
        facing:'front',
    })
    const cameraRef = useRef<CameraView|null>(null);
    if(!permission){
        return <View/>;
    }
    if(!permission.granted){
        return (
            <View style={styles.container}>
                <Text style={styles.message}> We need your permission to use the camera</Text>
                <Button onPress={requestPermissionCamera} title="grant camera"/>
            </View>
        );
    }
    if(!permissionResponse?.granted){
        return (
            <View style={styles.container}>
                <Text style={styles.message}> We need your permission to use the gallery</Text>
                <Button onPress={requestPermission} title="grant gallery"/>
            </View>
        );
    }

    const savePicture = async()=>{
        if (image) {
            try {
            const asset = await MediaLibrary.createAssetAsync(image);
            const assetInfo = await MediaLibrary.getAssetInfoAsync(asset.id);
            //Alert.alert('Photo saved!' + asset.uri);
            if (assetInfo) {
                const popToAction = StackActions.popTo('AddPost', { uri:asset.uri });
                navigation.dispatch(popToAction);
            }
            } catch (error){
                console.error(error);
            }
        }

    }

    const takePicture = async() =>{
        if(cameraRef.current){
            try{
                const photo = await cameraRef.current.takePictureAsync({
                    quality: 0.8,
                    base64: true,
                    exif: true,
                });
                if (photo) setImage(photo.uri);
            }catch (error){
                console.error(console.error);
            }

        } else {
            console.warn(`Camera is not ready`);
        }


    }
    function toggleCameraFacing(){
        setFacing(current => (current === 'back' ? 'front':'back'));
    }
    return (    
        <View style={styles.container}>
            {!image ? (
            <CameraView style={styles.camera} facing = {facing} ref={cameraRef} zoom={cameraProps.zoom} animateShutter={cameraProps.animateShutter}> 
                <View style={styles.buttonContainer}>
                    <TouchableOpacity  style={styles.button} onPress={toggleCameraFacing}>
                        <Text style={styles.text}>Flip Camera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.button} >
                        <Text style={styles.text} onPress={takePicture}>Take a picture</Text>
                    </TouchableOpacity>
                </View>
            </CameraView>
            ) : (
                <>
                    <Image source={image} style={styles.camera} />
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity  style={styles.button} onPress={()=> 
                            setImage(null)
                            //navigation.navigate('Tabs')
                        }>
                            <Text style={styles.text}>Discard</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.button} >
                            <Text style={styles.text} onPress={savePicture}>Save</Text>
                        </TouchableOpacity>
                    </View>
                </>
            )
            }
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    message: {
      textAlign: 'center',
      paddingBottom: 10,
    },
    camera: {
      flex: 1,
      justifyContent:'flex-end',
    },
    buttonContainer: {
      flexDirection:'row',
      height:50,
      backgroundColor: '#000000',
      margin: 14,
      alignItems:'center',
      justifyContent:'space-around',
    },
    button: {
      alignItems: 'center',
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
  });