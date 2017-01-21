import React, { Component } from 'react'
import {
  View,
  ListView,
  Text,
  ActivityIndicator
} from 'react-native'

import ListaResultadosRow from './ListaResultadosRow.js'
import firebase from 'firebase'

export default class ListaResultados extends Component {

  constructor (props) {
    super(props)

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})


    this.state = {
      dataSource: ds,
      fetchingData: true,
    }
  }

  componentWillMount () {

      firebase.database().ref().child('matches').on('value', snap => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(snap.val()),
          fetchingData: false
        })

      })
  }

  renderActivityIndicator () {
      if (this.state.fetchingData) {
          return (
              <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
                  <ActivityIndicator
                      size='large'
                  />
              </View>
          )
      }
  }

  render () {
    return (
        <View style={{flex: 1}}>
            {this.renderActivityIndicator()}
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => <ListaResultadosRow data={rowData} teamsRef={this.teamsRef} navigator={this.props.navigator}/>}
            />
        </View>
    )
  }
}
