//import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function AddPost() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>Add Post</Text>
      </View>
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
  innerContainer: {
    flex:1,
    width:"100%",
    borderTopEndRadius:35,
    borderTopLeftRadius:35,
    backgroundColor: '#ffff',
    alignItems:'center',
    justifyContent: 'center',
  },
  text: {
    color:'#3B5998'
  },
  button: {
    fontSize:20,
    textDecorationLine: "underline",
    color:'#fff',
  },
})