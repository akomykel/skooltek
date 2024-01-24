import { View, Text, ScrollView } from "react-native";
import { COLOR_THEMES } from "../../assets/styles/Generic";
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { font } from "../../assets/styles/Style";

export function ShowAttendanceIcon(props) {
  if(props.date == 'present') {
    return <View style={{backgroundColor:COLOR_THEMES.green,borderRadius:10,padding:8}}>
             <Entypo name="check" size={24} color="black" />
           </View>
  } else if(props.date == 'late') {
    return <View style={{backgroundColor:COLOR_THEMES.yellow,borderRadius:10,padding:8}}>
             <MaterialCommunityIcons name="slash-forward" size={24} color="black" />
           </View>
  } else if(props.date == 'absent' || props.date == 'excused') {
    return <View style={{backgroundColor:COLOR_THEMES.red,borderRadius:10,padding:8}}>
             <Entypo name="cross" size={24} color="black" />
           </View>
  }
}

export function AttendanceStatusDataGrid(props) {
  return (
    <View style={{marginTop:5,marginBottom:10,zIndex:-1}}>
      <View style={{width:'98%',borderTopRightRadius:10,alignSelf:'center'}}>
        <ScrollView horizontal={true}>
          <View>
            <View style={{flexDirection:'row',borderWidth:1,backgroundColor:COLOR_THEMES.gray_3,borderTopLeftRadius:10,borderTopRightRadius:10}}>
              <View style={{flexDirection:'column',justifyContent:'center',borderColor:COLOR_THEMES.black,borderRightWidth:1,borderTopLeftRadius:10,backgroundColor:COLOR_THEMES.gray_2}}>
                <View style={{width:100,padding:20,alignItems:'center'}}>
                  <Text style={font.poppins_med_500.sizes.s15_bold}>{props.title}</Text>
                </View>
              </View>
              <View style={{flexDirection:'column',justifyContent:'center',borderColor:COLOR_THEMES.black,borderRightWidth:1}}>
                <View style={{width:110,padding:20,alignItems:'center'}}>
                  <Text style={[font.poppins_med_500.sizes.s15_bold,{textAlign:'center'}]}>March 07,2023</Text>
                </View>
              </View>
              <View style={{flexDirection:'column',justifyContent:'center',borderColor:COLOR_THEMES.black,borderRightWidth:1}}>
                <View style={{width:110,padding:20,alignItems:'center'}}>
                  <Text style={[font.poppins_med_500.sizes.s15_bold,{textAlign:'center'}]}>March 08,2023</Text>
                </View>
              </View>
              <View style={{flexDirection:'column',justifyContent:'center',borderColor:COLOR_THEMES.black,borderRightWidth:1}}>
                <View style={{width:110,padding:20,alignItems:'center'}}>
                  <Text style={[font.poppins_med_500.sizes.s15_bold,{textAlign:'center'}]}>March 09,2023</Text>
                </View>
              </View>
              <View style={{flexDirection:'column',justifyContent:'center',borderColor:COLOR_THEMES.black,borderRightWidth:1}}>
                <View style={{width:100,padding:20,alignItems:'center'}}>
                  <Text style={[font.poppins_med_500.sizes.s15_bold,{textAlign:'center'}]}>March 10,2023</Text>
                </View>
              </View>
            </View>

            {
              props.data.map((d,index) => {
                return (
                  <View key={index} style={{flexDirection:'row',borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                    <View style={{flexDirection:'column',justifyContent:'center',borderColor:COLOR_THEMES.black,borderRightWidth:1}}>
                      <View style={{width:100,padding:20,alignItems:'center'}}>
                        <Text style={[font.poppins_med_500.sizes.s15_bold,{textAlign:'center'}]}>{d.title}</Text>
                      </View>
                    </View>
                    <View style={{flexDirection:'column',borderColor:COLOR_THEMES.black,borderRightWidth:1}}>
                      <View style={{width:110,padding:20,alignItems:'center'}}>
                        <ShowAttendanceIcon date={d.date1} />
                      </View>
                    </View>
                    <View style={{flexDirection:'column',borderColor:COLOR_THEMES.black,borderRightWidth:1}}>
                      <View style={{width:110,padding:20,alignItems:'center'}}>
                        <ShowAttendanceIcon date={d.date2} />
                      </View>
                    </View>
                    <View style={{flexDirection:'column',borderColor:COLOR_THEMES.black,borderRightWidth:1}}>
                      <View style={{width:110,padding:20,alignItems:'center'}}>
                        <ShowAttendanceIcon date={d.date3} />
                      </View>
                    </View>
                    <View style={{flexDirection:'column',borderColor:COLOR_THEMES.black,borderRightWidth:1}}>
                      <View style={{width:100,padding:20,alignItems:'center'}}>
                        <ShowAttendanceIcon date={d.date4} />
                      </View>
                    </View>
                  </View>
                )
              })
            }
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export function AttendanceStatusLegend() {
  return (
    <View style={{flexDirection:'row',marginTop:10,marginBottom:30}}>
      <View style={{flexDirection:'column',width:'25%',alignItems:'center'}}>
        <View style={{flexDirection:'row'}}>
          <View style={{width:'40%',backgroundColor:COLOR_THEMES.green,alignItems:'center',borderRadius:10,padding:8}}>
            <Entypo name="check" size={12} color="black" />
          </View>
          <View style={{justifyContent:'center'}}>
            <View style={{marginLeft:5}}>
              <Text style={{fontFamily:'poppins_med_500',fontSize:10,color:COLOR_THEMES.gray_2}}>Present</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{flexDirection:'column',width:'23%',alignItems:'center'}}>
        <View style={{flexDirection:'row'}}>
          <View style={{width:'40%',backgroundColor:COLOR_THEMES.yellow,alignItems:'center',borderRadius:10,padding:8}}>
            <MaterialCommunityIcons name="slash-forward" size={12} color="black" />
          </View>
          <View style={{justifyContent:'center'}}>
            <View style={{marginLeft:5}}>
              <Text style={{fontFamily:'poppins_med_500',fontSize:10,color:COLOR_THEMES.gray_2}}>Late</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{flexDirection:'column',width:'25%',alignItems:'center'}}>
        <View style={{flexDirection:'row'}}>
          <View style={{width:'40%',backgroundColor:COLOR_THEMES.red,alignItems:'center',borderRadius:10,padding:8}}>
            <Entypo name="cross" size={12} color="black" />
          </View>
          <View style={{justifyContent:'center'}}>
            <View style={{marginLeft:5}}>
              <Text style={{fontFamily:'poppins_med_500',fontSize:10,color:COLOR_THEMES.gray_2}}>Absent</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{flexDirection:'column',width:'27%',alignItems:'center'}}>
        <View style={{flexDirection:'row'}}>
          <View style={{width:'40%',backgroundColor:COLOR_THEMES.red,alignItems:'center',borderRadius:10,padding:8}}>
            <Entypo name="cross" size={12} color="black" />
          </View>
          <View style={{justifyContent:'center'}}>
            <View style={{marginLeft:5}}>
              <Text style={{fontFamily:'poppins_med_500',fontSize:10,color:COLOR_THEMES.gray_2}}>Excused</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}