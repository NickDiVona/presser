import { useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCount, increaseCount } from "../store/count/counter.reducer";
import { countSelector } from "../store/count/counter.selectors";

const ReduxManaged = () => {
  const dispatch = useDispatch();
  const timer = useRef(null);
  const count = useSelector(countSelector);

  const addOne = () => {
    // setCount((prevValue) => prevValue + 1);

    dispatch(increaseCount());
    timer.current = setTimeout(addOne, 200);
  };

  const subtractOne = () => {
    // setCount((prevValue) => prevValue - 1);
    dispatch(decreaseCount());
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
        margin: 10
      }}
    >
      <Text style={{ fontSize: 16, marginBottom: 10 }}>Redux</Text>
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
          borderTopColor: "black"
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
          borderTopColor: "black"
        }}
      >
        <Text style={{ fontSize: 32 }}>-</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReduxManaged;
