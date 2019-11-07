import React, { Component } from 'react';
import { Modal,View,Text,FlatList,Image,TouchableOpacity} from "react-native";

const receipeDescription = [
    {title : 'Oil the waffle maker.'},
    {title : 'Sift the dry ingredients together in a large bowl.'},
    {title : 'In separate bowl, separate egg whites and beat until stiff peaks form.'},
    {title : 'Mix together the egg yolks, milk, oil, and vanilla, stir slightly.'}
  
  ]
export default class Ingredient extends Component {
    
    constructor(props){
        super(props)
        this.state={
            modalVisible:false
        }
    }

    openModal(){
        this.setState({modalVisible:true})
    }

    closeModal(){
        this.setState({modalVisible:false})
    }

    renderItem=(item)=>{
        const _item = item.item
        return(
        <View style={{flexDirection:'row',padding:16,borderTopColor:item.index===0 ? '#fff' :'#D8D8D8',borderTopWidth:1}}>
            <View style={{height:24,width:24,borderRadius:12,borderColor:'#73c700',borderWidth:2}}/>
            <Text style={{fontSize:17,lineHeight:23,color:'#000000',marginLeft:12,marginRight:16}}>{_item.title}</Text>
        </View>)
      }

    renderHeader=()=>{
        return(
        <View style={{padding:16, flexDirection:'row', width:'100%',borderBottomColor:'#D8D8D8',borderBottomWidth:1, justifyContent:'center', borderTopLeftRadius:8,borderTopRightRadius:8, backgroundColor:'#fff'}}>
            <TouchableOpacity style={{position:'absolute',left:16,top:16, }} onPress={()=>this.closeModal()}>
                <Image resizeMode={'contain'} style={{height:20,width:20}} source={require('../../../../assets/icons/backArrow.png')}/>
            </TouchableOpacity>
            <Text style={{fontSize:17,lineHeight:23,color:'#000000'}}>{'Ingredients'}</Text>
        </View>)
    }

    render() { 
        return (
            <Modal
                animationType="slide"
                visible={this.state.modalVisible}
                backdropOpacity={0.1}
                backgroundColor={'black'}
                transparent={true}
                onBackdropPress={() => this.setState({ modalVisible: false })}
                onRequestClose={() => this.setState({ modalVisible: false })}>
                <View style={{ height:'70%', backgroundColor: 'rgba(152,152,152,0.5)',borderTopLeftRadius:8,borderTopRightRadius:8,alignSelf:'flex-end',position:'absolute',bottom:0,  justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                    <View style={{width: '100%',height:'100%', alignSelf: 'center',borderTopLeftRadius:8,borderTopRightRadius:8, backgroundColor: 'white'}}>
                        <FlatList
                           style={{borderTopLeftRadius:8,borderTopRightRadius:8, backgroundColor:'#fff'}}
                           data={receipeDescription}
                           renderItem={this.renderItem}
                           keyExtractor={(item,index)=>index.toString()}
                           ListHeaderComponent={()=>this.renderHeader()}
                        />
                    </View>                    
                </View>

            </Modal >
          );
    }
}

 