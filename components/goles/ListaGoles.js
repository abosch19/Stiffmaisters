import React, { Component } from 'react'
import {
  View,
  ListView
} from 'react-native'

import ListaGolesRow from './ListaGolesRow'

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
                    goals: 18,
                    position: 1
                },
                {
                    name: 'Jorge Giner',
                    goals: 18,
                    position: 2
                },
                {
                    name: 'Alex Mtz-Sabadell',
                    goals: 1,
                    position: 3
                }])
        })
    }

    render () {
        return (
            <View style={{flex: 1}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <ListaGolesRow position={rowData.position} name={rowData.name} img="6.Vosk.jpg" goals={rowData.goals} navigator={this.props.navigator}/>}
                />
            </View>
        )
    }
}

export default ListaPuntuaciones
