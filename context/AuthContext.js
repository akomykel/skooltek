import axios from "axios";
import React, {createContext, useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "../config";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isInvalidUser, setIsInvalidUser] = useState(false);
  const [invalidUserMsg, setInvalidUserMsg] = useState(null);

  const register = (name, email, password) => {
    setIsLoading(true);

    axios.post(`${BASE_URL}/register`, {
        name, 
        email, 
        password
    })
    .then(res => {
        let userInfo = res.data;
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        console.log(userInfo);
    })
    .catch(e => {
      console.log(`register error ${e}`);
      setIsLoading(false);
    });
  };

  const login = (email, password) => {
    setIsLoading(true);

    axios.post(`${BASE_URL}/login`, {
      email, 
      password
    }).then(res => {
      let userInfo = res.data;
      setUserInfo(userInfo);
      AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
      setIsLoading(false);
    }).catch((error) => {
      if(error.response.status == 422) {
        setIsInvalidUser(true);
        setInvalidUserMsg(error.response.data.errors.email);
      }
       setIsLoading(false);
    });
  }

  return (
    <AuthContext.Provider 
      value={{
        isLoading,
        userInfo,
        register,
        login,
        isInvalidUser,
        invalidUserMsg
      }}>
        {children}
    </AuthContext.Provider>
  );
}
