import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import apiClient from "./../api/Client";
import jwtDecode from "jwt-decode";

const LoginScreen = ({ navigation }) => {
  const [loginFailed, setLoginFailed] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async ({ username: email, password }) => {
    try {
      const data = { email, password };
      const res = await apiClient.post("/auth", data);
      if (!res.ok) return setLoginFailed(true);
      setLoginFailed(false);
      const user = jwtDecode(res.data);
      console.log(user);
      if (user) return navigation.navigate("Home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View style={styles.container}>
      {loginFailed && (
        <Text style={styles.error}>Invalid Email or password</Text>
      )}
      <View style={{ width: "60%" }}>
        <MaterialCommunityIcons size={25} name="account" style={styles.icon} />
        <Controller
          control={control}
          rules={{
            required: "this field is required",
            minLength: { value: 3, message: "username must be more than 3" },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.username}
              placeholder="Username"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="username"
        />
        {errors.username && <Text>{errors.username.message}</Text>}
      </View>
      <View style={{ width: "60%" }}>
        <MaterialCommunityIcons name="lock" size={25} style={styles.icon} />
        <Controller
          control={control}
          rules={{
            required: "This field is required",
            minLength: { value: 5, message: "password is mor than 5" },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.password}
              secureTextEntry
              placeholder="Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="password"
        />
        {errors.password && <Text>{errors.password.message}</Text>}
      </View>
      <Button
        title="submit"
        onPress={handleSubmit(onSubmit)}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    position: "relative",
    top: 38,
    left: -40,
    width: 33,
    color: "#d3d3d3",
  },
  username: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  password: {
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginBottom: 10,
  },
  button: {
    padding: 10,
    marginTop: 5,
    backgroundColor: "red",
  },
  error: {
    color: "red",
    textTransform: "capitalize",
    fontWeight: "500",
  },
});

export default LoginScreen;
