import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import { SearchBar } from 'react-native-elements';

// export default class Discover extends Component {
//   constructor(props) {
//     super(props);
//     // state = {
//     // // search: '',
//     this.state = {};
//   }
export default class Discover extends Component {
  state = {
    search: '',
  };
  
  updateSearch = (search) => {
    this.setState({ search });
  };


  render() {
    const { search } = this.state;

    return (
      <View style={styles.container = {}}>
          <SearchBar
            lightTheme='true'
            inputContainerStyle={{backgroundColor: 'white'}}
            containerStyle={{backgroundColor: 'white', borderWidth: 1, borderRadius: 5}}
            placeholder="Type Here..."
            onChangeText={this.updateSearch}
            value={search}
        />
        <Text style={{ color: "black", fontSize: 30, fontWeight: "700"}}>
          Discover
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
