import { NavigationAction, NavigationContainer, NavigationProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../screens/Signin/signin';

export type RootStackParamList = {
  SignIn: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const options = {
  headerShown: false,
}

export default function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={options}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
