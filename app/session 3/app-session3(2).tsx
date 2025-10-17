import React, { Component } from "react";
import { Button, Text, View } from "react-native";

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    increaseCount = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <View>
                <Text>Count: {this.state.count}</Text>
                <Button title="Increase" onPress={this.increaseCount} />
            </View>
        );
    }
}

export default Counter;