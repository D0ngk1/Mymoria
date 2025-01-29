import { useState } from "react";
import { TextInput, View,StyleSheet } from "react-native";

interface InputNewPostProps {
  onDataChange: (data: string) => void; // Define the type for the onDataChange prop
}

export default function InputNewPost( {onDataChange}:InputNewPostProps ){
  const [height, setHeight] = useState(40);
  const [context, setContext] = useState("");



  const handleContentSizeChange = (event:any) => {
    const { contentSize } = event.nativeEvent;
    setHeight(Math.max(100, contentSize.height)); // Ensure minimum height
  }; 
    return (
        <View style={styles.Inputcontainer}>
            <TextInput
              onChangeText={text => { 
                setContext(text); 
                onDataChange(text); 
              }}
              value={context}
              multiline={true}
              onContentSizeChange={handleContentSizeChange}
              placeholder="How's your day --- ?"
              style={[styles.textInput,{height}]}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    Inputcontainer:{
        width:'100%',
      },
    textInput:{
        width:'100%',
        borderWidth:1,
        borderColor: 'gray',
        textAlignVertical:'top',
        fontSize: 20,
      },
})
