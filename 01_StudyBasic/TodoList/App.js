import React, { useState } from 'react';
import { Platform, Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, SwipeableListView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import _ from 'underscore';
// npm add underscore
export default function App() {

  const [ content, setContent ] = useState( 'Text Here' );
  const [ list, setList ] = useState( [] );

  const addItem = () => {
    const item = {
      id: new Date().getTime().toString(),
      content: content,
    }
    setList( [ ...list, item ] ); // 전개 연산자 Spread Operation
    // setList 에는 항상 새로운 배열을 생성해서 입력한다. "불변성" Immutability
    // 기존의 오브젝트를 변경하지 않는 상태에서 새로운 배열을 만들어 넣어주기만 하면 된다.
    // immutable.js , immer.js 

    // var newState = [];ㄴㄴ
    // newState.concat(  list );
    // newState.push( item )
    // setList( newState )

    // react state를 변경하는 부분이 엄격하게 통제되어 있다. 
    // 함수형 컴포넌트 useState / 클래스형 컴포넌트 setState 
  }

  const remove = id => {
    // https://underscorejs.org/#reject
    setList( _.reject( list, item => item.id === id ) );
  }


  // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  return (
    
    <View style={styles.container}>
      <TextInput  value={ content } 
                  onChangeText={ text => setContent( text ) }
                  style={{ width: 300 }}
                 />
      <Button title="추가" onPress={ () => addItem() }/>
      { list.map( item => (
        <View key={ item.id } style={{flexDirection: 'row'}}>
          <Text>{ item.content }</Text>
          <Button title="삭제" onPress={ () => remove( item.id ) }/>
        </View>
      ) ) }
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
