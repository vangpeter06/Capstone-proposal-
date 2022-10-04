import React, { Component } from 'react';
import { Button, View } from 'react-native';


class CreateComponent extends Component {
    render() {
        return (
          <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
            <Button
              title="Create"
              onPress={() => this.props.navigation.navigate('CreateComponent')}
              color="#5219ac"
            />
          </View>
        );
    }  
}

export default CreateComponent;