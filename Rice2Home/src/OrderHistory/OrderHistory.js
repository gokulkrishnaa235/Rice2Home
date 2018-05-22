                import React,{Component} from 'react';
                import { StyleSheet,View,Image,ScrollView } from 'react-native';
                import { StackNavigator } from 'react-navigation';
                import { NavigationActions } from 'react-navigation';
                import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body ,
                    Left, Right, Button, Icon, Title,Item, Input
                } from 'native-base';

                import {style} from './Style';
    import { black } from 'material-ui/styles/colors';

                export default class OrderHistory extends React.Component {


                    state = {
                        style:style,
                    
                        
                    }

                    constructor(props)
                    {
                        super(props);
                    
                    }

                    static navigationOptions = {
                        
                    }

                
                    render()
                    {
                        let a =[1,2.3,5,6,7,8,9,10,11,12,13,14,15];
                    
                        return (

                        <ScrollView  style={{ width:"100%",height:"100%"}}>
    {a.map((value)=>{
        return(
        <View key={value} style={{borderColor:"#E3E3E3",
                            width:"100%",
                            height:160,
                            borderStyle:"solid",
                            borderWidth:2,
                            backgroundColor:'white'}}>
                             <Text style={{fontWeight: "bold",fontSize:15}}>Shivaji Brand</Text>
                            <View style={{flex:1,flexDirection:'row'}}>
                        <Image source={require("../Images/splash.jpg")}  style={{width:80,height:80,marginTop:20}}/>
                        <View style={{flex:1,flexDirection:'column',marginTop:20,paddingLeft:10}}>
                        <View style={{justifyContent:'space-between',flexDirection:'row'}}>
                        <Text style={{fontSize:15}}>Type 1 </Text>
                        <Text style={{fontWeight: "bold",fontSize:15}}>50 per kg</Text>
                        </View>
                        <View style={{justifyContent:'space-between',flexDirection:'row'}}>
                        <Text  style={{fontSize:15}}>Type two Type two </Text>
                        <Text style={{fontWeight: "bold",fontSize:15}}>50 per kg</Text>
                        </View>
                        <View style={{justifyContent:'space-between',flexDirection:'row'}}>
                        <Text  style={{fontSize:15}}>Type three type three type three </Text>
                        <Text style={{fontWeight: "bold",fontSize:15}}>50 per kg</Text>
                        </View>
                        
                        </View>
                        </View>



                        </View>

    )})}
                            

                        </ScrollView >
                        )
                    }


                }