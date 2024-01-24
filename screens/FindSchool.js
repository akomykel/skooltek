import { Dimensions, View, Text, useColorScheme, StyleSheet } from 'react-native';
import { border, font, global, theme } from '../assets/styles/Style';
import { COLOR_THEMES } from '../assets/styles/Generic';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextInput } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import { RegularButtons } from '../components/Custom/Buttons';
import { useNavigation } from '@react-navigation/native';

export default function FindSchool() {
  const navigation = useNavigation();
  const scheme = useColorScheme();
  const isDarkTheme = scheme === 'dark';
  const setTheme = isDarkTheme ? theme.dark : theme.light;
  const setFontColor = isDarkTheme ? theme.fontDark : theme.fontLight;
  const dimensions = Dimensions.get('window');
  const contentWidth = dimensions.width-(dimensions.width*0.15);

  return (
    <KeyboardAwareScrollView style={[global.androidSafeArea,setTheme]}>
      <View style={[global.container,setTheme,{justifyContent:'center',marginTop:dimensions.height*0.10}]}>
        <View style={{alignSelf:'center',width:contentWidth}}>
          <Text style={[font.poppins_bold_800.sizes.s30,setFontColor]}>Find your school</Text>
        </View>

        <View style={{marginTop:70,alignSelf:'center',width:contentWidth}}>
          <Text style={[font.poppins_reg_400.sizes.s15,setFontColor]}>Email</Text>
        </View>

        <View style={{width:contentWidth,marginTop:5,alignSelf:'center'}}>
          <TextInput 
            placeholder="Enter your email here.." cursorColor={COLOR_THEMES.black} underlineColor="transparent" activeUnderlineColor="transparent"
            style={[border.all_radius_8_black_1,font.poppins_reg_400.base,{'backgroundColor':COLOR_THEMES.white}]}
          />
        </View>

        <RegularButtons topmargin={25} align={'center'} buttonWidth={'40%'} buttonHeight={55} buttonColor={COLOR_THEMES.red}
          buttonBorderRadius={20} navigation={navigation} screenName={'SelectSchool'} textSize={16} textFamily={'poppins_light_300'}
          style={{'flexDirection':'row','justifyContent':'center'}} textColor={COLOR_THEMES.white} buttonText={'Search'} 
        />

        <View style={{width:contentWidth,marginTop:30,alignSelf:'center',justifyContent:'center',flexDirection:'row'}}>
          <Text style={[font.poppins_reg_400.sizes.s15,setFontColor]}>or</Text>
        </View>

        <View style={{flexDirection:'row',marginTop:20,justifyContent:'center'}}>
          <View style={{flexDirection:'column'}}>
            <MaterialIcons name="qr-code" size={20} color={(isDarkTheme) ? COLOR_THEMES.white : COLOR_THEMES.black} />
          </View>
          <View style={{flexDirection:'column'}}>
            <View style={{width:100,flexDirection:'row',marginLeft:5}}>
              <Text style={[font.poppins_reg_400.sizes.s15,setFontColor,{'fontWeight':'bold'}]}>Scan QR Code</Text>
            </View>
          </View>
        </View>

        <View style={{width:contentWidth,marginTop:35,alignSelf:'center',flexDirection:'row',justifyContent:'center'}}>
          <Text style={[font.coolvetica_reg_400.sizes.s15,setFontColor]}>Having Trouble? Send us a message</Text>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    width:'40%',
    height:55,
    borderRadius:20,
    marginTop:25,
    alignSelf:'center',
    justifyContent:'center'
  },
  buttonTextStyle: {
    fontSize:16,
    fontFamily:'poppins_light_300',
    color:COLOR_THEMES.white,
    alignSelf:'center'
  }
});
