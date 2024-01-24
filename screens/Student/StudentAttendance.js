import { useState } from "react";
import { View, useColorScheme, StyleSheet, Dimensions, ScrollView } from "react-native";
import { globalStyles } from "../../assets/styles/Style";
import { Card } from "react-native-paper";
import { COLOR_THEMES } from "../../assets/styles/Generic";
import { FieldLabel } from "../../components/Custom/Labels";
import { ProfileHeader } from "../../components/Profile/Header";
import { AttendanceStatusDataGrid, AttendanceStatusLegend } from "../Attendance/AttendanceIcons";
import DropDownPicker from "react-native-dropdown-picker";

export default function StudentAttendance(props) {
  const scheme = useColorScheme();
  const isDarkTheme = scheme === 'dark';
  const setTheme = isDarkTheme ? globalStyles.darkTheme : globalStyles.lightTheme;
  const dimensions = Dimensions.get("window");
  const contentWidth = dimensions.width-30;
  const [hasNotification,setHasNotification] = useState(false);
  const [open,setOpen] = useState(false);
  const [value,setValue] = useState(null);

  const [items,setItems] = useState([
    {label:'S.Y. 2023-2024',value:'S.Y. 2023-2024'},
    {label:'S.Y. 2022-2023',value:'S.Y. 2022-2023'},
    {label:'S.Y. 2021-2022',value:'S.Y. 2021-2022'}
  ]);

  const subjects = [
    {
      name:'Math',
      date1:'present',
      date2:'present',
      date3:'present',
      date4:'present'
    },
    {
      name:'Science',
      date1:'present',
      date2:'late',
      date3:'present',
      date4:'present'
    },
    {
      name:'History',
      date1:'present',
      date2:'present',
      date3:'absent',
      date4:'present'
    },
    {
      name:'English',
      date1:'absent',
      date2:'present',
      date3:'present',
      date4:'present'
    },
    {
      name:'P.E',
      date1:'present',
      date2:'present',
      date3:'present',
      date4:'present'
    },
    {
      name:'Filipino',
      date1:'present',
      date2:'present',
      date3:'present',
      date4:'present'
    }
  ];

  // const AttendanceIcon = (props) => {
  //   if(props.date == 'present') {
  //       return <View style={{backgroundColor:COLOR_THEMES.green,borderRadius:10,padding:8}}>
  //               <Entypo name="check" size={24} color="black" />
  //              </View>
  //   } else if(props.date == 'late') {
  //       return <View style={{backgroundColor:COLOR_THEMES.yellow,borderRadius:10,padding:8}}>
  //               <MaterialCommunityIcons name="slash-forward" size={24} color="black" />
  //              </View>
  //   } else if(props.date == 'absent' || props.date == 'excused') {
  //       return <View style={{backgroundColor:COLOR_THEMES.red,borderRadius:10,padding:8}}>
  //               <Entypo name="cross" size={24} color="black" />
  //              </View>
  //   }
  // }

  return (
    <View style={[styles.container,setTheme]}>
      <ProfileHeader name={props.name} hasNotification={hasNotification} counter={10}/>

      <View style={{width:contentWidth,alignSelf:"center",marginTop:30}}>
        <Card.Title 
          title={'Attendance'} 
          titleStyle={{alignSelf:"center",fontSize:14,paddingTop:10,fontFamily:'poppins_med_500'}} 
          style={{borderTopStartRadius:15,borderTopEndRadius:15,borderColor:'#C8C8C8',borderWidth:1,borderColor:COLOR_THEMES.gray_2,backgroundColor:'#F3B87B'}} 
        />
      </View>

      <ScrollView>
        <View style={{backgroundColor:COLOR_THEMES.white,width:contentWidth,alignSelf:'center',borderWidth:1,borderColor:COLOR_THEMES.gray_2}}>
          <View style={{marginTop:20,width:'95%',alignSelf:'center',borderWidth:0,borderColor:'#ff0000'}}>
            <FieldLabel
              style={{flexDirection:"row",borderWidth:0,borderColor:'#ff0000'}}
              fontSize={12}
              fontFamily={'poppins_med_500'}
              label={'Date:'}
              labelStyle={{'alignSelf':'flex-end','color':COLOR_THEMES.black}}
            />
            <View style={{width:'75%',borderWidth:0,borderColor:'#ff0000'}}>
              <DropDownPicker 
                placeholder={'S.Y. 2023-2024'}
                placeholderStyle={{color:COLOR_THEMES.gray_2}}
                zIndexInverse={1000}
                zIndex={1000}
                open={open} 
                value={value} 
                items={items} 
                setOpen={setOpen} 
                setValue={setValue} 
                setItems={setItems}
              />
            </View>
          </View>

          <AttendanceStatusDataGrid title={'Subject'} data={subjects} />
          <AttendanceStatusLegend />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});