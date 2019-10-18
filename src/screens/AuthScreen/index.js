import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { facebookLogin } from './actions';

class AuthScreen extends Component {
  componentDidMount() {
    this.props.FBLogin();
    this.onAuthComplete(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    if (props.token) {
      this.props.navigation.navigate('map');
    }
  }

  render() {
    return (
      <View />
    );
  }
}

function mapStateToProps({ auth }) {
  return { token: auth.token };
}

const mapDispatchToProps = {
  FBLogin: facebookLogin
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);
