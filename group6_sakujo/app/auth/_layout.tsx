import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React, { useEffect } from "react";
import { Drawer } from "expo-router/drawer";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Feather, AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";
import { useRouter, usePathname } from "expo-router";

const CustomDrawerContent = (props: any) => {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  const handleSignOut = () => {
    console.log("User signed out");
    router.replace("/");
  };

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <View style={styles.userInfoWrapper}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/women/26.jpg" }}
          width={80}
          height={80}
          style={styles.userImg}
        />
        <View style={styles.userDetailsWrapper}>
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.userEmail}>john@email.com</Text>
        </View>
      </View>
      <DrawerItem
        icon={({ color, size }) => (
          <Feather
            name="list"
            size={size}
            color={pathname == "/feed" ? "#fff" : "#000"}
          />
        )}
        label={"Feed"}
        labelStyle={[
          styles.navItemLabel,
          { color: pathname == "/feed" ? "#fff" : "#000" },
        ]}
        style={{ backgroundColor: pathname == "/feed" ? "#333" : "#fff" }}
        onPress={() => {
          router.push("/feed");
        }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <AntDesign
            name="user"
            size={size}
            color={pathname == "/feed" ? "#fff" : "#000"}
          />
        )}
        label={"Profile"}
        labelStyle={[
          styles.navItemLabel,
          { color: pathname == "/feed" ? "#fff" : "#000" },
        ]}
        style={{ backgroundColor: pathname == "/profile" ? "#333" : "#fff" }}
        onPress={() => {
          router.push("/feed");
        }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <MaterialIcons
            name="favorite-outline"
            size={size}
            color={pathname == "/feed" ? "#fff" : "#000"}
          />
        )}
        label={"Favourites"}
        labelStyle={[
          styles.navItemLabel,
          { color: pathname == "/feed" ? "#fff" : "#000" },
        ]}
        style={{ backgroundColor: pathname == "/favourites" ? "#333" : "#fff" }}
        onPress={() => {
          router.push("/feed");
        }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Ionicons
            name="settings-outline"
            size={size}
            color={pathname == "/feed" ? "#fff" : "#000"}
          />
        )}
        label={"Settings"}
        labelStyle={[
          styles.navItemLabel,
          { color: pathname == "/feed" ? "#fff" : "#000" },
        ]}
        style={{ backgroundColor: pathname == "app/auth/settings"? "#333" : "#fff" }}
        onPress={() => {
          router.push("/feed");
        }}
      />
      <View style={styles.bottomLogout}>
        <Pressable onPress={handleSignOut} style={styles.logoutButton}>
          <Ionicons name="log-out-outline" size={24} color="#000" />
          <Text style={styles.navItemLabel}>Sign Out</Text>
        </Pressable>
      </View>
    </DrawerContentScrollView>
  );
};

export default function Layout() {
  return (
    <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />} screenOptions={{ title: '' }}>
      <Drawer.Screen name="(tabs)" options={{ title: "" }} />
      {/* <Drawer.Screen name="feed" options={{ headerShown: true }} />
      <Drawer.Screen name="profile" options={{ headerShown: true }} />
      <Drawer.Screen name="favourites" options={{ headerShown: true }} />
      <Drawer.Screen name="settings" options={{ headerShown: true }} />
      <Drawer.Screen name="login" options={{ headerShown: false }} /> */}
    </Drawer>
  );
}

const styles = StyleSheet.create({
  navItemLabel: {
    marginLeft: 15,
    fontSize: 18,
  },
  userInfoWrapper: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  userImg: {
    borderRadius: 40,
  },
  userDetailsWrapper: {
    marginTop: 25,
    marginLeft: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 16,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
  bottomLogout: {
    marginTop: 'auto',
    marginBottom: 20,
    marginLeft: 10,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
