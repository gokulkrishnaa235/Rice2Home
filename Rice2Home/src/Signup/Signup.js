import React,{Component} from 'react';
import { StyleSheet,View,Text,TextInput,Dimensions,Image,TouchableOpacity,ImageBackground} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { NavigationActions } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';





import {style} from './Style';

export default class Signup extends React.Component {

    state = {
        style:style,
        width:Dimensions.get("window").width,
        height:Dimensions.get("window").height,
        loading:true,
       
    }

   
    constructor(props)
    {
        super(props);
    
    }

    static navigationOptions = {
            header: null
    }

    login(){
        const {navigate} = this.props.navigation;
        navigate("Home");
    }   


    signUp(){
        const {navigate} = this.props.navigation;
        navigate("Login");

    }


   
    render()
    {
       

    
        return (
            <View style={this.state.style.loginpage} >
                <ImageBackground source={require("../Images/loginImage.jpg")}  style={this.state.style.splashStyle}>
                    <Text style={this.state.style.logintext}></Text>
                    <View style={this.state.style.inputs}>
                    <Text style={this.state.style.centername}>EMAIL</Text>
                    <TextInput style={this.state.style.username}  onChangeText={ (text) => this.setState({"userName":text}) }  underlineColorAndroid="#6090"  />
                    </View>
                    <View style={this.state.style.inputs}>
                    <Text style={this.state.style.centername}>SHOP NAME</Text>
                    <TextInput style={this.state.style.username}  onChangeText={ (text) => this.setState({"userName":text}) }  underlineColorAndroid="#6090"  />
                    </View>
                    <View style={this.state.style.inputs}>
                    <Text style={this.state.style.centername}>GST NO</Text>
                    <TextInput style={this.state.style.username}  onChangeText={ (text) => this.setState({"userName":text}) }  underlineColorAndroid="#6090"  />
                    </View>
                    <View style={this.state.style.inputs}>
                    <Text style={this.state.style.centername}>PASSWORD</Text>
                    <TextInput secureTextEntry={true} onChangeText={ (text) => this.setState({"password":text}) }  style={this.state.style.username}  underlineColorAndroid="#6090"  />
                    </View>
                    <View style={this.state.style.inputs}>
                    <Text style={this.state.style.centername}>ADDRESS</Text>
                    <TextInput  onChangeText={ (text) => this.setState({"password":text}) }  style={this.state.style.username}  underlineColorAndroid="#6090"  />
                    </View>
                    <View style={this.state.style.inputs}>
                    <Text style={this.state.style.centername}>MOBILE NO</Text>
                    <TextInput  onChangeText={ (text) => this.setState({"password":text}) }  style={this.state.style.username}  underlineColorAndroid="#6090"  />
                    </View>
                  
                
                    <View style={this.state.style.inputs}>
                    <TouchableOpacity  style={this.state.style.loginbtn} onPress={ function(){ this.signUp() }.bind(this) }>
                    <Text style={this.state.style.loginbtnlabel}>SIGN UP</Text>
                    </TouchableOpacity>
                    </View>
                    
                    

            </ImageBackground>
          
            </View>

        )
    }


}