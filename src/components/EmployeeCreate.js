import React, { Component } from 'react';
import { Card, Input, CardSection, Button } from './common';

class EmployeeCreate extends Component{
  render() {
    return(
      <Card>

        <CardSection>
          <Input
            label="Name"
            placeholder="Srivatsa"
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
          />
        </CardSection>


        <CardSection>

        </CardSection>

        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default EmployeeCreate;
