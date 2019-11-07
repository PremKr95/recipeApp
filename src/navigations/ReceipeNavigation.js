import {createStackNavigator } from 'react-navigation-stack';
import Categories from '../screens/Receipe/Categories/Categories';
import HomeScreen from '../screens/Receipe/Home/HomeScreen';
import RecipeScreen from '../screens/Receipe/Recipe/RecipeScreen';
export default ReceipeNavigator = createStackNavigator(
    {
      Home: HomeScreen,
      Recipe: RecipeScreen,
      Categories: Categories,
    },
    {
      initialRouteName: 'Categories',
    }
  );
  