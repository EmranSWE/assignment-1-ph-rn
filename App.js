import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Heading Info */}
      <View
        style={{
          flexDirection: "row",
          gap: 40,
          justifyContent: "flex-start",
          marginTop: 50,
        }}
      >
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
          }}
          style={styles.imageIcons}
        />
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>The Octocat</Text>
          <Text style={{ color: "blue" }}>@Octocat</Text>
          <Text style={{ color: "gray" }}>Joined 25 Jan 2011</Text>
        </View>
      </View>
      <Text style={{ color: "gray" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, odio!
      </Text>
      <View style={{ flexDirection: "row", gap: 20 }}>
        <View>
          <Text style={{ color: "gray" }}>Repos</Text>
          <Text style={{ fontWeight: "bold" }}>8</Text>
        </View>
        <View>
          <Text style={{ color: "gray" }}>Followers</Text>
          <Text style={{ fontWeight: "bold" }}>3938</Text>
        </View>
        <View>
          <Text style={{ color: "gray" }}>Following</Text>
          <Text style={{ fontWeight: "bold" }}>9</Text>
        </View>
      </View>

      {/* Extra Information */}
      <View >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon name="map-marker" size={30} color="black" />
          <Text style={{ marginLeft: 10 }}>San Francisco</Text>
        </View>
        <View>
          <Text>icons</Text>
          <Text>https://github.blog</Text>
        </View>
        <View>
          <Text>icons</Text>
          <Text>Not Available</Text>
        </View>
        <View>
          <Text>icons</Text>
          <Text>@github</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    borderRadius: "20",
  },
  imageIcons: {
    height: 50,
    width: 50,
  },
});
