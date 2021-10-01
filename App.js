import React, { Component, useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
const styles = StyleSheet.create({
  title: {
    fontSize: 32
  },
  text: {
    fontSize: 20,
    color: "#aaa"
  },
  container: {
    flex: 1,
  },
  FlatList: {
    borderWidth: 5,
    flex: 0.5,
    margin: 10,
  },
  ListItem:{ 
    borderWidth: 1,
    marginTop: 10,
    marginRight: 10, 
    marginLeft: 10, 
    padding: 10 
  },
  touchView: {
    alignItems: 'center',
    margin: 10,
    // borderWidth: 5,
    flexDirection: "row"
  },
  touch: {
    borderWidth: 2
  },
  touchText: {
    fontSize: 20,
  },
});
const ListItem = ({ item }) => {
  return (
    <View style={styles.ListItem}>
      <View>
        <Text style={styles.title}>{`Name:${item.name}`}</Text>
      </View>
      <View>
        <Text style={styles.text}>{`City:${item.city}`}</Text>
      </View>
    </View>
  )
}
const MenuButton = (props) => {
  return (
    <TouchableOpacity
      style={[styles.touch, props.buttonStyle]}
      onPress={() => {
        console.log('click');
        props.setIsclicked(!props.isCilcked)
      }}
    >
      <Text style={[styles.touchText, props.isCilcked ? { color: 'red' } : null]}> 按我打開 List </Text>
    </TouchableOpacity>
  )
}
const App = () => {
  const [list, setList] = useState(null);
  const [isCilcked, setIsclicked] = useState(false);
  const renderItem = ({ item }) => {
    console.log("item", item);
    return (<>
      <ListItem item={item} />
    </>)
  }
  useEffect(() => {
    let src = "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8";
    fetch(src)
      .then(res => res.json())
      .then(
        (result) => {
          setList(result);
        }
      )
  }, []);
  return (
    <View
      style={styles.container}
    >
      <View style={styles.touchView}>
        <MenuButton
          buttonStyle={{ flex: 1, borderRadius: 50 }}
          isCilcked={isCilcked}
          setIsclicked={setIsclicked}
        />
      </View>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.name}
        style={[isCilcked ? styles.FlatList : { display: 'none' }]}
      />
    </View>
  );
}

export default App;