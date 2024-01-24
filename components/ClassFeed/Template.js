import { useState } from "react";
import { View, Text, Dimensions, Image, TouchableOpacity, useColorScheme } from "react-native";
import { COLOR_THEMES } from "../../assets/styles/Generic";
import { PostTeacherTemplate } from "../../screens/Respond/Teacher/Template";
import { Header } from "../Header";
import { button, font } from "../../assets/styles/Style";
import { StudentRespond } from "../../screens/Student/Modal/Respond";
import ViewAllStudentResponse from "../../screens/Teacher/Modal/ViewResponse";

export function ClassFeedTemplate(props) {
  const dimensions = Dimensions.get("window");
  const contentWidth = dimensions.width-30;

  return (
    <View style={{width:contentWidth,alignSelf:"center",marginTop:10,marginBottom:10}}>
      {
        props.type != 'Announcement' 
        ? <DefaultContainer 
            isTeacher={props.isTeacher}
            screenName={props.screenName}
            header={props.header}
            title={props.title}
            schedule={props.schedule}
            deadline={props.deadline}
            name={props.name}
            role={props.role}
            avatar={props.avatar}
            profilepic={props.profilepic}
            profilename={props.profilename}
            studentResponses={props.studentResponses}
            content={props.content} 
            attachment={props.attachment}
            attachmentMargin={props.attachmentMargin} 
            isModalOpen={props.isModalOpen}
            handleShowViewResponseModal={props.handleShowViewResponseModal}
          /> 
        : <AnnouncementContainer
            name={props.name}
            header={props.header}
            title={props.title} 
            schedule={props.schedule} 
            content={props.content} 
          />
      } 
    </View>
  )
}

const DefaultContainer = (props) => {
  const [modalVisible, setModalVisible] = useState(props.isModalOpen);
  const [responseCounter,setResponseCounter] = useState(5);

  const handleShowViewResponseModal = (modalStatus) => {
    setModalVisible(modalStatus);
  }

  return (
    <View>
      <Header hasBackButton={false} header={props.header} isTeacher={props.isTeacher} />

      <View style={{borderWidth:1,borderColor:COLOR_THEMES.gray,borderBottomLeftRadius:15,borderBottomRightRadius:15}}>
        <PostTeacherTemplate 
          schedule={props.schedule} 
          name={props.name} 
          role={props.role} 
          avatar={props.avatar}
          title={props.title} 
          content={props.content} 
          attachment={props.attachment} 
          attachmentMargin={12}
          deadline={props.deadline}
          widthAdjustment={50}
        />

        <View style={{width:(props.isTeacher) ? 160 : 100, marginRight:5, marginTop:25, marginBottom:15, alignSelf:'flex-end'}}>
          <TouchableOpacity style={[button.default,{borderRadius:25,width:'100%'}]}>
            <Text 
              onPress={() => setModalVisible(true)}
              style={[font.poppins_light_300.sizes.s14,{'color':COLOR_THEMES.white,alignSelf:'center',marginTop:2}]}
            >
              {(props.isTeacher) ? <ViewResponseLabel responseCounter={responseCounter} /> : 'Respond'}
            </Text>
          </TouchableOpacity>
        </View>

        {
          (modalVisible)
          ? (props.isTeacher)
            ? <ViewAllStudentResponse  
                header={props.header}
                isTeacher={props.isTeacher}
                schedule={props.schedule}
                name={props.name}
                role={props.role}
                avatar={props.avatar}
                title={props.title}
                content={props.content}
                attachment={props.attachment}
                deadline={props.deadline}
                isModalOpen={props.isModalOpen}
                studentResponses={props.studentResponses}
                handleShowViewResponseModal={handleShowViewResponseModal}
              />
            : <StudentRespond 
                header={props.header}
                isTeacher={props.isTeacher}
                isModalOpen={props.isModalOpen}
                schedule={props.schedule}
                name={props.name}
                role={props.role}
                avatar={props.avatar}
                profilepic={props.profilepic}
                profilename={props.profilename}
                title={props.title}
                content={props.content}
                attachment={props.attachment}
                deadline={props.deadline}
                handleShowViewResponseModal={handleShowViewResponseModal}
              />
          : ''
        }
      </View>
    </View>
  )
}

const AnnouncementContainer = (props) => {
  const avatar = require('../../assets/images/Avatar/avatar.png');
  const scheme = useColorScheme();
  const isDarkTheme = scheme === 'dark'
  const dimensions = Dimensions.get("window");
  const contentWidth = dimensions.width-50;

  return (
    <View>
      <Header hasBackButton={false} header={props.header} isTeacher={false} />

      <View style={{borderWidth:1,borderColor:COLOR_THEMES.gray,borderBottomLeftRadius:15,borderBottomRightRadius:15}}>
        <View style={{width:contentWidth,alignSelf:'center'}}>
          <Text style={[
            font.poppins_med_500.sizes.s11,
            {alignSelf:'flex-end',color:(isDarkTheme) ? COLOR_THEMES.white : COLOR_THEMES.gray_2,marginTop:5}
          ]}>
            {props.schedule}
          </Text>

          <View style={{flexDirection:'row',marginTop:20}}>
            <Image source={avatar} style={{borderRadius:50,width:50,height:50}} />
            <View style={{justifyContent:'center'}}>
              <Text style={[
                font.poppins_med_500.sizes.s20,
                {marginLeft:10, color:(isDarkTheme) ? COLOR_THEMES.white : COLOR_THEMES.black}
              ]}>
                {props.name}
              </Text>
            </View>
          </View>

          <View style={{flexDirection:"row",marginTop:20}}>
            <Text style={[
              font.poppins_med_500.sizes.s16,
              {alignSelf:'flex-end', color:(isDarkTheme) ? COLOR_THEMES.white : COLOR_THEMES.black}
            ]}>
              {props.title}
            </Text>
          </View>

          <View style={{flexDirection:"row",marginTop:10,marginBottom:10}}>
            <Text style={[
              font.poppins_light_300.sizes.s13,
              {alignSelf:'flex-end',color:(isDarkTheme) ? COLOR_THEMES.white : COLOR_THEMES.gray_2}
            ]}>
              {props.content}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const ViewResponseLabel = (props) => {
  return (
    <>
      <Text style={{fontFamily:'poppins_reg_400'}}>View Response </Text>
      <Text style={{fontFamily:'poppins_med_500',fontWeight:'bold'}}>({props.responseCounter})</Text>
    </>
  )
}