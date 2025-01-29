import { Text, View, StyleSheet } from "react-native";
import { TouchableOpacity } from 'react-native';
import { useNavigation,NavigationProp } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
type RootStackParamList = {
  Home: undefined;
  Tasks: undefined;
  AddPost: undefined;
  'ViewStack' : {data:string};
};

export default function TaskScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Task screen</Text>
       <TouchableOpacity
        onPress={() => {
          navigation.navigate('ViewStack',{data:"1231asdfasdfasd23"}); // Now this is type-safe
        }}
        ><Ionicons name={'add-circle'} size={50} /></TouchableOpacity>
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