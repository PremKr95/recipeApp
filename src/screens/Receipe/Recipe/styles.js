import { StyleSheet, Dimensions } from 'react-native';

const { width: viewportWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f4f4',
    flex: 1
  },
  carouselContainer: {
    minHeight: 250,
    flex:1
  },
  carousel: {},

  image: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: 250
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    width: viewportWidth,
    height: 250
  },
  paginationContainer: {
    flex: 1,
    position: 'absolute',
    alignSelf: 'flex-end',
    paddingVertical: 8,
    marginTop: 200
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 0
  },
  infoRecipeContainer: {
    flex: 1,
    margin: 25,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width:'100%',
    // paddingVertical:12,
    elevation:3
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  infoPhoto: {
    height: 20,
    width: 20,
    marginRight: 0
  },
  infoRecipe: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'FallingSky',
    marginLeft: 5,
    color:'#73c700'
  },
  category: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'FallingSky',
    margin: 10,
    color: '#2cd18a'
  },
  infoDescriptionRecipe: {
    textAlign: 'left',
    fontSize: 16,
    fontFamily: 'FallingSky',
    marginTop: 30,
    margin: 15
  },
  infoRecipeName: {
    fontSize: 28,
    fontFamily: 'FallingSky',
    margin: 10,
    fontWeight: 'bold',
    position:'absolute',
    color: '#fff',
    textAlign: 'center',
    bottom:8,

  },
  backButton: {
    fontSize: 28,
    fontFamily: 'FallingSky',
    margin: 10,
    fontWeight: 'bold',
    position:'absolute',
    color: '#fff',
    textAlign: 'center',
    top:24,
    flexDirection:'row'
  }
});

export default styles;
