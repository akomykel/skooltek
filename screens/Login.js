import React, { useContext, useState } from 'react';
import { Dimensions, Image, StyleSheet, View, useColorScheme, Text } from 'react-native';
import { TextInput, Button } from "react-native-paper";
import { border, font, global, theme } from '../assets/styles/Style';
import { COLOR_THEMES, SIZE } from '../assets/styles/Generic';
import { NavigationButton } from '../components/Custom/Buttons';
import { AuthContext } from '../context/AuthContext';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Formik } from 'formik';
import { loginValidationSchema } from '../components/Validation';
import Spinner from 'react-native-loading-spinner-overlay';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Login = () => {
  const scheme = useColorScheme();
  const isDarkTheme = scheme === 'dark';
  const setTheme = isDarkTheme ? theme.dark : theme.light;
  const setFontColor = isDarkTheme ? theme.fontDark : theme.fontLight;
  const dimensions = Dimensions.get('window')
  const imageHeight = Math.round(250 * 9 / 16);
  const imageWidth = dimensions.width;
  const contentWidth = dimensions.width-50;
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const {isLoading, login, isInvalidUser, invalidUserMsg} = useContext(AuthContext);

  return (
    <KeyboardAwareScrollView style={[global.androidSafeArea, setTheme]}>
      <View style={[global.container,setTheme]}>
        <Spinner visible={isLoading} />

        <View style={{marginTop:'5%'}}>
          <Image 
            source={require('../assets/images/Secondary_Logomark_No_BG/Secondary_Logomark_Gradient_No_BG.png')} 
            style={{width:imageWidth,height:imageHeight,resizeMode:'contain',justifyContent:'center'}}
          />

          <View style={{alignSelf:'center',alignItems:'center',width:contentWidth}}>
            <Text style={[font.poppins_bold_800.sizes.s20,setFontColor]}>Bethany Baptist Academy</Text>
          </View>

          <Formik validationSchema={loginValidationSchema} initialValues={{ email: '', password: '' }} onSubmit={values => login(values.email,values.password)}>
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <>
                <View style={{marginTop:30}}>
                  <View style={{alignSelf:'center',width:contentWidth}}>
                    <Text style={[font.poppins_light_300.sizes.s15,setFontColor]}>Email</Text>
                  </View>
                  <View style={{alignSelf:'center',width:contentWidth}}>
                    <TextInput
                      placeholder="Enter your Email here.."
                      value={values.email}
                      onChangeText={handleChange('email')}
                      cursorColor={COLOR_THEMES.black} underlineColor="transparent" activeUnderlineColor="transparent"
                      style={[border.all_radius_10_black_1,font.poppins_light_300.base,{backgroundColor:COLOR_THEMES.white}]}    
                      name="email"
                      onBlur={handleBlur('email')}
                      keyboardType="email-address"
                    />
                    {(errors.email && touched.email) && <Text style={global.errorText}>{errors.email}</Text>}
                    {(isInvalidUser) && <Text style={global.errorText}>{invalidUserMsg}</Text>}
                  </View>
                </View>

                <View style={{marginTop:12}}>
                  <View style={{alignSelf:'center',width:contentWidth}}>
                    <Text style={[font.poppins_light_300.sizes.s15,setFontColor]}>Password</Text>
                  </View>

                  <View style={{alignSelf:"center",width:contentWidth}}>
                    <TextInput
                      placeholder="Enter your Password here.."
                      secureTextEntry={isPasswordSecure}
                      value={values.password}
                      onChangeText={handleChange('password')}
                      underlineColor="transparent" activeUnderlineColor="transparent"
                      name="password"
                      onBlur={handleBlur('password')}
                      style={{
                        'borderColor':COLOR_THEMES.black,
                        'borderWidth':1,
                        'borderTopLeftRadius':10,
                        'borderTopRightRadius':10,
                        'borderBottomLeftRadius':10,
                        'borderBottomRightRadius':10,
                        'backgroundColor':COLOR_THEMES.white,
                        'fontFamily':'poppins_light_300'
                      }}
                      right={
                        <TextInput.Icon
                          icon={() => <MaterialCommunityIcons name={isPasswordSecure ? "eye-off" : "eye"} size={28} />}
                          iconColor={COLOR_THEMES.black}
                          onPress={() => {isPasswordSecure ? setIsPasswordSecure(false) : setIsPasswordSecure(true)}}
                        />
                      }
                    />
                    {(errors.password && touched.password) && <Text style={global.errorText}>{errors.password}</Text>}
                    {(isInvalidUser) && <Text style={global.errorText}>{invalidUserMsg}</Text>}
                  </View>
                </View>

                <View style={{alignSelf:'center',width:contentWidth,padding:'1%',flexDirection:'row',justifyContent:'flex-end'}}>
                  <Text style={[font.poppins_light_300.sizes.s15,setFontColor]}>Forgot Password?</Text>
                </View>

                <View style={{alignSelf:'center',width:contentWidth,flexDirection:'row',justifyContent:'center',marginTop:20}}>
                  <Button onPress={handleSubmit} 
                    style={{elevation:8,paddingVertical:5,paddingHorizontal:12,backgroundColor:COLOR_THEMES.red,borderRadius:18,width:'40%'}}
                    labelStyle={{'fontSize':16,'fontFamily':'poppins_light_300','color':COLOR_THEMES.white,'alignSelf':'center'}}
                    buttonColor={COLOR_THEMES.red} textColor={COLOR_THEMES.white}>
                      Continue
                  </Button>
                </View>

                <View style={{flexDirection:'row',alignSelf:'center',justifyContent:'center',width:contentWidth,marginTop:dimensions.height*0.08}}>
                  <Text style={[setFontColor,styles.font15]}>Not your School? </Text>
                  <NavigationButton
                    screenName={'SelectSchool'}
                    labelStyle={[setFontColor,{textDecorationLine:'underline'}]}
                    label={'Click here to change'}
                  />
                </View>
              </>
            )}
          </Formik>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  font15: {
    fontSize:SIZE.s15
  }
});

export default Login