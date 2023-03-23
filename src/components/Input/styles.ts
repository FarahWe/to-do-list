import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    top: -54 / 2,
  },
  input: {
    flex: 1,
    backgroundColor: "#262626",
    padding: 16,
    borderRadius: 6,
    marginRight: 4,
    color: "#f2f2f2",
    fontSize: 16,
    height: 54,
  },
  button: {
    borderRadius: 6,
    backgroundColor: "#1e6f9f",
    height: 54,
    width: 54,
    justifyContent: "center",
    alignItems: "center",
  },
});
