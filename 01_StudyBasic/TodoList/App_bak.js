import React, { useState } from 'react';
import { Platform, Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import _ from 'underscore';
import styled from 'styled-components/native';
import Constants from 'expo-constants';

const Row = styled.View`
  flex-direction: row;
`
const Input = styled.TextInput`
  width: 300;
  border-color: #000;
  border-bottom-width: 1;
  color:white;
`

// 구조 분해 할당, Destructure
const Item = ( { props } ) => {
  console.log( props.item.id );
  console.log( props.item.content );

}

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
  
  let marginTop = 0;
  if( Platform.OS === 'android' ) {
    marginTop = Constants.statusBarHeight;
  }
  // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  return (
    
    <SafeAreaView style={[styles.container, {marginTop}]}>
      <ScrollView>
        <View style={[styles.row, {marginBottom: 12}]}>
          <Input  value={ content } 
                      onChangeText={ text => setContent( text ) }/>
          <Button title="추가" onPress={ () => addItem() }/>
        </View>
        { list.map( item => (
          <TodoItem key={ item.id }>
            <Text>{ item.content }</Text>
            <Button color={'#f00'} title="삭제" onPress={ () => remove( item.id ) }/>
          </TodoItem>
        ) ) }
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  row: {
    flexDirection: 'row'
  },
  todoItem: {
    width: 350,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  inputStyle: {
    width: 300,
    borderColor: "#000",
    borderBottomWidth: 1,
  }
});
