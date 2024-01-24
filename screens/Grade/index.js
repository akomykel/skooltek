import { useState } from "react";
import StudentGrade from "../Student/StudentGrade";
import ListGrades from "../Teacher/ListGrades";

export default function Grade() {
  const userInfo = {
    'name':   'Judy Anne Santos',
    'role':   'Teacher',
    'roleId': 1
  }
  const [isTeacher] = useState((userInfo.roleId == 1) ? true : false);

  return (
    (isTeacher)
    ? <ListGrades name={userInfo.name} />
    : <StudentGrade name={userInfo.name} />
  )
}