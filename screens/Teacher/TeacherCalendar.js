import { useState } from "react";
import { View, useColorScheme, Dimensions } from "react-native";
import { ProfileHeader } from "../../components/Profile/Header";
import { global, theme } from "../../assets/styles/Style";
import { Button } from "react-native-paper";
import { COLOR_THEMES } from "../../assets/styles/Generic";
import TeacherCalendarView from "./TeacherCalendarView";
import TeacherAttendanceView from "./TeacherAttendanceView";

export default function TeacherCalendar(props) {
  const scheme = useColorScheme();
  const isDarkTheme = scheme === 'dark';
  const setTheme = isDarkTheme ? theme.dark : theme.light;
  const dimensions = Dimensions.get('window');
  const contentWidth = dimensions.width-30;
  const [hasNotification,setHasNotification] = useState(false);

  const [isShowCalendar, setShowCalendar] = useState(true);
  const [isShowAttendance, setShowAttendance] = useState(false);
  const showContent = (contentTab) => {
    if(contentTab == 'calendar') {
      setShowCalendar(true);
      setShowAttendance(false);
    } else if(contentTab == 'attendance') {
      setShowCalendar(false);
      setShowAttendance(true);
    }
  }

  return (
    <View style={[global.container,setTheme]}>
      <ProfileHeader name={props.name} hasNotification={hasNotification} counter={10}/>

      <View style={{flexDirection:'row',width:contentWidth,alignSelf:'center',marginTop:20}}>
        <View style={{width:120,padding:2}}>
          <Button 
            onPress={() => showContent('calendar')}
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

      {isShowCalendar ? <TeacherCalendarView name={props.name} /> : ''}
      {isShowAttendance ? <TeacherAttendanceView /> : ''}
    </View>
  )
}
