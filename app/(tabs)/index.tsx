//import { Link } from "expo-router";
import { Text, View, StyleSheet, ScrollView } from "react-native";

export default function Index() {
  return (
    //Whole Container blue background innerContainer with topBOrderRadius = 40
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <ScrollView>
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
            {
              Array.from({ length:20 })
                .map((_,i) => 
                  <View style={styles.viewVertical} key={i}>
                    <Text>{i}</Text>
                  </View>
                )
            }
        </ScrollView>
        
      </View>
    </View>
  );
}
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
  text: {
    color:'#3B5998'
  },
  button: {
    fontSize:20,
    textDecorationLine: "underline",
    color:'#fff',
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
  viewVertical:{
    borderWidth:1,
    height:450,
  },
})