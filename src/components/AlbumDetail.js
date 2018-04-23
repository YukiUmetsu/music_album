import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Card from './Card';

export default class AlbumDetail extends Component {

    album = this.props.album;

    render(){
        return (
            <Card>
                <Text>{this.album.title}</Text>
            </Card>
        );
    }
}
