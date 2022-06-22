import React from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { Formik } from "formik";

import { userSchema } from "../components/UserSchema";
import AppFormField from "../components/AppFormField";
import FormError from "../components/FormError";

const TestScreen = () => {
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={userSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          touched,
          errors,
          values,
        }) => (
          <View>
            {/* refactor of formik  */}

            <View>
              <AppFormField
                name={"name"}
                placeholder="Name"
                autoCorrect={false}
              />
              <FormError error={errors.name} visible={touched.name} />
            </View>

            {/* normal way of formik */}

            <View>
              <TextInput
                placeholder="Email"
                autoCorrect={false}
                onChangeText={handleChange("email")}
                value={values.email}
                onBlur={handleBlur("email")}
              />
              {errors.email && touched.email ? (
                <Text>{errors.email}</Text>
              ) : null}
            </View>
            <View>
              <TextInput
                placeholder="Password"
                onChangeText={handleChange("password")}
                value={values.password}
                onBlur={handleBlur("password")}
              />
              {errors.password && touched.password ? (
                <Text>{errors.password}</Text>
              ) : null}
            </View>
            <View>
              <TextInput
                placeholder="confirmPassword"
                onChangeText={handleChange("confirmPassword")}
                value={values.confirmPassword}
                onBlur={handleBlur("confirmPassword")}
              />
              {errors.confirmPassword && touched.confirmPassword ? (
                <Text>{errors.confirmPassword}</Text>
              ) : null}
            </View>
            <Button onPress={handleSubmit} title="submit" />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TestScreen;
