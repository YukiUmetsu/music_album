import React, { Component } from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from "./CardSection";
import Button from "./Button";

export default class AlbumDetail extends Component {

    album = this.props.album;

    render(){
        return (
            <Card>
                <CardSection>
                    <View style={styles.headerContentStyle}>
                        <Image
                            source={{uri: this.album.thumbnail_image}}
                            style={styles.thumbnailStyle}
                        />
                    </View>
                    <View style={styles.headerContentStyle}>
                        <Text style={styles.headerTextStyle}>{this.album.title}</Text>
                        <Text>{this.album.artist}</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <Image
                        style={styles.imageStyle}
                        source={{uri: this.album.image}}
                    />
                </CardSection>
                <CardSection>
                    <Button onPress={()=> Linking.openURL(this.album.url)}>Buy me</Button>
                </CardSection>
            </Card>
        );
    }
}


const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    headerTextStyle: {
      fontSize: 18,
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null,
    },
};