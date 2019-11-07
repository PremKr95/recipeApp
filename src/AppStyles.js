import { StyleSheet, Dimensions } from 'react-native';

// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT = 150;
const RECIPE_ITEM_MARGIN = 20;

// 2 photos per width
export const RecipeCard = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: RECIPE_ITEM_MARGIN,
    marginTop: 20,
    width: (SCREEN_WIDTH - 32),
    height: RECIPE_ITEM_HEIGHT + 75,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 15
  },
  photo: {
    width: (SCREEN_WIDTH - 32),
    height: RECIPE_ITEM_HEIGHT + 75,
    borderRadius: 15,
  },
  title: {
    flex: 1,
    fontFamily: 'SFProDisplay',
    fontSize: 18,
    position:'absolute',
    color: '#fff',
    marginTop: 12,
    marginRight: 5,
    marginLeft: 16,
  },
  category: {
    flex: 1,
    fontFamily: 'SFProDisplay',
    fontSize: 24,
    position:'absolute',
    color: '#fff',
    marginTop: 40,
    fontWeight:'bold',
    marginRight: 5,
    marginLeft: 16,
  }
});
