import { View, Dimensions, ScrollView } from "react-native";
import { COLOR_THEMES } from "../../assets/styles/Generic";
import { Header } from "../../components/Header";
import { Button } from "react-native-paper";
import { Ionicons } from '@expo/vector-icons';
import { TextInput } from "react-native-paper";
import { border, font } from "../../assets/styles/Style";
import { AttendanceStatusDataGrid, AttendanceStatusLegend } from "../Attendance/AttendanceIcons";
import { ButtonWithModal } from "../../components/Custom/Buttons";

export default function TeacherAttendanceView() {
  const dimensions = Dimensions.get('window');
  const contentWidth = dimensions.width-30;

  const COURSES = [
    { 'title':'BSN-1' },
    { 'title':'Nursing 1' },
    { 'title':'Foundations of Nursing' }
  ];

  const STUDENTS = [
    {
      title:'Student A',
      date1:'present',
      date2:'present',
      date3:'present',
      date4:'present'
    },
    {
      title:'Student B',
      date1:'present',
      date2:'late',
      date3:'present',
      date4:'present'
    },
    {
      title:'Student C',
      date1:'present',
      date2:'present',
      date3:'absent',
      date4:'present'
    },
    {
      title:'Student D',
      date1:'absent',
      date2:'present',
      date3:'present',
      date4:'present'
    },
    {
      title:'Student E',
      date1:'present',
      date2:'present',
      date3:'present',
      date4:'present'
    },
    {
      title:'Student F',
      date1:'present',
      date2:'present',
      date3:'present',
      date4:'present'
    }
  ];

  return (
    <View style={{marginTop:10,width:contentWidth,alignSelf:'center',alignSelf:'center'}}>
      <Header header={'Attendance'} />

      <View style={{borderWidth:1,borderColor:COLOR_THEMES.gray}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <View style={{padding:5}}>
            <ButtonWithModal 
              header={'Attendance Filter'}
              animationType={'slide'}
              hasBackButton={true}  
              isTeacher={true} 
              isSaveButton={true} 
              isCreatePost={false}
              height={dimensions.height}
              contentContainer={{width:80,borderRadius:10,marginLeft:1}}
              buttonStyle={{height:40,elevation:8,paddingVertical:8,paddingHorizontal:12,backgroundColor:COLOR_THEMES.red,borderRadius:20,borderWidth:1,borderColor:COLOR_THEMES.gray_2}}
              labelStyle={[font.poppins_reg_400.sizes.s14,{color:COLOR_THEMES.white,'alignSelf':'center'}]}
              label={'Filter'} 
              screen={'AttendanceFilter'}
              isModalOpen={false}
            />
          </View>

          <ScrollView horizontal={true} style={{height:50,paddingLeft:2}} contentContainerStyle={{justifyContent:'center',marginTop:8}}>
            <>
            {
              COURSES.map((c,i) => {
                return <Button 
                         key={i}
                         mode="outlined" 
                         buttonColor={COLOR_THEMES.gray} 
                         textColor={COLOR_THEMES.gray_2} 
                         style={{height:35,marginRight:10,paddingLeft:10,paddingRight:10}}
                         labelStyle={{fontSize:13,marginHorizontal:0,marginVertical:5}}>
                           {c.title}
                       </Button>
              })
            }
            <ButtonWithModal 
              header={'Clear All'}
              animationType={'none'}
              hasBackButton={true}  
              isTeacher={true} 
              isSaveButton={true} 
              isCreatePost={false}
              height={dimensions.height}
              contentContainer={{width:80,borderRadius:10,marginLeft:1}}
              buttonStyle={{height:35,elevation:8,paddingVertical:6,paddingHorizontal:12,backgroundColor:COLOR_THEMES.red,borderRadius:20,borderWidth:1,borderColor:COLOR_THEMES.gray_2}}
              labelStyle={[font.poppins_reg_400.sizes.s14,{color:COLOR_THEMES.white,'alignSelf':'center'}]}
              label={'Clear All'} 
              screen={'AttendanceFilter'}
              isModalOpen={false}
            />
            </>
          </ScrollView>
        </View>

        <View style={{width:contentWidth-10,alignSelf:'center'}}>
          <View style={{marginTop:10,width:'60%',alignSelf:'flex-end'}}>
            <TextInput 
              placeholder={'Search by Name'} 
              placeholderTextColor={COLOR_THEMES.gray_2}
              style={[border.all_radius_5_1,{
                      height:30,fontSize:13,borderColor:COLOR_THEMES.gray_2,backgroundColor:COLOR_THEMES.white
                    }]}
              underlineColor="transparent"
              right={
                <TextInput.Icon
                  icon={() => <Ionicons name="search" size={24} color={COLOR_THEMES.gray_2} />}
                />
              }
            />
          </View>

          <ScrollView 
            contentContainerStyle={{height:dimensions.height-(dimensions.height*0.15)}} 
            style={{height:dimensions.height-(dimensions.height*0.45),marginTop:10}}
          >
            <AttendanceStatusDataGrid title={'Student'} data={STUDENTS} />
            <AttendanceStatusLegend />
          </ScrollView>
        </View>
      </View>
    </View>
  )
}