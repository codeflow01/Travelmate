import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";


const HomeScreen = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    // <SafeAreaView className="bg-white flex-1 relative">
    <View className="flex-1">

      {/* full-screen background image */}
      <ImageBackground
        source={require("../assets/home.jpg")}
        resizeMode="cover"
        className="flex-1"
      >
        {/* 2nd element */}
        <View className="absolute top-[50px] mt-[125px] px-5 space-x-1">
          <View>
            <Animatable.Text
              animation="fadeInLeft"
              className="text-[#ffffff] text-[45px] font-semibold"
            >
              Journey
            </Animatable.Text>
          </View>
          <View>
            <Animatable.Text
              animation="fadeInRight"
              className="text-[#ffffff] text-[23px] font-semibold"
            >
              Beyond the Map with Explore
            </Animatable.Text>
          </View>
        </View>

        {/* 3rd element */}
        <Animatable.View
          animation="zoomIn"
          className="absolute top-[490px] left-[130px] w-[80px] h-[80px] border-[#ffffff] rounded-full border-l-4 border-r-1 border-t-4"
        >
          <TouchableOpacity 
          onPress={() => navigation.navigate("Content")}
          className="absolute top-[9px] left-[9px]">
            <Animatable.View animation="pulse" iterationCount={Infinity}>
              <Text className="text-[#ffffff] text-[45px] font-semibold">Go</Text>
            </Animatable.View>
          </TouchableOpacity>
        </Animatable.View>

      </ImageBackground>
    </View>

    // </SafeAreaView>
  );
};

export default HomeScreen;

