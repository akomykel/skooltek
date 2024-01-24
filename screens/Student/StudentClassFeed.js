import { useState } from "react";
import { useColorScheme, View, ScrollView } from "react-native";
import { button, global, theme, font } from "../../assets/styles/Style";
import { LinkButtonWithContainer } from "../../components/Custom/Buttons";
import { ClassFeedTemplate } from "../../components/ClassFeed/Template";
import { ProfileHeader } from "../../components/Profile/Header";

export default function StudentClassFeed(props) {
  const scheme = useColorScheme();
  const isDarkTheme = scheme === 'dark';
  const setTheme = isDarkTheme ? theme.dark : theme.light;
  const [hasNotification, setHasNotification] = useState(true);
  const [totalNotifications, setTotalNotifications] = useState(3);

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
      attachment:'Activity-Nursing-1.pdf',
      name:'Veronica Paige',
      role:'Teacher',
      avatar:require('../../assets/images/Avatar/woman.png')
    },
  ];

  let items=['All Subjects','Math','English','Science','History','Music','Religious Education'];
  
  return (
    <View style={[global.container,setTheme]}>
      <ProfileHeader name={props.name} hasNotification={hasNotification} totalNotifications={totalNotifications} />

      <View style={{marginTop:10,marginBottom:10,marginLeft:15}}>
        <ScrollView horizontal={true}>
          {
            items.map((item,index) => {
              return <LinkButtonWithContainer
                      key={index}
                      contentContainer={{width:200,marginRight:10,alignSelf:"center"}}
                      buttonStyle={[button.default,{borderRadius:18,width:'100%'}]}
                      labelStyle={[font.poppins_light_300.white_s18,{'alignSelf':'center'}]}
                      label={item}
                     />
            })
          }
        </ScrollView>
      </View>

      <ScrollView>
        {
          classfeed.map((cf,index) => {
            return <ClassFeedTemplate 
                      key={index} 
                      isTeacher={props.isTeacher}
                      profilepic={props.profilepic}
                      profilename={props.name}
                      type={cf.type}
                      header={cf.header} 
                      title={cf.title}  
                      schedule={cf.schedule}
                      deadline={cf.deadline}
                      content={cf.content}
                      attachment={cf.attachment}
                      name={cf.name}
                      role={cf.role} 
                      avatar={cf.avatar}/>
          })
        }
      </ScrollView>
    </View>
  )
}
