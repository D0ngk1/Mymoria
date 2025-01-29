import { Text, View, StyleSheet } from "react-native";
import { useNavigation, NavigationProp, useRoute, RouteProp  } from '@react-navigation/native';
import { useEffect, useState } from "react";
type RootStackParamList = {
  'ViewStack' : { data: string };
};

export default function ViewTaskScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'ViewStack'>>();
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  useEffect(() => {
    console.log('Route Params:', route.params);
    console.log('Selected Image:', selectedImage);
      if (route.params) {
        setSelectedImage(route.params.data);
      }
    }, [route.params]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>View Task screen -- {selectedImage}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#3B5998',
    alignItems:'center',
    justifyContent: 'center',
  },
  text: {
    color:'#fff'
  }
})