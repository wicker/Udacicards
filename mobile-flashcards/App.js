import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Decks from './components/Decks.js'
import DeckView from './components/DeckView.js'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk'
import { TabNavigator, StackNavigator } from 'react-navigation'

const MainNavigator = StackNavigator({
    Decks: {
      screen: Decks,
      navigationOptions: {
        title: 'Udacicards : Your Decks'
      }
    },
    DeckView: {
      screen: DeckView
    }
});

export default class App extends React.Component {

  render() {

    const store = createStore(
      reducer, undefined,
      applyMiddleware(thunk)
    )

    return (
        <Provider store={store}>
          <MainNavigator />
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

