import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const DetailView = ({ route }) => {
  const navigation = useNavigation();

  const detailData = route?.params?.fullData;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <ScrollView className="flex-1 px-5 py-3">
        <View className="relative bg-white shadow-lg">
          <Image
            source={
              detailData?.photo?.images?.large?.url
                ? { uri: detailData?.photo?.images?.large?.url }
                : require("../assets/dummy.jpg")
            }
            className="w-full h-[300px] rounded-md"
          />

          <View className="absolute flex-row justify-between inset-x-0 top-5 px-6">
            <TouchableOpacity
              onPress={() => navigation.navigate("Content")}
              className="w-10 h-10 items-center "
            >
              <Ionicons
                name="arrow-back-circle-outline"
                size={45}
                color="#734b24c6"
              />
            </TouchableOpacity>

            <TouchableOpacity className="w-10 h-10 rounded-full items-center justify-center"></TouchableOpacity>
          </View>

          <View className="absolute flex-row justify-between inset-x-0 bottom-5 px-6">
            {detailData?.price && (
              <View className="rounded-full bg-[#734b24c6] px-2 py-2">
                <Text className="text-white font-bold">
                  {detailData?.price}
                </Text>
              </View>
            )}

            {detailData?.open_now_text && (
              <View className="rounded-full bg-[#734b24c6] px-2 py-2">
                <Text className="text-white font-bold">
                  {detailData?.open_now_text}
                </Text>
              </View>
            )}
          </View>
        </View>

        <View className="mt-5">
          <Text className="text-black font-semibold text-[21px]">
            {detailData?.name}
          </Text>
          <View className="flex-row items-center space-x-2 mt-2">
            <FontAwesome6 name="location-dot" size={16} color="gray" />
            <Text className="text-black font-semibold text-[16px]">
              {detailData?.location_string}
            </Text>
          </View>
        </View>

        <View className="flex-row items-center justify-between inset-x-0 mt-5">
          {detailData?.price_level && (
            <View className="flex-row space-x-2 items-center justify-center">
              <View className="w-12 h-12 rounded-md bg-[#734b24c6] items-center justify-center shadow-md">
                <FontAwesome5 name="comment-dollar" size={30} color="white" />
              </View>
              <Text className="text-[16px] font-semibold">
                {detailData?.price_level}
              </Text>
            </View>
          )}
          {detailData?.rating && (
            <View className="flex-row space-x-2 items-center justify-center">
              <View className="w-12 h-12 rounded-md bg-[#734b24c6] items-center justify-center shadow-md">
                <AntDesign name="star" size={30} color="white" />
              </View>
              <View>
                <Text className="text-[16px] font-semibold">Rating</Text>
                <Text className="text-[16px] font-semibold">
                  {detailData?.rating}
                </Text>
              </View>
            </View>
          )}
          {detailData?.cuisine?.[1]?.name && (
            <View className="flex-row space-x-2 items-center justify-center">
              <View className="w-12 h-12 rounded-md bg-[#734b24c6] items-center justify-center shadow-md">
                <MaterialCommunityIcons
                  name="chef-hat"
                  size={30}
                  color="#ffffff"
                />
              </View>
              <Text className="w-[58px] text-[15px] font-semibold">
                {detailData?.cuisine?.[1]?.name}
              </Text>
            </View>
          )}
        </View>

        {detailData?.description && (
          <Text className="mt-4 text-[16px] text-gray-500 font-semibold tracking-wide">
            {detailData?.description}
          </Text>
        )}

        {detailData?.cuisine && (
          <View className="flex-row items-center justify-start gap-2 flex-wrap mt-4 ">
            {detailData?.cuisine.map((n) => (
              <TouchableOpacity
                key={n.key}
                className="rounded-full bg-[#734b24c6] px-2 py-1"
              >
                <Text className="text-white font-semibold">{n.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <View className="mt-4 rounded-md bg-gray-100 py-2 space-y-3">
          {detailData?.address && (
            <View className="w-[380px] px-2 flex-row items-center justify-start space-x-4">
              <FontAwesome6 name="map-pin" size={24} color="black" />
              <Text className="text-[16px] text-gray-700 font-semibold">
                {detailData?.address}
              </Text>
            </View>
          )}

          {detailData?.phone && (
            <View className="flex-row items-center justify-start space-x-4">
              <MaterialCommunityIcons
                name="phone-dial"
                size={24}
                color="black"
              />
              <Text className="text-[16px] text-gray-700 font-semibold">
                {detailData?.phone}
              </Text>
            </View>
          )}

          {detailData?.email && (
            <View className="flex-row items-center justify-start space-x-4">
              <MaterialIcons name="alternate-email" size={24} color="black" />
              <Text className="text-[16px] text-gray-700 font-semibold">
                {detailData?.email}
              </Text>
            </View>
          )}
        </View>

        <View className="mt-10 h-[50px] "></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailView;
