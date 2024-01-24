import { useState } from "react";
import StudentClassFeed from "../Student/StudentClassFeed";
import TeacherClassFeed from "../Teacher/TeacherClassFeed";

export default function ClassFeed() {
  const userInfo = {
   'name':'Michael',
   'role':'Student',
   'roleId':2,
   'profilePic':require('../../assets/images/Avatar/man.jpg')
  }
  const [isTeacher] = useState((userInfo.roleId == 1) ? true : false);

  return (
   (isTeacher)
   ? <TeacherClassFeed name={userInfo.name} profilepic={userInfo.profilePic} role={userInfo.role} roleId={userInfo.roleId} isTeacher={isTeacher} />
   : <StudentClassFeed name={userInfo.name} profilepic={userInfo.profilePic} role={userInfo.role} roleId={userInfo.roleId} isTeacher={isTeacher} />
  )
}