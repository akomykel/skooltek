import { View, Text } from "react-native";

// export function Header(props) {
//   return (
//     <View style={[props.style,{marginTop:props.topmargin,alignSelf:props.align,width:props.contentWidth}]}>
//       <Text style={[props.labelStyle,{'fontSize':props.fontSize,'fontFamily':props.fontFamily}]}>{props.label}</Text>
//     </View>
//   );
// }

export function FieldLabel(props) {
  return (
    <View style={[props.style,{marginTop:props.topmargin,alignSelf:props.align,width:props.contentWidth}]}>
      <Text style={[props.labelStyle,{'fontSize':props.fontSize,'fontFamily':props.fontFamily}]}>{props.label}</Text>
    </View>
  );
}
