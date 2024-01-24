import { View, Text } from "react-native"
import { COLOR_THEMES } from "../../../assets/styles/Generic"

export default function NotificationCounter(props) {
  return (
    <View style={{
      'position':'absolute',
      'marginLeft':22,
      'marginTop':20,
      'backgroundColor':COLOR_THEMES.red,
      'borderRadius':50,
      'width':22,
      'height':22
    }}>
      <Text style={{
        'position':'absolute',
        'color':COLOR_THEMES.white,
        'fontSize':15,
        'alignSelf':'center',
        'justifyContent':'center'
      }}>
        {props.counter}
      </Text>
    </View>
  )
}