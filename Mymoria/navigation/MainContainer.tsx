import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import 'react-native-gesture-handler';
import { useNavigation, NavigationProp } from '@react-navigation/native';


// Screens
import Home from './tabs/Home';
import TaskScreen from './tabs/Task';
import AddPost from './screens/AddPost';
// import NewPost from './screens/NewPost';
import ViewTaskScreen from './screens/ViewTask';
import { CameraScreen } from './screens/Camera';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screen names
const homeName = 'Home';
const taskName = 'Tasks';
const addPostName = 'AddPost';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
//Stack for View
/*const TaskViewStack:React.FC =({route}:any)=> {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ViewTask1"
        component={ViewTaskScreen}
        options={{ headerShown: true, title: 'View Task' }}
        initialParams={route.params} 
      />
    </Stack.Navigator>
  );
}*/
/*Stack for Add Post
const AddPostStack:any =()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NewPost"
        component={AddPost}
        options={{ headerShown: true, title: 'New Post' }}
      />
    </Stack.Navigator>
  );
}*/
/*const CameraStack:any =()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OpenCamera"
        component={CameraScreen}
        options={{ headerShown: false, title: 'New Post' }}
      />
    </Stack.Navigator>
  );
}*/

// Define route parameter list for type safety
type RootStackParamList = {
  Home: undefined;
  Tasks: undefined;
  AddPost: undefined;
  ViewTaskScreen : undefined;
};
//Primary Tabs
const PrimaryTabs: any = ()=> {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // Pass type to useNavigation

  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = '';
          if (route.name === homeName) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === taskName) {
            iconName = focused ? 'list-sharp' : 'list-outline';
          } else if (route.name === addPostName) {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name={homeName} component={Home} />
      <Tab.Screen name={addPostName}
        component={AddPost}
        options={{ headerShown: true }}
        listeners={{
            tabPress: (e) =>{
                e.preventDefault();
                navigation.navigate(addPostName);
            }
        }}
      />
      <Tab.Screen name={taskName} component={TaskScreen} />

    </Tab.Navigator>
  );
}

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Tabs"
      screenOptions={{
        headerShown: false,
      }}
      > 
        <Stack.Screen name="Tabs" component={PrimaryTabs}/>
        <Stack.Screen name="ViewStack" component={ViewTaskScreen} options={{headerShown:true}}/>
        <Stack.Screen name={addPostName} component={AddPost} options={{headerShown:true}}/>
        <Stack.Screen name={'OpenCamera'} component={CameraScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
