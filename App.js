/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  FlatList,
  TextInput,
} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  touchText: {
    fontSize: 20,
  },
  title: {
    fontSize: 32
  },
  FlatList: {
    borderWidth: 5,
    flex: 0.5,
  },
  itemView: {
    borderWidth: 3,
    flex: 0.3,
    borderTopLeftRadius: 20,
    marginTop: 20,
    width: 200,
    justifyContent: "flex-start"
  },
  button: {
    width: 200
  },
  touchView: {
    // justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    flexDirection:"row"
  },
  touch: {
    borderWidth: 2
  }
});
const DATA = [
  {
    id: '0',
    title: 'First Item'
  },
  {
    id: '1',
    title: 'Second Item'
  },
  {
    id: '2',
    title: 'Third Item'
  },
];
const Item = ({ title }) => {
  return (
    <View style={styles.itemView}>
      <Text style={styles.title}>
        {title}
      </Text>
    </View>
  )
}
const ReadButton = (props) => {
  const [isCilcked, setIsclicked] = useState(false);
  return (
    <TouchableOpacity
      style={[styles.touch,props.buttonStyle]}
      onPress={() => {
        console.log('click');
        setIsclicked(!isCilcked)
      }}
    >
      <Text style={[styles.touchText, isCilcked ? { color: 'red' } : null]}> TouchableOpacity </Text>
    </TouchableOpacity>
  )
}
const App = () => {
  const [text, setText] = useState('eat');
  const [list,setList]=useState(null);
  const renderItem = ({ item }) => {
    console.log("item",item);
    return <Item title={item.name}></Item>
  }
  useEffect(()=>{
    let src="https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8";
    fetch(src)
    .then(res=>res.json())
    .then(
      (result)=>{
        console.log("result",result);
        setList(result);
        console.log("useEffect",list);
      }
    )
  },[]);
  return (
    <View
      style={styles.container}
    >
      {console.log("render",list)}
      <View style={styles.touchView}>
        <ReadButton buttonStyle={{ flex: 1, backgroundColor: '#ddd' }}/>
        <ReadButton buttonStyle={{ flex: 1, backgroundColor: '#ddd' }}/>
      </View>
      <Button
        onPress={function () { alert('按到我了') }}
        title="Button!!"
        style={styles.button}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(text) => setText(text)}
        value={text}
      />
      <FlatList
        data={list}
        renderItem={renderItem}
        // keyExtractor={item => item.name}
        style={styles.FlatList}
      />
    </View>
  );
}

export default App;