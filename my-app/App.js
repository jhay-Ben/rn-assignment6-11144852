import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Homepage from './pages/homepage';
import Checkoutpage from './pages/checkoutpage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Homepage} options={{ headerShown: false }} />
      <Stack.Screen name="Checkout" component={Checkoutpage} options={{ headerShown: false }} />
    </Stack.Navigator>
  </NavigationContainer>
    );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ?  35 : 0,
    padding: 15
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

// export default AppContainer;