import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
  state = { userid: '', password: '' };
  onButtonPress() {
    //login functionality here
    const { userid, password } = this.state;
    fetch('<URL>', {
          method: 'POST',
          headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'},
          body: JSON.stringify({'username': {this.state.userid}}, 'password':{this.state.password}})
        })
        .then((incoming) => incoming.json())
        .then((response) => {
          console.log(response.header);
          Alert.alert(JSON.stringify(response.body));
        })
        .done();
}
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@email.com"
            label="User Id:"
            value={this.state.userid}
            onChangeText={userid => this.setState({ userid })}
          />
        </CardSection>
        <CardSection>
        <Input
          secureTextEntry
          placeholder="password"
          label="Password:"
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
        </CardSection>
        <CardSection>
         <Button onPress={this.onButtonPress.bind}>
          Log In
         </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
