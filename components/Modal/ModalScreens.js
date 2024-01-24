// import { ShowStudentResponse } from "../../screens/Student/Modal/Respond"
// import AttendanceFilter from "../../screens/Teacher/Modal/AttendanceFilter"
// import CreateRoom from "../../screens/Teacher/Modal/CreateRoom"
// import FilterGrades from "../../screens/Teacher/Modal/FilterGrades"
// import UpdatePoints from "../../screens/Teacher/Modal/UpdatePoints"

export default function ModalScreens(props) {
  if(props.screen == 'FilterGrades') {
    alert('filtergrades');
    //return <FilterGrades />
  } else if(props.screen == 'CreateRoom') {
    alert('create room');
    // return <CreateRoom />
  } else if(props.screen == 'AttendanceFilter') {
    alert('attendancefilter');
    // return <AttendanceFilter />
  } else if(props.screen == 'UpdatePoints') {
    alert('updatepoints');
    // return <UpdatePoints data={props.data} />
  } else if(props.screen == 'ShowStudentResponse') {
    alert('showStudentResponse');
    // return <ShowStudentResponse data={props.data} />
  }
}
