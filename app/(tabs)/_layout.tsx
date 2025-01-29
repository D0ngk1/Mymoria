import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs 
        screenOptions={{
            tabBarActiveTintColor:"#00aaff",
            headerStyle:{
              backgroundColor: "#3B5998",
            },
            headerTintColor:"#fff",
            headerShadowVisible:false,
        }}
    >
      <Tabs.Screen name='index' options={{
        title:"",
        headerTitle:"Mymoria",
        tabBarIcon: ({focused,color}) => <Ionicons name={focused ? "home-sharp" : "home-outline"} size={30} color={color}/>
      }}/>
      <Tabs.Screen
        name="task" options={{
          title: "",
          headerTitle: "Tasks",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "list-sharp" : "list-outline"}
              size={30}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="addPost" options={{
          title: "",
          headerTitle: "Add Post",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "add-circle" : "add-circle-outline"}
              size={30}
              color={color}
            />
          ),
        }}
      />
    </Tabs>

  );
}
