import { useState } from "react";
import { View, Text, ScrollView, Modal, StyleSheet, Dimensions } from "react-native";
import { Header } from "../../../components/Header";
import { COLOR_THEMES } from "../../../assets/styles/Generic";
import { Avatar } from "../../../components/Profile/Header";
import { TextInput } from "react-native-paper";
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import DropDownPicker from 'react-native-dropdown-picker';

export default function CreatePost(props) {
  const [modalCreatePostVisible, setModalCreatePostVisible] = useState(props.isModalOpen);
  const changeModalStatus = (isModalShown) => { setModalCreatePostVisible(isModalShown); }
  const dimensions = Dimensions.get("window");
  const modalContentWidth = dimensions.width-15;

  const [openPostType, setOpenPostType] = useState(false);
  const [valuePostType, setValuePostType] = useState(null);
  const [postType, setPostType] = useState([
    {label: 'Activity Post', value: 'activity'},
    {label: 'Assignment Post', value: 'assignment'},
    {label: 'School Announcement Post', value: 'schoolannouncement'}
  ]);

  const [openSubject, setOpenSubject] = useState(false);
  const [valueSubject, setValueSubject] = useState(null);
  const [subject, setSubject] = useState([
    {label: 'Math', value: 'Math'},
    {label: 'English', value: 'Math'},
    {label: 'Science', value: 'Science'}
  ]);

  const [openTermPeriod, setOpenTermPeriod] = useState(false);
  const [valueTermPeriod, setValueTermPeriod] = useState(null);
  const [termPeriod, setTermPeriod] = useState([
    {label: 'Math', value: 'Math'},
    {label: 'English', value: 'Math'},
    {label: 'Science', value: 'Science'}
  ]);

  const [openGradingType, setOpenGradingType] = useState(false);
  const [valueGradingType, setValueGradingType] = useState(null);
  const [gradingType, setGradingType] = useState([
    {label: 'Math', value: 'Math'},
    {label: 'English', value: 'Math'},
    {label: 'Science', value: 'Science'}
  ]);

  return (
    <Modal animationType="slide" transparent={true} visible={props.isModalOpen} onRequestClose={() => {props.handleShowCreatePostModal(false)}}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ScrollView>
            <Header 
                header={'Create Post'} 
                hasBackButton={true} 
                isTeacher={props.isTeacher} 
                isCreatePost={true} 
                changeModalStatus={changeModalStatus} 
                handleShowModal={props.handleShowCreatePostModal}
            />

            <View style={{flexDirection:'row',marginTop:15,width:modalContentWidth,alignSelf:'center'}}>
              <View style={{flexDirection:'column',width:'75%',borderWidth:0,borderColor:COLOR_THEMES.red}}>
                <View style={{flexDirection:'row'}}>
                  <View style={{flexDirection:'column',width:'30%'}}>
                    <Avatar imgSrc={props.profilepic} imgWidth={80} imgHeight={80} />
                  </View>
                  <View style={{flexDirection:'column',width:'70%',justifyContent:'center'}}>
                    <View>
                      <View style={{borderWidth:0,borderColor:COLOR_THEMES.red}}>
                        <Text style={{fontFamily:'poppins_med_500',fontSize:16,fontWeight:'bold'}}>{props.name}</Text>
                      </View>
                      <View style={{borderWidth:0,borderColor:COLOR_THEMES.red}}>
                        <DropDownPicker
                          placeholder="Activity Post"
                          style={{width:'100%'}}
                          open={openPostType}
                          value={valuePostType}
                          items={postType}
                          setOpen={setOpenPostType}
                          setValue={setValuePostType}
                          setItems={setPostType}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{flexDirection:'column',width:'25%',borderWidth:0}}></View>
            </View>

            <View style={{marginTop:15,width:modalContentWidth,alignSelf:'center'}}>
              <View>
                <Text style={{fontFamily:'poppins_med_500',fontSize:16}}>Subject:</Text>
              </View>

              <View>
                <DropDownPicker
                  placeholder="Select Subject"
                  placeholderStyle={{color:COLOR_THEMES.gray_2}}
                  style={{width:'100%'}}
                  open={openSubject}
                  value={valueSubject}
                  items={subject}
                  setOpen={setOpenSubject}
                  setValue={setValueSubject}
                  setItems={setSubject}
                />
              </View>
            </View>

            <View style={{marginTop:15,width:modalContentWidth,alignSelf:'center'}}>
              <View>
                <Text style={{fontFamily:'poppins_med_500',fontSize:16}}>Term Period:</Text>
              </View>
              <View>
                <DropDownPicker
                  placeholder="Select Term Period"
                  placeholderStyle={{color:COLOR_THEMES.gray_2}}
                  style={{width:'100%'}}
                  open={openTermPeriod}
                  value={valueTermPeriod}
                  items={termPeriod}
                  setOpen={setOpenTermPeriod}
                  setValue={setValueTermPeriod}
                  setItems={setTermPeriod}
                />
              </View>
            </View>

            <View style={{marginTop:15,width:modalContentWidth,alignSelf:'center'}}>
              <View>
                <Text style={{fontFamily:'poppins_med_500',fontSize:16}}>Grading Type:</Text>
              </View>
              <View>
                <DropDownPicker
                  placeholder="Select Grading Type"
                  placeholderStyle={{color:COLOR_THEMES.gray_2}}
                  style={{width:'100%'}}
                  open={openGradingType}
                  value={valueGradingType}
                  items={gradingType}
                  setOpen={setOpenGradingType}
                  setValue={setValueGradingType}
                  setItems={setGradingType}
                />
              </View>
            </View>

            <View style={{marginTop:15,width:modalContentWidth,alignSelf:'center'}}>
              <View>
                <Text style={{fontFamily:'poppins_med_500',fontSize:16}}>Title:</Text>
              </View>
              <View>
                <TextInput 
                  placeholder={'Enter your Email here..'} 
                  placeholderTextColor={COLOR_THEMES.gray_2}
                  style={{borderWidth:1,borderTopLeftRadius:8,borderTopRightRadius:8,borderBottomLeftRadius:8,borderBottomRightRadius:8,height:50,backgroundColor:COLOR_THEMES.white}}
                  underlineColor="transparent"
                />
              </View>
            </View>

            <View style={{marginTop:20,width:modalContentWidth,alignSelf:'center'}}>
              <TextInput
                multiline={true}
                numberOfLines={4}
                style={{
                  borderTopLeftRadius:8,
                  borderTopRightRadius:8,
                  borderBottomLeftRadius:8,
                  borderBottomRightRadius:8,
                  padding:10,
                  fontFamily:'poppins_med_500',
                  textAlignVertical:"top",
                  borderWidth:1,
                  borderColor:COLOR_THEMES.black,
                  backgroundColor:COLOR_THEMES.white
                }}
              />
            </View>

            <View style={{marginTop:20,flexDirection:'row',width:modalContentWidth,alignSelf:'center'}}>
              <View style={{width:'48%'}}>
                <View>
                  <Text style={{fontFamily:'poppins_med_500',fontSize:16}}>Points:</Text>
                </View>
                <View>
                  <TextInput 
                    type="number"
                    style={{borderWidth:1,borderTopLeftRadius:8,borderTopRightRadius:8,borderBottomLeftRadius:8,borderBottomRightRadius:8,height:50,backgroundColor:COLOR_THEMES.white}}
                    underlineColor="transparent"
                  />
                </View>
              </View>
              <View style={{width:'4%'}}></View>
              <View style={{width:'48%'}}>
                <View>
                  <Text style={{fontFamily:'poppins_med_500',fontSize:16}}>Deadline:</Text>
                </View>
                <View>
                  <TextInput 
                    placeholder="mm/dd/yyyy   mm:hh"
                    underlineColor="transparent"
                    style={{
                      borderWidth:1,
                      borderTopLeftRadius:8,
                      borderTopRightRadius:8,
                      borderBottomLeftRadius:8,
                      borderBottomRightRadius:8,
                      height:50,
                      backgroundColor:COLOR_THEMES.white,
                      fontSize:14
                    }}
                  />
                </View>
              </View>
            </View>

            <View style={{marginTop:20,marginBottom:30,width:modalContentWidth,alignSelf:'center'}}>
              <View>
                <Text style={{fontFamily:'poppins_med_500',fontSize:16}}>Attachments</Text>
              </View>
              <View style={{flexDirection:'row'}}>
                <View style={{flexDirection:'row',width:'48%',justifyContent:'center',backgroundColor:COLOR_THEMES.gray,borderTopLeftRadius:8,borderTopRightRadius:8,borderBottomLeftRadius:8,borderBottomRightRadius:8}}>
                  <View style={{width:'80%',padding:8,height:35}}>
                    <Text style={{fontFamily:'poppins_med_500',fontSize:13}}>Sample-Doc.docx</Text>
                  </View>
                  <View style={{width:'20%',justifyContent:'center',alignItems:'center'}}>
                    <FontAwesome5 name="trash" size={18} color={COLOR_THEMES.red} />
                  </View>
                </View>
                <View style={{width:'4%'}}></View>
                <View style={{flexDirection:'row',width:'48%',backgroundColor:COLOR_THEMES.gray,borderTopLeftRadius:8,borderTopRightRadius:8,borderBottomLeftRadius:8,borderBottomRightRadius:8}}>
                  <View style={{width:'80%',padding:8,height:35}}>
                    <Text style={{fontFamily:'poppins_med_500',fontSize:13}}>Sample-Excel.xlsx</Text>
                  </View>  
                  <View style={{width:'20%',justifyContent:'center',alignItems:'center'}}>
                    <FontAwesome5 name="trash" size={18} color={COLOR_THEMES.red} />
                  </View>
                </View>
              </View>
              <View style={{marginTop:10}}>
                <View style={{flexDirection:'row',width:'40%',backgroundColor:COLOR_THEMES.gray,borderTopLeftRadius:8,borderTopRightRadius:8,borderBottomLeftRadius:8,borderBottomRightRadius:8}}>
                  <View style={{width:'20%',justifyContent:'center',alignItems:'center',height:38}}>
                    <View>
                      <Feather name="paperclip" size={20} color={COLOR_THEMES.gray_2} />
                    </View>
                  </View>
                  <View style={{width:'80%',justifyContent:'center',height:38}}>
                    <View style={{alignContent:'center'}}>
                      <Text style={{fontFamily:'poppins_reg_400',fontSize:15,color:COLOR_THEMES.gray_2}}>Attach a File</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  centeredView: {
    flex: 1,
    alignItems: 'center'
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width:'100%',
    height:'100%',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  }
});