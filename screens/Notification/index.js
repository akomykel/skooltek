import { useState } from 'react';
import TeacherNotification from '../Teacher/TeacherNotification';
import StudentNotification from '../Student/StudentNotification';

export default function Notification() {
  const userInfo = {
    'name':'Judy Anne',
    'role':'Teacher',
    'roleId':1,
    'profilePic':require('../../assets/images/Avatar/woman.png')
  }
  const [isTeacher] = useState((userInfo.roleId == 1) ? true : false);

  return (
    (isTeacher)
    ? <TeacherNotification name={userInfo.name} isTeacher={isTeacher} />
    : <StudentNotification name={userInfo.name} isTeacher={isTeacher} />
  );
}