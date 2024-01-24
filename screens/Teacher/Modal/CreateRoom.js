import React, { useState } from "react";
import { View, Text, Dimensions } from "react-native";
import { border, font } from "../../../assets/styles/Style";
import { TextInput } from "react-native-paper";
import { COLOR_THEMES } from "../../../assets/styles/Generic";
import { Feather } from '@expo/vector-icons';
import DropDownPicker from "react-native-dropdown-picker";
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function CreateRoom(props) {
  const dimensions = Dimensions.get("window");
  const contentWidth = dimensions.width-30;

  const [openSubject, setOpenSubject] = useState(false);
  const [valueSubject, setValueSubject] = useState(null);
  const [subject, setSubject] = useState([
    {label:'2023-2024', value:'2023-2024'}
  ]);

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisible(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };
  const handleConfirm = (date) => {
    hideDatePicker();
    setSelectedDate(date);
  };

  return (
    <View style={{width:contentWidth,alignSelf:'center'}}>
      <View style={{marginTop:15}}>
        <View>
          <Text style={font.poppins_reg_400.sizes.s15}>Subject:</Text>
        </View>
        <View>
          <DropDownPicker 
            placeholder="Select Subject" placeholderStyle={font.poppins_reg_400.sizes.s13}
            open={openSubject} value={valueSubject} items={subject}
            setOpen={setOpenSubject} setValue={setValueSubject} />
        </View>
      </View>

      <View style={{marginTop:15}}>
        <View>
          <Text style={font.poppins_reg_400.sizes.s15}>Room Title:</Text>
        </View>
        <View>
          <TextInput 
            placeholder={'Enter Room Title here..'} 
            placeholderTextColor={COLOR_THEMES.gray_2}
            style={[border.all_radius_8_black_1,{height:50,backgroundColor:COLOR_THEMES.white}]}
            underlineColor="transparent"
          />
        </View>
      </View>

      <View style={{marginTop:15}}>
        <View>
          <Text style={font.poppins_reg_400.sizes.s15}>Date:</Text>
        </View>
        <View>
          <TextInput 
            placeholder={'MM/DD/YYYY --:-- --'} 
            placeholderTextColor={COLOR_THEMES.gray_2}
            style={[border.all_radius_8_black_1,{height:50,backgroundColor:COLOR_THEMES.white}]}
            underlineColor="transparent"
            value={selectedDate ? selectedDate.toLocaleDateString() : ''}
            right={
              <TextInput.Icon
                icon={() => <Feather name="calendar" size={24} color="black" />}
                onPress={showDatePicker}
              />
            }
          />

          <DateTimePickerModal
            date={selectedDate}
            isVisible={datePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            style={{borderWidth:0}}
          />
        </View>
      </View>
    </View>
  );
}