import { useState } from "react";
import { View, Text, useColorScheme, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import { ProfileHeader } from "../../components/Profile/Header";
import { font, theme } from "../../assets/styles/Style";
import { Header } from "../../components/Header";
import { COLOR_THEMES } from "../../assets/styles/Generic";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ButtonWithModal } from "../../components/Custom/Buttons";

export default function ListGrades(props) {
  const scheme = useColorScheme();
  const isDarkTheme = scheme === 'dark';
  const setTheme = isDarkTheme ? theme.dark : theme.light;
  const dimensions = Dimensions.get("window");
  const contentWidth = dimensions.width-10;
  const [hasNotification,setHasNotification] = useState(false);

  let students = [
    {
      'name':'Student A',
      'score1':'0/50',
      'score2':'0/50',
      'score3':'0/50',
      'score4':'0/50',
      'total': '000',
      'ps1': '000%',
      'ps2': '000%'
    },
    {
      'name':'Student B',
      'score1':'0/50',
      'score2':'0/50',
      'score3':'0/50',
      'score4':'0/50',
      'total': '000',
      'ps1': '000%',
      'ps2': '000%'
    },
    {
      'name':'Student C',
      'score1':'1/50',
      'score2':'2/50',
      'score3':'3/50',
      'score4':'4/50',
      'total': '000',
      'ps1': '000%',
      'ps2': '000%'
    },
    {
      'name':'Student D',
      'score1':'0/50',
      'score2':'0/50',
      'score3':'0/50',
      'score4':'0/50',
      'total': '000',
      'ps1': '000%',
      'ps2': '000%'
    },
    {
      'name':'Student E',
      'score1':'0/50',
      'score2':'0/50',
      'score3':'0/50',
      'score4':'0/50',
      'total': '000',
      'ps1': '000%',
      'ps2': '000%'
    },
    {
      'name':'Student F',
      'score1':'0/50',
      'score2':'0/50',
      'score3':'0/50',
      'score4':'0/50',
      'total': '000',
      'ps1': '000%',
      'ps2': '000%'
    }
  ]

  let items=[
    {
      'label':'Filter',
      'screen':'FilterGrades'
    },
    {
      'label':'SY 2023-2024',
      'screen':''
    },
    {
      'label':'First Semester',
      'screen':''
    },
    {
      'label':'BS Nursing',
      'screen':''
    }
  ];

  return (
    <View style={[global.container,setTheme]}>
      <ProfileHeader name={props.name} hasNotification={hasNotification} counter={10}/>
    
      <View style={{marginTop:10,width:contentWidth,height:dimensions.height,alignSelf:'center'}}>
        <View>
          <Header hasBackButton={false} header={'Grades'} isTeacher={false} />

          <ScrollView horizontal={true} style={{height:70,borderLeftWidth:1,borderRightWidth:1,borderColor:COLOR_THEMES.gray,paddingLeft:5}}>
          {
            items.map((item,index) => {
              return <ButtonWithModal key={index} header={'Grades Filter'}
                        hasBackButton={true}  
                        animationType={'slide'}
                        isTeacher={true} 
                        isSaveButton={true} 
                        isCreatePost={false}
                        height={dimensions.height}
                        contentContainer={{width:150,height:40,marginRight:10,alignSelf:"center"}}
                        buttonStyle={{elevation:8,paddingVertical:8,paddingHorizontal:12,backgroundColor:COLOR_THEMES.red,borderRadius:18,width:'100%',height:'100%'}}
                        labelStyle={[font.poppins_light_300.white_s15,{'alignSelf':'center'}]}
                        label={item.label} 
                        screen={item.screen}
                        isModalOpen={false}
                      />
            })
          }
          </ScrollView>

          <ScrollView 
            contentContainerStyle={{height:dimensions.height-(dimensions.height*0.3)}} 
            style={{height:dimensions.height-(dimensions.height*0.45),paddingLeft:5,borderColor:COLOR_THEMES.gray,
              borderLeftWidth:1,borderRightWidth:1,borderBottomWidth:1,borderBottomLeftRadius:15,borderBottomRightRadius:15}}
          >
            <ScrollView horizontal>
              <View style={{width:'98%',height:'100%',alignSelf:'center',marginTop:10}}>
                <View style={{
                  flexDirection:'row',
                  borderWidth:1,borderTopLeftRadius:15,borderTopRightRadius:15,backgroundColor:COLOR_THEMES.white}}
                >
                  <View style={{flexDirection:'column',width:100,padding:10,alignItems:'center',borderRightWidth:1}}>
                    <Text style={font.poppins_med_500.sizes.s14}>Name</Text>
                  </View>

                  <View style={{flexDirection:'column',width:250,padding:10,alignItems:'center',borderRightWidth:1}}>
                    <Text style={font.poppins_med_500.sizes.s14}>Written Works</Text>
                  </View>

                  <View style={{flexDirection:'column',width:262,padding:10,alignItems:'center'}}>
                    <Text style={font.poppins_med_500.sizes.s14}>Written Works</Text>
                  </View>
                </View>

                {
                  students.map((student,index) => {
                    return (
                      <View key={index} style={{flexDirection:'row',height:80,borderLeftWidth:1,borderBottomWidth:1,borderColor:COLOR_THEMES.gray}}>
                        <View style={{flexDirection:'column',width:100,height:'100%',alignItems:'center',justifyContent:'center',borderRightWidth:1,borderRightColor:COLOR_THEMES.gray}}>
                          <View style={{flexDirection:'row'}}>
                            <View style={{justifyContent:'center'}}>
                              <Text style={[
                                font.poppins_med_500.sizes.s14_bold,
                                {color:(isDarkTheme) ? COLOR_THEMES.white : COLOR_THEMES.black}
                              ]}>
                                {student.name}
                              </Text>
                            </View>
                          </View>
                        </View>
          
                        <View style={{flexDirection:'column',width:250,height:'100%',alignItems:'center',borderRightWidth:0,borderRightColor:COLOR_THEMES.gray}}>
                          <View style={{flexDirection:'row',height:'100%'}}>
                            <View style={{flexDirection:'column',width:'50%',height:'100%',borderWidth:0}}>
                              <View style={{flexDirection:'row',width:'100%',height:'33%',alignItems:'center'}}>
                                <View style={{flexDirection:'column',width:'50%',height:'100%',alignItems:'center',borderWidth:1,borderColor:COLOR_THEMES.gray}}>
                                  <Text style={[
                                    font.poppins_med_500.sizes.s14_bold,
                                    {color:(isDarkTheme) ? COLOR_THEMES.white : COLOR_THEMES.black}
                                  ]}>1</Text>
                                </View>
                                <View style={{flexDirection:'column',width:'50%',height:'100%',alignItems:'center',borderWidth:1,borderColor:COLOR_THEMES.gray}}>
                                  <Text style={[
                                    font.poppins_med_500.sizes.s14_bold,
                                    {color:(isDarkTheme) ? COLOR_THEMES.white : COLOR_THEMES.black}
                                  ]}>2</Text>
                                </View>
                              </View>
                              <View style={{flexDirection:'row',width:'100%',height:'33%',justifyContent:'center'}}>
                                <View style={{flexDirection:'column',width:'50%',height:'100%',alignItems:'center',justifyContent:'center',borderWidth:1,borderColor:COLOR_THEMES.gray}}>
                                  <Text style={[
                                    font.poppins_reg_400.sizes.s12,
                                    {color:(isDarkTheme) ? COLOR_THEMES.white : COLOR_THEMES.black}
                                  ]}>{student.score1}</Text>
                                </View>
                                <View style={{flexDirection:'column',width:'50%',height:'100%',alignItems:'center',justifyContent:'center',borderWidth:1,borderColor:COLOR_THEMES.gray}}>
                                  <Text style={[
                                    font.poppins_reg_400.sizes.s12,
                                    {color:(isDarkTheme) ? COLOR_THEMES.white : COLOR_THEMES.black}
                                  ]}>{student.score2}</Text>
                                </View>
                              </View>
                              <View style={{flexDirection:'row',width:'100%',height:'34%',justifyContent:'center',borderWidth:1,borderColor:COLOR_THEMES.gray}}>
                                <View style={{justifyContent:'center'}}>
                                  <Text style={[
                                    font.poppins_med_500.sizes.s12_bold,
                                    {color:(isDarkTheme) ? COLOR_THEMES.white : COLOR_THEMES.black}
                                  ]}>Total: {student.total}</Text>
                                </View>
                              </View>
                            </View>
          
                            <View style={{flexDirection:'column',width:'50%',borderWidth:0}}>
                              <View style={{flexDirection:'row',width:'100%',height:'33%',alignItems:'center'}}>
                                <View style={{flexDirection:'column',width:'50%',height:'100%',alignItems:'center',borderWidth:1,borderColor:COLOR_THEMES.gray}}>
                                  <Text style={[
                                    font.poppins_med_500.sizes.s14_bold,
                                    {color:(isDarkTheme) ? COLOR_THEMES.white : COLOR_THEMES.black}
                                  ]}>3</Text>
                                </View>
                                <View style={{flexDirection:'column',width:'50%',height:'100%',alignItems:'center',borderWidth:1,borderColor:COLOR_THEMES.gray}}>
                                  <Text style={[
                                    font.poppins_med_500.sizes.s14_bold,
                                    {color:(isDarkTheme) ? COLOR_THEMES.white : COLOR_THEMES.black}
                                  ]}>4</Text>
                                </View>
                              </View>
                              <View style={{flexDirection:'row',width:'100%',height:'33%',justifyContent:'center'}}>
                                <View style={{flexDirection:'column',width:'50%',height:'100%',alignItems:'center',justifyContent:'center',borderWidth:1,borderColor:COLOR_THEMES.gray}}>
                                  <Text style={[
                                    font.poppins_reg_400.sizes.s12,
                                    {color:(isDarkTheme) ? COLOR_THEMES.white : COLOR_THEMES.black}
                                  ]}>{student.score3}</Text>
                                </View>
                                <View style={{flexDirection:'column',width:'50%',height:'100%',alignItems:'center',justifyContent:'center',borderWidth:1,borderColor:COLOR_THEMES.gray}}>
                                  <Text style={[
                                    font.poppins_reg_400.sizes.s12,
                                    {color:(isDarkTheme) ? COLOR_THEMES.white : COLOR_THEMES.black}
                                  ]}>{student.score4}</Text>
                                </View>
                              </View>
                              <View style={{flexDirection:'row',width:'100%',height:'34%',justifyContent:'center',borderWidth:1,borderColor:COLOR_THEMES.gray}}>
                                <View style={{justifyContent:'center',width:'50%',height:'100%',alignSelf:'center',borderRightWidth:1,borderRightColor:COLOR_THEMES.gray}}>
                                  <View style={{alignSelf:'center'}}>
                                    <Text style={[
                                      font.poppins_med_500.sizes.s12_bold,
                                      {color:(isDarkTheme) ? COLOR_THEMES.white : COLOR_THEMES.black}
                                    ]}>PS: {student.ps1}</Text>
                                  </View>
                                </View>
                                <View style={{justifyContent:'center',width:'50%'}}>
                                  <View style={{alignSelf:'center'}}>
                                    <Text style={[
                                      font.poppins_med_500.sizes.s12_bold,
                                      {color:(isDarkTheme) ? COLOR_THEMES.white : COLOR_THEMES.black}
                                    ]}>PS: {student.ps2}</Text>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>
                        </View>

                        <View style={{flexDirection:'column',width:250,height:'100%',alignItems:'center',borderRightWidth:0,borderRightColor:COLOR_THEMES.gray}}>
                          <View style={{flexDirection:'row',height:'100%'}}>
                            <View style={{flexDirection:'column',width:'50%',height:'100%',borderWidth:0}}>
                              <View style={{flexDirection:'row',width:'100%',height:'33%',alignItems:'center'}}>
                                <View style={{flexDirection:'column',width:'50%',height:'100%',alignItems:'center',borderWidth:1,borderColor:COLOR_THEMES.gray}}>
                                  <Text style={[
                                    font.poppins_med_500.sizes.s14_bold,
                                    {color:(isDarkTheme) ? COLOR_THEMES.white : COLOR_THEMES.black}
                                  ]}>1</Text>
                                </View>
                                <View style={{flexDirection:'column',width:'50%',height:'100%',alignItems:'center',borderWidth:1,borderColor:COLOR_THEMES.gray}}>
                                  <Text style={[
                                    font.poppins_med_500.sizes.s14_bold,
                                    {color:(isDarkTheme) ? COLOR_THEMES.white : COLOR_THEMES.black}
                                  ]}>2</Text>
                                </View>
                              </View>
                              <View style={{flexDirection:'row',width:'100%',height:'33%',justifyContent:'center'}}>
                                <View style={{flexDirection:'column',width:'50%',height:'100%',alignItems:'center',justifyContent:'center',borderWidth:1,borderColor:COLOR_THEMES.gray}}>
                                  <Text style={[
                                    font.poppins_reg_400.sizes.s12,
                                    {color:(isDarkTheme) ? COLOR_THEMES.white : COLOR_THEMES.black}
                                  ]}>0/50</Text>
                                </View>
                                <View style={{flexDirection:'column',width:'50%',height:'100%',alignItems:'center',justifyContent:'center',borderWidth:1,borderColor:COLOR_THEMES.gray}}>
                                  <Text style={[
                                    font.poppins_reg_400.sizes.s12,
                                    {color:(isDarkTheme) ? COLOR_THEMES.white : COLOR_THEMES.black}
                                  ]}>0/50</Text>
                                </View>
                              </View>
                              <View style={{flexDirection:'row',width:'100%',height:'34%',justifyContent:'center',borderWidth:1,borderColor:COLOR_THEMES.gray}}>
                                <View style={{justifyContent:'center'}}>
                                  <Text style={[
                                    font.poppins_med_500.sizes.s12_bold,
                                    {color:(isDarkTheme) ? COLOR_THEMES.white : COLOR_THEMES.black}
                                  ]}>Total: 000</Text>
                                </View>
                              </View>
                            </View>
          
                            <View style={{flexDirection:'column',width:'50%',borderWidth:0}}>
                              <View style={{flexDirection:'row',width:'100%',height:'33%',alignItems:'center'}}>
                                <View style={{flexDirection:'column',width:'50%',height:'100%',alignItems:'center',borderWidth:1,borderColor:COLOR_THEMES.gray}}>
                                  <Text style={[
                                    font.poppins_med_500.sizes.s14_bold,
                                    {color:(isDarkTheme) ? COLOR_THEMES.white : COLOR_THEMES.black}
                                  ]}>3</Text>
                                </View>
                                <View style={{flexDirection:'column',width:'50%',height:'100%',alignItems:'center',borderWidth:1,borderColor:COLOR_THEMES.gray}}>
                                  <Text style={[
                                    font.poppins_med_500.sizes.s14_bold,
                                    {color:(isDarkTheme) ? COLOR_THEMES.white : COLOR_THEMES.black}
                                  ]}>4</Text>
                                </View>
                              </View>
                              <View style={{flexDirection:'row',width:'100%',height:'33%',justifyContent:'center'}}>
                                <View style={{flexDirection:'column',width:'50%',height:'100%',alignItems:'center',justifyContent:'center',borderWidth:1,borderColor:COLOR_THEMES.gray}}>
                                  <Text style={[
                                    font.poppins_reg_400.sizes.s12,
                                    {color:(isDarkTheme) ? COLOR_THEMES.white : COLOR_THEMES.black}
                                  ]}>0/50</Text>
                                </View>
                                <View style={{flexDirection:'column',width:'50%',height:'100%',alignItems:'center',justifyContent:'center',borderWidth:1,borderColor:COLOR_THEMES.gray}}>
                                  <Text style={[
                                    font.poppins_reg_400.sizes.s12,
                                    {color:(isDarkTheme) ? COLOR_THEMES.white : COLOR_THEMES.black}
                                  ]}>0/50</Text>
                                </View>
                              </View>
                              <View style={{flexDirection:'row',width:'100%',height:'34%',justifyContent:'center',borderWidth:1,borderColor:COLOR_THEMES.gray}}>
                                <View style={{justifyContent:'center',width:'50%',height:'100%',alignSelf:'center',borderRightWidth:1,borderRightColor:COLOR_THEMES.gray}}>
                                  <View style={{alignSelf:'center'}}>
                                    <Text style={[
                                      font.poppins_med_500.sizes.s12_bold,
                                      {color:(isDarkTheme) ? COLOR_THEMES.white : COLOR_THEMES.black}
                                    ]}>PS: 000%</Text>
                                  </View>
                                </View>
                                <View style={{justifyContent:'center',width:'50%'}}>
                                  <View style={{alignSelf:'center'}}>
                                    <Text style={[
                                      font.poppins_med_500.sizes.s12_bold,
                                      {color:(isDarkTheme) ? COLOR_THEMES.white : COLOR_THEMES.black}
                                    ]}>PS: 000%</Text>
                                  </View>
                                </View>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    )
                  })
                }
              </View>
            </ScrollView>
          </ScrollView>

          <View style={{flexDirection:'row',width:'95%',marginTop:20,marginBottom:20,alignSelf:'center',justifyContent:'center'}}>
            <View style={{'alignSelf':'center'}}>
              <TouchableOpacity onPress={() => alert('print')}>
                <View style={{alignItems:'center',flexDirection:'row',borderRadius:18,padding:5,width:120,backgroundColor:COLOR_THEMES.red}}>
                  <View style={{flexDirection:'column',alignItems:'center',width:'50%'}}>
                    <MaterialCommunityIcons name="printer" size={24} color={COLOR_THEMES.white} />
                  </View>
                  <View style={{flexDirection:'column',alignItems:'flex-start',width:'50%'}}>
                    <Text style={{marginTop:4,'fontSize':15,'fontFamily':'poppins_light_300',color:COLOR_THEMES.white}}>Print</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
