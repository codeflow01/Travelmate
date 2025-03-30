import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from 'react-native';
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import ContentPage from "./screens/ContentPage";
import DetailView from "./screens/DetailView";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    // <View className="flex-1 items-center justify-center bg-white">
    //   <Text className="text-blue-700">COMPSCI 732 Individual Assignment</Text>
    //   <Text className="text-blue-700">A Mobile App Developed with the React Native Framework</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Content" component={ContentPage} />
        <Stack.Screen name="Detail" component={DetailView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

