import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import CheckBox from "@react-native-community/checkbox";

export default function List({ items, id, deleteTodo, editTodo, arrayIndex }) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <>
      <View key={items.id} style={{ flexDirection: "row", marginTop: 20 }}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
        <Text
          style={{
            backgroundColor: "lightgrey",
            padding: 13,
            flex: 1,
            fontSize: 20,
            borderBottomColor: "grey",
            borderBottomWidth: 1,
            textDecorationLine: toggleCheckBox ? "line-through" : null,
          }}
        >
          {items.title}
        </Text>

        <TouchableOpacity
          style={{ backgroundColor: "red", padding: 13 }}
          onPress={() => {
            deleteTodo(id);
          }}
        >
          <Text style={{ color: "white" }}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ backgroundColor: "green", padding: 13 }}
          onPress={() => {
            editTodo(arrayIndex);
          }}
        >
          <Text style={{ color: "white" }}>Edit</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
