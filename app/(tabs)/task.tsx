import { Text, View, StyleSheet } from "react-native";

export default function TaskScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Task screen</Text>
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