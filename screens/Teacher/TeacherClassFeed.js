import { useState } from "react";
import { View, Text, useColorScheme, ScrollView, Dimensions } from "react-native";
import { border, button, font, theme } from "../../assets/styles/Style";
import { LinkButtonWithContainer } from "../../components/Custom/Buttons";
import { COLOR_THEMES } from "../../assets/styles/Generic";
import { Feather } from '@expo/vector-icons';
import { ClassFeedTemplate } from "../../components/ClassFeed/Template";
import { ProfileHeader, Avatar } from "../../components/Profile/Header";
import CreatePost from "./Modal/CreatePost";

export default function TeacherClassFeed(props) {
  const scheme = useColorScheme();
  const isDarkTheme = scheme === 'dark';
  const setTheme = isDarkTheme ? theme.dark : theme.light;
  const dimensions = Dimensions.get("window");
  const contentWidth = dimensions.width-30;
  const [hasNotification, setHasNotification] = useState(true);
  const [totalNotifications, setTotalNotifications] = useState(2);
  const [modalCreatePostVisible, setModalCreatePostVisible] = useState(false);
  const [modalViewResponseVisible, setModalViewResponseVisible] = useState(false);

  const handleShowCreatePostModal = (modalStatus) => {
    setModalCreatePostVisible(modalStatus);
  }

  const handleShowViewResponseModal = (modalStatus) => {
    setModalViewResponseVisible(modalStatus);
  }

  const classfeed = [
    {
      type:'Assignment',
      header:'Assignment',
      title:'Foundations of Nursing 1 Assignment',
      schedule:'March 02,2023 | 10:11 AM',
      deadline:'March 15,2023 | 10:45 AM',
      content:'Test Assignment',
      name:'Judy Anne Santos',
      role:'Teacher',
      avatar:require('../../assets/images/Avatar/avatar.png')
    },
    {
      type:'Activity',
      header:'Activity',
      title:'Data Structures and Applications',
      schedule:'March 01,2023 | 09:30 AM',
      deadline:'April 02,2023 | 12:33 PM',
      content:'Test Test',
      attachment:'Activity-Nursing-2.pdf',
      name:'Veronica Paige',
      role:'Teacher',
      avatar:require('../../assets/images/Avatar/woman.png')
    },
    {
      type:'Announcement',
      header:'School Announcement',
      title:'Demo Announcement || Testing',
      name:'Test School',
      schedule:'March 01,2023 | 06:40 AM',
      content:'This is a test announcement for demonstration purposes.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
    },
    {
      type:'Activity',
      header:'Activity',
      title:'Specialization Wise BE Syllabus and Subjects',
      schedule:'January 23,2023 | 10:16 AM',
      deadline:'April 02,2023 | 12:33 PM',
      content:'Please submit your work on Activity 1',
      attachment:'Activity-Nursing-3.pdf',
      name:'Veronica Paige',
      role:'Teacher',
      avatar:require('../../assets/images/Avatar/woman.png')
    },
  ];

  const studentResponses = [
    {
      'name':'Samantha Ashley',
      'role':'Student',
      'avatar':require('../../assets/images/Avatar/avatar.png'),
      'message':'Hello Teacher Judy Anne :)',
      'student_attachment':'Nursing-Assignment.docx',
      'schedule':'March 02,2023 | 10:11 AM'
    },
    {
      'name':'Kodak Brown',
      'role':'Student',
      'avatar':require('../../assets/images/Avatar/man.jpg'),
      'message':'Hello Teacher Judy Anne :)',
      'student_attachment':'Sample-Doc.docx',
      'schedule':'April 15,2023 | 01:30 PM'
    },
    {
      'name':'Belcalis Almanzar',
      'role':'Student',
      'avatar':require('../../assets/images/Avatar/woman.png'),
      'message':'Hello Teacher Judy Anne :)',
      'student_attachment':'Google-Doc.docx',
      'schedule':'May 25,2023 | 06:20 AM'
    }
  ];

  let items=['All','Section A','Section B','Section C'];

  return (
    <View style={[global.container,setTheme,{height:'100%',backgroundColor:COLOR_THEMES.white}]}>
      <ProfileHeader name={props.name} hasNotification={hasNotification} totalNotifications={totalNotifications} />

      <View style={{marginTop:10,marginLeft:15}}>
        <ScrollView horizontal={true} style={{height:70}}>
          {
            items.map((item,index) => {
              return <LinkButtonWithContainer
                      key={index}
                      contentContainer={{width:200,marginRight:10,alignSelf:"center"}}
                      buttonStyle={[button.default, {borderRadius:18}]}
                      labelStyle={[font.poppins_light_300.white_s18, {'alignSelf':'center'}]}
                      label={item}
                     />
            })
          }
        </ScrollView>

        <View style={[border.all_radius_10_black_1,{flexDirection:'row',width:contentWidth,padding:5}]}>
          <View style={{width:'15%',justifyContent:'center'}}>
            <View style={{alignSelf:'center'}}>
              <Avatar imgSrc={props.profilepic} imgWidth={40} imgHeight={40} />
            </View>
          </View>
          <View style={{width:'75%',justifyContent:'center'}}>
            <Text style={font.poppins_med_500.grayshade2_s11}>Create a Post, Assignment, Activity & Event</Text>
          </View>
          <View style={{width:'10%',justifyContent:'center'}}>
            <View style={{alignSelf:'center'}}>
              <Feather name="edit" size={25} color={COLOR_THEMES.gray_2} onPress={() => setModalCreatePostVisible(true)} />
            </View>
          </View>
        </View>

        {
          (modalCreatePostVisible) 
          ? <CreatePost 
              isModalOpen={modalCreatePostVisible} 
              handleShowCreatePostModal={handleShowCreatePostModal} 
              isTeacher={props.isTeacher} 
              name={props.name}
              profilepic={props.profilepic}
            /> 
          : ''
        }
      </View>

      <ScrollView>
        {
          classfeed.map((cf,index) => {
            return <ClassFeedTemplate 
                      key={index} 
                      isTeacher={props.isTeacher}
                      type={cf.type}
                      header={cf.header} 
                      title={cf.title}  
                      schedule={cf.schedule}
                      deadline={cf.deadline}
                      content={cf.content}
                      attachment={cf.attachment}
                      name={cf.name}
                      role={cf.role}
                      avatar={cf.avatar}
                      studentResponses={studentResponses}
                      isModalOpen={modalViewResponseVisible}
                      handleShowViewResponseModal={handleShowViewResponseModal}
                   />
          })
        }
      </ScrollView>
    </View>
  )
}
