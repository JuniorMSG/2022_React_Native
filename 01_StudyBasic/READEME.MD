
# VSCode Extension
## ES7+ React/Redux/React-Native snippets

## https://reactnative.dev/docs/accessibilityinfo

## https://docs.expo.io/versions/latest


## 스타일 적용

### npm add styled-components

https://styled-components.com/



## 함수형 컴포넌트

```js
function Section() {
  return <View>
    <Text>Component</Text>
  </View>
}
```

## 클래스 컴포넌트

```js
class Section extends React.Component {
  render() {
    return <View>
      <Text>Component</Text>
    </View>
  }
}
```

## state 의 차이

```js
// 함수형 컴포넌트
const [ count, setCount ] = useState( 0 );

// 클래스 컴포넌트
class Section extends React.Component {
  state = {
    count: 0
  }
  
  exec = () => {
    this.setState( { count: this.state.count + 1 } );
  }
  
  render() {
      return <Text>{ this.state.count }</Text>
  }
}
```

## 라이프사이클

[링크: 다이어그램](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)