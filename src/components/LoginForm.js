import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';


class LoginForm extends Component{
  onEmailChange(text){

  }


  render() {
    return(
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>
          <Input
            secureTextEntry
            label="password"
            placeholder="password"
          />
        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>

        <CardSection>

        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
