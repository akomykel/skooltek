import { Dimensions, View, useColorScheme, Text } from 'react-native';
import { theme, font, global } from '../assets/styles/Style';
import { LinkButtonWithImage } from '../components/Custom/Buttons';

export default function SelectSchool() {
  const scheme = useColorScheme();
  const isDarkTheme = scheme === 'dark';
  const setTheme = isDarkTheme ? theme.dark : theme.light;
  const setFontColor = isDarkTheme ? theme.fontDark: theme.fontLight
  const dimensions = Dimensions.get('window');
  const contentWidth = dimensions.width-50;
  const secondaryLogo = require('../assets/images/Secondary_Logomark_No_BG/Secondary_Logomark_Gradient_No_BG.png');

  return (
    <View style={[global.androidSafeArea,global.container,setTheme,{alignItems:'center',justifyContent:'center'}]}>
      <View style={{height:dimensions.height*0.96}}>
        <View style={{width:contentWidth,marginTop:'30%'}}>
          <Text style={[font.poppins_bold_800.sizes.s25,setFontColor]}>Select a school to login</Text>
        </View>

        <LinkButtonWithImage
          screenName={'Login'}
          containerStyle={{marginTop:50,alignItems:'center',flexDirection:'row',width:contentWidth}}
          contentStyle={{flexDirection:'column',alignItems:'center'}}
          imageSrc={secondaryLogo}
          imageStyle={{width:50,height:50}}
          labelStyle={[setFontColor,{'fontSize':15,'fontFamily':'poppins_light_300'}]}
          labelText={'SkoolTek School A'}
        />

        <LinkButtonWithImage
          screenName={'Login'}
          containerStyle={{marginTop:10,alignItems:'center',flexDirection:'row',width:contentWidth}}
          contentStyle={{flexDirection:'column',alignItems:'center'}}
          imageSrc={secondaryLogo}
          imageStyle={{width:50,height:50}}
          labelStyle={[setFontColor,{'fontSize':15,'fontFamily':'poppins_light_300'}]}
          labelText={'SkoolTek School B'}
        />

        <LinkButtonWithImage
          screenName={'Login'}
          containerStyle={{marginTop:10,alignItems:'center',flexDirection:'row',width:contentWidth}}
          contentStyle={{flexDirection:'column',alignItems:'center'}}
          imageSrc={secondaryLogo}
          imageStyle={{width:50,height:50}}
          labelStyle={[setFontColor,{'fontSize':15,'fontFamily':'poppins_light_300'}]}
          labelText={'SkoolTek School C'}
        />

        <View style={{width:contentWidth,position:'absolute',bottom:60,flexDirection:'row',alignSelf:'center',justifyContent:'center'}}>
          <Text style={[font.coolvetica_reg_400.sizes.s15,setFontColor,{'fontWeight':'normal'}]}>Having Trouble? Send us a message</Text>
        </View>
      </View>
    </View>
  );
}
