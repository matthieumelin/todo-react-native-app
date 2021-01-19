import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, View, ScrollView, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import { uuid } from "uuidv4";

function App() {
  const [todo, setTodo] = useState(null);
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: "Faire du couscous"
    },
    {
      id: 2,
      name: "Donner du khalouf a Abdel"
    },
    {
      id: 3,
      name: "Gifler la carte de Jerome"
    },
    {
      id: 4,
      name: "Donner de l'argent à Pop School"
    }
  ]);

  const changeTodo = (event) => {
    setTodo(event.target.value);
  }

  const addTodo = (event) => {
    if (todo != null) {
      const newTodo = {
        id: uuid(),
        name: todo
      }
  
      setTodos([...todos, newTodo]);
    }
  }

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.container}>
        <Text style={styles.title}>My todo list</Text>

        <View style={styles.add_todo}>
          <TextInput style={styles.add_todo_input}
            onChange={changeTodo}
            placeholder="Add a value" />
          <TouchableOpacity>
            <Button
              onPress={addTodo}
              title="+"
              color="#2980b9"
              style={styles.button_add} />
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.todos}>
          <FlatList 
          data={todos}
          renderItem={({item}) => <Text style={styles.todo}>{item.name}</Text>}
          keyExtractor={item => item.id.toString()} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#3498db'
  },
  container: {
    width: '80%',
    margin: 'auto',
  },
  title: {
    color: 'white',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'center'
  },
  add_todo: {

  },
  add_todo_input: {
    color: 'lightgray',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: 'white',
    padding: 20,
    position: 'relative'
  },
  button_add: {
    position: 'absolute',
    right: 0,
  },
  todos: {
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  todo: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    backgroundColor: 'white',
    padding: 10
  },
  todo_name: {
    textAlign: 'center',
    backgroundColor: 'white',
    padding: 10
  }
});

export default App;