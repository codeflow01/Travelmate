import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { useLayoutEffect } from "react";
import { ActivityIndicator } from "react-native";
import MenuContainer from "../components/MenuContainer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CardContainer from "../components/CardContainer";
import getTripsData from "../api";


const ContentPage = () => {
  const navigation = useNavigation();

  const [type, setType] = useState("restaurants");

  const [isLoading, setIsLoading] = useState(false);

  const [apidata, setApidata] = useState([]);

  // access geometric information
  const [bl_latitude, setBl_latitude] = useState(null);
  const [tr_latitude, setTr_latitude] = useState(null);
  const [bl_longitude, setBl_longitude] = useState(null);
  const [tr_longitude, setTr_longitude] = useState(null);


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);

    fetchData();

    async function fetchData() {
      const { data } = await getTripsData(bl_latitude, tr_latitude, bl_longitude, tr_longitude, type);
      setApidata(data);

      setInterval(() => {
        setIsLoading(false);
      }, 5000);
    }
  }, [bl_latitude, tr_latitude, bl_longitude, tr_longitude, type]);

  // console.log("111apidata ",apidata);
  // console.log("222isLoading ",isLoading);
  

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      {/* 1st section */}
      <View className="flex-row items-center justify-between mt-3 px-5">
        <View className="space-y-2">
          <View>
            <Text className="text-[45px] text-[#000000] font-bold">
              Explore
            </Text>
          </View>

          <View className="space-y-1">
            <Text className="text-[23px] text-[#000000]">
              the paths less traveled
            </Text>
            <Text className="text-[23px] text-[#000000]">
              and the stories they hold
            </Text>
          </View>
        </View>

        <View className="h-[60] w-[60] bg-gray-500 rounded-full items-center justify-center">
          <Image
            source={require("../assets/avatar.jpg")}
            className="h-full w-full rounded-full object-cover shadow-lg"
          />
        </View>
      </View>

      {/* 2nd section */}
      <View className="flex-row items-center rounded-xl shadow-md bg-white mt-8 mx-4 py-1 px-1">
        <GooglePlacesAutocomplete
          // solution from stackoverflow regarding geocoded coords
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          fetchDetails={true}
          placeholder="Start from here"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details?.geometry?.viewport);
            setBl_latitude(details?.geometry?.viewport?.southwest?.lat);
            // console.log("55%% ",setBl_latitude);
            setTr_latitude(details?.geometry?.viewport?.northeast?.lat);
            setBl_longitude(details?.geometry?.viewport?.southwest?.lng);
            setTr_longitude(details?.geometry?.viewport?.northeast?.lng);
          }}
          query={{
            key: "your_googlecloud_api_key",
            language: "en",
          }}
        />
      </View>

      {/* 3rd section */}
      <ScrollView>
        {/* part 1 */}

        <View className="flex-row items-center justify-between mt-6 px-6 inset-x-0 shadow-xl">
        <MenuContainer
            title="Restaurants"
            // imageSource={require("../assets/restaurants.png")}
            type={type}
            setType={setType}
          />
          
          {/* <MenuContainer
            title="Hotels"
            imageSource={require("../assets/stays.png")}
            type={type}
            setType={setType}
          /> */}

          <MenuContainer
            title="Attractions"
            // imageSource={require("../assets/things_to_do.png")}
            type={type}
            setType={setType}
          />
        </View>

        {/* part 2 */}

        {/* ActivityIndicator */}

        {isLoading ? (
          <View className="flex-1 items-center justify-center py-[200px]">
            <ActivityIndicator size="large" color="#734b24c6" />
          </View>
        ) : (
          <View>
            {apidata?.length > 0 ? (
              <>
                <View className="flex-row items-center justify-between px-5 mt-4">
                  <Text className="font-semibold text-[21px]">
                    Recommendations
                  </Text>

                  <TouchableOpacity className="flex-row items-center space-x-1">
                    <Text className="font-semibold text-[21px] text-gray-400">
                      More
                    </Text>
                    <MaterialCommunityIcons
                      name="location-enter"
                      size={24}
                      color="gray"
                    />
                  </TouchableOpacity>
                </View>

                <View className="flex-row items-center justify-evenly flex-wrap mt-2">
                 {apidata.map((data, i)=>(
                  <CardContainer
                  key={i}
                  imageSource={data?.photo?.images?.medium?.url ? {uri:data?.photo?.images?.medium?.url} : require("../assets/dummy.jpg")}
                  title={data?.name}
                  location={data?.location_string}
                  fullData={data}
                />
                 ))}
                  {/* <CardContainer
                    key={"001"}
                    imageSource={require("../assets/dummy.jpg")}
                    title="cardTitle00000001"
                    location="auckland"
                  />
                  <CardContainer
                    key={"002"}
                    imageSource={require("../assets/dummy.jpg")}
                    title="card002"
                    location="wellington"
                  /> */}
                </View>
              </>
            ) : (
              <>
                <View className="flex-1 items-center mt-32">
                  <Image
                    className="w-[150px] h-[150px]"
                    source={require("../assets/404.png")}
                  />
                  <Text className="font-semibold text-[21px] text-[#734b24c6] mt-10">
                    Oops... We are looking into this
                  </Text>
                </View>
              </>
            )}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContentPage;

