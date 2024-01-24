import { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Dimensions } from "react-native";
import { COLOR_THEMES } from "../../../assets/styles/Generic";
import { FieldLabel } from "../../../components/Custom/Labels";
import { Entypo } from '@expo/vector-icons';
import { font } from "../../../assets/styles/Style";
import { ButtonWithModal } from "../../../components/Custom/Buttons";
import { PostedByHeader } from "../../../components/Header";
import Attachment from "../../../components/Attachment";
import Points from "../../../components/Points";

// THIS IS FOR INVESTIGATION/DEBUGGING PURPOSES
export function ShowResponseByStudent(props) {
  const dimensions = Dimensions.get("window");
  const contentWidth = dimensions.width-props.widthAdjustment;

  const data = {
    header:props.header,
    schedule:props.schedule,
    deadline:props.deadline,
    teacher:props.teacher,
    role:props.role,
    profilepic:props.profilepic,
    title:props.title,
    content:props.content,
    attachment:props.attachment,
    student:props.student_name,
    student_attachment:props.student_attachment,
    avatar:props.avatar
  }

  return (
    <View style={{width:dimensions.width,borderWidth:1,borderColor:COLOR_THEMES.gray}}>
      <View style={{width:contentWidth,alignSelf:'center'}}>
        <View style={{marginTop:5}}>
          <Text style={[font.poppins_med_500.grayshade2_s11,{alignSelf:'flex-end'}]}>{props.schedule}</Text>
        </View>

        {/* <View style={{flexDirection:"row",alignItems:"center"}}>
          <View style={{flexDirection:'row'}}>
            <View style={{flexDirection:'column',width:'70%'}}>
              <PostedByHeader avatar={props.avatar} 
                name={props.student_name} fontName={font.poppins_med_500.sizes.s20} 
                role={props.role} fontRole={font.poppins_light_300.sizes.s13} />

              <View style={{marginTop:30,width:'100%',flexDirection:"row",marginLeft:5}}>
                <Text style={[font.poppins_med_500.sizes.s15,{fontWeight:'bold'}]}>Hello Teacher {props.teacher} :)</Text>
              </View>

              {
                (props.userAttachment !== null) 
                ? <Attachment attachment={props.student_attachment} hasLabel={false} hasDownloadAttachmentIcon={true} marginLeft={5} /> 
                : ''
              }
            </View>

            <View style={{flexDirection:'column',width:'30%'}}>
              <Points />
            </View>
          </View>
        </View> */}

        {/* <View style={{flexDirection:'row',marginBottom:10}}>
          <View style={{width:'40%'}}></View>
          <View style={{width:'30%',alignItems:'center'}}>
            
          </View>
          <View style={{width:'30%',justifyContent:'center',alignItems:'center'}}>
            <Text style={font.poppins_med_500.sizes.s12}>Comments (1)</Text>
          </View>
        </View> */}
      </View>
    </View>
  )
}

export function StudentResponse(props) {
  const dimensions = Dimensions.get("window");
  const contentWidth = dimensions.width-props.widthAdjustment;

  const data = {
    header:props.header,
    schedule:props.schedule,
    deadline:props.deadline,
    teacher:props.teacher,
    role:props.role,
    profilepic:props.profilepic,
    title:props.title,
    content:props.content,
    attachment:props.attachment,
    student:props.student_name,
    student_attachment:props.student_attachment,
    avatar:props.avatar
  }

  return (
    <View style={{width:dimensions.width,borderWidth:1,borderColor:COLOR_THEMES.gray}}>
      <View style={{width:contentWidth,alignSelf:'center'}}>
        <View style={{marginTop:5}}>
          <Text style={[font.poppins_med_500.grayshade2_s11,{alignSelf:'flex-end'}]}>{props.schedule}</Text>
        </View>

        {/* <View style={{marginTop:20,flexDirection:"row",alignItems:"center"}}>
          <View style={{flexDirection:'row'}}>
            <View style={{flexDirection:'column',width:'70%'}}>
              <PostedByHeader avatar={props.avatar} 
                name={props.student_name} fontName={font.poppins_med_500.sizes.s15} 
                role={props.role} fontRole={font.poppins_light_300.sizes.s13} />

              <View style={{marginTop:30,width:'100%',flexDirection:"row",marginLeft:5}}>
                <Text style={[font.poppins_med_500.sizes.s15,{fontWeight:'bold'}]}>Hello Teacher {props.teacher} :)</Text>
              </View>

              {
                (props.userAttachment !== null) 
                ? <Attachment attachment={props.student_attachment} hasLabel={false} hasDownloadAttachmentIcon={true} marginLeft={5} /> 
                : ''
              }
            </View>

            <View style={{flexDirection:'column',width:'30%'}}>
              <Points />
            </View>
          </View>
        </View> */}

        {/* <View style={{flexDirection:'row',marginBottom:10}}>
          <View style={{width:'40%'}}></View>
          <View style={{width:'30%',alignItems:'center'}}>
            <ButtonWithModal 
              header={props.header}
              animationType={'slide'}
              hasBackButton={true}  
              isTeacher={true} 
              isSaveButton={false} 
              isCreatePost={false}
              height={dimensions.height}
              contentContainer={{width:'100%',borderRadius:10,marginLeft:1}}
              buttonStyle={{height:40,elevation:8,paddingVertical:11,paddingHorizontal:12,backgroundColor:COLOR_THEMES.red,borderRadius:15}}
              labelStyle={[font.poppins_reg_400.sizes.s11,{color:COLOR_THEMES.white,'alignSelf':'center'}]}
              label={'Update Points'} 
              screen={'UpdatePoints'}
              data={data}
              isModalOpen={false}
            />
          </View>
          <View style={{width:'30%',justifyContent:'center',alignItems:'center'}}>
            <Text style={font.poppins_med_500.sizes.s12}>Comments (1)</Text>
          </View>
        </View> */}
      </View>
    </View>
  )
}

export function ShowStudentGrade(props) {
  const avatar = require('../../../assets/images/Avatar/avatar.png');

  return (
    <View>
      <FieldLabel
        topmargin={10}
        fontSize={11}
        fontFamily={'poppins_med_500'}
        label={props.schedule}
        labelStyle={{'alignSelf':'flex-end','color':COLOR_THEMES.gray_2}}
      />

      <View style={{marginTop:20,flexDirection:"row",alignItems:"center"}}>
        <View style={{flexDirection:'row'}}>
          <View style={{flexDirection:'column',width:'70%',borderWidth:0,borderColor:COLOR_THEMES.red}}>
            <View style={{flexDirection:'row'}}>
              {/* <View style={{borderWidth:0,borderColor:COLOR_THEMES.red}}>
                <Image source={avatar} style={[styles.imgSize,{borderRadius:50}]} />
              </View>
              <View style={{borderWidth:0,borderColor:COLOR_THEMES.red,justifyContent:'center'}}>
                <FieldLabel
                  style={{flexDirection:"row",marginLeft:10,borderWidth:0,borderColor:'#ff0000'}}
                  fontSize={20}
                  fontFamily={'poppins_med_500'}
                  label={props.name}
                  labelStyle={{'alignSelf':'flex-end'}}
                />

                <FieldLabel
                  style={{flexDirection:"row",marginLeft:10,borderWidth:0,borderColor:'#ff0000'}}
                  fontSize={13}
                  fontFamily={'poppins_light_300'}
                  label={props.role}
                  labelStyle={{'alignSelf':'flex-end'}}
                />
              </View> */}
            </View>

            <FieldLabel
              topmargin={30}
              contentWidth={'100%'}
              style={{flexDirection:"row",borderWidth:0,borderColor:COLOR_THEMES.red,marginLeft:5}}
              fontSize={15}
              fontFamily={'poppins_med_500'}
              label={'Hello Teacher Judy Anne :)'}
              labelStyle={{'fontWeight':'bold'}}
            />

            {
              (props.userAttachment !== null) ? <Attachment attachment={props.userAttachment} marginLeft={5} /> : ''
            }
          </View>

          <View style={{flexDirection:'column',width:'30%',borderWidth:0,borderColor:COLOR_THEMES.red}}>
            <Points />
          </View>
        </View>
      </View>

      <View style={{borderWidth:0,borderColor:COLOR_THEMES.red}}>
        <View style={{alignSelf:"flex-end"}}>
          <Text style={{fontSize:13,fontFamily:'poppins_med_500'}}>Comments (1)</Text>
        </View>
      </View>

      <View style={{marginTop:20,marginBottom:30,width:'100%',alignSelf:'center',borderTopWidth:1,borderTopColor:COLOR_THEMES.black}}>
        <FieldLabel
          topmargin={10}
          fontSize={11}
          fontFamily={'poppins_med_500'}
          label={props.schedule}
          labelStyle={{'alignSelf':'flex-end','color':COLOR_THEMES.gray_2}}
        />

        <View style={{flexDirection:'row',marginTop:20,}}>
          {/* <View style={{borderWidth:0,borderColor:COLOR_THEMES.red}}>
            <Image source={avatar} style={[styles.imgSize,{borderRadius:50}]} />
          </View>
          <View style={{borderWidth:0,borderColor:COLOR_THEMES.red,justifyContent:'center'}}>
            <FieldLabel
              style={{flexDirection:"row",marginLeft:10,borderWidth:0,borderColor:'#ff0000'}}
              fontSize={20}
              fontFamily={'poppins_med_500'}
              label={'Judy Anne Santos'}
              labelStyle={{'alignSelf':'flex-end'}}
            />

            <FieldLabel
              style={{flexDirection:"row",marginLeft:10,borderWidth:0,borderColor:'#ff0000'}}
              fontSize={13}
              fontFamily={'poppins_light_300'}
              label={'Teacher'}
              labelStyle={{'alignSelf':'flex-end'}}
            />
          </View> */}
        </View>

        <FieldLabel
          topmargin={30}
          contentWidth={'100%'}
          style={{flexDirection:"row",borderWidth:0,borderColor:COLOR_THEMES.red,marginLeft:5}}
          fontSize={15}
          fontFamily={'poppins_med_500'}
          label={'Hello John, Good Job!! <3'}
          labelStyle={{'fontWeight':'bold'}}
        />

        <View style={{marginTop:15}}>
          <View style={{borderRadius:10,borderWidth:1,padding:10,borderColor:COLOR_THEMES.black}}>
            <TextInput
              multiline={true}
              numberOfLines={4}
              placeholder="Write a comment.."
              style={{fontFamily:'poppins_med_500',textAlignVertical:"top"}}
            />
          </View>
        </View>

        <View style={{width:100,marginTop:25,marginBottom:20,alignSelf:'flex-end',borderWidth:0,borderColor:COLOR_THEMES.red}}>
          <TouchableOpacity style={{elevation:8,paddingVertical:5,paddingHorizontal:12,backgroundColor:COLOR_THEMES.red,borderRadius:10,height:30,width:'100%'}}>
            <Text 
              onPress={() => alert('send message')}
              style={{'fontSize':13,'fontFamily':'poppins_light_300','color':COLOR_THEMES.white,'alignSelf':'center'}}>
              Send
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export function PostStudentTemplate(props) {
  const avatar = require('../../../assets/images/Avatar/avatar.png');
  const [displayGrades, setDisplayGrades] = useState('none');
  const [displayTextArea, setDisplayTextArea] = useState('flex');
  const updateView = () => {
    setDisplayGrades('flex');
    setDisplayTextArea('none');
  }

  return (
    <View style={{marginTop:20,width:'100%',borderTopWidth:1,borderTopColor:COLOR_THEMES.black}}>
      <View style={{width:'95%',alignSelf:'center',borderWidth:0,borderColor:COLOR_THEMES.red,display:displayGrades}}>
        <ShowStudentGrade schedule={props.schedule} name={props.user} role={props.userRole} userAttachment={props.userAttachment} />
      </View>

      <View style={{width:'95%',alignSelf:'center',borderWidth:0,borderColor:COLOR_THEMES.red,display:displayTextArea}}>
        <View style={{marginTop:20,flexDirection:"row",alignItems:"center"}}>
          {/* <View style={{borderWidth:0,borderColor:COLOR_THEMES.red}}>
            <Image source={avatar} style={[styles.imgSize,{borderRadius:50}]} />
          </View>
          <View style={{borderWidth:0,borderColor:COLOR_THEMES.red}}>
            <FieldLabel
              style={{flexDirection:"row",marginLeft:10,borderWidth:0,borderColor:COLOR_THEMES.red}}
              fontSize={20}
              fontFamily={'poppins_med_500'}
              label={props.user}
              labelStyle={{'alignSelf':'flex-end'}}
            />

            <FieldLabel
              style={{flexDirection:"row",marginLeft:10,borderWidth:0,borderColor:COLOR_THEMES.red}}
              fontSize={13}
              fontFamily={'poppins_light_300'}
              label={props.userRole}
              labelStyle={{'alignSelf':'flex-end'}}
            />
          </View> */}
        </View>

        <View style={{marginTop:15}}>
          <TextInput
            multiline={true}
            numberOfLines={4}
            placeholder="Write a comment.."
            style={{borderRadius:10,padding:10,fontFamily:'poppins_med_500',textAlignVertical:"top",borderWidth:1,borderColor:COLOR_THEMES.black}}
          />
        </View>

        <View style={{marginTop:10}}>
          <View style={{flexDirection:'row',width:120,padding:8,borderRadius:10,backgroundColor:COLOR_THEMES.gray_3,borderWidth:0,borderColor:COLOR_THEMES.red}}>
            <View style={{width:'20%',justifyContent:'center',borderWidth:0,borderColor:COLOR_THEMES.red}}>
              <Entypo name="attachment" size={16} color={COLOR_THEMES.gray_2} />
            </View>
            <View style={{width:'80%',justifyContent:'center',borderWidth:0,borderColor:COLOR_THEMES.red}}>
              <Text style={{color:COLOR_THEMES.gray_2,fontSize:13,fontFamily:'poppins_reg_400'}}>Attach a file</Text>
            </View>
          </View>
        </View>

        <View style={{width:100,marginTop:25,marginBottom:20,alignSelf:'flex-end',borderWidth:0,borderColor:COLOR_THEMES.red}}>
          <TouchableOpacity style={{elevation:8,paddingVertical:5,paddingHorizontal:12,backgroundColor:COLOR_THEMES.red,borderRadius:10,height:30,width:'100%'}}>
            <Text 
              onPress={updateView}
              style={{'fontSize':13,'fontFamily':'poppins_light_300','color':COLOR_THEMES.white,'alignSelf':'center'}}>
              Send
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imgSize: {
    width:80,
    height:80
  }
});