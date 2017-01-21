/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TabBarIOS,
  View,
  Text,
  StatusBar
} from 'react-native';
import firebase from 'firebase'

import Resultados from './components/resultados/resultadosView'
import Puntuaciones from './components/puntuaciones/Puntuaciones'
import Goles from './components/goles/Goles'

var config = {
  apiKey: "AIzaSyBNeocFcu6XweaEhuCYG1DC1P27hACr58s",
  authDomain: "comuniostiff.firebaseapp.com",
  databaseURL: "https://comuniostiff.firebaseio.com",
  storageBucket: "comuniostiff.appspot.com",
  messagingSenderId: "767500271508"
}

firebase.initializeApp(config);


export default class App extends Component {

    constructor (props) {
        super(props)

        this.state = {
            selectedTab: 'Puntuaciones',
        }
    }

    componentWillMount () {
        StatusBar.setNetworkActivityIndicatorVisible(true)
    }

    render() {
        return (
            <TabBarIOS>
                <TabBarIOS.Item
                    title="Resultados"
                    systemIcon="history"
                    selected={this.state.selectedTab === 'Resultados'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'Resultados'
                        })
                    }}>
                        <Resultados styleView={styles.container}/>
                    </TabBarIOS.Item>

                    <TabBarIOS.Item
                        title="Puntuaciones"
                        systemIcon="contacts"
                        selected={this.state.selectedTab === 'Puntuaciones'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'Puntuaciones'
                            })
                    }}>
                        <Puntuaciones styleView={styles.container}/>
                    </TabBarIOS.Item>

                    <TabBarIOS.Item
                        title="Goles"
                        systemIcon="top-rated"
                        selected={this.state.selectedTab === 'Goles'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'Goles'
                            })
                        }}>
                            <Goles styleView={styles.container}/>
                    </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

AppRegistry.registerComponent('Stiffmaisters', () => App);
