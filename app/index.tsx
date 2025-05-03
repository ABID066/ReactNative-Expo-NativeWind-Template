import { StyleSheet, Text, Image, View } from "react-native";

import "@/global.css";

import React, { useEffect } from "react";

import { useRouter } from "expo-router";
const index = () => {


  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/"); // Navigate to the welcome screen after 2 seconds
    }, 2000);
  }, [router]);

  return (
    <View className='flex-1  justify-center items-center bg-[#010101]'>
      <Image
        source={require("@/assets/images/mimo.png")} // Adjust the path to your actual logo
      />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
