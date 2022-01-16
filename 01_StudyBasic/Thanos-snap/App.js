import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   const result = Math.random();
//   let text = ''
//   if( result < 0.5 ){
//     text = "당신은 사망했습니다."
//   }
//   else{
//     text = "당신은 살았습니다."
//   }
//   return (
//     <View style={styles.container}>
//       <Text>{text}</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

export default function App() {
  const result = Math.random();
  return (
    <View style={styles.container}>
      { result < 0.5 ? (
          <Text>당신은 사망했습니다.</Text>
        ) : (
          <Text>당신은 살았습니다.</Text>
        )
      }
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
