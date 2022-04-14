// Screen1.js
import React from 'react'                                     
import { StyleSheet, Text, View, Image } from 'react-native'        

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ReactComponent as Reservation } from "../assets/1.svg";


function TestOnePageScreen1({ navigation }) {
  
    return (
      <View style={styles.container}>
          <View>
          </View>
      </View>
    );
  }

const Tab = createBottomTabNavigator();
// node_modules\react-native-vector-icons
const Screen1 = () => {                                                        
    return (       
        <Tab.Navigator>
            <Tab.Screen name="뉴스피드" component={TestOnePageScreen1}
            options={{
                tabBarIcon: ({color}) => (
                    <Image
                    style={{ width: 38, height: 38 }}
                    source={require('../assets/1.svg')}
                    />
                )
            }}
            />
            <Tab.Screen name="프로필" component={TestOnePageScreen1}
            options={{
                tabBarIcon: ({color}) => (
                    <Image
                    style={{ width: 38, height: 38 }}
                    inactiveIcon={require('../testImg/1_2.png')}
                    />
                )
            }}
            />
            <Tab.Screen name="게임" component={TestOnePageScreen1}
            options={{
                tabBarIcon: ({color}) => (
                    <Image
                    style={{ width: 38, height: 38 }}
                    source={require('../testImg/1_3.png')}
                    />
                )
            }}
            />
            <Tab.Screen name="알람" component={TestOnePageScreen1}
            options={{
                tabBarIcon: ({color}) => (
                    <Image
                    style={{ width: 38, height: 38 }}
                    source={require('../testImg/1_4.png')}
                    />
                )
            }}
            />
            <Tab.Screen name="메뉴" component={TestOnePageScreen1}
            options={{
                tabBarIcon: ({color}) => (
                    <Image
                    style={{ width: 38, height: 38 }}
                    source={require('../testImg/1_5.png')}
                    />
                )
            }}
            />

        </Tab.Navigator>                                    
    )}
    
export default Screen1

// ICON 
// npm install @react-navigation/bottom-tabs  
// npm install @react-navigation/native
// npm install react-native-safe-area-context
// npm install react-native-screens
// npm install react-native-vector-icons
const styles = StyleSheet.create({
    screen:{
        flex:1, 
        display:'flex',
        justifyContent:'center',                                  
        alignItems:'center',                                
        backgroundColor:'#00000025', 
    },
    text:{
        color:'#000',
        fontWeight:'700', 
        fontSize:30 
    }   
})