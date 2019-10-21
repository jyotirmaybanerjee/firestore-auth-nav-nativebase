import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { Login } from './screens/auth/Login';
import { Register } from './screens/auth/Register';
import { Signout } from './screens/auth/Signout';
import { Landing } from './Landing';
import Profile from './screens/profile';
import Main from './screens/main';
import { Todos } from './screens/todos';
import { Settings } from './screens/settings';
import { Confirm } from './screens/settings/Confirm';
import { Promotion } from './screens/promotions';
import SideBar from './screens/sidebar';

import Counter from './screens/counter';

const AuthStack = createStackNavigator({
  Login,
  Register,
  Signout: {
    screen: Signout
  }
});

const MainTabs = createBottomTabNavigator(
  {
    Todos: {
      screen: Todos
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile'
      }
    },
    Main: {
      screen: Main,
      navigationOptions: {
        tabBarLabel: 'Main'
      }
    }
  },
  {
    swipeEnabled: true // This one make you through the screens
  }
);

const SettingsStack = createStackNavigator({
  Settings,
  Confirm: {
    screen: Confirm,
    navigationOptions: {
      headerTitle: 'Confirm'
    }
  }
});

const MainDrawer = createDrawerNavigator(
  {
    MainTabs,
    Settings: { screen: SettingsStack },
    Counter: { screen: Counter }
  },
  {
    initialRouteName: 'MainTabs',
    contentOptions: {
      activeTintColor: '#e91e63'
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const AppModalStack = createStackNavigator(
  {
    App: MainDrawer,
    Promotion: {
      screen: Promotion
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

const App = createSwitchNavigator(
  {
    Landing: {
      screen: Landing
    },
    Auth: {
      screen: AuthStack
    },
    App: {
      screen: AppModalStack
    }
  },
  {
    initialRouteName: 'Landing'
  }
);

export default createAppContainer(App);
