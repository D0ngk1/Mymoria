import { Link,Stack } from "expo-router";
import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
    <Stack.Screen options={{ title: "Page Not Found!" }} />
        <View style={styles.container}>
          <Text style={styles.text}>Page Not Found!</Text>
          <Link href={"/"} style={styles.button}>Go Back to Home Screen</Link>
        </View>
    </>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#768289',
    alignItems:'center',
    justifyContent: 'center',
  },
  text: {
    color:'#fff'
  },
  button: {
    fontSize:20,
    textDecorationLine: "underline",
    color:'#fff',
  },
})