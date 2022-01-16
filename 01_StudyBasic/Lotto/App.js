import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import _ from 'underscore';

/*
  ( n ) => { 
    numbers.push( n + 1 );
  }
  funciton(n) {
    numbers.push( n + 1 );
  }
*/
const numbers = [];
_.times( 45, n => numbers.push( n + 1 ) ); // 1 ~ 45 수정이 안되는데?


export default function App() {
  const shuffled = _.shuffle( numbers );
  shuffled.length = 6;
  const [ result, setResult ] = useState( shuffled );
  const onPressHandler = () => {
    const shuffled = _.shuffle( numbers );
    shuffled.length = 6;
    setResult( shuffled );
  };

  /* 변경이 필요한 값은 State에 반드시 담아서 사용해야 한다. */
  const [ count, setCount ] = useState( 0 ); // [ 스테이트명, 업데이트함수 ] = useState( 초기값 );
  const [ onOff, setOnOff ] = useState( false );


  return (
    <View style={styles.container}>
      <Text>{ result.join( ', ' ) }</Text>
      <Button title="다시 생성" onPress={onPressHandler}></Button>
      <Text>{ count }</Text>
      <Button title="증가" onPress={ () => setCount( count + 1 )}></Button>
      <Text>{ onOff ? 'ON' : 'OFF' }</Text>
      <Button title="Toggle" onPress={ () => setOnOff( !onOff ) }/>
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
