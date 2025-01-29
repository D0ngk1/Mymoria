import { StyleSheet, View, Pressable, Text } from 'react-native';

type Props = {
    label: string;
    onPress?: () => void;
}

export default function AddPostButton ({label,onPress}: Props){
    return (
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.buttonLabel}>{label}</Text>
          </Pressable>
        </View>
      );
}
const styles = StyleSheet.create({
    buttonContainer: {
      width:'33.33%',
      height: 50,
      borderColor:'gray',
      borderTopWidth:.5,
      alignItems: 'center',
      justifyContent: 'center',
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
  });