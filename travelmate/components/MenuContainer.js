import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const MenuContainer = ({ title, type, setType }) => {
  const handlePress = () => {
    setType(title.toLowerCase());
  };

  return (
    // <TouchableOpacity className="items-center justify-center space-y-1 w-[120px] h-[120px] "
    <TouchableOpacity className="mt-3 mb-3" onPress={handlePress}>
      <View
        className={`rounded-full items-center justify-center bg-gray-200 px-2 py-3 w-[180px] shadow-2xl 
        ${type === title.toLowerCase() ? "bg-[#734b24c6]" : ""}`}
      >
        <Text
          className={`text-gray-600 text-[16px] font-bold 
          ${type === title.toLowerCase() ? "text-[#ffffff]" : ""}`}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MenuContainer;
