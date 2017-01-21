import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  PixelRatio,
  TouchableHighlight
} from 'react-native'

import PlayerInfo from '../puntuaciones/PlayerInfo'

class ListaPuntuacionesRow extends Component {

    _onPress () {
        this.props.navigator.push({
            component: PlayerInfo,
            title: this.props.name,
        })
    }

    render () {
        return (
            <TouchableHighlight onPress={this._onPress.bind(this)} underlayColor='lightgrey'>
                <View style={styles.container}>

                    <View style={styles.right}>
                        <Text style={[styles.bold, {marginRight: 10}]}>{this.props.position}º</Text>
                        <Image
                            style={styles.img}
                            source={require('../../images/6.Vosk.jpg')}
                        />
                        <Text style={styles.bold}>{this.props.name}</Text>
                    </View>
                    <View>
                        <Text style={{color: 'grey', fontWeight: 'bold'}}>{this.props.goals}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}

export default ListaPuntuacionesRow

const styles = StyleSheet.create({
    container: {
        height: 80,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'lightgrey'
    },
    img: {
        height: 50,
        width: 50,
        borderRadius: 50/PixelRatio.get(),
        marginRight: 10
    },
    right: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    bold: {
        fontWeight: 'bold'
    }
})
