import { useState } from "react";
import { View } from "react-native";
import { TextInput } from "react-native-paper";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// export function RegularTextInput(props) {
//   return (
//     <View style={[props.style,{marginTop:props.topmargin,alignSelf:props.align,width:props.contentWidth}]}>
//       <TextInput
//         placeholder={props.placeholder}
//         cursorColor={props.cursorColor}
//         style={[props.style,{
//           'borderColor':props.borderColor,
//           'borderWidth':props.borderWidth,
//           'borderTopLeftRadius':props.borderTopLeftRadius,
//           'borderTopRightRadius':props.borderTopRightRadius,
//           'borderBottomLeftRadius':props.borderBottomLeftRadius,
//           'borderBottomRightRadius':props.borderBottomRightRadius,
//           'backgroundColor':props.backgroundColor,
//           'fontFamily':props.fontFamily,
//           'padding':props.padding
//         }]}
//       />
//     </View>
//   );
// }

export function PasswordTextInput(props) {
  const [isSecureTextEntry, setSecureTextEntry] = useState(props.secureTextEntry);
  return (
    <View style={[props.style,{marginTop:props.topmargin,alignSelf:props.align,width:props.contentWidth}]}>
      <TextInput 
        placeholder={props.placeholder}
        secureTextEntry={isSecureTextEntry}
        style={[props.style,{
          'borderColor':props.borderColor,
          'borderWidth':props.borderWidth,
          'borderTopLeftRadius':props.borderTopLeftRadius,
          'borderTopRightRadius':props.borderTopRightRadius,
          'borderBottomLeftRadius':props.borderBottomLeftRadius,
          'borderBottomRightRadius':props.borderBottomRightRadius,
          'backgroundColor':props.backgroundColor,
          'fontFamily':props.fontFamily,
          'padding':props.padding
        }]}
        right={
          <TextInput.Icon
            icon={() => <MaterialCommunityIcons name={isSecureTextEntry ? "eye-off" : "eye"} size={props.iconSize} />}
            iconColor={props.iconColor}
            onPress={() => {isSecureTextEntry ? setSecureTextEntry(false) : setSecureTextEntry(true)}}
          />
        }
      />
    </View>
  )
}