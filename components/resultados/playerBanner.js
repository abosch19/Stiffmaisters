import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

let colors = {
    YELLOW: '#ff9800',
    BLUE: '#03a9f4',
    GREEN: '#10af00',
    RED: 'red',
    GREY: '#aaa'
}

let position_to_colors = {
    'PT': '#fadc45',
    'DF': '#0a9fdb',
    'MC': '#2aba5d',
    'DL': '#d8213f'
}

export default class PlayerBanner extends Component {

  pointsColor () {
      const points = this.props.points

      if (points < 0) return colors.RED
      if (points == 0) return colors.GREY
      if (points < 3) return colors.YELLOW
      if (points < 10) return colors.GREEN
      return colors.BLUE
  }

  render () {
    return (
      <View style={styles.playerPointsTip}>
        <View style={styles.leftInfo}>
          <View style={[styles.positionInfo, {backgroundColor: position_to_colors[this.props.position]}]}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>{this.props.position}</Text>
          </View>
          <Text style={{fontWeight: 'bold'}}>{this.props.name}</Text>
        </View>
        <View style={styles.points}>
          <Text style={{color: this.pointsColor(), fontWeight: 'bold'}}>{this.props.points}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  playerPointsTip: {
    height: 40,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 4,
    marginBottom: 3
  },
  points: {
    width: 30,
    height: 30,
    backgroundColor: '#ecf0f1',
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  positionInfo: {
    padding: 2,
    height: 30,
    width: 30,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2
  }
})
