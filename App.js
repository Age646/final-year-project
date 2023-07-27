import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import StackNavigation from './navigation/StackNavigation';
import UserNavigation from './navigation/UserNavigation';

export default function App() {
  return (
    // <View style={{flex: 1}}>
    // {/* <View> */}
    //     <StackNavigation/>
    //    <StatusBar style="auto" />
    //  </View>

    // <NavigationContainer>
        // <StackNavigation>
          // <UserNavigation/>
          <StackNavigation/>
        // </StackNavigation> 
    // </NavigationContainer>
    
  );

}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
