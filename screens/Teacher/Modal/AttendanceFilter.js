import { useState } from "react";
import { View, Text, Dimensions } from "react-native";
import { font } from "../../../assets/styles/Style";
import DropDownPicker from "react-native-dropdown-picker";

export default function AttendanceFilter() {
  const dimensions = Dimensions.get("window");
  const contentWidth = dimensions.width-30;

  const [openDeptLevel, setOpenDeptLevel] = useState(false);
  const [valueDeptLevel, setValueDeptLevel] = useState(null);
  const [departmentLevel, setDepartmentLevel] = useState([
    {label:'2023-2024', value:'2023-2024'}
  ]);

  const [openSection, setOpenSection] = useState(false);
  const [valueSection, setValueSection] = useState(null);
  const [section, setSection] = useState([
    {label:'2023-2024', value:'2023-2024'}
  ]);

  const [openSubject, setOpenSubject] = useState(false);
  const [valueSubject, setValueSubject] = useState(null);
  const [subject, setSubject] = useState([
    {label:'2023-2024', value:'2023-2024'}
  ]);

  return (
    <View style={{width:contentWidth,alignSelf:'center'}}>
      <View style={{marginTop:15}}>
        <View>
          <Text style={font.poppins_reg_400.sizes.s13}>Department & Level:</Text>
        </View>
        <View>
          <DropDownPicker 
            placeholder="Select Department & Level" placeholderStyle={font.poppins_reg_400.sizes.s13}
            open={openDeptLevel} value={valueDeptLevel} items={departmentLevel}
            setOpen={setOpenDeptLevel} setValue={setValueDeptLevel} />
        </View>
      </View>

      <View style={{marginTop:15}}>
        <View>
          <Text style={font.poppins_reg_400.sizes.s13}>Section:</Text>
        </View>
        <View>
          <DropDownPicker 
            placeholder="Select Section" placeholderStyle={font.poppins_reg_400.sizes.s13}
            open={openSection} value={valueSection} items={section}
            setOpen={setOpenSection} setValue={setValueSection} />
        </View>
      </View>

      <View style={{marginTop:15}}>
        <View>
          <Text style={font.poppins_reg_400.sizes.s13}>Subject:</Text>
        </View>
        <View>
          <DropDownPicker 
            placeholder="Select Subject" placeholderStyle={font.poppins_reg_400.sizes.s13}
            open={openSubject} value={valueSubject} items={subject}
            setOpen={setOpenSubject} setValue={setValueSubject} />
        </View>
      </View>
    </View>
  )
}