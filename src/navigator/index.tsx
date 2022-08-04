import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ChatStackNavigation from './ChatStckNavigator';
type AppNavigatorProps = {
  chatStack: undefined;
};

const Stack = createNativeStackNavigator<AppNavigatorProps>();

const AppNavigator: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="chatStack"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="chatStack" component={ChatStackNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;;
