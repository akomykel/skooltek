import { useState } from "react";
import { View, Text, Dimensions, useColorScheme, TouchableOpacity } from "react-native";
import { font, global, theme } from "../../assets/styles/Style";
import { Button } from "react-native-paper";
import { COLOR_THEMES } from "../../assets/styles/Generic";
import { ProfileHeader } from "../../components/Profile/Header";
import { Ionicons, Entypo, AntDesign } from '@expo/vector-icons';
import { ButtonWithModal } from "../../components/Custom/Buttons";
import { useNavigation } from "@react-navigation/native";
import Moment from 'moment';
import TeacherAttendanceView from "./TeacherAttendanceView";

export default function ViewSelectedDateDetails({props,route,navigation}) {
  const scheme = useColorScheme();
  const isDarkTheme = scheme === 'dark';
  const setTheme = isDarkTheme ? theme.dark : theme.light;
  const dimensions = Dimensions.get("window");
  const contentWidth = dimensions.width-30;
  const [hasNotification,setHasNotification] = useState(false);
  const { user, day } = route.params;

  const [isShowMainContent,setShowMainContent] = useState(true);
  const [isShowCalendar, setShowCalendar] = useState(true);
  const [isShowAttendance, setShowAttendance] = useState(false);
  const showContent = (contentTab) => {
    if(contentTab == 'calendar') {
      setShowCalendar(true);
      setShowAttendance(false);
      setShowMainContent(false);
    } else if(contentTab == 'attendance') {
      setShowCalendar(false);
      setShowAttendance(true);
      setShowMainContent(false);
    }
  }

  return (
    <View style={[global.container,setTheme]}>
      <ProfileHeader name={user} hasNotification={hasNotification} counter={10}/>

      <View style={{flexDirection:'row',width:contentWidth,alignSelf:'center',marginTop:20}}>
        <View style={{width:120,padding:2}}>
          <Button 
            onPress={() => navigation.navigate('Attendance')}
            style={{borderRadius:10}}
            labelStyle={{fontFamily:'poppins_light_300'}}
            buttonColor={(isShowCalendar) ? COLOR_THEMES.red : COLOR_THEMES.gray}
            textColor={(isShowCalendar) ? COLOR_THEMES.white : COLOR_THEMES.gray_2}>
              Calendar
          </Button>
        </View>
        <View style={{width:120,padding:2}}>
          <Button 
            onPress={() => showContent('attendance')}
            style={{borderRadius:10}}
            labelStyle={{fontFamily:'poppins_light_300'}}
            buttonColor={(isShowAttendance) ? COLOR_THEMES.red : COLOR_THEMES.gray}
            textColor={(isShowAttendance) ? COLOR_THEMES.white : COLOR_THEMES.gray_2}>
              Attendance
          </Button>
        </View>
      </View>

      {isShowMainContent ? <Content day={day} /> : ''}
      {isShowAttendance ? <TeacherAttendanceView /> : ''}
    </View>
  )
}



const Content = (props) => {
  const dimensions = Dimensions.get("window");
  const contentWidth = dimensions.width-30;
  const navigation = useNavigation();

  return (
    <>
      <View style={{
        width:contentWidth,alignSelf:'center',flexDirection:'row',height:50,backgroundColor:COLOR_THEMES.yellow,
        borderTopLeftRadius:15,borderTopRightRadius:15,borderWidth:1,borderColor:COLOR_THEMES.gray_2,marginTop:10
      }}>
        {/* Back Button */}
        <View style={{flexDirection:'column',padding:10,justifyContent:'center',width:'20%',height:'100%',}}>
          <TouchableOpacity style={{'flexDirection':'row','height':'100%'}} onPress={() => navigation.navigate('Attendance')}>
            <View style={{flexDirection:'column',alignSelf:'center'}}>
              <View style={{alignSelf:'center',paddingTop:3}}>
                <Ionicons name="chevron-back" size={13} color={COLOR_THEMES.gray_2} />
              </View>
            </View>

            <View style={{flexDirection:'column',alignSelf:'center'}}>
              <View style={{alignSelf:'center'}}>
                <Text style={{color:COLOR_THEMES.gray_2,fontWeight:'bold',fontFamily:'poppins_light_300',fontSize:13}}>Back</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* Header Text */}
        <View style={{flexDirection:'column',padding:10,justifyContent:'center',width:'60%',height:'100%',alignItems:'center'}}>
          <View style={{width:'100%',alignItems:'center'}}>
            <View>
              <Text style={[font.poppins_med_500.sizes.s15_bold,{color:COLOR_THEMES.black}]}>
                {Moment(props.day).format('MMMM DD, YYYY')}
              </Text>
            </View>
            <View>
              <Text style={[font.poppins_reg_400.sizes.s14,{color:COLOR_THEMES.black}]}>
                {Moment(props.day).format('dddd')}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{width:contentWidth,alignSelf:'center',borderWidth:1,borderColor:COLOR_THEMES.gray,height:dimensions.height-(dimensions.height*0.5)}}>
        <View style={{width:contentWidth-10,alignSelf:'center',marginTop:10}}>
          <ButtonWithModal
            header={'Create Room'}
            animationType={'slide'}
            hasBackButton={true}  
            isTeacher={true} 
            isSaveButton={true} 
            isCreatePost={false}
            height={dimensions.height}
            contentContainer={{width:130,borderRadius:10,marginLeft:1}}
            buttonStyle={{elevation:8,paddingVertical:8,paddingHorizontal:12,backgroundColor:COLOR_THEMES.red,borderRadius:10}}
            labelStyle={[font.poppins_reg_400.sizes.s13,{color:COLOR_THEMES.white,'alignSelf':'center'}]}
            label={'+ Create Room'} 
            screen={'CreateRoom'}
            isModalOpen={false}
          />
        </View>

        <View style={{width:contentWidth-10,alignSelf:'center',marginTop:10,marginBottom:5}}>
          <ClassSchedule subject={'Algebra Class'} />
          <ClassSchedule subject={'Science class'} />
        </View>
      </View>
    </>
  )
}



const ClassSchedule = (props) => {
  return (
    <View style={{borderWidth:1,borderRadius:10,flexDirection:'row',marginTop:5}}>
      {/* CALENDAR ICON */}
      <View style={{flexDirection:'column',width:'15%',justifyContent:'center',alignItems:'center'}}>
        <Entypo name="calendar" size={30} color="black" />
      </View>

      {/* SCHEDULE CONTENT */}
      <View style={{flexDirection:'column',width:'55%',justifyContent:'center',padding:10}}>
        <View style={{flexDirection:'row'}}>
          <Text style={font.poppins_med_500.sizes.s15_bold}>{props.subject}</Text>
        </View>
        <View style={{flexDirection:'row'}}>
          <View style={{flexDirection:'column',justifyContent:'center',padding:1}}>
            <AntDesign name="clockcircle" size={11} color={COLOR_THEMES.gray_2} />
          </View>
          <View style={{flexDirection:'column',justifyContent:'center',padding:1}}>
            <Text style={[font.poppins_med_500.sizes.s12,{color:COLOR_THEMES.gray_2,marginTop:2}]}>March 08,2023 | 10:00 AM</Text>
          </View>
        </View>
        <View style={{flexDirection:'row'}}>
          <View style={{flexDirection:'column',justifyContent:'center',padding:1}}>
            <Text style={[font.poppins_med_500.sizes.s12,{color:COLOR_THEMES.gray_2,marginTop:2}]}>Section A</Text>
          </View>
        </View>
      </View>

      {/* JOIN AND CANCEL BUTTON */}
      <View style={{flexDirection:'column',width:'30%',justifyContent:'center',padding:10}}>
        <View style={{flexDirection:'row',padding:2}}>
          <Button 
            onPress={() => alert('Join')}
            style={{width:'100%',borderRadius:15}}
            labelStyle={font.poppins_reg_400.sizes.s12}
            buttonColor={COLOR_THEMES.red}
            textColor={COLOR_THEMES.white}
          >
            Join
          </Button>
        </View>
        <View style={{flexDirection:'row',padding:2}}>
          <Button 
            onPress={() => alert('Cancel')}
            style={{width:'100%',borderRadius:15}}
            labelStyle={font.poppins_reg_400.sizes.s12}
            buttonColor={COLOR_THEMES.gray}
            textColor={COLOR_THEMES.gray_2}
          >
            Cancel
          </Button>
        </View>
      </View>
    </View>
  )
}