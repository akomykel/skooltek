import { useState } from "react";
import { View, StyleSheet, Modal, ScrollView } from "react-native";
import { Header } from "../../../components/Header";
import { PostTeacherTemplate } from "../../Respond/Teacher/Template";
import { StudentResponse } from "../../Respond/Student/Template";

export default function ViewAllStudentResponse(props) {
  const [modalVisible, setModalVisible] = useState(props.isModalOpen);
  const changeModalStatus = (isModalShown) => { setModalVisible(isModalShown); }

  return (
    <Modal 
      animationType="slide" 
      transparent={true} 
      visible={props.isModalVisible} 
      onRequestClose={() => {props.handleShowModal(false)}}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Header 
            header={props.header} 
            hasBackButton={true} 
            isTeacher={props.isTeacher} 
            changeModalStatus={changeModalStatus} 
            handleShowModal={props.handleShowViewResponseModal} 
          />

          <ScrollView>
            <PostTeacherTemplate 
              schedule={props.schedule} 
              name={props.name} 
              role={props.role} 
              avatar={props.avatar}
              title={props.title} 
              content={props.content} 
              attachment={props.attachment} 
              attachmentMargin={28}
              deadline={props.deadline}
              widthAdjustment={20}
            />

            <View style={{marginTop:25}}>
              <View style={{alignSelf:'center'}}>
              {
                props.studentResponses.map((res,i) => {
                  return <StudentResponse 
                          key={i} 
                          header={props.header}
                          teacher={props.name}
                          profilepic={props.avatar}
                          title={props.title}
                          content={props.content}
                          attachment={props.attachment}
                          deadline={props.deadline}
                          schedule={res.schedule}
                          student_name={res.name} 
                          student_attachment={res.student_attachment}
                          role={res.role}
                          avatar={res.avatar} 
                          widthAdjustment={20}/>
                })
              }
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
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