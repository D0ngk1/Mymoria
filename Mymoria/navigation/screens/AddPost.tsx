//import { Link } from "expo-router";
import { Text, View, StyleSheet, SafeAreaView, TextInput, ScrollView } from "react-native";
import ImageViewer from "../../components/ImageViewer";
import Button from "../../components/UI/AddPostButton";
import { useEffect, useState } from "react";
import InputNewPost from "../../components/UI/InputNewPost";
//import { TextInput } from "react-native-gesture-handler";
import * as ImagePicker from 'expo-image-picker';
import { useNavigation, NavigationProp, useRoute, RouteProp  } from '@react-navigation/native';

import {Feeds} from "../../models/feeds";
import FeedsService from "../../services/feeds-service";

const PlaceholderImage = require('../../assets/sisyphus.png');


type RootParamList = {
  'OpenCamera' :  undefined;
  AddPost      :  { uri: string };
  'Tabs'       :  undefined;
};

const myFeed : Feeds ={
  name:     "Daryl",
  content:  "",
  tags:     "MyPost",
  dateCreated: "now",
  favorite: false,
  image:'',
};

export default function AddPost() {
  //Navigatation
  const navigation  = useNavigation<NavigationProp<RootParamList>>();
  const route       = useRoute<RouteProp<RootParamList, 'AddPost'>>();

  //Image from camera and content
  const [selectedImage, setSelectedImage] = useState<string | ''>('');
  const [content, setPostContent]         = useState<string | ''>('');


  const feedServices = FeedsService();
  const handlePost = () =>{
    myFeed.content = content;
    myFeed.image   = selectedImage;
    feedServices.addFeed(myFeed);
    console.log(myFeed);
    navigation.navigate('Tabs');
  }

  
  // Handler to receive data from the child
  const handleDataChange = (data: string) => {
    setPostContent(data);
  };

  // set the image captured from the camera
  useEffect(() => {
    //console.log(route.params);
    if (route.params) {
      setSelectedImage(route.params.uri);
    }
  }, [route.params?.uri]);
  
  
  //Open Gallery
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:['images'],
      quality:1,
    });
    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    } else {
      alert('You did not select any image.');
    }
  }

 /*onPress={() => {
    navigation.navigate('ViewStack'); // Now this is type-safe
  }}*/
  return (
    <View style={styles.containerScrollview}>
      <ScrollView>
        <View style={styles.container}>
            <InputNewPost onDataChange={handleDataChange}/>
            <View style={styles.imageContainer}>
              <ImageViewer  imgSource={PlaceholderImage}  selectedImage={selectedImage}/>
            </View>
        </View>
      </ScrollView>
      <View style={styles.RowButtons}>
            <Button label="Gallery" onPress={pickImageAsync}></Button>
            <Button label="Camera"  onPress={()=> navigation.navigate('OpenCamera')}></Button>
            <Button label="Post"    onPress={handlePost}></Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  containerScrollview:{
    flex:1,
    backgroundColor: '#ffff',
  },
  container: {
    flex:1,
    height:'100%',
    width:'100%',
    backgroundColor: '#ffff',
    alignItems:'center',
  },
  RowButtons:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-evenly',
    backgroundColor:'#ffff',
    position:'absolute',
    bottom:0,
  },
  imageContainer:{
    width:"100%",
    marginBottom:20,
  },
  text: {
    color:'#3B5998',
  },
  button: {
    fontSize:20,
    textDecorationLine: "underline",
    color:'#fff',
  },
})