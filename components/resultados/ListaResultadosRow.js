import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Image,
} from 'react-native'

import MatchInfo from './MatchInfo'
import firebase from 'firebase'

export default class ListaResultadosRow extends Component {

  constructor (props) {
    super(props)

    this.state = {
      visitant: {
        empty: true
      },
      local: {
        empty: true
      }
    }
  }


  componentWillMount () {
    const teamsRef = firebase.database().ref().child('teams')

    //Visitant
    teamsRef.orderByKey().equalTo(this.props.data.visitantID).on('child_added', snap => {
      this.setState({
        visitant: snap.val()
      })
    })

    //Local: Stiffmaisters
    teamsRef.orderByKey().limitToFirst(1).on('child_added', snap => {
      this.setState({
        local: snap.val()
      })
    })
  }

  showMatch () {
    this.props.navigator.push({
      component: MatchInfo,
      title: this.props.data.date,
      passProps: {
        local: this.state.local,
        visitant: this.state.visitant,
        data: this.props.data
      }
    })
  }

  render () {
    return (
      <View>
        <View style={styles.date}>
          <Text style={{color: 'white'}}>{this.props.data.date}</Text>
        </View>
        <TouchableHighlight underlayColor='lightgrey' onPress={this.showMatch.bind(this)}>
          <View style={styles.resultView}>
            <View style={styles.team}>
              <Image
                source={{ uri: this.state.local.icon}}
                style={styles.icon}
              />
              <Text>
                  Stiffmaisters
              </Text>
            </View>
            <View style={styles.result}>
              <Text style={styles.resultText}>{this.props.data.localGoals} - {this.props.data.visitantGoals}</Text>
            </View>
            <View style={[styles.team, styles.vistTeam]}>
              <Text>
                {this.state.visitant.name}
              </Text>
              <Image
                source={{ uri: this.state.visitant.icon }}
                style={styles.icon}
              />
            </View>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  date: {
    height: 40,
    backgroundColor: '#bdc3c7',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'

  },
  resultView: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  result: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2980b9',
  },
  icon: {
    width: 30,
    height: 30,
  },
  team: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 4,
    overflow: 'hidden'
  },
  vistTeam: {
    justifyContent: 'flex-end'
  }
})
