import React, { useState, useRef } from "react";
import { Text, Button, TextInput, View ,StyleSheet} from "react-native";
import List from "./list";

export default function App() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  const [updateCurrentTodo, setupdateCurrentTodo] = useState("");
  const focusTextBox = useRef(null);

  const addTodo = () => {
    if (updateCurrentTodo === "") {
      if(text === ""){
         alert("Textbox can not be empty")
      }
      else{
        setTodo([
          ...todo,
          {
            id: Math.random(23),
            title: text,
          },
        ]);
        setText("");
        focusTextBox.current.blur();
      }
    } else {
      let updatedTodo = [...todo];
      updatedTodo[updateCurrentTodo].title = text;
      setTodo(updatedTodo);
      setText("");
      setupdateCurrentTodo("");
    }
  };

  const deleteTodo = (id) => {
    const deleted = [...todo];
    deleted.splice(id, 1);
    setTodo(deleted);
    setupdateCurrentTodo("");
  };

  const editTodo = (index) => {
    setupdateCurrentTodo(index);
    console.log(updateCurrentTodo);
    let updatedTodo = [...todo];
    setText(updatedTodo[index].title);
    focusTextBox.current.focus();
  };

  return (
    <View style={styles.container}>
      <View style={styles.textBoxView}>
        <TextInput
          style={styles.TextInput}
          onChangeText={(text) => setText(text)}
          value={text}
          ref={focusTextBox}
        />
        <Button
          title="Add Todo"
          color="blue"
          onPress={() => {
            addTodo();
          }}
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          title="Delete all"
          color="red"
          onPress={() => {
            setTodo([]);
            setupdateCurrentTodo("");
          }}
          accessibilityLabel="Learn more about this purple button"
        />
      </View>

      <View>
        {todo.length
          ? todo.map((item, index) => {
              return (
                <List
                  items={item}
                  key={item.id}
                  editTodo={editTodo}
                  id={item.id}
                  arrayIndex={index}
                  deleteTodo={deleteTodo}
                />
              );
            })
          : null}
        {!todo.length ? (
          <Text style={{ alignSelf: "center" }}>No todo yet</Text>
        ) : (
          <Text style={{ alignSelf: "center" }}>
            Total Todos:{todo.length}{" "}
          </Text>
        )}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
     flex: 1, marginTop: 50 
  },
  textBoxView:{ flexDirection: "row", height: 50 },
  TextInput:{ flex: 1, borderColor: "gray", borderWidth: 1 }
  
});