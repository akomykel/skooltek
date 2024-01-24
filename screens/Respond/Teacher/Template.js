import { View, Text, Dimensions, useColorScheme } from "react-native";
import { COLOR_THEMES } from "../../../assets/styles/Generic";
import { FontAwesome5 } from '@expo/vector-icons';
import { font, theme } from "../../../assets/styles/Style";
import { PostedByHeader } from "../../../components/Header";
import Attachment from "../../../components/Attachment";

export function PostTeacherTemplate(props) {
  const scheme = useColorScheme();
  const isDarkTheme = scheme === 'dark';
  const dimensions = Dimensions.get("window");
  const contentWidth = dimensions.width - props.widthAdjustment;
  const classTitleWidth = dimensions.width-(dimensions.width/5);

  return (
    <View>
      <View style={{width:contentWidth,alignSelf:'center'}}>
        <View style={{marginTop:5}}>
          <Text style={[
            (isDarkTheme) ? font.poppins_med_500.whiteshade_s11 : font.poppins_med_500.grayshade2_s11,
            {'alignSelf':'flex-end'}
          ]}>
            {props.schedule}
          </Text>
        </View>

        <PostedByHeader avatar={props.avatar} 
          name={props.name} fontName={font.poppins_med_500.sizes.s20} 
          role={props.role} fontRole={font.poppins_light_300.sizes.s13}/>

        <View style={{flexDirection:"row",marginTop:30,alignSelf:'center',width:classTitleWidth}}>
          <Text style={[font.poppins_med_500.sizes.s15_bold,{color:(isDarkTheme) ? COLOR_THEMES.white : COLOR_THEMES.black}]}>{props.title}</Text>
        </View>
    
        <View style={{flexDirection:"row",alignSelf:'center',width:classTitleWidth}}>
          <Text style={[font.poppins_med_500.sizes.s12,{color:(isDarkTheme) ? COLOR_THEMES.white : COLOR_THEMES.gray_2}]}>{props.content}</Text>
        </View>

        {
          (props.attachment) ? <Attachment attachment={props.attachment} marginLeft={props.attachmentMargin} /> : ''
        }

        <View style={{marginTop:20,justifyContent:'center'}}>
          <View style={{width:contentWidth-50,alignSelf:'center',flexDirection:'row'}}>
            <View style={{flexDirection:'column'}}>
              <FontAwesome5 name="calendar" size={20} color={COLOR_THEMES.red} />
            </View>

            <View style={{flexDirection:'column',justifyContent:'center'}}>
              <View style={{marginLeft:5}}>
                <View style={{flexDirection:"row",width:classTitleWidth}}>
                  <Text style={[font.poppins_med_500.sizes.s12,{color:(isDarkTheme) ? COLOR_THEMES.white : COLOR_THEMES.gray_2}]}>{`Deadline - ${props.deadline}`}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
