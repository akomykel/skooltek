import React, { useEffect } from "react";
import { Dimensions, View, useColorScheme, Image } from "react-native";
import { global, theme } from "../assets/styles/Style";
import * as Font from 'expo-font';

export default function SplashScreen({ navigation }) {
  const scheme = useColorScheme();
  const isDarkTheme = scheme === 'dark';
  const setTheme = isDarkTheme ? theme.dark : theme.light;
  const dimensions = Dimensions.get('window');
  const imageHeight = Math.round(dimensions.width * 9 / 16);
  const imageWidth = dimensions.width-10;
  const contentWidth = dimensions.width;
  const darkLogo = require('../assets/images/Skooltek_Logo_No_BG/Skooltek_Logo_No_Bg.png');
  const lightLogo = require('../assets/images/Skooltek_Logo_White_Bg/Skooltek_Logo_White_BG.png');

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          coolvetica_comp_reg_400: require("../assets/fonts/Coolvetica/CoolveticaCompressedRg-Regular-400.ttf"),
          coolvetica_cond_reg_400: require("../assets/fonts/Coolvetica/CoolveticaCondensedRg-Regular-400.ttf"),
          coolvetica_cram_reg_400: require("../assets/fonts/Coolvetica/CoolveticaCrammedRg-Regular-400.ttf"),
          coolvetica_reg_400: require("../assets/fonts/Coolvetica/CoolveticaRg-Regular-400.ttf"),
          poppins_black_900: require("../assets/fonts/Poppins/Poppins-Black-900.ttf"),
          poppins_bold_800: require("../assets/fonts/Poppins/Poppins-ExtraBold-800.ttf"),
          poppins_bold_700: require("../assets/fonts/Poppins/Poppins-Bold-700.ttf"),
          poppins_med_500: require("../assets/fonts/Poppins/Poppins-Medium-500.ttf"),
          poppins_reg_400: require("../assets/fonts/Poppins/Poppins-Regular-400.ttf"),
          poppins_light_300: require("../assets/fonts/Poppins/Poppins-Light-300.ttf")
        });
      } catch (e) {
          console.warn("Test error");
          console.warn(e)
      } finally {
          setTimeout(() => {
            navigation.navigate("FindSchool");
          },5000);
      }
    }
    prepare();
  }, []);

  return (
    <View style={[global.container,setTheme]}>
      <View style={{width:contentWidth,alignItems:'center','justifyContent':'center',flexDirection:'row'}}>
        <View style={{marginTop:dimensions.height*0.25}}>
          <Image 
            source={(isDarkTheme) ? darkLogo : lightLogo} 
            style={{width:imageWidth,height:imageHeight,resizeMode:"contain",'justifyContent':'center'}} 
          />
        </View>
      </View>
    </View>
  );
}
