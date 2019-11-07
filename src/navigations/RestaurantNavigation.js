import HomeScreen from '../screens/Restaurant/Home/HomeScreen';
import RecipeScreen from '../screens/Restaurant/Recipe/RecipeScreen';
import {createStackNavigator } from 'react-navigation-stack';

export default RestaurantNavigator = createStackNavigator(
    {
      Home: HomeScreen,
      Recipe: RecipeScreen,
    },
    {
      initialRouteName: 'Home',
    }
  );
  