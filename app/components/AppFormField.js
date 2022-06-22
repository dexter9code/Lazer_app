import { useFormikContext } from "formik";
import { TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AppFormField = ({ name, icon, ...others }) => {
  const { handleChange, values, handleBlur } = useFormikContext();
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          style={{ marginRight: 5 }}
        />
      )}
      <TextInput
        onChangeText={handleChange(name)}
        value={values[name]}
        onBlur={handleBlur(name)}
        {...others}
      />
    </View>
  );
};

export default AppFormField;
