import { View, Text, ScrollView, Dimensions } from "react-native";
import { PostTeacherTemplate } from "../../Respond/Teacher/Template";
// import { ShowResponseByStudent } from "../../Respond/Student/Template";
import { font } from "../../../assets/styles/Style";
import { PostedByHeader } from "../../../components/Header";
import { Button, TextInput } from "react-native-paper";
import { COLOR_THEMES } from "../../../assets/styles/Generic";


export default function UpdatePoints(props) {
  const dimensions = Dimensions.get("window");
  const contentWidth = dimensions.width - 20;

  return (
    <View style={{height:dimensions.height*0.9}}>
      <ScrollView>
        <PostTeacherTemplate 
          schedule={props.data.schedule} 
          name={props.data.teacher} 
          role={'Teacher'} 
          avatar={props.data.profilepic}
          title={props.data.title} 
          content={props.data.content} 
          attachment={props.data.attachment} 
          attachmentMargin={28}
          deadline={props.data.deadline}
          widthAdjustment={20}
        />

        {/* Start loop here for responses */}
        <View style={{marginTop:25}}>
          {/* This shows a warning: 
            WARN  Require cycle: components/Custom/Buttons.js -> components/Modal/ModalScreens.js -> screens/Teacher/Modal/UpdatePoints.js
            Require cycles are allowed, but can result in uninitialized values 
          */}
          {/* <ShowResponseByStudent 
            header={props.data.header}
            teacher={props.data.teacher}
            profilepic={props.data.avatar}
            title={props.data.title}
            content={props.data.content}
            deadline={props.data.deadline}
            attachment={props.data.attachment}
            schedule={props.data.schedule}
            student_name={props.data.student} 
            student_attachment={props.data.student_attachment}
            role={props.data.role}
            avatar={props.data.avatar} 
            widthAdjustment={20}
          /> */}
        </View>
        {/* End loop here for responses */}

        <View style={{width:contentWidth,alignSelf:'center',marginBottom:20}}>
          <Text style={[font.poppins_med_500.grayshade2_s11,{alignSelf:'flex-end',marginTop:5}]}>{props.data.schedule}</Text>

          <PostedByHeader avatar={props.data.avatar} 
            name={props.data.student} fontName={font.poppins_med_500.sizes.s15} 
            role={'Student'} fontRole={font.poppins_light_300.sizes.s13}/>

          <Text style={[font.poppins_med_500.sizes.s15,{fontWeight:'bold',marginTop:20}]}>How are you teacher {props.data.teacher}?</Text>

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
              textAlignVertical:"top",
              borderColor:COLOR_THEMES.black,
              backgroundColor:COLOR_THEMES.white
            }}
          />

          <Button 
            buttonColor={COLOR_THEMES.red} 
            textColor={COLOR_THEMES.white} 
            labelStyle={font.poppins_light_300.sizes.s13} 
            style={{width:'25%',alignSelf:'flex-end',marginTop:5}}>
              Send
          </Button>
        </View>
      </ScrollView>
    </View>
  )
}