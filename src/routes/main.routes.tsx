import React from 'react';
import { Text } from 'react-native';
import { Dimensions, Platform } from 'react-native/types';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { HomeScreen, ProfileScreen } from '../screens/tab/index';

import { TypeIcon, VectorIcon } from '../utils/VectorIconsUtil';
import { ICONS_NAME } from '../constants/icons';
import { COLORS } from '../constants/Colors';

// const { height } = Dimensions.get('window');

const Tab = createMaterialBottomTabNavigator();

const returnTitleTab = (name: string) => {
  let title;
  switch (name) {
    case 'Home':
      title = 'Home';
      break;

    case 'JobsPage':
      title = 'Jobs';
      break;

    case 'Buscar':
      title = 'Buscar';
      break;

    case 'Notificacoes':
      title = 'Notificações';
      break;

    case 'ProfilePage':
      title = 'Perfil';
      break;
  }
  return title;
};

const HomeStack = createStackNavigator();
const HomeStackScreens = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen name="ProfileScreen" component={ProfileScreen} />
  </HomeStack.Navigator>
);

export function MainRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={COLORS.GRAY}
      barStyle={{
        backgroundColor: COLORS.GRAY,
        borderColor: COLORS.GRAY,
        borderTopWidth: 0.2,
        height: '8%',
        width: '90%',
        alignSelf: 'center',
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName = '';
          let type = TypeIcon.MATERIAL_COMMUNITY_ICONS;
          let iconNameFocus = '';

          switch (route.name) {
            case 'Home':
              type = TypeIcon.MATERIAL_COMMUNITY_ICONS;
              iconName = 'home';
              break;

            case 'Profile':
              type = TypeIcon.MATERIAL_COMMUNITY_ICONS;
              iconName = 'home';
              break;

            default:
              return null;
          }
          // You can return any component that you like here!
          return (
            <VectorIcon
              IconType={TypeIcon.MATERIAL_COMMUNITY_ICONS}
              IconName={focused ? iconNameFocus : iconName}
              IconSize={focused ? 22 : 24}
              IconColor={color}
              IconStyle={{ paddingHorizontal: 0 }}
            />
          );
        },
        tabBarLabel: (
          <Text style={{ fontSize: 11 }}>{returnTitleTab(route.name)}</Text>
        ),
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreens}
        options={{ title: 'Home' }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ title: 'Profile' }}
      />
    </Tab.Navigator>
  );
}
