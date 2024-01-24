import { ClassScheduleNotificationTemplate, AnnouncementNotificationTemplate } from "./Template/Template";

var notifications = [
  {
    'type':'schedule',
    'title':'Monday Class',
    'schedule':'March 06,2023 | 10:00 AM',
    'postedBy':'Veronica Paige',
    'isButtonActive':true
  },
  {
    'type':'schedule',
    'title':'Tuesday Class',
    'schedule':'March 07,2023 | 10:00 AM',
    'postedBy':'Veronica Paige',
    'isButtonActive':false
  },
  {
    'type':'announcement',
    'title':'School Announcement',
    'schedule':'March 07,2023 | 10:00 AM',
    'content':'This is a test announce for demonstration purposes. Lorem ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    'type':'schedule',
    'title':'Wednesday Class',
    'schedule':'March 08,2023 | 10:00 AM',
    'postedBy':'Veronica Paige',
    'isButtonActive':false
  },
  {
    'type':'schedule',
    'title':'Thursday Class',
    'schedule':'March 09,2023 | 10:00 AM',
    'postedBy':'Judy Anne Santos',
    'isButtonActive':false
  },
  {
    'type':'schedule',
    'title':'Friday Class',
    'schedule':'March 10,2023 | 10:00 AM',
    'postedBy':'Noli de Castro',
    'isButtonActive':false
  },
  {
    'type':'announcement',
    'title':'School Announcement',
    'schedule':'March 06,2023 | 10:00 AM',
    'content':'This is a test announce for demonstration purposes. Lorem ipsum is simply dummy text of the printing and typesetting industry.'
  },
  {
    'type':'announcement',
    'title':'School Announcement',
    'schedule':'March 15,2023 | 10:00 AM',
    'content':'This is a test announce for demonstration purposes. Lorem ipsum is simply dummy text of the printing and typesetting industry.'
  }
]

export function All() {
  return (
    notifications.map((notification,index) => {
      if(notification.type == 'announcement') {
        return (
          <AnnouncementNotificationTemplate 
            key={index} 
            title={notification.title} 
            schedule={notification.schedule} 
            content={notification.content} 
          />
        )
      } else {
        return (
          <ClassScheduleNotificationTemplate 
            key={index} 
            title={notification.title} 
            schedule={notification.schedule} 
            postedBy={notification.postedBy}
            isButtonActive={notification.isButtonActive} 
          />
        )
      }
    })
  );
}

export function Reminders() {
  return (
    notifications.map((notification,index) => {
      if(notification.type != 'announcement'){
        return (
          <ClassScheduleNotificationTemplate 
            key={index} 
            title={notification.title} 
            schedule={notification.schedule} 
            postedBy={notification.postedBy}
            isButtonActive={notification.isButtonActive} 
          />
        )
      }
    })
  );
}

export function Announcements() {
  return (
    notifications.map((notification,index) => {
      if(notification.type == 'announcement'){
        return (
          <AnnouncementNotificationTemplate 
            key={index}
            title={notification.title} 
            schedule={notification.schedule} 
            content={notification.content} />
        )
      }
    })
  );
}