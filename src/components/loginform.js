import React, { Component } from 'react';
import { View,Text, TextInput,TouchableOpacity } from 'react-native';

class Loginform extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  usernamechange(text){

  }

  render() {
    return (
      <View style={{flex:1}}>
        <TextInput placeholder="username" style={{backgroundColor:'gary',borderWidth:2}}
        onChangeText={this.usernamechange.bind(this)}/>
        <TextInput placeholder="password"  style={{backgroundColor:'gary',borderWidth:2}} secureTextEntry={true} />
        <TouchableOpacity style={{backgroundColor:'blue'}}
        >
            <Text> Login</Text>
        </TouchableOpacity>


      </View>
    );
  }
}

export default Loginform;
