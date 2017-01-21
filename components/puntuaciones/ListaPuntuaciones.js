import React, { Component } from 'react'
import {
  View,
  ListView
} from 'react-native'

import ListaPuntuacionesRow from './ListaPuntuacionesRow'

class ListaPuntuaciones extends Component {

    constructor (props) {
      super(props)

      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})


      this.state = {
        dataSource: ds,
      }
    }

    componentWillMount () {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(
                [{
                    name: 'Alex Bosch',
                    points: 138,
                    position: 1
                },
                {
                    name: 'Jorge Giner',
                    points: 138,
                    position: 2
                },
                {
                    name: 'Alex Mtz-Sabadell',
                    points: 41,
                    position: 3
                }])
        })
    }

    render () {
        return (
            <View style={{flex: 1}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <ListaPuntuacionesRow position={rowData.position} name={rowData.name} img="6.Vosk.jpg" points={rowData.points} navigator={this.props.navigator}/>}
                />
            </View>
        )
    }
}

export default ListaPuntuaciones
