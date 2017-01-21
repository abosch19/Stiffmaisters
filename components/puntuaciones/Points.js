import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Dimensions
} from 'react-native'

class Points extends Component {
    constructor (props) {
        super(props)

        this.state = {
            points: [10,18,14,10,22,18,6,-2, 15]
        }
    }

    renderBannerPoints () {
        let points = this.state.points.map((points, i) => {
            return <PointsBanner key={i} points={points} match={i + 1} goals={2}/>
        })

        return points
    }

    render () {
        return (
            <ScrollView style={{flex: 1}} automaticallyAdjustContentInsets={false}>
                {this.renderBannerPoints()}
            </ScrollView>
        )
    }
}

export default Points


class PointsBanner extends Component {

    constructor (props) {
        super(props)

        this.state = { negative: false }
        if (this.props.points < 0) this.state = { negative: true }
    }

    renderPoints () {
        let { widthScreen } = Dimensions.get('window')
        console.log(widthScreen)
        const width = this.state.negative ? 38 : 13*this.props.points
        const justifyContent = this.state.negative ? 'flex-end' : 'flex-start'
        return (
            <View style={[styles.points, {width: width, justifyContent: justifyContent}]}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>{this.props.points}</Text>
            </View>
        )

    }

    render () {
        const paddingLeft = this.state.negative ? 0: 40
        return (
            <View style={styles.banner}>
                <View style={styles.number}>
                    <Text style={{color: 'grey', fontWeight: 'bold'}}>{this.props.match}</Text>
                </View>
                <View style={{flex: 10, paddingLeft: paddingLeft, overflow: 'hidden', borderRadius: 3}}>
                    {this.renderPoints()}
                </View>
                <View style={styles.number}>
                    <Text style={{color: '#3498db', fontWeight: 'bold'}}>{this.props.goals}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    banner: {
        backgroundColor: '#ecf0f1',
        marginVertical: 1,
        height: 25,
        flexDirection: 'row',
    },
    number: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    points: {
        height: 25,
        flexDirection: 'row',
        backgroundColor: '#27ae60',
        alignItems: 'center',
        paddingHorizontal: 5,
        borderRadius: 3,
    }
})
