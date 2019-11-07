import React from 'react';
import { FlatList,TextInput,StatusBar, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import { types } from '../../../data/dataArrays';
const HEADER_HEIGHT = 132
export default class Categories extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      receipeSearch:'',
      data:types
    }
  }

  static navigationOptions = {
    header: null
  }

  searchFilterFunction = text => {    
    const newData = types.filter(item => {      
      const itemData = `${item.title.toUpperCase()}   
      ${item.title.toUpperCase()} ${item.title.toUpperCase()}`;
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
                  this.searchFilterFunction(txt)
                  this.setState({receipeSearch:txt})
                }}
            />
          </View>
         <Text style={[styles.title,{fontSize:32,  position:'absolute',bottom:12}]}>{"Receipe"}</Text>
      </View>
    )
  }

  onPressRecipe = item => {
    this.props.navigation.navigate('Home', {'data': item });
  };

  renderFooter=()=>{
    return(
      <View style={{height:140,width:'100%'}}/>
    )
  }


  renderRecipes = ({ item }) => (
  item!==undefined && 
  <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressRecipe(item.title)}>
      <View style={[styles.container,{height:300}]}>
        <Image style={[styles.photo,{flex:1}]} source={item.photo_url } />
        <Text style={styles.title}>{item.subTitle}</Text>
        <Text style={styles.category}>{item.title}</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <View>
        <StatusBar backgroundColor={'#73c700'}/>
        {this.renderHeader()}
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          data={this.state.data}        
          renderItem={this.renderRecipes}
          keyExtractor={(item,index) => index.toString()}
          ListFooterComponent={()=>this.renderFooter()}
        />
      </View>
    );
  }
}
