import React from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  TouchableHighlight,
  StatusBar
} from 'react-native';
import styles from './styles';
import {Icon} from 'native-base'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import BackButton from '../../../components/BackButton/BackButton';
import ViewIngredientsButton from '../../../components/ViewIngredientsButton/ViewIngredientsButton';
import Ingredient from '../Ingredient/Ingredient'
const { width: viewportWidth } = Dimensions.get('window');
let title
import {receipeDescription} from '../../../data/dataArrays'

export default class RecipeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0
    };
    // title = this.props.navigation.getParam('data','no data')
    // console.log("TCL: RecipeScreen -> constructor -> title", title)
  }

  static navigationOptions = {
    header: null
  }

  renderImage = ({ item }) => (
    <TouchableHighlight>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={item } />
      </View>
    </TouchableHighlight>
  );

  renderItem=(item)=>{
    const _item = item.item
    return(
    <View style={{flexDirection:'row',padding:16,borderTopColor:item.index===0 ? '#fff' :'#D8D8D8',borderTopWidth:1}}>
        <Text style={{fontSize:17,lineHeight:23,color:'#999999'}}>{item.index+1}</Text>
        <Text style={{fontSize:17,lineHeight:23,color:'#000000',marginLeft:12}}>{_item.title}</Text>
    </View>)
  }


  openModal=()=>{
    var temp = this.ingredientObj
    if(temp!==undefined) temp.openModal()
  }

  render() {
    const { activeSlide } = this.state;
    const { navigation } = this.props;
    const item = navigation.getParam('item');
    console.log("TCL: RecipeScreen -> render -> item", item)
    
    return (
      <View style={{flex:1,backgroundColor:'red'}}>
      <StatusBar hidden={true}/>
      <ScrollView style={styles.container}>
        <View style={styles.carouselContainer}>
          <View style={styles.carousel}>
            <Carousel
              ref={c => {
                this.slider1Ref = c;
              }}
              data={item.photosArray}
              renderItem={this.renderImage}
              sliderWidth={viewportWidth}
              itemWidth={viewportWidth}
              inactiveSlideScale={1}
              inactiveSlideOpacity={1}
              firstItem={0}
              loop={false}
              autoplay={false}
              autoplayDelay={500}
              autoplayInterval={3000}
              onSnapToItem={index => this.setState({ activeSlide: index })}
            />
            <Pagination
              dotsLength={item.photosArray.length}
              activeDotIndex={activeSlide}
              containerStyle={styles.paginationContainer}
              dotColor="rgba(255, 255, 255, 0.92)"
              dotStyle={styles.paginationDot}
              inactiveDotColor="white"
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              carouselRef={this.slider1Ref}
              tappableDots={!!this.slider1Ref}
            />
          </View>
          <TouchableOpacity onPress={()=>this.props.navigation.goBack()} style={styles.backButton}>
                <Icon style={{color:'#fff'}} name={'ios-arrow-back'} type={'Ionicons'}/>
              <Text style={{color:'#fff',fontSize:18,marginLeft:6}}>{'Receipe'}</Text>
            </TouchableOpacity>
            <Text style={styles.infoRecipeName}>{item.title}</Text>
        </View>

        <View style={[styles.infoContainer,{backgroundColor:'#fff',paddingVertical:16,paddingHorizontal:32, justifyContent:'space-between'}]}>
            
            <Ingredient
              ref = {ingredientObj=>{this.ingredientObj=ingredientObj}}
            />
            <View style={{alignItems:'center'}}>
            <Icon style={{fontSize:20 , color:'#73c700'}} name={'restaurant'} type={'MaterialIcons'}/>
              <Text style={styles.infoRecipe}>{item.time} people </Text>
            </View>
            <View style={{alignItems:'center'}}>
             <Icon style={{fontSize:32,color:'#73c700'}} name={'ios-clock'} type={'Ionicons'}/>
              <Text style={styles.infoRecipe}>{item.time} minutes </Text>
            </View>
          </View>

        <View style={styles.infoRecipeContainer}>
         
          <View style={styles.infoContainer}>
            <ViewIngredientsButton
              title={'See Ingredients'}
              onPress={() => {
                let ingredients = item.ingredients;
                let titles = 'Ingredients for ' + item.title;
                this.openModal(ingredients,titles)
                // navigation.navigate('IngredientsDetails', { ingredients, title });
              }}
            />
          </View>
          <View style={styles.infoContainer}>
            <FlatList
                style={{marginTop:16,borderRadius:8,backgroundColor:'#fff'}}
                data={receipeDescription}
                renderItem={this.renderItem}
                keyExtractor={(item,index)=>index.toString()}
            />
          </View>

         
        </View>
      </ScrollView>
       
       </View>       
    );
  }
}

/*cooking steps
<View style={styles.infoContainer}>
  <Image style={styles.infoPhoto} source={require('../../../assets/icons/info.png')} />
  <Text style={styles.infoRecipe}>Cooking Steps</Text>
</View>
<Text style={styles.infoDescriptionRecipe}>{item.description}</Text>
*/
