import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default class App extends React.Component {
  state={
    email:"",
    password:""
  }
  render(){
    return (
      <View style={styles.container}>
        <Image source={require('./binance.png')}
                style={{ width: 150, height: 120 }}
          />
        <Text style={{ color: 'white', }}>Email</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <Text style={{ color: 'white', }}>Password</Text>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
        <Text style={styles.account}>Don't have an account yet? </Text>
        <TouchableOpacity>
          <Text style={styles.forgot}>Register</Text>
        </TouchableOpacity>

  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14141e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView:{
    width:"80%",
    backgroundColor:"#212733",
    borderRadius:5,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white"
  },
  account:{
    color:"white",
    fontSize:11
  },
  forgot:{
    color:"#F0B90B",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#F0B90B",
    borderRadius:5,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"white"
  }
});