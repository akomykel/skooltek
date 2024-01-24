import { View, Text } from "react-native";
import { COLOR_THEMES } from "../../assets/styles/Generic";
import { MaterialIcons } from '@expo/vector-icons';
import { font } from "../../assets/styles/Style";

const ShowDownloadIcon = () => {
  return (
    <View style={{borderRadius:50,backgroundColor:COLOR_THEMES.red,padding:2}}>
      <MaterialIcons name="file-download" size={18} color={COLOR_THEMES.gray} />
    </View>
  )
}

export default function Attachment(props) {
  return (
    <View style={{marginTop:20,marginBottom:20,borderColor:COLOR_THEMES.gray}}>
      <View style={{marginLeft:props.marginLeft}}>
        {(props.hasLabel)
          ? <View style={{flexDirection:"row"}}>
              <Text style={[font.poppins_light_300.sizes.s12,{alignSelf:'flex-end',color:COLOR_THEMES.black}]}>Attachment</Text>
            </View>
          : ''}

        <View style={{backgroundColor:COLOR_THEMES.gray_3,padding:10,borderRadius:10,alignSelf:'flex-start',flexDirection:'row'}}>
          <View style={{width:'80%'}}>
            <Text style={font.poppins_light_300.sizes.s13}>{props.attachment}</Text>
          </View>
          <View style={{width:'20%',alignItems:'center'}}>
            {(props.hasDownloadAttachmentIcon) ? <ShowDownloadIcon /> : ''}
          </View>
        </View>
      </View>
    </View>
  )
}