
import {  View, StyleSheet,Pressable,Text } from "react-native";
import MyFeed from "../../components/UI/myFeeds";
//import MyFeeds from './components/UI/myFeeds'
import MyFeeds from '../../components/UI/myFeeds';

export default function Home() {
  return (
    //Whole Container blue background innerContainer with topBOrderRadius = 40
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <MyFeeds/>
        </View>
        <Pressable style={styles.addPost}>
          </Pressable>
      </View>
  );
}
const styles = StyleSheet.create({

  addPost:{
    position:"absolute",
    bottom:0,
  },
  container: {
    flex:1,
    backgroundColor: '#3B5998',
    alignItems:'center',
    justifyContent: 'center',
  },
  innerContainer: {
    flex:1,
    width:"100%",
    borderTopEndRadius:30,
    borderTopLeftRadius:30,
    backgroundColor: '#ffff',
    alignItems:'center',
    overflow: 'hidden',
  },
  
})