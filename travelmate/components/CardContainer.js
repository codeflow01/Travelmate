import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome6 } from "@expo/vector-icons";


const CardContainer = ({ imageSource, title, location, fullData }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Detail", { fullData })}
      className="w-[180px] h-[210px] border border-gray-300 rounded-xl bg-gray shadow-md px-1 py-1 mb-5"
    >
      <Image source={imageSource} className="w-full h-[150px] rounded-md" />

      {!title ? (
        <></>
      ) : (
        <>
          <Text className="py-2 px-[2px] font-semibold">
            {title?.length > 15 ? `${title.slice(0, 15)}...` : title}
          </Text>
          <View className="flex-row px-[2px] space-x-1">
            <FontAwesome6 name="location-dot" size={13} color="gray" />
            <Text className="font-semibold">
              {location?.length > 15 ? `${location.slice(0, 15)}...` : location}
            </Text>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
};

export default CardContainer;

