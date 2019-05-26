import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Platform,
  View,
  TouchableOpacity,
  DatePickerIOS,
  DatePickerAndroid
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Add Item',
  };
  state = { amount: '', desc: '', date: new Date() }
  render() {

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>

          <View style={styles.viewRowDir1} >
            <Text style={{ fontSize: 18 }}>Price</Text>
            <TextInput
              style={styles.textInput1}
              onChangeText={(input) => this.setState({ amount: input })}
              value={this.state.text}
              keyboardType='numeric'
              placeholder="RM"
            />
          </View>

          <View style={styles.viewRowDir2} >
            <TextInput
              style={styles.textInput2}
              onChangeText={(desc) => this.setState({ desc })}
              value={this.state.text}
              keyboardType='default'
              placeholder="Description"
            />
          </View>

          <View style={styles.cardDate}>
            <View style={{ flex: 1 }}>
              {
                Platform.OS === 'ios' ?
                  <DatePickerIOS
                    date={this.state.date}
                    onDateChange={(date) => this.setState({ date })}
                  /> :
                  <TouchableOpacity
                    onPress={async () => {
                      const { year, month, day } = await DatePickerAndroid.open({
                        date: new Date()
                      });
                      this.setState({ date: new Date(year, month, day) })
                    }}>
                    <Text>{this.state.date.toString()}</Text>
                  </TouchableOpacity>
              }
            </View>
          </View>

        </ScrollView>
        <TouchableOpacity onPress={() => alert(JSON.stringify(this.state))} style={styles.tabBarInfoContainer}>
          <Text
            style={styles.ADDButtonStyle}
            fontWeight='bold'>ADD</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cardRow: {
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'red',
  },
  viewRowDir1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    padding: 10,
  },
  viewRowDir2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    padding: 10,
  },
  textInput1: {
    width: 50,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    padding: 5,
    color: 'white',
    backgroundColor: 'grey',
  },
  textInput2: {
    width: "100%",
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    padding: 5,
    color: 'white',
    backgroundColor: 'grey',
  },
  cardDate: {
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: '#f5f5f5',
    alignItems:'center'
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: 'red',
    paddingVertical: 20,
    flexDirection: 'row',
    color: 'white',
    justifyContent: 'center',
    padding: 10,
  },
  ADDButtonStyle: {
    width: "100%",
  }
});
