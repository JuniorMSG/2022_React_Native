import * as React from 'react';
import { useState } from 'react';
import { Button, View, Text, StyleSheet, TextInput, SafeAreaView, Image, TouchableOpacity, TouchableHighlight, KeyboardAvoidingView  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import Screen1 from './screens/Screen1';
// import Screen2 from './screens/Screen2';
import { ScrollView } from 'react-native-gesture-handler';
import { opacity } from 'react-native-redash';

// ./assets/1.png
// ./assets/next.png
{/* <Image
style={styles.imgAll}
source={require('./assets/1.png')}
/> */}
console.disableYellowBox = true;

const timer = {"q1_1time":0, "q1_1err":0 }

export const imagePath = {
  menu1_game: require("./assets/menu_1_game.png"),
  menu2_alum: require("./assets/menu_2_alum.png"),
  menu3: require("./assets/menu_3_menu.png"),
  watch: require("./assets/menu_4_watch.png"),
  home1: require("./assets/home_3.png")
};

function retIcon(status){
  if (status == 'game'){
    icon = "menu1_game";
  }else if(status == 'alum'){
    icon = "menu2_alum";
  } else if(status == 'menu'){
    icon = "menu3";
  } else if(status == 'watch'){
    icon = "watch";
  } else {
    icon = "home1";
  }
  return icon
}


function TouchableOpacityView(props){

  console.log(props)
  const status = props.routeval.params.status;
  let touchableViewStatus = ""
  touchableViewStatus = props.routeval.params.touchableViewStatus;
  if (!!!touchableViewStatus){
    touchableViewStatus = false
  }

  const next_page = props.next_page
  const top_px = props.top
  console.log('status : ', status)
  console.log('touchableViewStatus : ', touchableViewStatus)
  console.log('next_page : ', next_page)
  console.log('top_px : ', top_px)

  
  if (touchableViewStatus){
    return (
      <TouchableOpacity onPress={() => props.navigation.navigate('homeTrue', {page:next_page})} 
      style={{width:270,height:120, top:top_px, left:'5%', zIndex:99, position:'absolute'}}/>
      // style={{width:270,height:120, backgroundColor:"#ddd", top:top_px, left:'5%', zIndex:99, position:'absolute'}}/>
  )}
  else{
    return (<View></View>)
  }

}


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.imgAll}
          source={require('./assets/1.png')}
          />
      </View>
      <View style={styles.footer}>
      <TouchableOpacity style={styles.instaButton}
                        onPress={() => navigation.navigate('mainOne', {status:''})}>
            <Text style={styles.buttonText}>확인하기</Text>
      </TouchableOpacity>

      </View>
    </View>
  );
}


function mainOne({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.imgAll}
          source={require('./assets/2.png')}
          />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.instaButton}
                          onPress={() => navigation.navigate('mainTwo', {status:''})}>
              <Text style={styles.buttonText}>확인하기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function mainTwo({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.imgAll}
          source={require('./assets/3.png')}
          />
      </View>
      <View style={styles.footer}>
      <TouchableOpacity style={styles.instaButton}
                        onPress={() => navigation.navigate('mainThree', {status:''})}>
            <Text style={styles.buttonText}>확인하기</Text>
      </TouchableOpacity>


      </View>
    </View>
  );
}

function mainThree({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.imgAll}
          source={require('./assets/4.png')}
          />
      </View>
      <View style={styles.footer}>

      <TouchableOpacity style={styles.instaButton}
                        onPress={() => navigation.navigate('q1_Start', {status:''})}>
            <Text style={styles.buttonText}>확인하기</Text>
      </TouchableOpacity>

      </View>
    </View>
  );
}
function BottomButtonView(){
  return (
    <View style={{bottom:0, width:400, height:800, zIndex:3, margin:20}}/>
  );
}


const timerQ1_1 = {"start":0, "end":0, 'cnt':0 }
const timerQ1_2 = {"start":0, "end":0, 'cnt':0 }
const timerQ1_3 = {"start":0, "end":0, 'cnt':0 }
const timerQ1_4 = {"start":0, "end":0, 'cnt':0 }
const timerQ2_1 = {"start":0, "end":0, 'cnt':0 }
const timerQ2_2 = {"start":0, "end":0, 'cnt':0 }
const timerQ2_3 = {"start":0, "end":0, 'cnt':0 }
const timerQ2_4 = {"start":0, "end":0, 'cnt':0 }
const timerQ3_1 = {"start":0, "end":0, 'cnt':0 }
const timerQ3_2 = {"start":0, "end":0, 'cnt':0 }
const timerQ3_3 = {"start":0, "end":0, 'cnt':0 }
const timerQ3_4 = {"start":0, "end":0, 'cnt':0 }
const timerQ4_1 = {"start":0, "end":0, 'cnt':0 }
const timerQ4_2 = {"start":0, "end":0, 'cnt':0 }
const timerQ4_3 = {"start":0, "end":0, 'cnt':0 }
const timerQ4_4 = {"start":0, "end":0, 'cnt':0 }
const timerQ5_1 = {"start":0, "end":0, 'cnt':0 }
const timerQ5_2 = {"start":0, "end":0, 'cnt':0 }
const timerQ5_3 = {"start":0, "end":0, 'cnt':0 }
const timerQ5_4 = {"start":0, "end":0, 'cnt':0 }
const q1Text = {"inpText":"", "jumsu":""}
const q2Text = {"inpText":"", "jumsu":""}
const q3Text = {"inpText":"", "jumsu":""}
const q4Text = {"inpText":"", "jumsu":""}
const q5Text = {"inpText":"", "jumsu":""}


function homeTrue({route,  navigation}) {
  console.log("homeTrue::::", route)
  page = route.params.page
  switch (page){
    case 'q1_2One':
      timerQ1_1['end'] = new Date().getTime()
      break;
      
    case 'q1_3One':
      timerQ1_2['end'] = new Date().getTime()
      break;
      
    case 'q1_4One':
      timerQ1_3['end'] = new Date().getTime()
      break;
      
    case 'q2_1One':
      timerQ1_4['end'] = new Date().getTime()
      break;
      
    case 'q2_2One':
      timerQ2_1['end'] = new Date().getTime()
      break;
      
    case 'q2_3One':
      timerQ2_2['end'] = new Date().getTime()
      break;
      
    case 'q2_4One':
      timerQ2_3['end'] = new Date().getTime()
      break;
      
    case 'q3_1One':
      timerQ2_4['end'] = new Date().getTime()
      break;
      
    case 'q3_2One':
      timerQ3_1['end'] = new Date().getTime()
      break;
      
    case 'q3_3One':
      timerQ3_2['end'] = new Date().getTime()
      break;
      
    case 'q3_4One':
      timerQ3_3['end'] = new Date().getTime()
      break;
      
    case 'q4_1One':
      timerQ3_4['end'] = new Date().getTime()
      break;
      
    case 'q4_2One':
      timerQ4_1['end'] = new Date().getTime()
      break;
      
    case 'q4_3One':
      timerQ4_2['end'] = new Date().getTime()
      break;
      
    case 'q4_4One':
      timerQ4_3['end'] = new Date().getTime()
      break;
      
    case 'q5_1One':
      timerQ4_4['end'] = new Date().getTime()
      break;
      
    case 'q5_2One':
      timerQ5_1['end'] = new Date().getTime()
      break;
      
    case 'q5_3One':
      timerQ5_2['end'] = new Date().getTime()
      break;
      
    case 'q5_4One':
      timerQ5_3['end'] = new Date().getTime()
      break;
      
    case 'last_page':
      timerQ5_4['end'] = new Date().getTime()
      break;
  }



  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.imgAll}
          source={require('./assets/home_ok.png')}
          />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate(page)}>
      <BottomButtonView/>
      </TouchableOpacity>
    </View>
  );
}
function homeFalse({route,  navigation }) {
  
  page = route.params.page
  switch (page){
    case "q1_1One":
      timerQ1_1['cnt'] += 1
      break;
    case "q1_2One":
      timerQ1_2['cnt'] += 1
      break;
    case "q1_3One":
      timerQ1_3['cnt'] += 1
      break;
    case "q1_4One":
      timerQ1_4['cnt'] += 1
      break;
    case "q2_1One":
      timerQ2_1['cnt'] += 1
      break;
    case "q2_2One":
      timerQ2_2['cnt'] += 1
      break;
    
    case "q2_3One":
      timerQ2_3['cnt'] += 1
      break;
    case "q2_4One":
      timerQ2_4['cnt'] += 1
      break;
    case "q3_1One":
      timerQ3_1['cnt'] += 1
      break;
    case "q3_2One":
      timerQ3_2['cnt'] += 1
      break;
    case "q3_3One":
      timerQ3_3['cnt'] += 1
      break;
    case "q3_4One":
      timerQ3_4['cnt'] += 1
      break;
    
    case "q4_1One":
      timerQ4_1['cnt'] += 1
      break;
    case "q4_2One":
      timerQ4_2['cnt'] += 1
      break;
    case "q4_3One":
      timerQ4_3['cnt'] += 1
      break;
    case "q4_4One":
      timerQ4_4['cnt'] += 1
      break;
    case "q5_1One":
      timerQ5_1['cnt'] += 1
      break;
    case "q5_2One":
      timerQ5_2['cnt'] += 1
      break;
    case "q5_3One":
      timerQ5_3['cnt'] += 1
      break;
    case "q5_4One":
      timerQ5_4['cnt'] += 1
      break;
  }


  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.imgAll}
          source={require('./assets/home_false.png')}
          />
      </View>
      <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigation.navigate(route.params.page)}>
      <BottomButtonView/>
      </TouchableOpacity>
      </View>
    </View>
  );
}


function q1_Start({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.imgAll}
          source={require('./assets/q1_Start.png')}
          />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('q1_1One')}>
        <BottomButtonView/>
      </TouchableOpacity>
    </View>
  );
}


function q1_1One({ navigation }) {
  console.log("q1_1One")
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.imgAll2}
          source={require('./assets/q1_1One.png')}
          />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('q1_1Two', {status:''})}>
      <BottomButtonView/>
      </TouchableOpacity>

    </View>
  );
}

function timerfn(timeStart){
  if (timeStart['start'] == 0){
    timeStart['start'] = new Date().getTime()
  }
}



function q1_1Two({route, navigation }) {
  timerfn(timerQ1_1)

  let icon = ""
  icon = retIcon(route.params.status)
  return (
    <View style={styles.mainviewStyle}>
        <ScrollView style = {styles.scrollViewStyle}>
          <Image style={styles.imgAll2} source={imagePath[icon]} />
        </ScrollView>
      
        <View style={styles.footer_scroll}>
          <Image style={styles.imgAll2} source={require('./assets/homebar.png')}/>
          {/* <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:20}]} onPress={() => navigation.navigate('homeFalse', {page:"q1_1One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:95}]} onPress={() => navigation.navigate('homeTrue', {page:"q1_2One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:175}]} onPress={() => navigation.navigate('homeFalse', {page:"q1_1One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:250}]} onPress={() => navigation.navigate('homeFalse', {page:"q1_1One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:330}]} onPress={() => navigation.navigate('homeFalse', {page:"q1_1One"})}/> 
           */}
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'5%' }]} onPress={() => navigation.navigate('homeFalse', {page:"q1_1One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'23%'}]} onPress={() => navigation.navigate('homeTrue', {page:"q1_2One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'43%'}]} onPress={() => navigation.navigate('homeFalse', {page:"q1_1One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'60%'}]} onPress={() => navigation.navigate('homeFalse', {page:"q1_1One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'80%'}]} onPress={() => navigation.navigate('homeFalse', {page:"q1_1One"})}/> 
        </View>

    </View>
  );
}



function q1_2One({route, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.imgAll}
          source={require('./assets/q2_1.png')}
          />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('q1_2Two', {status:''})}>
      <BottomButtonView/>
      </TouchableOpacity>

    </View>
  );
}

function q1_2Two({route,  navigation }) {
  
  timerfn(timerQ1_2)
  return (
    <View style={styles.mainviewStyle}>
        <ScrollView style = {styles.scrollViewStyle}>
              <Image style={styles.imgAll2} source={require('./assets/home_3.png')}/>
        </ScrollView>
      
        <View style={styles.footer_scroll}>
          <Image style={styles.imgAll2} source={require('./assets/homebar.png')}/>
        </View>

        <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'5%' }]} onPress={() => navigation.navigate('homeFalse', {page:"q1_2One"})}/> 
        <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'23%'}]} onPress={() => navigation.navigate('homeFalse', {page:"q1_2One"})}/> 
        <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'43%'}]} onPress={() => navigation.navigate('homeFalse', {page:"q1_2One"})}/> 
        <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'60%'}]} onPress={() => navigation.navigate('homeFalse', {page:"q1_2One"})}/> 
        <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'80%'}]} onPress={() => navigation.navigate('homeTrue', {page:"q1_3One"})}/> 


    </View>

  );
}



function q1_3One({route, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.imgAll}
          source={require('./assets/q1_3One.png')}
          />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('q1_3Two', {status:''})}>
        <BottomButtonView/>
      </TouchableOpacity>
    </View>
  );
}

function q1_3Two({route, navigation }) {
  
  timerfn(timerQ1_3)
  let icon = ""
  icon = retIcon(route.params.status)
  return (
    <View style={styles.mainviewStyle}>
        <ScrollView style = {styles.scrollViewStyle}>
          <TouchableOpacityView routeval={route} navigation={navigation} top={"35%"} next_page={'q1_4One'}/>
          <Image style={styles.imgAll2} source={imagePath[icon]} />
        </ScrollView>

        <View style={styles.footer_scroll}>
          <Image style={styles.imgAll2} source={require('./assets/homebar.png')}/>
        </View>
        <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'5%' }]} onPress={() => navigation.navigate('q1_3Two', {status:'', touchableViewStatus:false})}/>
        <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'23%'}]} onPress={() => navigation.navigate('q1_3Two', {status:'', touchableViewStatus:false})}/>
        <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'43%'}]} onPress={() => navigation.navigate('q1_3Two', {status:'game', touchableViewStatus:false})}/>
        <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'60%'}]} onPress={() => navigation.navigate('q1_3Two', {status:'alum', touchableViewStatus:false})}/>
        <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'80%'}]} onPress={() => navigation.navigate('q1_3Two', {status:'menu', touchableViewStatus:true})}/>
    </View>

  );
}

function q1_4One({ navigation }) {
  console.log("q1_4One")
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.imgAll}
          source={require('./assets/q1_4One.png')}
          />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('q1_4Two', {status:''})}>
        <BottomButtonView/>
      </TouchableOpacity>
    </View>
  );
}


function q1_4Two({route, navigation }) {
  
  timerfn(timerQ1_4)
  
  let icon = ""
  icon = retIcon(route.params.status)

  return (
    <View style={styles.mainviewStyle}>
        <ScrollView style = {styles.scrollViewStyle}>
          <TouchableOpacityView routeval={route} navigation={navigation} top={"28%"} next_page={'q1_end'}/>
          <Image style={styles.imgAll2} source={imagePath[icon]} />
        </ScrollView>
      
        
        <View style={styles.footer_scroll}>
          <Image style={styles.imgAll2} source={require('./assets/homebar.png')}/>
        
      
        <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'5%' }]} onPress={() => navigation.navigate('q1_4Two', {status:'', touchableViewStatus:false})}/>
        <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'23%'}]} onPress={() => navigation.navigate('q1_4Two', {status:'', touchableViewStatus:false})}/>
        <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'43%'}]} onPress={() => navigation.navigate('q1_4Two',  {status:'game', touchableViewStatus:false})}/>
        <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'60%'}]} onPress={() => navigation.navigate('q1_4Two', {status:'alum', touchableViewStatus:false})}/>
        <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'80%'}]} onPress={() => navigation.navigate('q1_4Two', {status:'menu', touchableViewStatus:true})}/>

        </View>
    </View>
  );
}




function q1_end({ navigation }) {
  timerQ1_4['end'] = new Date().getTime()
  console.log("q1_end")
  // mainviewStyle: {
  //   flex: 1,
  //   width:'100%',
  //   alignContent: 'center',
  //   justifyContent: "center", 
  // },

  return (
    <View  style={{width:"100%", left:0, right:0, flexDirection:"row"}}>
        <KeyboardAvoidingView {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}style={[styles.container]}>

        <ScrollView style={{paddingHorizontal: 20}}>
          <Image style={styles.imgAll} source={require('./assets/q1_end.png')}/>
          
          <Text style={{fontSize:20, fontWeight:'bold', margin:20}}>점수 10점만점</Text>
          <TextInput 
                    onChange={(event) => {
                      const {eventCount, target, text} = event.nativeEvent;
                      q1Text['jumsu'] = text
                    }
                  }
                  style={styles.sendTextLst}
                  placeholder="10점만점"
                  backgroundColor='#DDDDDD'
          />
          <Text style={{fontSize:20, fontWeight:'bold', margin:20}}>이유 및 의견</Text>



        <TextInput 
                    onChange={(event) => {
                      const {eventCount, target, text} = event.nativeEvent;
                      q1Text['inpText'] = text
                    }
                  }
                  style={styles.sendTextLst2}
                  placeholder="만족도에 대한 이유 및 장/단점을 남겨주세요"
                  backgroundColor='#DDDDDD'
                  multiline={true} 
          />
        <TouchableOpacity style={styles.instaButton2}
                        onPress={() => navigation.navigate('q2_1One', {status:''})}>
            <Text style={styles.buttonText}>제출하기</Text>
        </TouchableOpacity>
      
      </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}


function q2_end({ navigation }) {
  timerQ2_4['end'] = new Date().getTime()
  console.log("q2_end")
  return (
    <View  style={{width:"100%", left:0, right:0, flexDirection:"row"}}>
        <KeyboardAvoidingView {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}style={styles.container}>

        <ScrollView style={{paddingHorizontal: 20}}>
          <Image style={styles.imgAll} source={require('./assets/q2_end.png')}/>
          
          <Text style={{fontSize:20, fontWeight:'bold', margin:20}}>점수 10점만점</Text>
          <TextInput 
                    onChange={(event) => {
                      const {eventCount, target, text} = event.nativeEvent;
                      q2Text['jumsu'] = text
                    }
                  }
                  style={styles.sendTextLst}
                  placeholder="10점만점"
                  backgroundColor='#DDDDDD'
          />
          <Text style={{fontSize:20, fontWeight:'bold', margin:20}}>이유 및 의견</Text>



        <TextInput 
                    onChange={(event) => {
                      const {eventCount, target, text} = event.nativeEvent;
                      q2Text['inpText'] = text
                    }
                  }
                  style={styles.sendTextLst2}
                  placeholder="만족도에 대한 이유 및 장/단점을 남겨주세요"
                  backgroundColor='#DDDDDD'
                  multiline={true} 
          />
        <TouchableOpacity style={styles.instaButton2}
                        onPress={() => navigation.navigate('q3_Start', {status:''})}>
            <Text style={styles.buttonText}>제출하기</Text>
        </TouchableOpacity>
      
      </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}


function q3_end({ navigation }) {
  timerQ3_4['end'] = new Date().getTime()
  console.log("q3_end")
  return (
    <View  style={{width:"100%", left:0, right:0, flexDirection:"row"}}>
        <KeyboardAvoidingView {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}style={styles.container}>

        <ScrollView style={{paddingHorizontal: 20,}}>
          <Image style={styles.imgAll} source={require('./assets/q3_end.png')}/>
          
          <Text style={{fontSize:20, fontWeight:'bold', margin:20}}>점수 10점만점</Text>
          <TextInput 
                    onChange={(event) => {
                      const {eventCount, target, text} = event.nativeEvent;
                      q3Text['jumsu'] = text
                    }
                  }
                  style={styles.sendTextLst}
                  placeholder="10점만점"
                  backgroundColor='#DDDDDD'
          />
          <Text style={{fontSize:20, fontWeight:'bold', margin:20}}>이유 및 의견</Text>



        <TextInput 
                    onChange={(event) => {
                      const {eventCount, target, text} = event.nativeEvent;
                      q3Text['inpText'] = text
                    }
                  }
                  style={styles.sendTextLst2}
                  placeholder="만족도에 대한 이유 및 장/단점을 남겨주세요"
                  backgroundColor='#DDDDDD'
                  multiline={true} 
          />
        <TouchableOpacity style={styles.instaButton2}
                        onPress={() => navigation.navigate('q4_Start', {status:''})}>
            <Text style={styles.buttonText}>제출하기</Text>
        </TouchableOpacity>
      
      </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

function q4_end({ navigation }) {
  timerQ4_4['end'] = new Date().getTime()
  console.log("q4_end")
  return (
    <View  style={{width:"100%", left:0, right:0, flexDirection:"row"}}>
        <KeyboardAvoidingView {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}style={styles.container}>

        <ScrollView style={{paddingHorizontal: 20,}}>
          <Image style={styles.imgAll} source={require('./assets/q4_end.png')}/>
          
          <Text style={{fontSize:20, fontWeight:'bold', margin:20}}>점수 10점만점</Text>
          <TextInput 
                    onChange={(event) => {
                      const {eventCount, target, text} = event.nativeEvent;
                      q4Text['jumsu'] = text
                    }
                  }
                  style={styles.sendTextLst}
                  placeholder="10점만점"
                  backgroundColor='#DDDDDD'
          />
          <Text style={{fontSize:20, fontWeight:'bold', margin:20}}>이유 및 의견</Text>



        <TextInput 
                    onChange={(event) => {
                      const {eventCount, target, text} = event.nativeEvent;
                      q4Text['inpText'] = text
                    }
                  }
                  style={styles.sendTextLst2}
                  placeholder="만족도에 대한 이유 및 장/단점을 남겨주세요"
                  backgroundColor='#DDDDDD'
                  multiline={true} 
          />
        <TouchableOpacity style={styles.instaButton2}
                        onPress={() => navigation.navigate('q5_Start', {status:''})}>
                    <Text style={styles.buttonText}>제출하기</Text>
        </TouchableOpacity>
      
      </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}


function q5_end({ navigation }) {
  timerQ5_4['end'] = new Date().getTime()
  console.log("q5_end")
  return (
    <View  style={{width:"100%", left:0, right:0, flexDirection:"row"}}>
        <KeyboardAvoidingView {...(Platform.OS === 'ios' ? { behavior: 'padding' } : {})}style={styles.container}>

        <ScrollView style={{paddingHorizontal: 20,}}>
          <Image style={styles.imgAll} source={require('./assets/q5_end.png')}/>
          
          <Text style={{fontSize:20, fontWeight:'bold', margin:20}}>점수 10점만점</Text>
          <TextInput 
                    onChange={(event) => {
                      const {eventCount, target, text} = event.nativeEvent;
                      q5Text['jumsu'] = text
                    }
                  }
                  style={styles.sendTextLst}
                  placeholder="10점만점"
                  backgroundColor='#DDDDDD'
          />
          <Text style={{fontSize:20, fontWeight:'bold', margin:20}}>이유 및 의견</Text>



        <TextInput 
                    onChange={(event) => {
                      const {eventCount, target, text} = event.nativeEvent;
                      q5Text['inpText'] = text
                    }
                  }
                  style={styles.sendTextLst2}
                  placeholder="만족도에 대한 이유 및 장/단점을 남겨주세요"
                  backgroundColor='#DDDDDD'
                  multiline={true} 
          />
        <TouchableOpacity style={styles.instaButton2}
                        onPress={() => navigation.navigate('last_page', {status:''})}>
                    <Text style={styles.buttonText}>제출하기</Text>
        </TouchableOpacity>
      
      </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}


function q2_1One({ navigation }) {
  console.log("q2_1One")
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.imgAll}
          source={require('./assets/q2_1One.png')}
          />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('q2_1Two')}>
      <BottomButtonView/>
      </TouchableOpacity>
    </View>
  );
}

function q2_1Two({ navigation }) {
  
  timerfn(timerQ2_1)
  console.log("q2_1Two")
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.imgAll}
          source={require('./assets/q2_1Two.png')}
          />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('q2_1Three')}>
      <BottomButtonView/>
      </TouchableOpacity>
    </View>
  );
}


function q2_1Three({route, navigation }) {
  console.log("q2_1Three")
  return (
    <View style={styles.mainviewStyle}>
        
        <ScrollView style = {styles.scrollViewStyle}>
          <Image style={styles.imgAll2} source={require('./assets/home_3.png')}/> 
        </ScrollView>
      
        
        <View style={{
          position: 'absolute',
          flex:0.1,
          left: 0,
          right: 0,
          bottom: 0,
          top:0,
          flexDirection:'row',
          height:100,
          alignItems:'center',


        }}>
          <Image style={{    width: '99%',
    top: 10,
    bottom:300,
    left: 0,
    right: 0,}} source={require('./assets/topbar1.png')}/>
        
        

          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'5%' }]} onPress={() => navigation.navigate('homeFalse', {page:"q2_1Two"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'23%'}]} onPress={() => navigation.navigate('homeTrue', {page:"q2_2One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'43%'}]} onPress={() => navigation.navigate('homeFalse', {page:"q2_1Two"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'60%'}]} onPress={() => navigation.navigate('homeFalse', {page:"q2_1Two"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'80%'}]} onPress={() => navigation.navigate('homeFalse', {page:"q2_1Two"})}/> 
        </View>
    </View>
  );
}

function q2_2One({ navigation }) {
  console.log("q2_2One")
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.imgAll}
          source={require('./assets/q2_2One.png')}
          />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('q2_2Two')}>
      <BottomButtonView/>
      </TouchableOpacity>
    </View>
  );
}


function q2_2Two({route, navigation }) {
  timerfn(timerQ2_2)
  console.log("q2_2Two")
  return (
    <View style={styles.mainviewStyle}>
        <ScrollView style = {styles.scrollViewStyle}>
              <Image style={styles.imgAll2} source={require('./assets/home_3.png')}/>
        </ScrollView>
      
        
        <View style={{
          position: 'absolute',
          flex:0.1,
          left: 0,
          right: 0,
          bottom: 0,
          top:0,
          flexDirection:'row',
          height:100,
          alignItems:'center',


        }}>
          <Image style={{    width: '99%',
    top: 10,
    bottom:300,
    left: 0,
    right: 0,}} source={require('./assets/topbar1.png')}/>
        
        

          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'5%' }]} onPress={() => navigation.navigate('homeFalse', {page:"q2_2One"})}/> 
        <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn,   {left:'23%'}]} onPress={() => navigation.navigate('homeFalse', {page:"q2_2One"})}/> 
        <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn,   {left:'43%'}]} onPress={() => navigation.navigate('homeFalse', {page:"q2_2One"})}/> 
        <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn,   {left:'60%'}]} onPress={() => navigation.navigate('homeFalse', {page:"q2_2One"})}/> 
        <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn,   {left:'80%'}]} onPress={() => navigation.navigate('homeTrue', {page:"q2_3One"})}/> 
        </View>
    </View>
  );
}

function q2_3One({ navigation }) {

  console.log("q2_3One")
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.imgAll}
          source={require('./assets/q2_3One.png')}
          />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('q2_3Three', {page:"q2_3Three", status:1})}>
      <BottomButtonView/>
      </TouchableOpacity>
    </View>
  );
}



function q2_3Three({route, navigation }) {
  
  timerfn(timerQ2_3)
  let icon = ""
  icon = retIcon(route.params.status)
  return (
    <View style={styles.mainviewStyle}>
        <ScrollView style = {styles.scrollViewStyle}>
        <TouchableOpacityView routeval={route} navigation={navigation} top={"35%"} next_page={'q2_4One'}/>
          <Image style={styles.imgAll2} source={imagePath[icon]} />
        </ScrollView>
      
        
        <View style={{
          position: 'absolute',
          flex:0.1,
          left: 0,
          right: 0,
          bottom: 0,
          top:0,
          flexDirection:'row',
          height:100,
          alignItems:'center',


        }}>
          <Image style={{    width: '99%',
    top: 0,
    bottom:300,
    left: 0,
    right: 0,}} source={require('./assets/topbar1.png')}/>
        


        <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:20}]} onPress={() => navigation.navigate('q2_3Three', {page:"q2_3Three", status:'', touchableViewStatus:false})}/>
        <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:95}]} onPress={() => navigation.navigate('q2_3Three', {page:"q2_3Three", status:'', touchableViewStatus:false})}/>
        <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:175}]} onPress={() => navigation.navigate('q2_3Three', {page:"q2_3Three", status:'game', touchableViewStatus:false})}/>
        <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:250}]} onPress={() => navigation.navigate('q2_3Three', {page:"q2_3Three", status:'alum', touchableViewStatus:false})}/>
        <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:330}]} onPress={() => navigation.navigate('q2_3Three', {page:"q2_3Three", status:'menu', touchableViewStatus:true})}/>
        </View>
    </View>
  );
}





function q2_4One({ navigation }) {

  console.log("q2_4One")
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.imgAll}
          source={require('./assets/q2_4One.png')}
          />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('q2_4Two', {page:"q2_4Two", status:1})}>
      <BottomButtonView/>
      </TouchableOpacity>
      
      
    </View>
  );
}


function q2_4Two({route, navigation }) {

  timerfn(timerQ2_4)
  let icon = ""
  icon = retIcon(route.params.status)
  return (
    <View style={styles.mainviewStyle}>
        <ScrollView style = {styles.scrollViewStyle}>
        <TouchableOpacityView routeval={route} navigation={navigation}  top={"28%"} next_page={'q2_end'}/>
          <Image style={styles.imgAll2} source={imagePath[icon]} />
        </ScrollView>
      
        
        <View style={{
          position: 'absolute',
          flex:0.1,
          left: 0,
          right: 0,
          bottom: 0,
          top:0,
          flexDirection:'row',
          height:100,
          alignItems:'center',


        }}>
          <Image style={{    width: '99%',
    top: 0,
    bottom:300,
    left: 0,
    right: 0,}} source={require('./assets/topbar1.png')}/>
        
        <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:20}]} onPress={() => navigation.navigate('q2_4Two', {page:"q2_4Two", status:'', touchableViewStatus:false})}/>
        <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:95}]} onPress={() => navigation.navigate('q2_4Two', {page:"q2_4Two", status:'', touchableViewStatus:false})}/>
        <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:175}]} onPress={() => navigation.navigate('q2_4Two', {page:"q2_4Two", status:'game', touchableViewStatus:false})}/>
        <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:250}]} onPress={() => navigation.navigate('q2_4Two', {page:"q2_4Two", status:'alum', touchableViewStatus:false})}/>
        <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:330}]} onPress={() => navigation.navigate('q2_4Two', {page:"q2_4Two", status:'menu', touchableViewStatus:true})}/>
        </View>
    </View>
  );
}





function q3_Start({ navigation }) {
  console.log("q3_Start")
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.imgAll}
          source={require('./assets/q3_Start.png')}
          />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('q3_1One')}>
      <BottomButtonView/>
      </TouchableOpacity>
    </View>
  );
}



function q3_1One({ navigation }) {
  console.log("q3_1One")
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.imgAll}
          source={require('./assets/q3_1One.png')}
          />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('q3_1Two')}>
      <BottomButtonView/>
      </TouchableOpacity>
    </View>
  );
}


function q3_1Two({route, navigation }) {
  timerfn(timerQ3_1)
  console.log("q3_1Two")
  return (
    <View style={styles.mainviewStyle}>
        
        <ScrollView style = {styles.scrollViewStyle}>
          <Image style={styles.imgAll2} source={require('./assets/home_3.png')}/>
        </ScrollView>
      
                
        <View style={styles.footer_scroll}>
          <Image style={styles.imgAll2} source={require('./assets/bottombar6.png')}/>
        
        

          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:"5%",  width:50}]} onPress={() => navigation.navigate('homeFalse', {page:"q3_1One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:"20%", width:50}]} onPress={() => navigation.navigate('homeFalse', {page:"q3_1One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:"35%", width:50}]} onPress={() => navigation.navigate('homeTrue', {page:"q3_2One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:"51%", width:50}]} onPress={() => navigation.navigate('homeFalse', {page:"q3_1One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:"67%", width:50}]} onPress={() => navigation.navigate('homeFalse', {page:"q3_1One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:"84%", width:50}]} onPress={() => navigation.navigate('homeFalse', {page:"q3_1One"})}/> 
        </View>

    </View>
  );
}



function q3_2One({ navigation }) {

  console.log("q3_2One")
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.imgAll}
          source={require('./assets/q3_2One.png')}
          />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('q3_2Two')}>
      <BottomButtonView/>
      </TouchableOpacity>
    </View>
  );
}


function q3_2Two({route, navigation }) {
  timerfn(timerQ3_2)
  console.log("q2_2Two")
  return (
    <View style={styles.mainviewStyle}>
        <ScrollView style = {styles.scrollViewStyle}>
          <Image style={styles.imgAll2} source={require('./assets/home_3.png')}/>
        </ScrollView>
      
                
        <View style={styles.footer_scroll}>
          <Image style={styles.imgAll2} source={require('./assets/bottombar6.png')}/>
        
        

          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:"5%",  width:50}]} onPress={() => navigation.navigate('homeFalse', {page:"q3_2One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:"20%", width:50}]} onPress={() => navigation.navigate('homeFalse', {page:"q3_2One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:"35%", width:50}]} onPress={() => navigation.navigate('homeFalse', {page:"q3_2One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:"51%", width:50}]} onPress={() => navigation.navigate('homeFalse', {page:"q3_2One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:"67%", width:50}]} onPress={() => navigation.navigate('homeFalse', {page:"q3_2One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:"84%", width:50}]} onPress={() => navigation.navigate('homeTrue', {page:"q3_3One"})}/> 
        </View>

    </View>
  );
}



function q3_3One({ navigation }) {

  console.log("q3_3One")
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.imgAll}
          source={require('./assets/q3_3One.png')}
          />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('q3_3Two', {page:"q3_3Two", status:1})}>
      <BottomButtonView/>
      </TouchableOpacity>
    </View>
  );
}

function q3_3Two({route, navigation}) {
  timerfn(timerQ3_3)
  return (
    <View style={styles.mainviewStyle}>
        <ScrollView style = {styles.scrollViewStyle}>
          <Image style={styles.imgAll2} source={require('./assets/home_3.png')}/>
        </ScrollView>
      
                
        <View style={styles.footer_scroll}>
          <Image style={styles.imgAll2} source={require('./assets/bottombar6.png')}/>
        
        

          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:"5%",  width:50}]} onPress={() => navigation.navigate('homeFalse', {page:"q3_3One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:"20%", width:50}]} onPress={() => navigation.navigate('homeTrue', {page:"q3_4One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:"35%", width:50}]} onPress={() => navigation.navigate('homeFalse', {page:"q3_3One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:"51%", width:50}]} onPress={() => navigation.navigate('homeFalse', {page:"q3_3One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:"67%", width:50}]} onPress={() => navigation.navigate('homeFalse', {page:"q3_3One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:"84%", width:50}]} onPress={() => navigation.navigate('homeFalse', {page:"q3_3One"})}/> 
        </View>
    </View>
  );
}





function q3_4One({ navigation }) {

  console.log("q3_4One")
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.imgAll}
          source={require('./assets/q3_4One.png')}
          />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('q3_4Two', {page:"q3_4Two", status:1})}>
      <BottomButtonView/>
      </TouchableOpacity>
    </View>
  );
}

function q3_4Two({route, navigation}) {
  timerfn(timerQ3_4)

  let icon = ""
  icon = retIcon(route.params.status)
  q4_Start
  return (
    <View style={styles.mainviewStyle}>
      <ScrollView style = {styles.scrollViewStyle}>
        <TouchableOpacityView routeval={route} navigation={navigation} top={"30%"} next_page={'q3_end'}/>
        <Image style={styles.imgAll2} source={imagePath[icon]} />
      </ScrollView>
                
        <View style={styles.footer_scroll}>
          <Image style={styles.imgAll2} source={require('./assets/bottombar6.png')}/>
        
        
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:"5%",  width:50}]} onPress={() => navigation.navigate('q3_4Two', {page:"q3_4Two", status:'newpid', touchableViewStatus:false})}/>
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:"20%", width:50}]} onPress={() => navigation.navigate('q3_4Two', {page:"q3_4Two", status:'watch', touchableViewStatus:false})}/>
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:"35%", width:50}]} onPress={() => navigation.navigate('q3_4Two', {page:"q3_4Two", status:'profile', touchableViewStatus:false})}/>
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:"51%", width:50}]} onPress={() => navigation.navigate('q3_4Two', {page:"q3_4Two", status:'game', touchableViewStatus:false})}/>
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:"67%", width:50}]} onPress={() => navigation.navigate('q3_4Two', {page:"q3_4Two", status:'alum', touchableViewStatus:false})}/>
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:"84%", width:50}]} onPress={() => navigation.navigate('q3_4Two', {page:"q3_4Two", status:'menu', touchableViewStatus:true})}/>
        </View>
    </View>
  );
}

  


function q4_Start({ navigation }) {
  console.log("q4_Start")
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.imgAll}
          source={require('./assets/q4_Start.png')}
          />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('q4_1One')}>
      <BottomButtonView/>
      </TouchableOpacity>
    </View>
  );
}



function q4_1One({ navigation }) {
  console.log("q4_1One")
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.imgAll}
          source={require('./assets/q4_1One.png')}
          />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('q4_1Two')}>
      <BottomButtonView/>
      </TouchableOpacity>
    </View>
  );
}


function q4_1Two({route, navigation }) {
  timerfn(timerQ4_1)
  console.log("q4_1Two")
  return (
    <View style={styles.mainviewStyle}>
        
        <ScrollView style = {styles.scrollViewStyle}>
          <Image style={styles.imgAll2} source={require('./assets/home_3.png')}/>
        </ScrollView>
      
                
        <View style={styles.footer_scroll}>
          <Image style={styles.imgAll2} source={require('./assets/roundbar.png')}/>
        
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:"10%", width:100}]} onPress={() => navigation.navigate('homeFalse', {page:"q4_1One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:"40%", width:80}]} onPress={() => navigation.navigate('homeFalse', {page:"q4_1One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:"65%", width:100}]} onPress={() => navigation.navigate('homeTrue', {page:"q4_2One"})}/> 
        </View>

    </View>
  );
}



function q4_2One({ navigation }) {
  console.log("q4_2One")
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.imgAll}
          source={require('./assets/q4_2One.png')}
          />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('q4_2Two')}>
      <BottomButtonView/>
      </TouchableOpacity>
    </View>
  );
}


function q4_2Two({route, navigation }) {
  timerfn(timerQ4_2)
  console.log("q4_1Two")
  return (
    <View style={styles.mainviewStyle}>
        
        <ScrollView style = {styles.scrollViewStyle}>
          <Image style={styles.imgAll2} source={require('./assets/home_3.png')}/>
        </ScrollView>
      
                
        <View style={styles.footer_scroll}>
          <Image style={styles.imgAll2} source={require('./assets/roundbar.png')}/>
        
        
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:"10%", width:100}]} onPress={() => navigation.navigate('homeFalse', {page:"q4_2One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:"40%", width:80}]} onPress={() => navigation.navigate('homeTrue', {page:"q4_3One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:"65%", width:100}]} onPress={() => navigation.navigate('homeFalse', {page:"q4_2One"})}/> 
        </View>

    </View>
  );
}


function q4_3One({ navigation }) {
  console.log("q4_3One")
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.imgAll}
          source={require('./assets/q4_3One.png')}
          />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('q4_3Two')}>
      <BottomButtonView/>
      </TouchableOpacity>
    </View>
  );
}


function q4_3Two({route, navigation }) {
  timerfn(timerQ4_3)
  console.log("q4_3Two")
  return (
    <View style={styles.mainviewStyle}>
        
        <ScrollView style = {styles.scrollViewStyle}>
          <Image style={styles.imgAll2} source={require('./assets/home_3.png')}/>
        </ScrollView>
      
                
        <View style={styles.footer_scroll}>
          <Image style={styles.imgAll2} source={require('./assets/roundbar.png')}/>
        
        
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:"10%", width:100}]} onPress={() => navigation.navigate('homeFalse', {page:"q4_3One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:"40%", width:80}]} onPress={() => navigation.navigate('q4_3Three', {page:"q4_3Three"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:"65%", width:100}]} onPress={() => navigation.navigate('homeFalse', {page:"q4_3One"})}/> 
        </View>

    </View>
  );
}
function q4_3Three({route, navigation }) {
  console.log("q4_3Two")
  return (
    <View style={styles.mainviewStyle}>
        
        <ScrollView style = {styles.scrollViewStyle}>
          <Image style={styles.imgAll2} source={require('./assets/home_3.png')}/>
        </ScrollView>
      
                
        <View style={styles.footer_scroll}>
          <Image style={[styles.imgAll2, {top:-120}]} source={require('./assets/roundbarex.png')}/>
        
        
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:75, top:-190, width:85}]} onPress={() => navigation.navigate('homeTrue', {page:"q4_4One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:255, top:-190, width:85}]} onPress={() => navigation.navigate('homeFalse', {page:"q4_3One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:75, top:-20, width:85}]} onPress={() => navigation.navigate('homeFalse', {page:"q4_3One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:255, top:-20, width:85}]} onPress={() => navigation.navigate('homeFalse', {page:"q4_3One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:165, top:-230, width:85}]} onPress={() => navigation.navigate('homeFalse', {page:"q4_3One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:165, top:0, width:85}]} onPress={() => navigation.navigate('homeFalse', {page:"q4_3One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:35, top:-105, width:85}]} onPress={() => navigation.navigate('homeFalse', {page:"q4_3One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:290, top:-105, width:85}]} onPress={() => navigation.navigate('homeFalse', {page:"q4_3One"})}/> 
        </View>

    </View>
  );
}


function q4_4One({ navigation }) {
  console.log("q4_4One")
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.imgAll}
          source={require('./assets/q4_4One.png')}
          />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('q4_4Two')}>
      <BottomButtonView/>
      </TouchableOpacity>
    </View>
  );
}


function q4_4Two({route, navigation }) {
  timerfn(timerQ4_4)
  console.log("q4_4Two")
  return (
    <View style={styles.mainviewStyle}>
        
        <ScrollView style = {styles.scrollViewStyle}>
          <Image style={styles.imgAll2} source={require('./assets/home_3.png')}/>
        </ScrollView>
      
                
        <View style={styles.footer_scroll}>
          <Image style={styles.imgAll2} source={require('./assets/roundbar.png')}/>
        
        
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:"10%", width:100}]} onPress={() => navigation.navigate('homeFalse', {page:"q4_4One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:"40%", width:80}]} onPress={() => navigation.navigate('q4_4Three', {page:"q4_4Three"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:"65%", width:100}]} onPress={() => navigation.navigate('homeFalse', {page:"q4_4One"})}/> 
        </View>

    </View>
  );
}
function q4_4Three({route, navigation }) {
  console.log("q4_4Three")
  return (
    <View style={styles.mainviewStyle}>
        
        <ScrollView style = {styles.scrollViewStyle}>
          <Image style={styles.imgAll2} source={require('./assets/home_3.png')}/>
        </ScrollView>
      
                
        <View style={styles.footer_scroll}>
          <Image style={[styles.imgAll2, {top:-120}]} source={require('./assets/roundbarex.png')}/>
        
        
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:75, top:-190, width:85}]} onPress={() => navigation.navigate('homeFalse', {page:"q4_4One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:255, top:-190, width:85}]} onPress={() => navigation.navigate('homeTrue', {page:"q4_end"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:75, top:-20, width:85}]} onPress={() => navigation.navigate('homeFalse', {page:"q4_4One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:255, top:-20, width:85}]} onPress={() => navigation.navigate('homeFalse', {page:"q4_4One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:165, top:-230, width:85}]} onPress={() => navigation.navigate('homeFalse', {page:"q4_4One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:165, top:0, width:85}]} onPress={() => navigation.navigate('homeFalse', {page:"q4_4One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:35, top:-105, width:85}]} onPress={() => navigation.navigate('homeFalse', {page:"q4_4One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:290, top:-105, width:85}]} onPress={() => navigation.navigate('homeFalse', {page:"q4_4One"})}/> 
        </View>

    </View>
  );
}




function q5_Start({ navigation }) {
  console.log("q5_Start")
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.imgAll}
          source={require('./assets/q5_Start.png')}
          />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('q5_1One')}>
      <BottomButtonView/>
      </TouchableOpacity>
    </View>
  );
}



function q5_1One({ navigation }) {
  console.log("q5_1One")
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.imgAll}
          source={require('./assets/q5_1One.png')}
          />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('q5_1Two')}>
      <BottomButtonView/>
      </TouchableOpacity>
    </View>
  );
}


function q5_1Two({route, navigation }) {
  timerfn(timerQ5_1)
  console.log("q5_1Two")
  return (
    <View style={styles.mainviewStyle}>
        
        <ScrollView style = {styles.scrollViewStyle}>
          <Image style={styles.imgAll2} source={require('./assets/home_3.png')}/>
        </ScrollView>
      
                
        <View style={styles.footer_scroll}>
          <Image style={styles.imgAll2} source={require('./assets/slide_01.png')}/>
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'5%' }]} onPress={() => navigation.navigate('homeFalse', {page:"q5_1One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'23%'}]} onPress={() => navigation.navigate('homeTrue', {page:"q5_2One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'43%'}]} onPress={() => navigation.navigate('homeFalse', {page:"q5_1One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'60%'}]} onPress={() => navigation.navigate('homeFalse', {page:"q5_1One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'77%'}]} onPress={() => navigation.navigate('homeFalse', {page:"q5_1One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {right:0 , width:25}]} onPress={() => navigation.navigate('q5_1TwoB', {page:"q5_1TwoB"})}/> 
        </View>

    </View>
  );
}
function q5_1TwoB({route, navigation }) {
  console.log("q5_1Two")
  return (
    <View style={styles.mainviewStyle}>
        
        <ScrollView style = {styles.scrollViewStyle}>
          <Image style={styles.imgAll2} source={require('./assets/home_3.png')}/>
        </ScrollView>
      
                
        <View style={styles.footer_scroll}>
          <Image style={styles.imgAll2} source={require('./assets/slide_02.png')}/>
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'7%' }]} onPress={() => navigation.navigate('homeFalse', {page:"q5_1One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'25%'}]} onPress={() => navigation.navigate('homeFalse', {page:"q5_1One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'43%'}]} onPress={() => navigation.navigate('homeFalse', {page:"q5_1One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'62%'}]} onPress={() => navigation.navigate('homeFalse', {page:"q5_1One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'80%'}]} onPress={() => navigation.navigate('homeFalse', {page:"q5_1One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:0 , width:25}]} onPress={() => navigation.navigate('q5_1Two', {page:"q5_1Two"})}/> 
        </View>

    </View>
  );
}



function q5_2One({ navigation }) {
  console.log("q5_2One")
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.imgAll}
          source={require('./assets/q5_2One.png')}
          />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('q5_2Two')}>
      <BottomButtonView/>
      </TouchableOpacity>
    </View>
  );
}



function q5_2Two({route, navigation }) {
  timerfn(timerQ5_2)
  console.log("q5_2Two")
  return (
    <View style={styles.mainviewStyle}>
        
        <ScrollView style = {styles.scrollViewStyle}>
          <Image style={styles.imgAll2} source={require('./assets/home_3.png')}/>
        </ScrollView>
      
                
        <View style={styles.footer_scroll}>
          <Image style={styles.imgAll2} source={require('./assets/slide_01.png')}/>
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'5%' }]} onPress={() => navigation.navigate('homeFalse', {page:"q5_2One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'23%'}]} onPress={() => navigation.navigate('homeFalse', {page:"q5_2One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'43%'}]} onPress={() => navigation.navigate('homeTrue', {page:"q5_3One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'60%'}]} onPress={() => navigation.navigate('homeFalse', {page:"q5_2One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'77%'}]} onPress={() => navigation.navigate('homeTrue', {page:"q5_3One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {right:0 , width:25}]} onPress={() => navigation.navigate('q5_2TwoB', {page:"q5_2TwoB"})}/> 
        </View>

    </View>
  );
}
function q5_2TwoB({route, navigation }) {
  console.log("q5_1Two")
  return (
    <View style={styles.mainviewStyle}>
        
        <ScrollView style = {styles.scrollViewStyle}>
          <Image style={styles.imgAll2} source={require('./assets/home_3.png')}/>
        </ScrollView>
      
                
        <View style={styles.footer_scroll}>
          <Image style={styles.imgAll2} source={require('./assets/slide_02.png')}/>
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'7%' }]} onPress={() => navigation.navigate('homeFalse', {page:"q5_2One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'25%'}]} onPress={() => navigation.navigate('homeFalse', {page:"q5_2One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'43%'}]} onPress={() => navigation.navigate('homeFalse', {page:"q5_2One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'62%'}]} onPress={() => navigation.navigate('homeFalse', {page:"q5_2One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'80%'}]} onPress={() => navigation.navigate('homeFalse', {page:"q5_2One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:0 , width:25}]} onPress={() => navigation.navigate('q5_2Two', {page:"q5_2Two"})}/> 
        </View>

    </View>
  );
}


function q5_3One({ navigation }) {
  console.log("q5_3One")
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.imgAll}
          source={require('./assets/q5_3One.png')}
          />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('q5_3Two')}>
      <BottomButtonView/>
      </TouchableOpacity>
    </View>
  );
}



function q5_3Two({route, navigation }) {
  timerfn(timerQ5_3)
  console.log("q5_3Two")
  return (
    <View style={styles.mainviewStyle}>
        
        <ScrollView style = {styles.scrollViewStyle}>
          <Image style={styles.imgAll2} source={require('./assets/home_3.png')}/>
        </ScrollView>
      
                
        <View style={styles.footer_scroll}>
          <Image style={styles.imgAll2} source={require('./assets/slide_01.png')}/>
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'5%' }]} onPress={() => navigation.navigate('homeFalse', {page:"q5_3One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'23%'}]} onPress={() => navigation.navigate('homeFalse', {page:"q5_3One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'43%'}]} onPress={() => navigation.navigate('homeFalse', {page:"q5_3One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'60%'}]} onPress={() => navigation.navigate('homeFalse', {page:"q5_3One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'77%'}]} onPress={() => navigation.navigate('homeFalse', {page:"q5_3One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {right:0 , width:25}]} onPress={() => navigation.navigate('q5_3TwoB', {page:"q5_3TwoB"})}/> 
        </View>

    </View>
  );
}
function q5_3TwoB({route, navigation }) {
  console.log("q5_3TwoB")
  return (
    <View style={styles.mainviewStyle}>
        
        <ScrollView style = {styles.scrollViewStyle}>
          <Image style={styles.imgAll2} source={require('./assets/home_3.png')}/>
        </ScrollView>
      
        <View style={styles.footer_scroll}>
          <Image style={styles.imgAll2} source={require('./assets/slide_02.png')}/>
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'7%' }]} onPress={() => navigation.navigate('homeTrue', {page:"q5_4One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'25%'}]} onPress={() => navigation.navigate('homeFalse', {page:"q5_3One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'43%'}]} onPress={() => navigation.navigate('homeFalse', {page:"q5_3One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'62%'}]} onPress={() => navigation.navigate('homeFalse', {page:"q5_3One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'80%'}]} onPress={() => navigation.navigate('homeFalse', {page:"q5_3One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:0 , width:25}]} onPress={() => navigation.navigate('q5_3Two', {page:"q5_3Two"})}/> 
        </View>

    </View>
  );
}




function q5_4One({ navigation }) {
  console.log("q5_4One")
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.imgAll}
          source={require('./assets/q5_4One.png')}
          />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('q5_4Two')}>
      <BottomButtonView/>
      </TouchableOpacity>
    </View>
  );
}



function q5_4Two({route, navigation }) {
  timerfn(timerQ5_4)
  console.log("q5_4Two")
  return (
    <View style={styles.mainviewStyle}>
        
        <ScrollView style = {styles.scrollViewStyle}>
          <Image style={styles.imgAll2} source={require('./assets/home_3.png')}/>
        </ScrollView>
      
                
        <View style={styles.footer_scroll}>
          <Image style={styles.imgAll2} source={require('./assets/slide_01.png')}/>
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'5%' }]} onPress={() => navigation.navigate('homeFalse', {page:"q5_4One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'23%'}]} onPress={() => navigation.navigate('homeFalse', {page:"q5_4One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'43%'}]} onPress={() => navigation.navigate('homeFalse', {page:"q5_4One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'60%'}]} onPress={() => navigation.navigate('homeFalse', {page:"q5_4One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'77%'}]} onPress={() => navigation.navigate('homeFalse', {page:"q5_4One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {right:0 , width:25}]} onPress={() => navigation.navigate('q5_4TwoB', {page:"q5_4TwoB"})}/> 
        </View>

    </View>
  );
}
function q5_4TwoB({route, navigation }) {
  console.log("q5_4TwoB")
  return (
    <View style={styles.mainviewStyle}>
        
        <ScrollView style = {styles.scrollViewStyle}>
          <Image style={styles.imgAll2} source={require('./assets/home_3.png')}/>
        </ScrollView>
      
        <View style={styles.footer_scroll}>
          <Image style={styles.imgAll2} source={require('./assets/slide_02.png')}/>
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'7%' }]} onPress={() => navigation.navigate('homeFalse', {page:"q5_4One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'25%'}]} onPress={() => navigation.navigate('homeFalse', {page:"q5_4One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'43%'}]} onPress={() => navigation.navigate('homeFalse', {page:"q5_4One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'62%'}]} onPress={() => navigation.navigate('homeTrue', {page:"q5_end"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:'80%'}]} onPress={() => navigation.navigate('homeFalse', {page:"q5_4One"})}/> 
          <TouchableOpacity activeOpacity={0.8} style={[styles.divideBtn, {left:0 , width:25}]} onPress={() => navigation.navigate('q5_4Two', {page:"q5_4Two"})}/> 
        </View>

    </View>
  );
}


function last_page({ navigation }) {
  console.log("last_page")
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.imgAll}
          source={require('./assets/last_page.png')}
          />
      </View>

      <TouchableOpacity style={styles.instaButton}
                        onPress={() => navigation.navigate('last_page_Q1', {status:''})}>
            <Text style={styles.buttonText}>설문하기</Text>
      </TouchableOpacity>


    </View>
  );
}





const textQ1 = {inpText:""}
const textQ2 = {inpText:""}
const textQ3 = {inpText:""}
const textQ4 = {inpText:""}

function last_page_Q1({ navigation }) {
  
  const [name, setName] = useState('')

  return (

    <View style={styles.mainviewStyle}>
        <ScrollView style = {styles.scrollViewStyle}>
          <Image
            style={styles.imgAll}

            source={require('./assets/question1.png')}
            />

            <View style={styles.containerRow}>
              <Text style={{fontSize:20, fontWeight:'bold', margin:20}}>1. 가장 좋았던 형태는 어떤건가요?</Text>
              <TextInput 
                        onChange={(event) => {
                          const {eventCount, target, text} = event.nativeEvent;
                          textQ1['inpText'] = text
                        }
                      }
                      style={{height: 300, margin:20, padding:5, borderRadius:8, borderWidth: 1}}
                      placeholder="이유 및 의견을 남겨주세요 (선택사항)"
                      backgroundColor='#DDDDDD'
                      multiline={true} 
              />
            </View>
          
            <View style={styles.containerRow}>
              <Text style={{fontSize:20, fontWeight:'bold', margin:20}}>2. 가장 별로였던 형태는 어떤건가요?</Text>
              <TextInput 
                        onChange={(event) => {
                          const {eventCount, target, text} = event.nativeEvent;
                          textQ2['inpText'] = text
                        }
                      }
                      style={{height: 300, margin:20, padding:5, borderRadius:8, borderWidth: 1}}
                      placeholder="이유 및 의견을 남겨주세요 (선택사항)"
                      backgroundColor='#DDDDDD'
                      multiline={true} 
              />
            </View> 
            <View style={styles.containerRow}>
              <Text style={{fontSize:20, fontWeight:'bold', margin:20}}>3. 큰차이가 없는 두 유형의 텝바는,</Text>
              <Text style={{fontSize:20, fontWeight:'bold', margin:20}}>사용성에 있어서 체감될 정도의 차이가 있었나요?</Text>
              <TextInput 
                        onChange={(event) => {
                          const {eventCount, target, text} = event.nativeEvent;
                          textQ3['inpText'] = text
                        }
                      }
                      style={{height: 300, margin:20, padding:5, borderRadius:8, borderWidth: 1}}
                      placeholder="이유 및 의견을 남겨주세요 (선택사항)"
                      backgroundColor='#DDDDDD'
                      multiline={true} 
              />
            </View>
            <Image
            style={styles.imgAll}
            source={require('./assets/question2.png')}
            />

            <View style={styles.containerRow}>
              <Text style={{fontSize:20, fontWeight:'bold', margin:20}}>4. 기타 소중한 의견이 있다면 알려주세요!</Text>
              <TextInput 
                        onChange={(event) => {
                          const {eventCount, target, text} = event.nativeEvent;
                          textQ4['inpText'] = text
                        }
                      }
                      style={{height: 300, margin:20, padding:5, borderRadius:8, borderWidth: 1}}
                      placeholder="이유 및 의견을 남겨주세요 (선택사항)"
                      backgroundColor='#DDDDDD'
                      multiline={true} 
              />
            </View>


            
      <TouchableOpacity style={styles.instaButton2}
                        onPress={() => navigation.navigate('last_page_QE', {status:''})}>
            <Text style={styles.buttonText}>제출하기</Text>
      </TouchableOpacity>


        </ScrollView>
    </View>
  );
}

function last_page_QE({route, navigation }) {


  return (
    <ScrollView style = {styles.scrollViewStyle}> 
    

    <Text style={{fontSize:20, fontWeight:'bold', margin:40}}>감사합니다!</Text>
    <Text style={{fontSize:20, fontWeight:'bold', margin:5}}>테스트가 마무리 되었습니다!</Text>
    <Text style={{fontSize:20, fontWeight:'bold', margin:5}}>아래 화면들을 캡쳐하여</Text>
    <Text style={{fontSize:20, fontWeight:'bold', margin:5}}>보내주시면 추첨을 통해 치킨</Text>
    <Text style={{fontSize:20, fontWeight:'bold', margin:5}}>기프티콘을 드립니다.</Text>

    <Text style={{fontSize:20, fontWeight:'bold', margin:20}}>전화번호 : 010-9935-6542</Text>
    <Text style={{fontSize:20, fontWeight:'bold', margin:20}}>카카오톡 : GangD99</Text>


      <View style={{marginTop:70}}>
      <Text style={{fontSize:15, fontWeight:'bold', margin:5}}>Q1_1 : {timerQ1_1['end'] - timerQ1_1['start']}S / {timerQ1_1['cnt']} </Text>
        <Text style={{fontSize:15, fontWeight:'bold', margin:5}}>Q1_2 : {timerQ1_2['end'] - timerQ1_2['start']}S / {timerQ1_2['cnt']} </Text>
        <Text style={{fontSize:15, fontWeight:'bold', margin:5}}>Q1_3 : {timerQ1_3['end'] - timerQ1_3['start']}S / {timerQ1_3['cnt']} </Text>
        <Text style={{fontSize:15, fontWeight:'bold', margin:5}}>Q1_4 : {timerQ1_4['end'] - timerQ1_4['start']}S / {timerQ1_4['cnt']} </Text>
        <Text style={{fontSize:15, fontWeight:'bold', margin:5}}>Q1-점수 : {q1Text['jumsu']}</Text>
        <Text style={{fontSize:15, fontWeight:'bold', margin:5}}>Q1:{q1Text['inpText']}</Text>

        <Text style={{fontSize:15, fontWeight:'bold', margin:5}}>Q2_1 : {timerQ2_1['end'] - timerQ2_1['start']}S / {timerQ2_1['cnt']} </Text>
        <Text style={{fontSize:15, fontWeight:'bold', margin:5}}>Q2_2 : {timerQ2_2['end'] - timerQ2_2['start']}S / {timerQ2_2['cnt']} </Text>
        <Text style={{fontSize:15, fontWeight:'bold', margin:5}}>Q2_3 : {timerQ2_3['end'] - timerQ2_3['start']}S / {timerQ2_3['cnt']} </Text>
        <Text style={{fontSize:15, fontWeight:'bold', margin:5}}>Q2_4 : {timerQ2_4['end'] - timerQ2_4['start']}S / {timerQ2_4['cnt']} </Text>
        <Text style={{fontSize:15, fontWeight:'bold', margin:5}}>Q2-점수 : {q2Text['jumsu']}</Text>
        <Text style={{fontSize:15, fontWeight:'bold', margin:5}}>Q2:{q2Text['inpText']}</Text>

        <Text style={{fontSize:15, fontWeight:'bold', margin:5}}>Q3_1 : {timerQ3_1['end'] - timerQ3_1['start']}S / {timerQ3_1['cnt']} </Text>
        <Text style={{fontSize:15, fontWeight:'bold', margin:5}}>Q3_2 : {timerQ3_2['end'] - timerQ3_2['start']}S / {timerQ3_2['cnt']} </Text>
        <Text style={{fontSize:15, fontWeight:'bold', margin:5}}>Q3_3 : {timerQ3_3['end'] - timerQ3_3['start']}S / {timerQ3_3['cnt']} </Text>
        <Text style={{fontSize:15, fontWeight:'bold', margin:5}}>Q3_4 : {timerQ3_4['end'] - timerQ3_4['start']}S / {timerQ3_4['cnt']} </Text>
        <Text style={{fontSize:15, fontWeight:'bold', margin:5}}>Q3-점수 : {q3Text['jumsu']}</Text>
        <Text style={{fontSize:15, fontWeight:'bold', margin:5}}>Q3:{q3Text['inpText']}</Text>

        <Text style={{fontSize:15, fontWeight:'bold', margin:5}}>Q4_1 : {timerQ4_1['end'] - timerQ4_1['start']}S / {timerQ4_1['cnt']} </Text>
        <Text style={{fontSize:15, fontWeight:'bold', margin:5}}>Q4_2 : {timerQ4_2['end'] - timerQ4_2['start']}S / {timerQ4_2['cnt']} </Text>
        <Text style={{fontSize:15, fontWeight:'bold', margin:5}}>Q4_3 : {timerQ4_3['end'] - timerQ4_3['start']}S / {timerQ4_3['cnt']} </Text>
        <Text style={{fontSize:15, fontWeight:'bold', margin:5}}>Q4_4 : {timerQ4_4['end'] - timerQ4_4['start']}S / {timerQ4_4['cnt']} </Text>
        <Text style={{fontSize:15, fontWeight:'bold', margin:5}}>Q4-점수 : {q4Text['jumsu']}</Text>
        <Text style={{fontSize:15, fontWeight:'bold', margin:5}}>Q4:{q4Text['inpText']}</Text>

        <Text style={{fontSize:15, fontWeight:'bold', margin:5}}>Q5_1 : {timerQ5_1['end'] - timerQ5_1['start']}S / {timerQ5_1['cnt']} </Text>
        <Text style={{fontSize:15, fontWeight:'bold', margin:5}}>Q5_2 : {timerQ5_2['end'] - timerQ5_2['start']}S / {timerQ5_2['cnt']} </Text>
        <Text style={{fontSize:15, fontWeight:'bold', margin:5}}>Q5_3 : {timerQ5_3['end'] - timerQ5_3['start']}S / {timerQ5_3['cnt']} </Text>
        <Text style={{fontSize:15, fontWeight:'bold', margin:5}}>Q5_4 : {timerQ5_4['end'] - timerQ5_4['start']}S / {timerQ5_4['cnt']} </Text>
        <Text style={{fontSize:15, fontWeight:'bold', margin:5}}>Q5-점수 : {q5Text['jumsu']}</Text>
        <Text style={{fontSize:15, fontWeight:'bold', margin:5}}>Q5:{q5Text['inpText']}</Text>
      </View>
        <View style={styles.containerRow}>
          
              <Text style={{fontSize:20, fontWeight:'bold', margin:20}}>1. 가장 좋았던 형태는 어떤건가요?</Text>
              <Text style={{height: 300, margin:20, padding:5, borderRadius:8, borderWidth: 1}}
                    backgroundColor='#DDDDDD'
                    multiline={true} >
                      {textQ1['inpText']}
              </Text>
          </View>
          <View style={styles.containerRow}>
              
          <Text style={{fontSize:20, fontWeight:'bold', margin:20}}>2. 가장 별로였던 형태는 어떤건가요?</Text>
              <Text style={{height: 300, margin:20, padding:5, borderRadius:8, borderWidth: 1}}
                    backgroundColor='#DDDDDD'
                    multiline={true} >
                      {textQ2['inpText']}
              </Text>
          </View>
          <View style={styles.containerRow}>
              <Text style={{fontSize:20, fontWeight:'bold', margin:20}}>3. 큰차이가 없는 두 유형의 텝바는,</Text>
              <Text style={{fontSize:20, fontWeight:'bold', margin:20}}>사용성에 있어서 체감될 정도의 차이가 있었나요?</Text>
              <Text style={{height: 300, margin:20, padding:5, borderRadius:8, borderWidth: 1}}
                    backgroundColor='#DDDDDD'
                    multiline={true} >
                      {textQ3['inpText']}
              </Text>
          </View>
          <View style={styles.containerRow}>
            
              <Text style={{fontSize:20, fontWeight:'bold', margin:20}}>4. 기타 소중한 의견이 있다면 알려주세요!</Text>
              <Text style={{height: 300, margin:20, padding:5, borderRadius:8, borderWidth: 1}}
                    backgroundColor='#DDDDDD'
                    multiline={true} >
                      {textQ4['inpText']}
              </Text>
          </View>


    </ScrollView>
  )
}


const UselessTextInput = () => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <View>
          <Text style={[styles.containerText, {marginTop:50}]}>기본 정보를 입력해주세요</Text>
        </View>

        <View style={styles.containerRow}>
          <Text style={[styles.containerLeft]}>직업</Text>
          <TextInput style={styles.input} />
        </View>
       
        <View style={styles.containerRow}>
          <Text style={[styles.containerLeft]}>나이</Text>
          <TextInput style={styles.input} />
        </View>
        
        <View style={styles.containerRow}>
          <Text style={[styles.containerLeft]}>성별</Text>
          <TextInput style={styles.input} />
        </View>
        
        <View style={styles.containerRow}>
          <Text style={[styles.containerLeft]}>스마트폰 기종</Text>
          <TextInput style={styles.input} />
        </View>
      <Button
        title="확인하기" onPress={() => navigation.navigate('TestOne')}
      />
    </View>
  );
}

const Tab = createBottomTabNavigator();

// function TestOneScreen({ navigation }) {
//   return (

//     <View style={styles.container}>

//         <View>
//           <Text style={[styles.pageTestFont, {marginTop:150}]}>Test1</Text>
//         </View>
       
//         <View>
//           <Text style={[styles.pageTestFont]}>"메뉴" 버튼을</Text>
//         </View>
        
//         <View>
//           <Text style={[styles.pageTestFont]}>눌러주세요!</Text>
//         </View>
        
//       <Button
//         title="Start!" styles={{width:200, height:100, margin:20}} onPress={() => navigation.navigate('Screen1')}
//       />
//     </View>
//   );
// }



function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}



function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}


function SecondComponent() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Messages" component={Messages} />
    </Tab.Navigator>
  );
}2

const Stack = createStackNavigator();
function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator   screenOptions={{
        headerShown: false
      }}>

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="mainOne" component={mainOne} />
        <Stack.Screen name="mainTwo" component={mainTwo} />
        <Stack.Screen name="mainThree" component={mainThree} />
        
        <Stack.Screen name="homeTrue" component={homeTrue} />
        <Stack.Screen name="homeFalse" component={homeFalse} />

        <Stack.Screen name="q1_Start" component={q1_Start} />
        <Stack.Screen name="q1_1One" component={q1_1One} />
        <Stack.Screen name="q1_1Two" component={q1_1Two} />

        <Stack.Screen name="q1_2One" component={q1_2One} />
        <Stack.Screen name="q1_2Two" component={q1_2Two} />

        <Stack.Screen name="q1_3One" component={q1_3One} />
        <Stack.Screen name="q1_3Two" component={q1_3Two} />

        <Stack.Screen name="q1_4One" component={q1_4One} />
        <Stack.Screen name="q1_4Two" component={q1_4Two} />


        
        
        <Stack.Screen name="q2_1One" component={q2_1One} />
        <Stack.Screen name="q2_1Two" component={q2_1Two} />
        <Stack.Screen name="q2_1Three" component={q2_1Three} />

        <Stack.Screen name="q2_2One" component={q2_2One} />
        <Stack.Screen name="q2_2Two" component={q2_2Two} />

        <Stack.Screen name="q2_3One" component={q2_3One} />
        <Stack.Screen name="q2_3Three" component={q2_3Three} />

        <Stack.Screen name="q2_4One" component={q2_4One} />
        <Stack.Screen name="q2_4Two" component={q2_4Two} />


        <Stack.Screen name="q3_Start" component={q3_Start} />

        <Stack.Screen name="q3_1One" component={q3_1One} />
        <Stack.Screen name="q3_1Two" component={q3_1Two} />

        <Stack.Screen name="q3_2One" component={q3_2One} />
        <Stack.Screen name="q3_2Two" component={q3_2Two} />

        <Stack.Screen name="q3_3One" component={q3_3One} />
        <Stack.Screen name="q3_3Two" component={q3_3Two} />

        <Stack.Screen name="q3_4One" component={q3_4One} />
        <Stack.Screen name="q3_4Two" component={q3_4Two} />

        

        <Stack.Screen name="q4_Start" component={q4_Start} />

        <Stack.Screen name="q4_1One" component={q4_1One} />
        <Stack.Screen name="q4_1Two" component={q4_1Two} />

        <Stack.Screen name="q4_2One" component={q4_2One} />
        <Stack.Screen name="q4_2Two" component={q4_2Two} />

        <Stack.Screen name="q4_3One" component={q4_3One} />
        <Stack.Screen name="q4_3Two" component={q4_3Two} />
        <Stack.Screen name="q4_3Three" component={q4_3Three} />

        <Stack.Screen name="q4_4One" component={q4_4One} />
        <Stack.Screen name="q4_4Two" component={q4_4Two} />
        <Stack.Screen name="q4_4Three" component={q4_4Three} />



        <Stack.Screen name="q5_Start" component={q5_Start} />

        <Stack.Screen name="q5_1One" component={q5_1One} />
        <Stack.Screen name="q5_1Two" component={q5_1Two} />
        <Stack.Screen name="q5_1TwoB" component={q5_1TwoB} />

        <Stack.Screen name="q5_2One" component={q5_2One} />
        <Stack.Screen name="q5_2Two" component={q5_2Two} />
        <Stack.Screen name="q5_2TwoB" component={q5_2TwoB} />

        <Stack.Screen name="q5_3One" component={q5_3One} />
        <Stack.Screen name="q5_3Two" component={q5_3Two} />
        <Stack.Screen name="q5_3TwoB" component={q5_3TwoB} />

        <Stack.Screen name="q5_4One" component={q5_4One} />
        <Stack.Screen name="q5_4Two" component={q5_4Two} />
        <Stack.Screen name="q5_4TwoB" component={q5_4TwoB} />

        <Stack.Screen name="q1_end" component={q1_end} />
        <Stack.Screen name="q2_end" component={q2_end} />
        <Stack.Screen name="q3_end" component={q3_end} />
        <Stack.Screen name="q4_end" component={q4_end} />
        <Stack.Screen name="q5_end" component={q5_end} />
        <Stack.Screen name="last_page" component={last_page} />
        <Stack.Screen name="last_page_Q1" component={last_page_Q1} />
        <Stack.Screen name="last_page_QE" component={last_page_QE} />

        




        


        {/* <Stack.Screen
            name="Screen1"
            component={Screen1}
            options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}




function App() {
  return (
      <MyStack />
  );
}
export default App;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    justifyContent: "center", 
    alignItems: "center"

  },
  mainviewStyle: {
    flex: 1,
    width:'100%',
    alignContent: 'center',
    justifyContent: "center", 
  },

  scrollViewStyle: {
    flex: 1,
    width:'100%',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: 'blue'
  },
  

  header: {
    height:60,
    backgroundColor:'green',
    
  },

  content: {
    flex:1,
    alignItems:'center',
    width:'100%',
  },

  elem: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor:'#eee',
    borderBottomWidth:0.5,
    padding: 5,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userComment: {
    padding:8,
    backgroundColor:'yellow',
    borderRadius:5,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'yellow',
  },
  name: {
    paddingLeft: 10,
  },
  btnItem: {
    height:100,
    alignItems:'center',
    backgroundColor:'red',
    flexDirection:'row',
  },
  imgAll2: {
    width: '99%',
    top: 0,
    marginBottom: 0,
    left: 0,
    right: 0,
  },
  imgAll3: {
    zIndex: 3,
  },

footer: {
  position: 'absolute',
  flex:0.1,
  left: 0,
  right: 0,
  bottom: 10,
  flexDirection:'row',
  height:80,
  alignItems:'center',
  justifyContent:'center'
},

footer_scroll: {
  position: 'absolute',
  flex:0.1,
  left: 0,
  right: 0,
  bottom: -10,
  flexDirection:'row',
  height:80,
  alignItems:'center',
},
bottomButtons: {
  alignItems:'center',
  justifyContent: 'center',
  flex:1,
},
footerText: {
  color:'white',
  fontWeight:'bold',
  alignItems:'center',
  fontSize:18,
},
textStyle: {
  alignSelf: 'center',
  color: 'orange'
},


instaButton: {
  width: "85%",
  height: 80,
  borderRadius: 15,
  bottom:3,
  backgroundColor: '#2DCB72',
  justifyContent: 'center',
  alignItems: 'center',
},

instaButton2: {
  width: "90%",
  height: 60,
  borderRadius: 15,
  left: "5%",
  right: "5%",
  bottom:3,
  backgroundColor: '#2DCB72',
  justifyContent: 'center',
  alignItems: 'center',
}
,
buttonText: {
  fontSize: 12,
  color: 'white',
  fontWeight: '700',
  textAlign: 'center',
},
divideBtn: {
  flexDirection:'row',
  position:"absolute",
  bottom:0,
  width: 60,
  height: 70,
  // backgroundColor: "#aaa",
  justifyContent: "center",
  alignItems: "center",
  opacity:0.3
},
divideBtn2: {
  bottom:0,
  backgroundColor: "#aaa",
  opacity:0.3
},

sendTextLst: {
  height: 40, margin:5, alignContent:"center", padding:5, borderRadius:8, borderWidth: 1,
  width:"90%",
  left:"5%",
  right:"5%"
},

sendTextLst2: {
  height: 250, margin:5, alignContent:"center", padding:5, borderRadius:8, borderWidth: 1,
  width:"90%",
  left:"5%",
  right:"5%"
}

});