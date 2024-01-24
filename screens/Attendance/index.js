import { useState } from "react";
import StudentAttendance from "../Student/StudentAttendance";
import TeacherCalendar from "../Teacher/TeacherCalendar";

export default function Attendance() {
  const userInfo = {
    'name':   'Judy Anne',
    'role':   'Teacher',
    'roleId': 1
  }
  const [isTeacher] = useState((userInfo.roleId == 1) ? true : false);

  return (
    (isTeacher)
    ? <TeacherCalendar name={userInfo.name} />
    : <StudentAttendance name={userInfo.name} />
  )
}