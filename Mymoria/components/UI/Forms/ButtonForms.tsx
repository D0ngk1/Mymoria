import { Pressable, View,Text,StyleSheet } from "react-native";

interface ButtonFormProps{
    label:string;
    color:string;
    onPress:()=> void;
}
export default function ButtonForm( {label,color,onPress}:ButtonFormProps ){
    return(
        <View style={styles.buttonContainer}>
            <Pressable style={[styles.button,{ backgroundColor: color }]} onPress={onPress}>
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    buttonContainer: {
        width:'80%',
        height: 50,
        marginBottom:10,
      },
      button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      },
      buttonLabel: {
        color: '#00000',
        fontSize: 16,
      },
})