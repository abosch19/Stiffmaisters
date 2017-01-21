import React from 'react'
import {
  NavigatorIOS,
}
from 'react-native'

import ListaResultados from './listaResultados.js'


export default class Resultados extends React.Component {

  constructor (props) {
    super(props)

  }

  render () {
    return (
      <NavigatorIOS
        initialRoute={{
          component: ListaResultados,
          title: 'Resultados',
        }}
        style={this.props.styleView}
      />
    )
  }
}
