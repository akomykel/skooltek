import { View, Text } from "react-native";
import { font } from "../../assets/styles/Style";
import { COLOR_THEMES } from "../../assets/styles/Generic";

export default function Points() {
  return (
    <>
    <View style={{flexDirection:"row",width:'100%',marginTop:30}}>
      <Text style={[font.poppins_med_500.sizes.s20,{alignSelf:'flex-start'}]}>Points</Text>
    </View>

    <View style={{alignItems:'center',justifyContent:'center',marginTop:10}}>
      <View style={{flexDirection:'row',alignItems:'flex-start'}}>
        <View>
          <Text style={{fontSize:25,fontWeight:'bold'}}>90</Text>
        </View>
        <View>
          <Text style={{fontSize:68,lineHeight:85,color:COLOR_THEMES.gray_2}}>/</Text>
        </View>
        <View style={{alignSelf:'flex-end'}}>
          <Text style={{fontSize:25,color:COLOR_THEMES.gray_2}}>100</Text>
        </View>
      </View>
    </View>
    </>
  )
}