import React, { Component } from 'react'
import { Container, Content, Picker } from 'native-base'


export default class sort extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            selected1: 'key1',
            results: {
                items: [ ]
            }
        }
    }
    onValueChange (value: string) {
        this.setState({
            selected1 : value
        });
    }

    render() {
        return (
            <Container>
                <Content>
                    <Picker
                        iosHeader="Select one"
                        mode="dropdown"
                        selectedValue={this.state.selected1}
                        onValueChange={this.onValueChange.bind(this)}>
                        <Picker.Item label="Cats" value="key0" />
                        <Picker.Item label="Dogs" value="key1" />
                        <Picker.Item label="Birds" value="key2" />
                        <Picker.Item label="Elephants" value="key3" />
                   </Picker>
                </Content>
            </Container>
        );
    }
}
