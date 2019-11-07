import React from 'react';
import { FlatList,TextInput,StatusBar, Text, View, TouchableHighlight, Image } from 'react-native';
import styles from './styles';
import { recipes } from '../../../data/dataArrays';
import BackButton from '../../../components/BackButton/BackButton';
const HEADER_HEIGHT = 110
let titleData
export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      receipeSearch:'',
      data:recipes
    }
    titleData = this.props.navigation.getParam('data','Breakfast')
  }

  static navigationOptions = {
    header: null
  }

  searchFilterFunction = text => {    
    const newData = recipes.filter(item => {      
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
         <View style={{flexDirection:'row'}}>
              <BackButton
              title={'Receipe'}
                onPress={() => {
                  this.props.navigation.goBack();
                }}
              /> 
          <View style={{backgroundColor:'#fff',width:'60%', height:42,margin:16,marginTop:32,borderRadius:8,paddingLeft:12}}>
            <TextInput 
                  style={styles.assuredInput}
                  underlineColorAndroid="transparent"
                  onChangeText={txt => {
                    this.searchFilterFunction(txt)
                    this.setState({receipeSearch:txt})
                  }}
              />
          </View>
          </View>
         <Text style={[styles.title,{fontSize:18,alignSelf:'center',  position:'absolute',bottom:8}]}>{titleData}</Text>
      </View>
    )
  }

  renderFooter=()=>{
    return(
      <View style={{height:120,width:'100%'}}/>
    )
  }

  onPressRecipe = item => {
    this.props.navigation.navigate('Recipe', { item });
  };

  renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressRecipe(item)}>
      <View style={styles.container}>
        <Image style={styles.photo} source={ item.photo_url } />
        {/* <Text style={styles.title}>{item.title}</Text> */}
        <Text style={[styles.category,{marginTop:12}]}>{item.title}</Text>
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
          keyExtractor={item => `${item.recipeId}`}
          ListFooterComponent={()=>this.renderFooter()}
        />
      </View>
    );
  }
}
