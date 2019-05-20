import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { usernmaechange, passwordchange } from "../redux/actions";

class Loginform extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onUsernameChange(text) {
    this.props.usernmaechange(text);
  }
  onPasswordChange(text) {
    this.props.passwordchange(text);
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TextInput
          placeholder="username"
          style={{ borderWidth: 2, padding: 5 }}
          onChangeText={this.onUsernameChange.bind(this)}
          value={this.props.username}
        />
        <TextInput
          placeholder="password"
          style={{ borderWidth: 2, padding: 5 }}
          secureTextEntry={true}
          onChangeText={this.onPasswordChange.bind(this)}
          value={this.props.password}
        />
        <TouchableOpacity style={{ backgroundColor: "blue", margin: 10 }}>
          <Text style={{ margin: 20, textAlign: "center", color: "red" }}>
            {" "}
            Login
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    username: state.auth.username,
    password: state.auth.password
  };
};

export default connect(
  mapStateToProps,
  { usernmaechange, passwordchange }
)(Loginform);
