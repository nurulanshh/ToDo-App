import React, { useState } from "react"; 
import { 
  Text, 
  SafeAreaView, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  View, 
} from "react-native"; 
import axios from 'axios' 
 
export default function TextField () { 
  const [value, setValue] = useState(""); 
  const handleChange = (e) => { 
    setValue(e.target.value); 
  }; 
 
  const sendTodo = () => { 
    axios({ 
      method: 'post', 
      url: 'https://api.kontenbase.com/query/api/v1/0b533a6b-17ad-465b-843b-ef52efe45882/Todo', 
      data: JSON.stringify({ 
        name: value, 
        isDone: false 
      }), 
      headers: { 
        'Content-type': 'application/json', 
      } 
    }); 
  } 
  return ( 
    <View> 
      <SafeAreaView> 
        <TextInput 
          style={styles.input} 
          onChangeText={(text) => setValue(text)} 
          value={value} 
          placeholder="Add Todo Here" 
        /> 
        <TouchableOpacity 
          style={styles.button} 
          onPress={sendTodo} 
        > 
          <Text>Add</Text> 
        </TouchableOpacity> 
      </SafeAreaView> 
    </View> 
  ); 
}; 
 
const styles = StyleSheet.create({ 
  input: { 
    flex: 1, 
    height: 40, 
    margin: 12, 
    borderColor: "3498db", 
    borderWidth: 1, 
    borderRadius: 10, 
  }, 
  button: { 
    margin: 8, 
    padding: 8, 
    backgroundColor: "c6ffc1", 
    justifyContent: "center", 
    alignItems: "center", 
  }, 
});