import { useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

const ComponentManaged = () => {
  const timer = useRef(null);
  const [count, setCount] = useState(0);

  const addOne = () => {
    setCount((prevValue) => prevValue + 1);
    timer.current = setTimeout(addOne, 200);
  };

  const subtractOne = () => {
    setCount((prevValue) => prevValue - 1);
    timer.current = setTimeout(subtractOne, 200);
  };

  const stopTimer = () => {
    clearTimeout(timer.current);
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        borderColor: "black",
        borderWidth: 5,
        width: 200,
        margin: 10,
      }}
    >
      <Text style={{ fontSize: 16, marginBottom: 10 }}>Local</Text>
      <Text style={{ fontSize: 32, marginBottom: 25 }}>{count}</Text>
      <TouchableOpacity
        onPressIn={addOne}
        onPressOut={stopTimer}
        style={{
          backgroundColor: "lightseagreen",
          width: "100%",
          height: 75,
          justifyContent: "center",
          alignItems: "center",
          borderTopWidth: 5,
          borderTopColor: "black",
        }}
      >
        <Text style={{ fontSize: 32 }}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPressIn={subtractOne}
        onPressOut={stopTimer}
        style={{
          backgroundColor: "lightsalmon",
          width: "100%",
          height: 75,
          justifyContent: "center",
          alignItems: "center",
          borderTopWidth: 5,
          borderTopColor: "black",
        }}
      >
        <Text style={{ fontSize: 32 }}>-</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ComponentManaged;
