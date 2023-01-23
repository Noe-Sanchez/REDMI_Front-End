import React, {Component} from 'react' 
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default class MainView extends Component{
  render(){
    console.log('Rendering MainView')
    return(
      <>
        <APIgetter/>
        <APIposter/>
      </>
    );
  }
}

class APIgetter extends Component{
  state = {fetchedData: " "};

  makeFetch(){
    console.log('APIgetter button trying a Backend fetch');
    fetch('http://localhost:19004/api', {method: "GET"})
      .then((response) => response.json())
      .then((data) => this.setState({fetchedData: data.magic_number.toString()}))
      .catch((err) => {
        console.log(err.message);
      });
  }

  render(){
    console.log('Rendering API getter')
    return(
      <View style={styles.rowContainer}>
        <Button
	  onPress={this.makeFetch.bind(this)}
	  title="Hacer get al back"
	  style={styles.baseButton}
	/>
        <Text style={styles.baseText}>Obtenido: {this.state.fetchedData}</Text>
      </View>);
  }
}

class APIposter extends Component{
  state = {data_to_post: " "}

  makeFetch(){
    console.log('APIposter button trying a Backend fetch');
    fetch('http://localhost:19004/api', {
      method: "POST", 
      body: JSON.stringify(this.state),
      headers: {'Content-Type': 'application/json'}
    }).then((response) => console.log(response))
      .catch((err) => {
        console.log(err.message);
      });
  }

  render(){
    console.log('Rendering API poster')
    return(
      <View style={styles.rowContainer}>
	<Button
	  onPress={this.makeFetch.bind(this)}
	  title="Hacer post al back"
	  style={styles.baseButton}
	/>
	<TextInput
          placeholder="Valor a postear"
	  style={styles.altText}
          onChangeText={(value) => this.setState({data_to_post: value})}
        /> 
      </View>);
  }
}

const textStyle = {
    fontFamily: 'Consolas',
    textAlign: 'center'
}
const containerStyle = {
    alignItems: 'center',
    justifyContent: 'center'
}

const styles = StyleSheet.create({
  baseText: {
    color: '#FFF',
    ...textStyle
  },
  altText: {
    color: '#C77',
    ...textStyle
  },
  baseButton: {
    fontFamily: 'Consolas',
    color: '#F60',
  },
  colContainer: {
    flex: 2,
    backgroundColor: '#444',
    ...containerStyle
  },
  rowContainer: {
    flex: 2,
    flexDirection: "row",
    backgroundColor: '#444',
    ...containerStyle
  },
});
