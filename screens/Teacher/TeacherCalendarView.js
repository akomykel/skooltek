import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Dimensions } from "react-native";
import { COLOR_THEMES } from "../../assets/styles/Generic";
import { font } from "../../assets/styles/Style";
import { Header } from "../../components/Header";
import { ButtonWithModal } from "../../components/Custom/Buttons";
import { Button } from "react-native-paper";
import { Feather } from '@expo/vector-icons';
import { Calendar } from 'react-native-calendars';

export default function TeacherCalendarView(props) {
  const navigation = useNavigation();
  const dimensions = Dimensions.get('window');
  const contentWidth = dimensions.width-30;

  const [isShowByMonth,setShowByMonth] = useState(true);
  const [isShowByWeek,setShowByWeek] = useState(false);
  const [isShowByDay,setShowByDay] = useState(false);
  const filterBy = (k) => {
    if(k == 'month') {
      setShowByMonth(true);
      setShowByWeek(false);
      setShowByDay(false);
    } else if(k == 'week') {
      setShowByMonth(false);
      setShowByWeek(true);
      setShowByDay(false);
    } else if(k == 'day') {
      setShowByMonth(false);
      setShowByWeek(false);
      setShowByDay(true);
    }
  }

  return(
    <View>
      <View style={{flexDirection:'row',width:contentWidth,height:40,backgroundColor:COLOR_THEMES.green_2,alignSelf:'center',borderRadius:8,marginTop:10}}>
        <View style={{width:'15%',justifyContent:'center',alignItems:'center'}}>
          <Feather name="bell" size={24} color={COLOR_THEMES.black} />
        </View>
        <View style={{width:'75%',justifyContent:'center'}}>
          <Text style={font.poppins_light_300.sizes.s15_bold}>You have 2 Agendas today</Text>
        </View>
        <View style={{width:'10%',justifyContent:'center',alignItems:'center'}}>
          <Text style={font.poppins_reg_400.sizes.s13_bold}>X</Text>
        </View>
      </View>

      <View style={{marginTop:10,width:contentWidth,alignSelf:'center',alignSelf:'center'}}>
        <Header hasButton={false} header={'March 2023'} isTeacher={false} />

        <View style={{borderWidth:1,borderColor:COLOR_THEMES.gray,width:'100%',alignSelf:'center'}}>
          <View style={{flexDirection:'row',marginTop:10,marginBottom:10}}>
            <View style={{width:'40%',padding:2,borderBottomWidth:0,borderBottomColor:COLOR_THEMES.gray}}>
              <View style={{width:'65%'}}>
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
              <View style={{width:'35%'}}></View>
            </View>

            <View style={{width:'20%',padding:2,borderBottomWidth:0,borderBottomColor:COLOR_THEMES.gray}}>
              <Button 
                onPress={() => filterBy('month')}
                style={{width:'100%',borderRadius:10}}
                labelStyle={font.poppins_reg_400.sizes.s13}
                buttonColor={(isShowByMonth) ? COLOR_THEMES.red : COLOR_THEMES.gray}
                textColor={(isShowByMonth) ? COLOR_THEMES.white : COLOR_THEMES.gray_2}
              >
                Month
              </Button>
            </View>

            <View style={{width:'20%',padding:2}}>
              <Button 
                onPress={() => filterBy('week')}
                style={{width:'100%',borderRadius:10}}
                labelStyle={font.poppins_reg_400.sizes.s13}
                buttonColor={(isShowByWeek) ? COLOR_THEMES.red : COLOR_THEMES.gray}
                textColor={(isShowByWeek) ? COLOR_THEMES.white : COLOR_THEMES.gray_2}
              >
                Week
              </Button>
            </View>

            <View style={{width:'20%',padding:2}}>
              <Button 
                onPress={() => filterBy('day')}
                style={{width:'100%',borderRadius:10}}
                labelStyle={font.poppins_reg_400.sizes.s13}
                buttonColor={(isShowByDay) ? COLOR_THEMES.red : COLOR_THEMES.gray}
                textColor={(isShowByDay) ? COLOR_THEMES.white : COLOR_THEMES.gray_2}
              >
                Day
              </Button>
            </View>
          </View>
        </View>
      </View>

      <View style={{width:contentWidth,alignSelf:'center',borderWidth:1}}>
        <Calendar
          onDayPress={day => navigation.navigate("ViewSelectedDateDetails",{user:props.name,day:day.dateString})}
        />
      </View>
    </View>
  )
}