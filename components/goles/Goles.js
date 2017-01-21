import React, { Component } from 'react'
import {
  View,
  NavigatorIOS
} from 'react-native'

import ListaPuntuaciones from './ListaGoles'

class Puntuaciones extends Component {

    render () {
        return (
            <NavigatorIOS
                initialRoute={{
                    component: ListaPuntuaciones,
                    title: 'Goles',
                }}
                style={this.props.styleView}
            />
        )
    }

}

export default Puntuaciones
