import { View, Text } from "react-native";
import { COLOR_THEMES } from "../../../assets/styles/Generic";
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { Button } from "react-native-paper";
import { font } from "../../../assets/styles/Style";

export function ClassScheduleNotificationTemplate(props) {
  return (
    <View style={{padding:5,paddingLeft:5,paddingRight:5}}>
      <View style={{borderWidth:1,borderColor:COLOR_THEMES.gray_2,borderRadius:10,flexDirection:"row",width:'100%',height:80}}>
        <View style={{flexDirection:"column",width:'20%',height:'100%',alignItems:'center',justifyContent:'center'}}>
          <FontAwesome5 name="calendar" size={30} color="black" />
        </View>
        <View style={{flexDirection:"column",width:'52%',justifyContent:'center'}}>
          <View style={{flexDirection:'row'}}>
            <View style={{marginLeft:2}}>
              <Text style={font.poppins_med_500.sizes.s15_bold}>{props.title}</Text>
            </View>
          </View>
          <View style={{flexDirection:'row'}}>
            <View style={{width:'8%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <MaterialCommunityIcons name="clock" size={10} color={COLOR_THEMES.black} />
            </View>
            <View style={{width:'90%',flexDirection:'column'}}>
              <View style={{marginTop:2}}>
                <Text style={font.poppins_med_500.sizes.s12}>{props.schedule}</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection:'row'}}>
            <View style={{width:'8%',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
              <FontAwesome5 name="user-alt" size={10} color="black" />
            </View>
            <View style={{width:'90%',flexDirection:'column'}}>
              <View style={{marginTop:2}}>
                <Text style={font.poppins_med_500.sizes.s12}>{props.postedBy}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{flexDirection:"column",width:'28%',alignItems:'center',justifyContent:'center'}}>
          <Button 
            onPress={() => alert('join')}
            style={{width:'90%',borderRadius:25}}
            buttonColor={(props.isButtonActive) ? COLOR_THEMES.red : COLOR_THEMES.gray} 
            labelStyle={{fontFamily:'poppins_light_300'}}
            textColor={COLOR_THEMES.white}
          >
            Join
          </Button>
        </View>
      </View>
    </View>
  )
}

export function AnnouncementNotificationTemplate(props) {
  return (
    <View style={{padding:5,paddingLeft:5,paddingRight:5}}>
      <View style={{borderWidth:1,borderColor:COLOR_THEMES.gray_2,borderRadius:10,flexDirection:"row",width:'100%'}}>
        <View style={{flexDirection:"column",width:'20%',height:'100%',alignItems:'center'}}>
          <View style={{marginTop:20}}>
            <MaterialCommunityIcons name="bell-alert-outline" size={30} color="black" />
          </View>
        </View>
        <View style={{flexDirection:"column",width:'80%',justifyContent:'center'}}>
          <View style={{flexDirection:'row'}}>
            <View style={{marginLeft:2}}>
              <Text style={font.poppins_med_500.sizes.s15_bold}>{props.title}</Text>
            </View>
          </View>
          <View style={{flexDirection:'row'}}>
            <View style={{flexDirection:'column',justifyContent:'center'}}>
              <MaterialCommunityIcons name="clock" size={10} color={COLOR_THEMES.black} />
            </View>
            <View style={{flexDirection:'column'}}>
              <View style={{marginTop:2,marginLeft:3}}>
                <Text style={font.poppins_med_500.sizes.s12}>{props.schedule}</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection:'row'}}>
            <View style={{width:'90%',flexDirection:'column'}}>
              <View style={{marginTop:2}}>
                <Text style={font.poppins_med_500.sizes.s12}>{props.content}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}