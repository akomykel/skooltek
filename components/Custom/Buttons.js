import { StyleSheet, View, Text, Image, TouchableOpacity, Modal } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Header } from '../../components/Header';
import { COLOR_THEMES } from "../../assets/styles/Generic";
import ModalScreens from "../Modal/ModalScreens";

// Button
export function RegularButtons({
  navigation,
  screenName,
  topmargin,
  align,
  buttonWidth,
  buttonHeight,
  customstyle,
  buttonColor,
  buttonBorderRadius,
  textSize,
  textFamily,
  textColor,
  buttonText}) {
    return (
      <Button 
        onPress={() => navigation.navigate(screenName)}
        buttonColor={buttonColor} 
        textColor={textColor}
        labelStyle={{'fontSize':textSize,'fontFamily':textFamily}}
        style={[styles.regButtonContainer,{
          'marginTop':topmargin,
          'alignSelf':align,
          'width':buttonWidth,
          'height':buttonHeight,
          'borderRadius':buttonBorderRadius,
          customstyle
        }]}>
          {buttonText}
      </Button>
    )
}

// TouchableOpacity Button Only
export function NavigationButton(props) {
  const navigation = useNavigation();
  const { buttonStyle, screenName, labelStyle, label } = props;
  return (
    <TouchableOpacity style={buttonStyle}>
      <Text 
        onPress={() => navigation.navigate(screenName)}
        style={labelStyle}>
          {label}
      </Text>
    </TouchableOpacity>
  );
}

// TouchableOpacity with Button Wrapper
export function LinkButtonWithContainer(props) {
  const navigation = useNavigation();
  return (
    <View style={props.contentContainer}>
      <TouchableOpacity style={props.buttonStyle}>
        <Text 
          onPress={() => navigation.navigate(props.screenName)} 
          style={props.labelStyle}>
            {props.label}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

// TouchableOpacity For Modal
export function ButtonWithModal(props) {
  const [modalVisible, setModalVisible] = useState(props.isModalOpen);
  const handleModalVisible = (modalStatus) => { setModalVisible(modalStatus); }

  return (
    <View style={props.contentContainer}>
      <TouchableOpacity style={props.buttonStyle}>
        <Text 
          onPress={() => setModalVisible(true)} 
          style={props.labelStyle}>
            {props.label}
        </Text>
      </TouchableOpacity>

      {/* <Modal animationType={props.animationType} transparent={true} visible={modalVisible} onRequestClose={() => props.handleShowModal(false)}>
        <View>
          <Header 
            hasBackButton={props.hasBackButton} 
            header={props.header} 
            isTeacher={props.isTeacher} 
            isSaveButton={props.isSaveButton} 
            isCreatePost={props.isCreatePost} 
            handleShowModal={handleModalVisible}
          />

          <View style={{height:props.height,backgroundColor:COLOR_THEMES.white}}>
            <ModalScreens screen={props.screen} data={props.data} />
          </View>
        </View>
      </Modal> */}
    </View>
  )
}

// TouchableOpacity with Button Wrapper
export function RegularButtonWithContainer(props) {
  return (
    <View style={props.contentContainer}>
      <TouchableOpacity style={props.buttonStyle}>
        <Text 
          onPress={() => alert('load window')} 
          style={props.labelStyle}>
            {props.label}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

// TouchableOpacity with image on left side
export function LinkButtonWithImage(props) {
  const navigation = useNavigation();
  const { screenName, containerStyle, contentStyle, imageSrc, imageStyle, labelStyle, labelText } = props;
  return (
    <TouchableOpacity onPress={() => navigation.navigate(screenName)}>
      <View style={containerStyle}>
        <View style={contentStyle}>
          <Image source={imageSrc} style={imageStyle} />
        </View>
        <View style={contentStyle}>
          <Text style={labelStyle}>{labelText}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  regButtonContainer: {
    elevation: 8,
    paddingVertical: 10,
    paddingHorizontal: 12
  }
});