import React from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Platform,
  Button
} from 'react-native';

class Row extends React.Component {
  render() {
    const { desc, price, onPress } = this.props;
    return (
      <View style={styles.cardRow}>
        <Text>{desc}</Text>
        <Text>RM {price}</Text>
        <Button title="Button" onPress={() => onPress(desc)} />
      </View>
    )
  }
}

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Spending',
  };

  render() {
    const date = new Date();
    const data = [{ desc: "food", price: 1, onPress: (x) => alert(x) }, { desc: "food", price: 2 }];
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

          <View style={styles.card}>
            <View style={styles.cardDate}>
              <Text>{date.toLocaleDateString()}</Text>
            </View>
            {data.map((item, index) => {
              return (
                <Row
                  key={index}
                  desc={item.desc}
                  price={item.price}
                  onPress={item.onPress}
                />
              )
            })
            }

            <View style={styles.cardRow}>
              <Text>Food</Text>
              <Text>RM 8</Text>
            </View>
            <View style={styles.cardRow}>
              <Text>Grocery</Text>
              <Text>RM 2</Text>
            </View>

            <View style={styles.cardRow}>
              <Text>Travel</Text>
              <Text>RM 20</Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
          <Text style={{ fontWeight: 'bold' }}>Total</Text>
          <Text style={{ fontWeight: 'bold' }}>RM 30</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    // paddingTop: 30,
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
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  card: {
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  },
  cardDate: {
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    backgroundColor: '#f5f5f5'
  },
  cardRow: {
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});
