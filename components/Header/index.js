import { View, Text, Pressable, useColorScheme } from "react-native";
import { COLOR_THEMES } from "../../assets/styles/Generic";
import { Ionicons, Entypo } from '@expo/vector-icons';
import { Button } from "react-native-paper";
import { Avatar } from "../Profile/Header";
import { font } from "../../assets/styles/Style";

export function PostedByHeader(props) {
  const scheme = useColorScheme();
  const isDarkTheme = scheme === 'dark';

  return (
    <View style={{marginTop:20,flexDirection:"row",alignItems:"center"}}>
      <View>
        <Avatar imgSrc={props.avatar} imgWidth={80} imgHeight={80} />
      </View>

      <View>
        <View style={{flexDirection:"row",marginLeft:10}}>
          <Text style={[props.fontName,{color:(isDarkTheme) ? COLOR_THEMES.white : COLOR_THEMES.black,alignSelf:'flex-end'}]}>{props.name}</Text>
        </View>

        <View style={{flexDirection:"row",marginLeft:10}}>
          <Text style={[props.fontRole,{color:(isDarkTheme) ? COLOR_THEMES.white : COLOR_THEMES.gray_2,alignSelf:'flex-end'}]}>{props.role}</Text>
        </View>
      </View>
    </View>
  )
}

export function Header(props) {
  return (
    <View style={{
      flexDirection:'row',
      height:50,
      backgroundColor:COLOR_THEMES.yellow,
      borderTopLeftRadius:15,
      borderTopRightRadius:15,
      borderWidth:1,
      borderColor:COLOR_THEMES.gray_2
    }}>
      <View style={{flexDirection:'column',padding:10,justifyContent:'center',width:'20%',height:'100%'}}>
        {
          props.hasBackButton
          ? <ShowBackButton changeModalStatus={props.changeModalStatus} handleShowModal={props.handleShowModal} />
          : ''
        }
      </View>

      <View style={{flexDirection:'column',padding:5,alignItems:'center',justifyContent:'center',width:'60%',height:'100%'}}>
        <View style={{width:'100%',alignItems:'center'}}>
          <View>
            <Text style={[font.poppins_med_500.sizes.s18_bold,{color:COLOR_THEMES.black}]}>{props.header}</Text>
          </View>
        </View>
      </View>

      <View style={{flexDirection:'column',padding:10,alignItems:'center',justifyContent:'center',width:'20%',height:'100%'}}>
        <View style={{flexDirection:'column',alignSelf:'flex-end',justifyContent:'center'}}>
          <View style={{alignSelf:'center'}}>
            {
              (props.isTeacher)
              ? <ShowTeacherOptions isCreatePost={props.isCreatePost} isSaveButton={props.isSaveButton} />
              : ''
            }
          </View>
        </View>
      </View>
    </View>
  )
}

const ShowTeacherOptions = (props) => {
  if(props.isCreatePost) {
    return (
      <Button buttonColor={COLOR_THEMES.red} textColor={COLOR_THEMES.white} labelStyle={font.poppins_light_300.sizes.s15} style={{height:38}}>
        Post
      </Button>
    )
  } else if(props.isSaveButton) {
    return (
      <Button buttonColor={COLOR_THEMES.red} textColor={COLOR_THEMES.white} labelStyle={font.poppins_light_300.sizes.s15} style={{height:38}}>
        Save
      </Button>
    )
  } else {
    return (
      <Entypo name="dots-three-vertical" size={20} color={COLOR_THEMES.black} />
    )
  }
}

const ShowBackButton = (props) => {
  return (
    <Pressable onPress={() => props.handleShowModal(false)}>
      <View style={{'flexDirection':'row','height':'100%'}}>
        <View style={{flexDirection:'column',alignSelf:'center'}}>
          <View style={{alignSelf:'center',paddingTop:3}}>
            <Ionicons name="chevron-back" size={13} color={COLOR_THEMES.gray_2} />
          </View>
        </View>

        <View style={{flexDirection:'column',alignSelf:'center'}}>
          <View style={{alignSelf:'center'}}>
            <Text style={[font.poppins_light_300.sizes.s13_bold,{color:COLOR_THEMES.gray_2}]}>Back</Text>
          </View>
        </View>
      </View>
    </Pressable>
  )
}