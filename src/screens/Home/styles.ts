import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0d0d",
  },
  logoContainer: {
    alignItems: "center",
    height: 200,
    justifyContent: "center",
  },
  body: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  listContainer: {
    flex: 1,
  },
  textLine: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  numberContainer: {
    paddingVertical: 2,
    backgroundColor: "#333",
    paddingHorizontal: 8,
    borderRadius: 99,
    marginLeft: 8,
  },
  number: {
    color: "#f2f2f2",
    fontWeight: "bold",
    fontSize: 12,
  },
  previewContainer: {
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  todo: {
    fontSize: 14,
    color: "#4ea8de",
    fontWeight: "bold",
  },
  done: {
    color: "#8284fa",
    fontWeight: "bold",
    fontSize: 14,
  },
  list: {
    flex: 1,
  },
});
