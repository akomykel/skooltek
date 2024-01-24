import { View, Text, TouchableOpacity, useColorScheme, Dimensions, Image } from "react-native";
import { SimpleLineIcons } from '@expo/vector-icons';
import { COLOR_THEMES } from "../../assets/styles/Generic";
import { font, theme } from "../../assets/styles/Style";
import { useNavigation } from "@react-navigation/native";
import NotificationCounter from "../Notification/Template/Counter";

export function Avatar(props) {
  return (
    <Image source={props.imgSrc} style={{borderRadius:50,width:props.imgWidth,height:props.imgHeight}} />
  )
}

export function ProfileHeader(props) {
  const navigation = useNavigation();
  const scheme = useColorScheme();
  const isDarkTheme = scheme === 'dark';
  const setFontColor = isDarkTheme ? theme.fontDark : theme.fontLight;
  const dimensions = Dimensions.get("window");
  const contentWidth = dimensions.width-30;

  return (
    <View style={{'width':contentWidth,marginTop:50,'alignSelf':'center','flexDirection':'row'}}>
      <View style={{'width':'88%','flexDirection':'column',justifyContent:'center'}}>
        <Text style={[font.coolvetica_reg_400.sizes.s25,setFontColor,{justifyContent:'center'}]}>{`Good Evening, ${props.name}`}</Text>
      </View>
      <View style={{'width':'10%','flexDirection':'column',justifyContent:'center',height:50}}>
        <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <SimpleLineIcons name="bell" size={32} color={(isDarkTheme) ? COLOR_THEMES.white : COLOR_THEMES.black} 
                           style={{'alignSelf':'center'}} />
          {props.hasNotification ? <NotificationCounter counter={props.totalNotifications} /> : ''}
        </TouchableOpacity>
      </View>
    </View>
  )
}