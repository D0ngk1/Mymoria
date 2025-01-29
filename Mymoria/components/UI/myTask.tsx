import { Text, View, StyleSheet, ScrollView } from "react-native";

const Index =() =>(
        <View style={styles.taskContainerRow}>
            <ScrollView  horizontal={true}>
              <View style={styles.viewHorizontalContainer}>
                {
                  Array.from({ length:10 })
                    .map((_,i) => 
                    <View style={styles.viewHorizontal} key={i}>
                      <Text>{i}</Text>
                    </View>
                    )
                }
              </View>
            </ScrollView>
          </View>
)
export default Index;

const styles = StyleSheet.create({
    taskContainerRow: {
      width:"100%",
      height:170,
      borderTopEndRadius:30,
      borderTopLeftRadius:30,
      backgroundColor: '#ffff',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    viewHorizontal:{
      borderRadius:18,
      width:110,
      height:"90%",
      borderWidth:1,
      marginLeft:5,
    },
    viewHorizontalContainer:{
      marginRight:10,
      marginLeft:15,
      flexDirection:"row",
      alignItems:'center',
    },
  })