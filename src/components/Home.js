import { View } from "react-native";
import ComponentManaged from "./componentManaged";
import ReduxManaged from "./reduxManaged";

const Home = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <ComponentManaged />
      <ReduxManaged />
    </View>
  );
};

export default Home;
