import React, { Component } from 'react'
import {
  View,
  NavigatorIOS
} from 'react-native'

import ListaPuntuaciones from './ListaPuntuaciones'

class Puntuaciones extends Component {

    render () {
        return (
            <NavigatorIOS
                initialRoute={{
                    component: ListaPuntuaciones,
                    title: 'Puntuaciones',
                }}
                style={this.props.styleView}
            />
        )
    }

}

export default Puntuaciones
