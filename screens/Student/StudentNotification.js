import { useState } from "react";
import { View, useColorScheme, Dimensions, ScrollView } from "react-native";
import { global, theme } from "../../assets/styles/Style";
import { Card } from "react-native-paper";
import { COLOR_THEMES } from "../../assets/styles/Generic";
import { Button } from "react-native-paper";
import { All, Reminders, Announcements } from "../../components/Notification/ShowNotifications";
import { ProfileHeader } from "../../components/Profile/Header";

export default function StudentNotification(props) {
  const scheme = useColorScheme();
  const isDarkTheme = scheme === 'dark';
  const setTheme = isDarkTheme ? theme.dark : theme.light;
  const dimensions = Dimensions.get('window');
  const contentWidth = dimensions.width-30;
  const [isShowAll, setShowAll] = useState(true);
  const [isReminders, setReminders] = useState(false);
  const [isAnnouncements, setAnnouncements] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);

  const loadNotification = (notificationTab) => {
    if(notificationTab == 'all') {
      setShowAll(true);
      setReminders(false);
      setAnnouncements(false);
    } else if(notificationTab == 'reminders') {
      setShowAll(false);
      setReminders(true);
      setAnnouncements(false);
    } else if(notificationTab == 'announcements') {
      setShowAll(false);
      setReminders(false);
      setAnnouncements(true);
    }
  }

  return (
    <View style={[global.container,setTheme]}>
      <ProfileHeader name={props.name} hasNotification={hasNotification} counter={4}/>

      <View style={{width:contentWidth,alignSelf:"center",marginTop:30}}>
        <Card.Title 
          title="Notifications" 
          titleStyle={{alignSelf:"center",fontSize:14,paddingTop:10,fontFamily:'poppins_med_500'}} 
          style={{borderTopStartRadius:15,borderTopEndRadius:15,borderBottomWidth:1,borderColor:COLOR_THEMES.gray_2,borderWidth:1,backgroundColor:'#F3B87B'}} 
        />

        <View style={{backgroundColor:COLOR_THEMES.white,width:'100%',borderWidth:1,borderTopWidth:0,borderColor:COLOR_THEMES.gray_2}}>
          <View style={{flexDirection:"row",width:contentWidth,marginTop:15,marginBottom:15}}>
            <View style={{flexDirection:'column',padding:5,width:'25%'}}>
              <View style={{width:'100%',height:40,alignSelf:"center"}}>
                <Button 
                  onPress={() => loadNotification('all')}
                  style={{width:'100%',borderRadius:10}}
                  labelStyle={{fontFamily:'poppins_light_300'}}
                  buttonColor={(isShowAll) ? COLOR_THEMES.red : COLOR_THEMES.gray} 
                  textColor={(isShowAll) ? COLOR_THEMES.white : COLOR_THEMES.gray_2}
                >
                  All
                </Button>
              </View>
            </View>

            <View style={{flexDirection:'column',padding:5,width:'33%'}}>
              <View style={{width:'100%',height:40,alignSelf:"center"}}>
                <Button 
                  onPress={() => loadNotification('reminders')}
                  style={{width:'100%',borderRadius:10}}
                  labelStyle={{fontFamily:'poppins_light_300'}}
                  buttonColor={(isReminders) ? COLOR_THEMES.red : COLOR_THEMES.gray} 
                  textColor={(isReminders) ? COLOR_THEMES.white : COLOR_THEMES.gray_2}
                >
                  Reminders
                </Button>
              </View>
            </View>

            <View style={{flexDirection:'column',padding:5,width:'42%'}}>
              <View style={{width:'100%',height:40,alignSelf:"center"}}>
                <Button 
                  onPress={() => loadNotification('announcements')}
                  style={{width:'100%',borderRadius:10}}
                  labelStyle={{fontFamily:'poppins_light_300'}}
                  buttonColor={(isAnnouncements) ? COLOR_THEMES.red : COLOR_THEMES.gray} 
                  textColor={(isAnnouncements) ? COLOR_THEMES.white : COLOR_THEMES.gray_2}
                >
                  Announcements
                </Button>
              </View>
            </View>
          </View>

          <View style={{backgroundColor:COLOR_THEMES.white,height:dimensions.height-(dimensions.height*0.4)}}>
            <ScrollView>
                {isShowAll ? <All /> : ''}
                {isReminders ? <Reminders /> : ''}
                {isAnnouncements ? <Announcements /> : ''}
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
}
