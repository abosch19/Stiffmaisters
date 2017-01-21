import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView
} from 'react-native'

import firebase from 'firebase'
import PlayerBanner from './playerBanner'

export default class MatchInfo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      players: null,
    }
  }

  renderPlayerPoints () {
    if (this.state.players) {
      let points = this.state.players.map(player => {
        if(player.matches[this.props.data.id].played)
        return (
          <Text>{player.name}</Text>
        )
      })

      return points
    }
  }

  componentWillMount () {
    const playersRef = firebase.database().ref().child('players')
    playersRef.orderByChild('order').on('value', snap => {
      console.log(snap.val())
      this.setState({
        players: snap.val()
      })
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <View style={styles.bannerScore}>
            <View>
              <Image
                source={{ uri: this.props.local.icon }}
                style={styles.bannerIcons}
              />
            </View>
            <View>
              <Text style={{fontSize: 40, color: 'white', fontWeight: 'bold'}}>{this.props.data.localGoals} - {this.props.data.visitantGoals}</Text>
            </View>
            <View>
              <Image
                source={{ uri: this.props.visitant.icon }}
                style={styles.bannerIcons}
              />
            </View>
          </View>
          <View style={styles.bannerGoals}>
            <Text style={{textAlign: 'center', color: 'white', fontWeight: 'bold'}}>Goles: </Text>
          </View>
        </View>
        <View style={styles.playerPointsView}>
          <ScrollView automaticallyAdjustContentInsets={false}>
            <PlayerBanner name="Pablo Casino" position='PT' points={6}/>
            <PlayerBanner name="Alex Martinez-Sabadell" position='DF' points={2}/>
            <PlayerBanner name="Alex Bosch" position='MC' points={14}/>
            <PlayerBanner name="Jorge Giner" position='MC' points={10}/>
            <PlayerBanner name="Alvaro Iranzo" position='DL' points={6}/>
          </ScrollView>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 65
  },
  banner: {
    flex: 2,
    flexDirection: 'column'
  },
  bannerScore: {
    flex: 9,
    backgroundColor:'#2980b9',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  bannerIcons: {
    width: 100,
    height: 100
  },
  bannerGoals: {
    backgroundColor: '#3F51B5',
    padding: 5
  },
  playerPointsView: {
    flex: 5,
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
})
