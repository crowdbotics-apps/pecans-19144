import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings84055Navigator from '../features/Settings84055/navigator';
import Settings84053Navigator from '../features/Settings84053/navigator';
import SignIn284051Navigator from '../features/SignIn284051/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings84055: { screen: Settings84055Navigator },
Settings84053: { screen: Settings84053Navigator },
SignIn284051: { screen: SignIn284051Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
