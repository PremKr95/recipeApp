import React from 'react';
import {
  FlatList,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import styles from './styles';
import {Icon} from 'native-base'
import Carousel, { Pagination } from 'react-native-snap-carousel';
import BackButton from '../../../components/BackButton/BackButton';
import ViewIngredientsButton from '../../../components/ViewIngredientsButton/ViewIngredientsButton';
import MapView from 'react-native-maps'
import Booking from '../Booking/Booking'
import {connect} from 'react-redux'
import {incrementvalue} from '../../../redux/actions/incrementAction'
import {decrementvalue} from '../../../redux/actions/decrementAction'
const { width: viewportWidth } = Dimensions.get('window');
let title
class RecipeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTransparent: 'true',
      headerLeft: (
        <BackButton
          title={title}
          onPress={() => {
            navigation.goBack();
          }}
        />
      )
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
    };
  }

  renderImage = ({ item }) => (
    <TouchableHighlight>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={ item } />
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


  openModal=(item,title)=>{
    var temp = this.bookingObj
    if(temp!==undefined) temp.openModal(item,title)
  }


  render() {
    const {incrementCount , decrementCount} = this.props
    const initialValueis = this.updatedFlag ? incrementCount: decrementCount
    const { activeSlide } = this.state;
    const { navigation } = this.props;
    const item = navigation.getParam('item')

    let latest = this.state.updatedFlag ? incrementCount : decrementCount

    return (
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
            <Text style={styles.infoRecipeName}>{'Pizza Planet'}</Text>
        </View>

       
        <View style={[styles.infoContainer,{ backgroundColor:'#fff',paddingVertical:16,paddingHorizontal:32, justifyContent:'space-between'}]}>
            
            <Booking
               ref={bookingObj=>{this.bookingObj=bookingObj}}
               {...this.props}
               onPlusIconPress={()=> {
                this.setState({updatedFlag:true},()=>{
                  this.props.incrementvalue(latest)
                })} }
                onMinusIconPress={()=> {
                  this.setState({updatedFlag:false},()=>{
                    this.props.decrementvalue(latest)})
                }} 
                numberOfPeople={latest}
            />  

            <View style={{alignItems:'center'}}>
              <Icon style={{fontSize:32,color:'#73c700'}} name={'dollar-bill'} type={'Foundation'}/>
              <Icon style={{fontSize:18,color:'#73c700'}} name={'euro'} type={'Foundation'}/>
            </View>
            <View style={{alignItems:'center'}}>
            <Icon style={{fontSize:32,color:'#73c700'}} name={'ios-clock'} type={'Ionicons'}/>
              <Text style={styles.infoRecipe}>{item.time} minutes </Text>
            </View>
        </View>

        <View style={styles.infoRecipeContainer}>
         
        <MapView
            style={{backgroundColor:'red', flex:1 }}
            initialRegion={{
              latitude: 37.78825,
              latitudeDelta: 0.0922,
              longitude: -122.4324,
              longitudeDelta: 0.0421
            }}
          />

          <View style={styles.infoContainer}>
            <ViewIngredientsButton
              title={'Make Reservation'}
              onPress={() => { this.openModal(item,title) }}/>
          </View>
         
          <View style={styles.infoContainer}>
             <Text style={{elevation:2.5,borderRadius:8, lineHeight:24,marginTop:16, backgroundColor:'#fff',fontSize:16,color:'#000000',padding:16}}>{'The restaurant was degraded to a 4-star rating after feared food critic Anton Ego (possibly deliberately) wrote a scathing review regarding Gusteau’s cooking.'}</Text>
          </View>
          
          <Text style={{elevation:2.5,borderRadius:8, lineHeight:24,marginTop:16, backgroundColor:'#fff',fontSize:16,color:'#000000',padding:16}}>{'The restaurant was degraded to a 4-star rating after feared food critic Anton Ego (possibly deliberately) wrote a scathing review regarding Gusteau’s cooking.'}</Text>

         
        </View>
      </ScrollView>
    );
  }
}


mapStateToProps=(props)=>({
  incrementCount : props.incrementReducer.initialValue,
  decrementCount : props.decrementReducer.initialValue
})   
mapDispatchToProps={
  incrementvalue , 
  decrementvalue
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeScreen)