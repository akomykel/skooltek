import { Platform, StyleSheet, StatusBar } from "react-native";
import { COLOR_THEMES, SIZE } from "./Generic";


const global = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  headerText: {
    fontSize: SIZE.s30,
    alignSelf: "flex-start",
    justifyContent: 'center'
  },
  container: {
    flex: 1
  },
  contentCenter: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center'
  },
  centeredView: {
    flex: 1,
    alignItems: 'center'
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width:'100%',
    height:'100%',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  errorText: {
    fontSize: 15,
    fontFamily:'poppins_light_300',
    fontWeight:'bold',
    color: COLOR_THEMES.red,
  },
});

const theme = StyleSheet.create({
  dark: {
    backgroundColor: COLOR_THEMES.black
  },
  light: {
    backgroundColor: COLOR_THEMES.white
  },
  fontDark: {
    color: COLOR_THEMES.white,
  },
  fontLight: {
    color: COLOR_THEMES.black,
  }
});

const border = StyleSheet.create({
  all_radius_10_black_1: {
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    borderColor:COLOR_THEMES.black,
    borderWidth:1
  },
  all_radius_8_black_1: {
    borderTopLeftRadius:8,
    borderTopRightRadius:8,
    borderBottomLeftRadius:8,
    borderBottomRightRadius:8,
    borderColor:COLOR_THEMES.black,
    borderWidth:1
  },
  all_radius_5_1: {
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5,
    borderWidth:1
  }
});

const font = StyleSheet.create({
  coolvetica_reg_400: {
    sizes: {
      s30: {
        fontFamily:'coolvetica_reg_400',
        fontSize:30
      },
      s25: {
        fontFamily:'coolvetica_reg_400',
        fontSize:25
      },
      s20: {
        fontFamily:'coolvetica_reg_400',
        fontSize:20
      },
      s15: {
        fontFamily:'coolvetica_reg_400',
        fontSize:15
      }
    }
  },
  poppins_bold_800: {
    black_s30: {
      fontFamily:'poppins_bold_800',
      color:COLOR_THEMES.black,
      fontSize:30
    },
    sizes: {
      s30: {
        fontFamily:'poppins_bold_800',
        fontSize:30
      },
      s25: {
        fontFamily:'poppins_bold_800',
        fontSize:25
      },
      s20: {
        fontFamily:'poppins_bold_800',
        fontSize:20
      },
    },
    base: {
      fontFamily:'poppins_bold_800',
    }
  },
  poppins_med_500: {
    grayshade2_s11: {
      fontFamily:'poppins_med_500',
      color:COLOR_THEMES.gray_2,
      fontSize:11
    },
    whiteshade_s11: {
      fontFamily:'poppins_med_500',
      color:COLOR_THEMES.white,
      fontSize:11
    },
    sizes: {
      s20: {
        fontFamily:'poppins_med_500',
        fontSize:20
      },
      s18: {
        fontFamily:'poppins_med_500',
        fontSize:18
      },
      s18_bold: {
        fontFamily:'poppins_med_500',
        fontSize:18,
        fontWeight:'bold'
      },
      s16: {
        fontFamily:'poppins_med_500',
        fontSize:16
      },
      s16_bold: {
        fontFamily:'poppins_med_500',
        fontSize:16,
        fontWeight:'bold'
      },
      s15: {
        fontFamily:'poppins_med_500',
        fontSize:15
      },
      s15_bold: {
        fontFamily:'poppins_med_500',
        fontSize:15,
        fontWeight:'bold'
      },
      s14: {
        fontFamily:'poppins_med_500',
        fontSize:14
      },
      s14_bold: {
        fontFamily:'poppins_med_500',
        fontSize:14,
        fontWeight:'bold'
      },
      s13: {
        fontFamily:'poppins_med_500',
        fontSize:13
      },
      s13_bold: {
        fontFamily:'poppins_med_500',
        fontSize:13,
        fontWeight:'bold'
      },
      s12: {
        fontFamily:'poppins_med_500',
        fontSize:12
      },
      s12_bold: {
        fontFamily:'poppins_med_500',
        fontSize:12,
        fontWeight:'bold'
      },
      s11: {
        fontFamily:'poppins_med_500',
        fontSize:11
      },
      s10: {
        fontFamily:'poppins_med_500',
        fontSize:10
      }
    }
  },
  poppins_reg_400: {
    sizes: {
      s30: {
        fontFamily:'poppins_reg_400',
        fontSize:30
      },
      s15: {
        fontFamily:'poppins_reg_400',
        fontSize:15
      },
      s13: {
        fontFamily:'poppins_reg_400',
        fontSize:13
      },
      s13_bold: {
        fontFamily:'poppins_reg_400',
        fontSize:13,
        fontWeight:'bold'
      },
      s12: {
        fontFamily:'poppins_reg_400',
        fontSize:12
      },
      s11: {
        fontFamily:'poppins_reg_400',
        fontSize:11
      }
    },
    base: {
      fontFamily:'poppins_reg_400'
    }
  },
  poppins_light_300: {
    white_s18: {
      fontFamily:'poppins_light_300',
      color:COLOR_THEMES.white,
      fontSize:18
    },
    white_s15: {
      fontFamily:'poppins_light_300',
      color:COLOR_THEMES.white,
      fontSize:15
    },
    sizes: {
      s15: {
        fontFamily:'poppins_light_300',
        fontSize:15
      },
      s15_bold: {
        fontFamily:'poppins_light_300',
        fontSize:15,
        fontWeight:'bold'
      },
      s14: {
        fontFamily:'poppins_light_300',
        fontSize:14
      },
      s13: {
        fontFamily:'poppins_light_300',
        fontSize:13
      },
      s13_bold: {
        fontFamily:'poppins_light_300',
        fontSize:13,
        fontWeight:'bold'
      },
      s12: {
        fontFamily:'poppins_light_300',
        fontSize:12
      },
      s12_bold: {
        fontFamily:'poppins_light_300',
        fontSize:12,
        fontWeight:'bold'
      }
    },
    base: {
      fontFamily:'poppins_light_300'
    }
  }
});

const button = StyleSheet.create({
  default: {
    elevation:8,
    paddingVertical:10,
    paddingHorizontal:12,
    backgroundColor:COLOR_THEMES.red
  }
});

export { theme, global, border, font, button }