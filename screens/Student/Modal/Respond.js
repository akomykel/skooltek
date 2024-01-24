import { useState } from "react";
import { View, Text, Modal, StyleSheet, ScrollView, Dimensions } from "react-native";
import { Header, PostedByHeader } from "../../../components/Header";
import { PostTeacherTemplate } from "../../Respond/Teacher/Template";
import { COLOR_THEMES } from "../../../assets/styles/Generic";
import { font } from "../../../assets/styles/Style";
import { Button, TextInput } from "react-native-paper";
import { Feather } from '@expo/vector-icons';
import { ButtonWithModal } from "../../../components/Custom/Buttons";
import Points from "../../../components/Points";
import { ShowResponseByStudent } from "../../Respond/Student/Template";

export function ShowStudentResponse(props) {
  const dimensions = Dimensions.get("window");
  const [modalVisible, setModalVisible] = useState(props.isModalOpen);
  const changeModalStatus = (isModalShown) => { setModalVisible(isModalShown); }

  return (
    <View style={{height:dimensions.height*0.9}}>
      <Text>Test 2</Text>
      {/* <ScrollView>
        <PostTeacherTemplate 
          schedule={props.data.schedule} 
          name={props.data.name} 
          role={props.data.role} 
          avatar={props.data.avatar}
          title={props.data.title} 
          content={props.data.content} 
          attachment={props.data.attachment} 
          attachmentMargin={28}
          deadline={props.data.deadline}
          widthAdjustment={20}
        />

        <View style={{marginTop:20}}>
          <ShowResponseByStudent
            header={props.data.title}
            schedule={props.data.schedule} 
            deadline={props.data.deadline}
            teacher={props.data.name}
            role={'Student'}
            profilepic={props.data.avatar}
            student_name={props.data.profilename}
            student_attachment={props.data.student_attachment}
            avatar={props.data.profilepic}
            widthAdjustment={20}
          />

          <View style={{width:'95%',alignSelf:'center'}}>
            <Text style={[font.poppins_med_500.grayshade2_s11,{'alignSelf':'flex-end',marginTop:5}]}>{props.data.schedule}</Text>

            <PostedByHeader avatar={props.data.avatar}
              name={props.data.name} fontName={font.poppins_med_500.sizes.s20}
              role={props.data.role} fontRole={font.poppins_med_500.sizes.s13}
            />

            <Text style={[font.poppins_med_500.sizes.s15_bold,{marginTop:20,marginLeft:5}]}>Hello {props.data.profilename}, GOOD JOB!!</Text>

            <TextInput
              multiline={true}
              numberOfLines={4}
              placeholder="Write a comment.."
              placeholderTextColor={COLOR_THEMES.gray}
              underlineColor="transparent"
              style={{
                borderTopLeftRadius:8,
                borderTopRightRadius:8,
                borderBottomLeftRadius:8,
                borderBottomRightRadius:8,
                fontFamily:'poppins_med_500',
                borderWidth:1,
                marginTop:15,
                textAlignVertical:"top",
                borderColor:COLOR_THEMES.black,
                backgroundColor:COLOR_THEMES.white
              }}
            />

            <Button buttonColor={COLOR_THEMES.red} textColor={COLOR_THEMES.white} style={{marginTop:10,marginBottom:10,width:'30%',alignSelf:'flex-end'}}>
              Send
            </Button>
          </View>
        </View>
      </ScrollView> */}
    </View>
  )
}

export function StudentRespond(props) {
  const dimensions = Dimensions.get("window");
  const [modalVisible, setModalVisible] = useState(props.isModalOpen);
  const changeModalStatus = (isModalShown) => { setModalVisible(isModalShown); }
  const data = {
    schedule:props.schedule,
    name:props.name,
    role:props.role,
    avatar:props.avatar,
    title:props.title,
    content:props.content,
    attachment:props.attachment,
    student_attachment:'testsample.pdf',
    deadline:props.deadline,
    profilepic:props.profilepic,
    profilename:props.profilename
  }

  return (
    <View>
      <Text>Test</Text>
    </View>
    // <Modal 
    //   animationType="slide" 
    //   transparent={true} 
    //   visible={props.isModalVisible} 
    //   onRequestClose={() => alert('close')}
    // >
    //   <View style={styles.centeredView}>
    //     <View style={styles.modalView}>
    //       <Header 
    //         header={props.header} 
    //         hasBackButton={true} 
    //         isTeacher={props.isTeacher} 
    //         changeModalStatus={changeModalStatus} 
    //         handleShowModal={props.handleShowViewResponseModal} 
    //       />

    //       <ScrollView>
    //         <PostTeacherTemplate 
    //           schedule={props.schedule} 
    //           name={props.name} 
    //           role={props.role} 
    //           avatar={props.avatar}
    //           title={props.title} 
    //           content={props.content} 
    //           attachment={props.attachment} 
    //           attachmentMargin={28}
    //           deadline={props.deadline}
    //           widthAdjustment={20}
    //         />

    //         <View style={{borderTopWidth:1,borderColor:COLOR_THEMES.gray,marginTop:20}}>
    //           <View style={{width:'95%',alignSelf:'center'}}>
    //             <PostedByHeader avatar={props.profilepic} 
    //               name={props.profilename} fontName={font.poppins_med_500.sizes.s20} 
    //               role={'Student'} fontRole={font.poppins_light_300.sizes.s13} />

    //             <TextInput
    //               multiline={true}
    //               numberOfLines={4}
    //               placeholder="Write a comment.."
    //               placeholderTextColor={COLOR_THEMES.gray}
    //               underlineColor="transparent"
    //               style={{
    //                 borderTopLeftRadius:8,
    //                 borderTopRightRadius:8,
    //                 borderBottomLeftRadius:8,
    //                 borderBottomRightRadius:8,
    //                 fontFamily:'poppins_med_500',
    //                 borderWidth:1,
    //                 marginTop:15,
    //                 textAlignVertical:"top",
    //                 borderColor:COLOR_THEMES.black,
    //                 backgroundColor:COLOR_THEMES.white
    //               }}
    //             />

    //             <View style={{flexDirection:'row',backgroundColor:COLOR_THEMES.gray,borderRadius:10,width:'40%',marginTop:10}}>
    //               <View style={{padding:5,width:'20%',justifyContent:'center',alignItems:'center'}}>
    //                 <Feather name="paperclip" size={20} color={COLOR_THEMES.gray_2} />
    //               </View>
    //               <View style={{padding:5,width:'80%',justifyContent:'center'}}>
    //                 <Text style={[font.poppins_med_500.sizes.s15,{color:COLOR_THEMES.gray_2}]}>Attach a File</Text>
    //               </View>
    //             </View>

    //             <ButtonWithModal 
    //               header={props.header}
    //               animationType={'none'}
    //               hasBackButton={true}  
    //               isTeacher={false} 
    //               isSaveButton={false} 
    //               isCreatePost={false}
    //               height={dimensions.height}
    //               contentContainer={{width:'30%',alignSelf:'flex-end',marginTop:10}}
    //               buttonStyle={{elevation:8,paddingVertical:8,paddingHorizontal:12,backgroundColor:COLOR_THEMES.red,borderRadius:15}}
    //               labelStyle={[font.poppins_reg_400.sizes.s14,{color:COLOR_THEMES.white,'alignSelf':'center'}]}
    //               label={'Send'} 
    //               screen={'ShowStudentResponse'}
    //               data={data}
    //               isModalOpen={false}
    //             />
    //           </View>
    //         </View>
    //       </ScrollView>
    //     </View>
    //   </View>
    // </Modal>
  )
}

const styles = StyleSheet.create({
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