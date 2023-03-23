import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  item: {
    height: 64,
    paddingHorizontal: 8,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#333",
    backgroundColor: "#262626",
    marginBottom: 8,
  },
  itemText: {
    color: "#f2f2f2",
    fontSize: 14,
    marginHorizontal: 8,
    flex: 1,
  },
});
