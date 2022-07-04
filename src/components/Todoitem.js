import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const Todoitem = (props) => {
  // style if completed
  let style = props.item.completed
    ? {
        textDecorationLine: "line-through",
      }
    : {
        textDecorationLine: "none",
      };
  return (
    <TouchableOpacity
      style={{
        paddingVertical: 8,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text style={[{ fontSize: 18 }, style]}>{props.item.text}</Text>
      <TouchableOpacity
        onPress={() => props.completeFunction()}
        style={{
          padding: 8,
          backgroundColor: "#185adb",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "#FFF" }}>V</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.deleteFunction()}
        style={{
          padding: 8,
          backgroundColor: "#c0392b",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "#FFF" }}>X</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Todoitem;
