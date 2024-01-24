import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../../context/AuthContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather,FontAwesome,AntDesign } from '@expo/vector-icons';
import { COLOR_THEMES } from '../../assets/styles/Generic';
import SplashScreen from '../SplashScreen';
import FindSchool from '../../screens/FindSchool';
import SelectSchool from '../../screens/SelectSchool';
import Login from '../../screens/Login';
import Grade from '../../screens/Grade';
import Profile from '../../screens/Profile';
import ClassFeed from '../../screens/ClassFeed';
import Attendance from '../../screens/Attendance';
import ViewSelectedDateDetails from '../../screens/Teacher/ViewSelectedDateDetails';
import Notification from '../../screens/Notification';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {userInfo} = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>        
        {(userInfo.token) ? (
          <Stack.Screen name="Home" component={BottomTabNavigator} options={{headerShown:false}} />
        ) : (
          <>
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}} />
            <Stack.Screen name="FindSchool" component={FindSchool} options={{headerShown:false}} />
            <Stack.Screen name="SelectSchool" component={SelectSchool} options={{headerShown:false}} />
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const BottomTab = createBottomTabNavigator()
const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator screenOptions={({route}) => ({
      tabBarStyle:{backgroundColor:COLOR_THEMES.black},
      tabBarShowLabel: false,
      tabBarIcon: ({focused, color, size}) => {
        let iconColor;
        if(route.name === 'HomeScreen') {
          iconColor = focused ? COLOR_THEMES.red : COLOR_THEMES.white;
          return <Feather name={'home'} size={35} color={iconColor} />
        } else if(route.name === 'Grade') {
          iconColor = focused ? COLOR_THEMES.red : COLOR_THEMES.white;
          return <FontAwesome name={'star-o'} size={35} color={iconColor} />
        } else if(route.name === 'AttendanceScreen') {
          iconColor = focused ? COLOR_THEMES.red : COLOR_THEMES.white;
          return <Feather name={'calendar'} size={35} color={iconColor} />
        } else if(route.name === 'Profile') {
          iconColor = focused ? COLOR_THEMES.red : COLOR_THEMES.white;
          return <AntDesign name={'user'} size={35} color={iconColor} />
        }
      }
    })}>
      <BottomTab.Screen name="HomeScreen" component={HomeScreenStack} options={{headerShown:false}} />
      <BottomTab.Screen name="Grade" component={Grade} options={{headerShown:false}} />
      <BottomTab.Screen name="AttendanceScreen" component={CalendarAttendanceScreenStack} options={{headerShown:false}} />
      <BottomTab.Screen name="Profile" component={Profile} />
    </BottomTab.Navigator>
  )
}

const HomeStack = createStackNavigator();
function HomeScreenStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="ClassFeed" component={ClassFeed} options={{headerShown:false}} />
      <HomeStack.Screen name="Notification" component={Notification} options={{headerShown:false}} />
    </HomeStack.Navigator>
  );
}

const CalendarAttendanceStack = createStackNavigator();
function CalendarAttendanceScreenStack() {
  return (
    <CalendarAttendanceStack.Navigator>
      <CalendarAttendanceStack.Screen name="Attendance" component={Attendance} options={{headerShown:false}} />
      <CalendarAttendanceStack.Screen name="ViewSelectedDateDetails" component={ViewSelectedDateDetails} options={{headerShown:false}} />
    </CalendarAttendanceStack.Navigator>
  )
}

export default Navigation;