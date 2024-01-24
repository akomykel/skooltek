import { useState } from "react";
import { View, Text, Dimensions } from "react-native";
import { font } from "../../../assets/styles/Style";
import DropDownPicker from "react-native-dropdown-picker";

export default function FilterGrades(props) {
  const dimensions = Dimensions.get("window");
  const contentWidth = dimensions.width-30;

  const [openSchoolYear, setOpenSchoolYear] = useState(false);
  const [valueSchoolYear, setValueSchoolYear] = useState(null);
  const [schoolYear, setSchoolYear] = useState([
    {label:'2023-2024', value:'2023-2024'}
  ])
  
  const [openDepartmentLevel, setOpenDepartmentLevel] = useState(false);
  const [valueDepartmentLevel, setValueDepartmentLevel] = useState(null);
  const [departmentLevel, setDepartmentLevel] = useState([
    {label:'2023-2024', value:'2023-2024'}
  ])

  const [openSubject, setOpenSubject] = useState(false);
  const [valueSubject, setValueSubject] = useState(null);
  const [subject, setSubject] = useState([
    {label:'2023-2024', value:'2023-2024'}
  ])

  const [openTermPeriod, setOpenTermPeriod] = useState(false);
  const [valueTermPeriod, setValueTermPeriod] = useState(null);
  const [termPeriod, setTermPeriod] = useState([
    {label:'2023-2024', value:'2023-2024'}
  ])

  const [openSection, setOpenSection] = useState(false);
  const [valueSection, setValueSection] = useState(null);
  const [section, setSection] = useState([
    {label:'2023-2024', value:'2023-2024'}
  ])

  return (
    <View style={{width:contentWidth,alignSelf:'center'}}>
      <View style={{marginTop:15}}>
        <View>
          <Text style={font.poppins_reg_400.sizes.s11}>School Year:</Text>
        </View>
        <View>
          <DropDownPicker 
            placeholder="Select School Year" placeholderStyle={font.poppins_reg_400.sizes.s11}
            open={openSchoolYear} value={valueSchoolYear} items={schoolYear}
            setOpen={setOpenSchoolYear} setValue={setValueSchoolYear} />
        </View>
      </View>

      <View style={{marginTop:15}}>
        <View>
          <Text style={font.poppins_reg_400.sizes.s11}>Department & Level:</Text>
        </View>
        <View>
          <DropDownPicker 
            placeholder="Select Department & Level" placeholderStyle={font.poppins_reg_400.sizes.s11}
            open={openDepartmentLevel} value={valueDepartmentLevel} items={departmentLevel}
            setOpen={setOpenDepartmentLevel} setValue={setValueDepartmentLevel} />
        </View>
      </View>

      <View style={{marginTop:15}}>
        <View>
          <Text style={font.poppins_reg_400.sizes.s11}>Subject:</Text>
        </View>
        <View>
          <DropDownPicker 
            placeholder="Select Subject" placeholderStyle={font.poppins_reg_400.sizes.s11}
            open={openSubject} value={valueSubject} items={subject}
            setOpen={setOpenSubject} setValue={setValueSubject} />
        </View>
      </View>

      <View style={{marginTop:15}}>
        <View>
          <Text style={font.poppins_reg_400.sizes.s11}>Term Period:</Text>
        </View>
        <View>
          <DropDownPicker 
            placeholder="Select Term Period" placeholderStyle={font.poppins_reg_400.sizes.s11}
            open={openTermPeriod} value={valueTermPeriod} items={termPeriod}
            setOpen={setOpenTermPeriod} setValue={setValueTermPeriod} />
        </View>
      </View>

      <View style={{marginTop:15}}>
        <View>
          <Text style={font.poppins_reg_400.sizes.s11}>Section:</Text>
        </View>
        <View>
          <DropDownPicker 
            placeholder="Select Section" placeholderStyle={font.poppins_reg_400.sizes.s11}
            open={openSection} value={valueSection} items={section}
            setOpen={setOpenSection} setValue={setValueSection} />
        </View>
      </View>
    </View>
  )
}