import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList } from "react-native";
import { Navbar } from "./src/Navbar.js";
import { AddTodo } from "./src/AddTodo.js";
import React, { useState } from "react";
import { Todo } from "./src/Todo.js";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title: title,
      },
    ]);
  };

  const removeTodo=(id)=>{
    setTodos(prev=>prev.filter(todo=>todo.id!==id))
  }

  return (
    <View>
      <Navbar title="Todo App" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />

        <FlatList
        keyExtractor={item=>item.id}
        data={todos}
        renderItem={({item})=>{
          return <Todo todo={item} onRemove={removeTodo} />;
        }}
        />

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
