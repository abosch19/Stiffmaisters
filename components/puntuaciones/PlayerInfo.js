import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    PixelRatio
} from 'react-native'

import Points from './Points'

class PlayerInfo extends Component {
    render (){
        return (
            <View style={{flex: 1, marginTop: 50}}>
                <Header points={138} matches={10} goals={17} />
                <View style={styles.points}>
                    <Points />
                </View>
            </View>
        )
    }
}
 export default PlayerInfo


class Header extends Component {
    render () {
        return (
            <View style={styles.header}>
                <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
                    <Image
                        style={styles.img}
                        source={require('../../images/6.Vosk.jpg')}
                    />
                </View>
                <View style={styles.info}>
                    <InfoContainer title='PUNTOS' number={this.props.points} />
                    <InfoContainer title='MEDIA' number={this.props.points/this.props.matches} />
                    <InfoContainer title='PARTIDOS' number={this.props.matches} />
                    <InfoContainer title='GOLES' number={this.props.goals} />
                </View>
            </View>
        )
    }
}

class InfoContainer extends Component {
    render () {
        return (
            <View style={styles.infoContainer}>
                <Text style={[styles.white, styles.bold]}>{this.props.number}</Text>
                <Text style={styles.white}>{this.props.title}</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: '#2980b9'
    },
    points: {
        flex: 2,
        padding: 3
    },
    img: {
        width: 70,
        height: 70,
        borderRadius: 70/PixelRatio.get()
    },
    info: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    infoContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    bold: {
        fontWeight: 'bold',
        marginBottom: 5,
        fontSize: 14
    },
    white: {
        color: 'white'
    }
})
