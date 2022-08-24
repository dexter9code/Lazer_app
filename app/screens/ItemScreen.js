import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  Pressable,
  Dimensions,
  Button,
  TextInput,
  SafeAreaView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import searchIcon from "../assets/icons/search.png";
import appIcon from "../assets/icons/appIcon.png";

const data = [
  {
    id: 41,
    name: "item1",
    price: 3,
    productImg: require("../assets/loginImage1.jpg"),
  },
  {
    id: 55,
    name: "item2",
    price: 5,
    productImg: require("../assets/loginImage2.jpg"),
  },
  {
    id: 56,
    name: "item2",
    price: 7,
    productImg: require("../assets/common/common1.jpg"),
  },
  {
    id: 589,
    name: "item2",
    price: 5,
    productImg: require("../assets/common/common2.jpg"),
  },
  {
    id: 519,
    name: "item2",
    price: 5,
    productImg: require("../assets/common/common2.jpg"),
  },
  {
    id: 89,
    name: "item2",
    price: 5,
    productImg: require("../assets/common/common2.jpg"),
  },
];

const numOfColumns = 2;
const size = Dimensions.get("window").width / numOfColumns;

const ItemScreen = () => {
  const [count, setCount] = useState(0);
  return (
    <SafeAreaView>
      <View
        style={{
          marginBottom: 5,
          marginTop: 2,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            borderRadius: 10,
            marginLeft: 5,
            paddingRight: 3,
            paddingLeft: 3,
            paddingTop: 2,
          }}
        >
          <Image
            source={searchIcon}
            style={{
              width: 20,
              height: 20,
              alignSelf: "center",
              paddingRight: 2,
            }}
          />
          <TextInput
            placeholder="Search Brand"
            style={{ width: "50%", borderRadius: 10 }}
          />
        </View>
        <Text
          style={{
            position: "absolute",
            right: 81,
            top: -8,
            zIndex: 1,
            borderRadius: 10,
            elevation: 1,
            paddingLeft: 2,
          }}
        >
          {count}
        </Text>
        <MaterialCommunityIcons
          name="cart"
          size={25}
          style={{
            alignSelf: "center",
            marginLeft: 80,
            zIndex: 0,
            elevation: 0,
          }}
        />
        <MaterialCommunityIcons
          name="heart"
          size={27}
          style={{ alignSelf: "center", marginLeft: 12 }}
        />
      </View>
      <FlatList
        data={data}
        numColumns={numOfColumns}
        keyExtractor={(key) => key.id}
        renderItem={({ item }) => (
          <Pressable style={styles.container}>
            <View style={styles.itemContainer}>
              <Image
                style={{ width: "100%", height: 300, alignSelf: "center" }}
                source={item.productImg}
              />
              <View style={{ padding: 4 }}>
                <Text>{item.name}</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={{ textTransform: "capitalize" }}>
                  price:- ${item.price}
                </Text>
                <View style={styles.buttonContainer}>
                  <Text
                    style={{ fontWeight: "500", color: "white" }}
                    onPress={() => setCount(count + 1)}
                  >
                    Cart
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: size,
  },
  itemContainer: {
    flex: 1,
    marginRight: 3,
    marginLeft: 2,
    marginBottom: 8,
    overflow: "hidden",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
  },
  buttonContainer: {
    borderWidth: 1,
    borderRadius: 10,
    paddingRight: 8,
    paddingLeft: 8,
    backgroundColor: "#fc5c65",
  },
});

export default ItemScreen;
