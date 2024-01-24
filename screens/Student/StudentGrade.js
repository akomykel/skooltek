import { useState } from "react";
import { View, Text, useColorScheme, StyleSheet, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import { globalStyles } from "../../assets/styles/Style";
import { Card } from "react-native-paper";
import { COLOR_THEMES } from "../../assets/styles/Generic";
import { FieldLabel } from "../../components/Custom/Labels";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ProfileHeader } from "../../components/Profile/Header";
import DropDownPicker from "react-native-dropdown-picker";

export default function StudentGrade(props) {
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
      firstSemGrade:99,
      secondSemGrade:99,
      teacher:'Judy Santos',
      status:(this.totalGrade > 75) ? 'Passed' : 'Failed'
    },
    {
      name:'Science',
      firstSemGrade:99,
      secondSemGrade:99,
      teacher:'Veronica Paige',
    },
    {
      name:'History',
      firstSemGrade:99,
      secondSemGrade:99,
      teacher:'Daryl Cap',
    },
    {
      name:'English',
      firstSemGrade:99,
      secondSemGrade:99,
      teacher:'Robin Smith',
    },
    {
      name:'P.E',
      firstSemGrade:99,
      secondSemGrade:99,
      teacher:'Kobe Bautista',
    },
    {
      name:'Filipino',
      firstSemGrade:99,
      secondSemGrade:99,
      teacher:'Juan Chan'
    }
  ];

  return (
    <View style={[styles.container,setTheme]}>
      <ProfileHeader name={props.name} hasNotification={hasNotification} counter={10}/>

      <View style={{width:contentWidth,alignSelf:"center",marginTop:30}}>
        <Card.Title 
          title={'Grades'} 
          titleStyle={{
            alignSelf:"center",
            fontSize:14,
            paddingTop:10,
            fontFamily:'poppins_med_500'
          }} 
          style={{
            borderTopStartRadius:15,
            borderTopEndRadius:15,
            borderColor:COLOR_THEMES.gray,
            borderWidth:1,
            borderColor:COLOR_THEMES.gray_2,
            backgroundColor:COLOR_THEMES.yellow}} 
        />
      </View>

      <ScrollView>
        <View style={{
          backgroundColor:COLOR_THEMES.white,
          width:contentWidth,
          alignSelf:'center',
          borderWidth:1,
          borderColor:COLOR_THEMES.gray_2
        }}>
          <View style={{
            marginTop:20,
            width:'95%',
            alignSelf:'center',
            borderWidth:0,
            borderColor:COLOR_THEMES.red
          }}>
            <FieldLabel
              style={{
                flexDirection:"row",
                borderWidth:0,
                borderColor:COLOR_THEMES.red
              }}
              fontSize={12}
              fontFamily={'poppins_med_500'}
              label={'School Year:'}
              labelStyle={{
                'alignSelf':'flex-end',
                'color':COLOR_THEMES.black
              }}
            />

            <View style={{
              width:'75%',
              borderWidth:0,
              borderColor:COLOR_THEMES.red
            }}>
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

          <View style={{marginTop:20,marginBottom:10,zIndex:-1}}>
            <View style={{width:'98%',borderTopRightRadius:10,alignSelf:'center',borderWidth:0,borderColor:COLOR_THEMES.black}}>
              <ScrollView horizontal={true}>
                <View>
                  <View style={{flexDirection:'row',borderWidth:1,backgroundColor:COLOR_THEMES.gray_3,borderTopLeftRadius:10,borderTopRightRadius:10}}>
                    <View style={{flexDirection:'column',justifyContent:'center',borderColor:COLOR_THEMES.black,borderRightWidth:1}}>
                      <View style={{width:100,padding:20,alignItems:'center'}}>
                        <Text style={{fontWeight:'bold',fontFamily:'poppins_med_500'}}>Subject</Text>
                      </View>
                    </View>
                    <View style={{flexDirection:'column',justifyContent:'center',borderColor:COLOR_THEMES.black,borderRightWidth:1}}>
                      <View style={{width:110,padding:20,alignItems:'center'}}>
                        <Text style={{fontWeight:'bold',fontFamily:'poppins_med_500',textAlign:'center'}}>First Semester</Text>
                      </View>
                    </View>
                    
                    <View style={{flexDirection:'column',justifyContent:'center',borderColor:COLOR_THEMES.black,borderRightWidth:1}}>
                      <View style={{width:110,padding:20,alignItems:'center'}}>
                        <Text style={{fontWeight:'bold',fontFamily:'poppins_med_500',textAlign:'center'}}>Second Semester</Text>
                      </View>
                    </View>
                    <View style={{flexDirection:'column',justifyContent:'center',borderColor:COLOR_THEMES.black,borderRightWidth:1}}>
                      <View style={{width:110,padding:20,alignItems:'center'}}>
                        <Text style={{fontWeight:'bold',fontFamily:'poppins_med_500',textAlign:'center'}}>Total Grade</Text>
                      </View>
                    </View>
                    <View style={{flexDirection:'column',justifyContent:'center',borderColor:COLOR_THEMES.black,borderRightWidth:1}}>
                      <View style={{width:100,padding:20,alignItems:'center'}}>
                        <Text style={{fontWeight:'bold',fontFamily:'poppins_med_500',textAlign:'center'}}>Teacher</Text>
                      </View>
                    </View>
                    <View style={{flexDirection:'column',justifyContent:'center',borderColor:COLOR_THEMES.black}}>
                      <View style={{width:100,padding:20,alignItems:'center'}}>
                        <Text style={{fontWeight:'bold',fontFamily:'poppins_med_500'}}>Status</Text>
                      </View>
                    </View>
                  </View>
                  {
                    subjects.map((subject,index) => {
                      return (
                        <View key={index} style={{flexDirection:'row',borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1}}>
                          <View style={{flexDirection:'column',justifyContent:'center',borderColor:COLOR_THEMES.black,borderRightWidth:1}}>
                            <View style={{width:100,padding:20,alignItems:'center'}}>
                              <Text style={{fontWeight:'bold',fontFamily:'poppins_med_500'}}>{subject.name}</Text>
                            </View>
                          </View>
                          <View style={{flexDirection:'column',justifyContent:'center',borderColor:COLOR_THEMES.black,borderRightWidth:1}}>
                            <View style={{width:110,padding:20,alignItems:'center'}}>
                              <Text style={{fontFamily:'poppins_med_500'}}>{subject.firstSemGrade}</Text>
                            </View>
                          </View>
                          <View style={{flexDirection:'column',justifyContent:'center',borderColor:COLOR_THEMES.black,borderRightWidth:1}}>
                            <View style={{width:110,padding:20,alignItems:'center'}}>
                              <Text style={{fontFamily:'poppins_med_500'}}>{subject.secondSemGrade}</Text>
                            </View>
                          </View>
                          <View style={{flexDirection:'column',justifyContent:'center',borderColor:COLOR_THEMES.black,borderRightWidth:1}}>
                            <View style={{width:110,padding:20,alignItems:'center'}}>
                              <Text style={{fontFamily:'poppins_med_500'}}>{(subject.firstSemGrade + subject.secondSemGrade) / 2}</Text>
                            </View>
                          </View>
                          <View style={{flexDirection:'column',justifyContent:'center',borderColor:COLOR_THEMES.black,borderRightWidth:1}}>
                            <View style={{width:100,padding:20,alignItems:'center'}}>
                              <Text style={{fontFamily:'poppins_med_500',fontSize:13,textAlign:'center'}}>{subject.teacher}</Text>
                            </View>
                          </View>
                          <View style={{flexDirection:'column',justifyContent:'center',borderColor:COLOR_THEMES.black,borderRightWidth:1}}>
                            <View style={{width:100,padding:20,alignItems:'center'}}>
                              <Text style={{fontFamily:'poppins_med_500'}}>{(((subject.firstSemGrade + subject.secondSemGrade) / 2) > 75) ? "Passed" : "Failed"}</Text>
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

          <View style={{width:'98%',marginBottom:20,alignSelf:'center',borderWidth:1,borderColor:COLOR_THEMES.black}}>
            <View style={{flexDirection:'row',borderWidth:0}}>
              <View style={{width:'30%',padding:5,alignItems:'center',justifyContent:'center',flexDirection:'column',borderRightWidth:1,backgroundColor:COLOR_THEMES.gray_3}}>
                <Text style={{fontWeight:'bold',fontFamily:'poppins_med_500',textAlign:'center'}}>General Average</Text>
              </View>
              <View style={{width:'40%',padding:5,alignItems:'center',justifyContent:'center',flexDirection:'column',borderRightWidth:1,backgroundColor:COLOR_THEMES.white}}>
                <Text style={{fontFamily:'poppins_med_500'}}>99</Text>
              </View>
              <View style={{width:'30%',padding:5,alignItems:'center',justifyContent:'center',flexDirection:'column',backgroundColor:COLOR_THEMES.white}}>
                <Text style={{fontWeight:'bold',fontFamily:'poppins_med_500'}}>Good job John!</Text>
              </View>
            </View>
          </View>

          <View style={{width:'95%',marginBottom:30,alignSelf:'center',borderWidth:0,borderColor:COLOR_THEMES.black}}>
            <View style={{'alignSelf':'center'}}>
              <TouchableOpacity onPress={() => alert('print')}>
                <View style={{alignItems:'center',flexDirection:'row',borderRadius:18,padding:5,width:120,backgroundColor:COLOR_THEMES.red}}>
                  <View style={{flexDirection:'column',alignItems:'center',width:'50%',borderWidth:0,borderColor:'#000000'}}>
                    <MaterialCommunityIcons name="printer" size={24} color={COLOR_THEMES.white} />
                  </View>
                  <View style={{flexDirection:'column',alignItems:'flex-start',width:'50%',borderWidth:0,borderColor:'#000000'}}>
                    <Text style={{marginTop:4,'fontSize':15,'fontFamily':'poppins_light_300',color:COLOR_THEMES.white}}>Print</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
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