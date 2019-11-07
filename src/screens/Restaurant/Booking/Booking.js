import React, { Component } from 'react';
import { Modal,View,Text,FlatList,Image,TouchableOpacity} from "react-native";
import styles from './styles'
import {time} from '../../../data/dataArrays'


class Booking extends Component {
    
    constructor(props){
        super(props)
        this.state={
            modalVisible:false,
            item:'',
            title:'',
            count:1,
            timeArr : time
        }
    }

    componentDidMount(){
        const {tempArr}= this.state
        tempArr!==undefined && 
            tempArr.map(item=>{
                item.selected = false
            })
    }

    openModal(item,title){
        this.setState({modalVisible:true , item: item , title:title })
    }

    closeModal(){
        this.setState({modalVisible:false})
    }

    updateData=(index)=>{
        let tempArr = this.state.timeArr
        console.log("TCL: Booking -> updateData -> tempArr", tempArr,index)
        tempArr.map(item=>{
            item.selected = false
        })
        tempArr[index].selected = true
        this.setState({timeArr:tempArr})
    }

    componentWillUnmount(){
 
    }

    renderItem=(item)=>{
        const _item = item.item
        return(
            <TouchableOpacity onPress={()=>this.updateData(item.index)} style={{height:48,width:120,marginTop:12 , backgroundColor:_item.selected ?  '#73c700' : '#d9faac',borderRadius:8 , marginLeft:8 , justifyContent:'center',alignItems:'center' }}>
            <View style={{padding:16}}>
                <Text style={{fontSize:18,color:'#000000',fontWeight:'500'}}>{_item.title}</Text>
            </View>
        </TouchableOpacity>
        )
      }

    renderHeader=()=>{
        return(
        <View style={{padding:16, flexDirection:'row', width:'100%',borderBottomColor:'#D8D8D8',borderBottomWidth:1, justifyContent:'center', borderTopLeftRadius:8,borderTopRightRadius:8, backgroundColor:'#fff'}}>
            <TouchableOpacity style={{position:'absolute',left:16,top:16, }} onPress={()=>this.closeModal()}>
                <Image resizeMode={'contain'} style={{height:20,width:20}} source={require('../../../../assets/icons/backArrow.png')}/>
            </TouchableOpacity>
            <Text style={{fontSize:17,lineHeight:23,color:'#000000'}}>{'Reservation'}</Text>
        </View>)
    }
 
    render() { 
        const {item,title}= this.state
        console.log("TCL: Booking -> render -> title",item, title)

        return (
            <Modal
                animationType="slide"
                visible={this.state.modalVisible}
                backdropOpacity={0.1}
                backgroundColor={'black'}
                transparent={true}
                onBackdropPress={() => this.setState({ modalVisible: false })}
                onRequestClose={() => this.setState({ modalVisible: false })}>
                <View style={{ height:'70%',width:'100%',  backgroundColor: 'rgba(152,152,152,0.5)',borderTopLeftRadius:8,borderTopRightRadius:8,alignSelf:'flex-end',position:'absolute',bottom:0,  justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                    <View style={{width: '100%',height:'100%', alignSelf: 'center',borderTopLeftRadius:8,borderTopRightRadius:8, backgroundColor: 'white'}}>
                    
                    {this.renderHeader()}

                     <TouchableOpacity onPress={()=>this.onPressRecipe(item.item)} style={{flexDirection:'row', height:100,width:'100%',marginTop:12}}>
                            <View style={{width:'60%' , padding:16}}>
                                <Text style={{fontSize:18,color:'#000000',fontWeight:'500'}}>{'Pizza Planet'}</Text>
                                <Text style={{fontSize:18,color:'#D8D8D8'}}>{'French'}</Text>
                            </View>
 
                            <View style={{justifyContent:'center',alignItems:'center', width:'40%'}}>
                                <Image style={{height:80,width:120,borderRadius:8}} source={require('../../../../assets/icons/res_one.png')}/>
                            </View>
                    </TouchableOpacity>

                    <View style={{flexDirection:'row',borderRadius:8, backgroundColor:'#73c700' , width:'80%',padding:16,alignSelf:'center',justifyContent:'space-between'}}>
                       <TouchableOpacity onPress={()=>this.props.onMinusIconPress()}>
                            <Text  style={styles.txt}>{'-'}</Text>
                        </TouchableOpacity >
                            <Text style={styles.txt}>{this.props.numberOfPeople +" people"}</Text>
                        <TouchableOpacity onPress={()=>this.props.onPlusIconPress()}>
                            <Text style={styles.txt}>{'+'}</Text>
                        </TouchableOpacity>
                    </View>

                        <FlatList
                           style={{borderTopLeftRadius:8,borderTopRightRadius:8, backgroundColor:'#fff'}}
                           data={this.state.timeArr}
                           horizontal={true}
                           showsHorizontalScrollIndicator={false}
                           renderItem={(item)=>this.renderItem(item)}
                           keyExtractor={(item,index)=>index.toString()}
                        />

                    <TouchableOpacity style={{
                                        height: 50,
                                        width: 360,
                                        marginBottom:18,
                                        borderRadius: 8,
                                        backgroundColor: '#212121',
                                        alignSelf:'center',
                                        justifyContent: 'center',
                                        alignItems: 'center'}} >
                        <View style={{}}>
                             <Text style={{color:'#fff',fontWeight:'500',fontSize:20}}>{'Pay'}</Text>
                        </View>
                    </TouchableOpacity>
                    </View>                    
                </View>

            </Modal >
          );
    }
}





export default Booking