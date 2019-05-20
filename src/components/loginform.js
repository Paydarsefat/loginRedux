import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { connect } from "react-redux";
import { usernmaechange, passwordchange, userlogin } from "../redux/actions";

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
  onUserlogin() {
    const { username, password } = this.props;
    this.props.userlogin(username, password);
  }
  renderbtn() {
    if (this.props.loading) {
      return <ActivityIndicator />;
    } else {
      return (
        <TouchableOpacity
          style={{ backgroundColor: "blue", margin: 10 }}
          onPress={this.onUserlogin.bind(this)}
        >
          <Text style={{ margin: 20, textAlign: "center", color: "red" }}>
            {" "}
            Login
          </Text>
        </TouchableOpacity>
      );
    }
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
        {this.renderbtn()}
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    username: state.auth.username,
    password: state.auth.password,
    loading: state.auth.loading
  };
};

export default connect(
  mapStateToProps,
  { usernmaechange, passwordchange, userlogin }
)(Loginform);
