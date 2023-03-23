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
  emptyContainer: {
    marginTop: 48,
    alignItems: "center",
  },
  emptyTitle: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#808080",
    marginTop: 10,
    textAlign: "center",
  },
  emptySubtitle: {
    textAlign: "center",
    fontWeight: "normal",
  },
});
