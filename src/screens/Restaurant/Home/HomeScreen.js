import React from 'react';
import { FlatList,TouchableOpacity, TextInput,StatusBar,StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import Permission from '../../../utils/Permission'
import MapView,{PROVIDER_GOOGLE} from 'react-native-maps'
import { recipes } from '../../../data/dataArrays';
const HEADER_HEIGHT = 132
export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      receipeSearch:'',
      permissionAccept: false,
      marker: {
          lat: 0,
          lng: 0,
      },
    }
  }

  componentDidMount(){
    this.askLocationPermission()
  }

  static navigationOptions = { header: null }

  askLocationPermission() {
    Permission.checkLocationPermission(
        Permission => {
        console.log("TCL: HomeScreen -> askLocationPermission -> Permission", Permission)
            this.setState({
                permissionAccept: true
            });
            this.fetchCurrentLocation();
        },
        deniedPermission => {

        }
    );
  }

  fetchCurrentLocation() {
    console.log("TCL: HomeScreen -> fetchCurrentLocation -> fetchCurrentLocation")
    navigator.geolocation.getCurrentPosition(
        position => {
            console.log(" Lat", position)
            console.log(" Long", JSON.stringify(position))
            // this.setState({
            //     marker: {
            //         lat: position.coords.latitude,
            //         lng: position.coords.longitude,
            //     },
            //     region: this.state.marker
            // }, () => {
            //     console.log(" Marker lat", this.state.marker.lat)
            //     console.log(" Marker lat", this.state.marker.lng)
            // });
        },
        error => {
        console.log("TCL: HomeScreen -> fetchCurrentLocation -> error", error)
        },
        { enableHighAccuracy: false, timeout: 200000 }
    );
  }

  searchFilterFunction = text => {    
    const newData = this.arrayholder.filter(item => {      
      const itemData = `${item.name.title.toUpperCase()}   
      ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
       const textData = text.toUpperCase();
       return itemData.indexOf(textData) > -1;    
    });
    this.setState({ data: newData });  
  };

  renderHeader=()=>{
    return(
      <View style={{height:HEADER_HEIGHT,width:'100%',backgroundColor:'#73c700'}}>
          <View style={{backgroundColor:'#fff',height:42,margin:16,marginTop:32,borderRadius:8,paddingLeft:12}}>
            <TextInput 
                style={styles.assuredInput}
                underlineColorAndroid="transparent"
                onChangeText={txt => {
                  this.setState({receipeSearch:txt})
                }}
            />
          </View>
         <Text style={[styles.title,{fontSize:32,  position:'absolute',bottom:12}]}>{"Restaurant"}</Text>
      </View>
    )
  }

  onPressRecipe = item => {
    this.props.navigation.navigate('Recipe', { item });
  };


  renderItem=(item)=>{
    return(
      <TouchableOpacity onPress={()=>this.onPressRecipe(item.item)} style={{flexDirection:'row', elevation:3, height:100,width:'100%',backgroundColor:'#fff',borderRadius:8,marginTop:12}}>
            <View style={{width:'60%' , padding:16}}>
                <Text style={{fontSize:18,color:'#000000',fontWeight:'500'}}>{'Pizza Planet'}</Text>
                <Text style={{fontSize:18,color:'#D8D8D8'}}>{'French'}</Text>
            </View>

            <View style={{justifyContent:'center',alignItems:'center', width:'40%'}}>
                <Image style={{height:80,width:120,borderRadius:8}} source={require('../../../../assets/icons/res_one.png')}/>
            </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={{flex:1}}>
        {/* <StatusBar hidden={true}/> */}
        {this.renderHeader()}
        <MapView
            style={{ flex:1 }}
            initialRegion={{
              latitude: 37.78825,
              latitudeDelta: 0.0922,
              longitude: -122.4324,
              longitudeDelta: 0.0421
            }}
          />

          <FlatList
             extraData={this.state}
             style={{ padding: 16,
              width: '100%',
              height:'60%',
              position: 'absolute',
              bottom: "2%",}}
             data={recipes}
             renderItem={this.renderItem}
             keyExtractor = {(item, index) => index.toString()}
           />
      </View>
    );
  }
}
