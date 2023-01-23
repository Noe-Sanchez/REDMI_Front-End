import React, {Component} from 'react' 
import { StyleSheet, Text, View, Button} from 'react-native';

export default class MainView extends Component{
  render(){
    console.log('Rendering MainView')
    return(
      <APIviewer/>
    );
  }
}

class APIviewer extends Component{
  makeFetch(){
    console.log('Button trying a Backend fetch');
    fetch('http://localhost:19004/api', {method: "GET"})
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => {
        console.log(err.message);
      });
  }

  render(){
    console.log('Rendering API viewer')
    return(
      <View style={styles.container}>
        <Text style={styles.baseText}>Prueba del front</Text>
        <Button
	  onPress={this.makeFetch}
	  title="Hacer fetch al back"
	  style={styles.baseButton}
	/>
      </View>);
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Consolas',
    color: '#FFF',
  },
  baseButton: {
    fontFamily: 'Consolas',
    color: '#F60',
  },
  container: {
    flex: 1,
    backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
