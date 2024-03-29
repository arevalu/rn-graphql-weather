import React, { FunctionComponent } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { BottomTabBar } from '@components';
import { Home, Search, Settings } from '@screens';
import { RootTabParamList } from './types';

const Tab = createBottomTabNavigator<RootTabParamList>();

const MainTabs: FunctionComponent = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
    }}
    tabBar={props => <BottomTabBar {...props} />}
  >
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Search" component={Search} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
);

export default MainTabs;
