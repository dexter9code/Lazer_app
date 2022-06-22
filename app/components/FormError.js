import { Text, View, StyleSheet } from "react-native";

const FormError = ({ error, visible }) => {
  if (!error || !visible) return null;
  return <Text style={styles.text}>{error}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: "red",
    fontWeight: "500",
    fontStyle: "italic",
  },
});

export default FormError;
