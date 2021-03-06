import React from 'react'
import { StyleSheet,
         Text,
         View,
         FlatList,
         TouchableOpacity,
         TextInput,
         KeyboardAvoidingView} from 'react-native'
import initialDecks from '../utils/initialDecks'
import { connect } from 'react-redux'
import { addNewDeck } from '../actions'
import { NavigationActions } from 'react-navigation'

class AddDeck extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
 			text: ''
		};
  }

  /* Only update the store's decks object if the
   * new deck's title exists as more than
   * an empty string. */
  onSubmit = (decks, title) => {
    if (title && title !== '' ) {
      this.props.addDeck(decks, title);
    }
    this.setState({text: ''});
    this.props.navigation.navigate('DeckView', {title: title})
  }

  render() {

    const { input } = this.state

    return (
      <KeyboardAvoidingView style={styles.containCenter}>
        <Text style={styles.title}>
          Add a Deck
        </Text>
        <Text style={styles.text}>
          Enter the name of your deck
        </Text>
        <TextInput
          value={input}
          onChangeText={(text) => this.setState({text})}
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => this.onSubmit(this.props.decks, this.state.text)}
        >
 				  <View>
            <Text style={styles.addButtonText}>Create Deck</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  containCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton: {
    borderRadius: 10,
    backgroundColor: '#4DD0E1',
    margin: 20,
    padding: 20
  },
  addButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18
  },
  input: {
    borderRadius: 10,
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    width: 300
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 30
  }
});

const mapStateToProps = state => ({
  decks: state
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  addDeck: (decks, title) => dispatch(addNewDeck(decks, title))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddDeck)
