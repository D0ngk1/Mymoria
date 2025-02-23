import { useState } from "react";
import { View,TextInput,StyleSheet, DimensionValue  } from "react-native";

interface InputTextFormsProps{
    onDataChange:(data :string) => void;
    placeHolder:string;
    secureTextEntry?: boolean;
    //width: DimensionValue;
}
export default function TextInputForms( {onDataChange,secureTextEntry,placeHolder}:InputTextFormsProps ){
    const [text, setText] = useState("");

    return (
        <View style={[styles.Inputcontainer]}>
            <TextInput
                onChangeText={newText => {
                    setText(newText);
                    onDataChange(newText);
                }}
                value={text}
                placeholder={placeHolder}
                style={[styles.textInput]}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    Inputcontainer: {
        width:'80%',
        marginBottom:7,
    },
    textInput:{
        width:'100%',
        borderWidth:1,
        borderColor: 'gray',
        textAlignVertical:'top',
        fontSize: 20,
      },
})