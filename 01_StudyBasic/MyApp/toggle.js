import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

const Root = createStackNavigator()


const Screen1 = ({ navigation }) => {
    return (
      <Button
        onPress={() => {
          navigation.push('Screen2', { paramA: 'Hello!' })
        }}
      />
    )
  }
  
const App = () => {
    return (
        
    <View style={styles.container}>
        <Root.Navigator>
          <Root.Screen name="Screen1" component={Screen1} />
          <Root.Screen name="Screen2" component={Screen2} />
          <Root.Screen name="Screen3" component={Screen3} />
        </Root.Navigator>
    </View>
    )
  }