import React, { useState } from "react";
import { StyleSheet, View, ImageBackground, Text, Button } from "react-native";
import { Formik } from "formik";

import apiClient from "./../api/Client";
import { RegisterSchema } from "./../components/validations/RegisterSchema";
import AppFormField from "../components/AppFormField";
import FormError from "../components/FormError";

const RegisterUser = () => {
  const [userError, setUserError] = useState("");
  const handleRegister = async ({ name, email, password }) => {
    const data = { name, email, password };
    const res = await apiClient.post("/users", data);
    if (!res.ok) {
      setUserError(res.data);
    } else {
      setUserError("");
    }
    console.log(res.data);
  };
  return (
    <ImageBackground
      blurRadius={5}
      source={require("../assets/loginImage1.jpg")}
      style={styles.container}
    >
      <View style={styles.subContainer}>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          validationSchema={RegisterSchema}
          onSubmit={handleRegister}
        >
          {({ handleSubmit, touched, errors }) => (
            <>
              <View style={styles.formContainer}>
                {!userError === "" ? null : (
                  <Text style={{ color: "red", fontStyle: "italic" }}>
                    {userError}
                  </Text>
                )}
                <AppFormField
                  icon={"account"}
                  name={"name"}
                  style={styles.formInput}
                  placeholder="Name"
                  autoCapitalize="characters"
                  autoCorrect={false}
                />
                <FormError error={errors.name} visible={touched.name} />
              </View>
              <View style={styles.formContainer}>
                <AppFormField
                  name={"email"}
                  icon={"email"}
                  style={styles.formInput}
                  placeholder="Email"
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  textContentType="email"
                />
                <FormError error={errors.email} visible={touched.email} />
              </View>
              <View style={styles.formContainer}>
                <AppFormField
                  name={"password"}
                  icon={"lock"}
                  style={styles.formInput}
                  placeholder="Password"
                  autoCapitalize={"none"}
                  autoCorrect={false}
                  secureTextEntry
                  textContentType="password"
                />
                <FormError error={errors.password} visible={touched.password} />
              </View>
              <View>
                <Button title="Register" onPress={handleSubmit} />
              </View>
            </>
          )}
        </Formik>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  subContainer: {
    alignSelf: "center",
    width: 340,
    padding: 10,
    shadowColor: "grey",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 9.65,

    elevation: 7,
  },
  formContainer: {
    width: 300,
    alignSelf: "center",
  },
  formInput: {
    padding: 5,
    alignSelf: "center",
    width: 270,
    borderBottomWidth: 1,
    marginBottom: 10,
  },
});

export default RegisterUser;
