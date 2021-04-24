import React, { Component } from "react";
import { Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//import screens
// import Login from "./screens/Login/Login";
import Discover from "./screens/Discover/Discover";
import NearMe from "./screens/NearMe/NearMe";
import Profile from "./screens/Profile/Profile";
import DiscoverIcon from "./assets/discover.png";
import NearMeIcon from "./assets/nearMe.png";
import ProfileIcon from "./assets/profile.png";

const AuthStack = createStackNavigator();
const DiscoverStack = createStackNavigator();
const NearMeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.AuthNavigation = this.AuthNavigation.bind(this);
    this.DiscoverNavigation = this.DiscoverNavigation.bind(this);
    this.NearMeNavigation = this.NearMeNavigation.bind(this);
    this.ProfileNavigation = this.ProfileNavigation.bind(this);
  }

  AuthNavigation = (props) => {
    return (
      <AuthStack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        {/* <AuthStack.Screen name="Login">
          {(props) => <Discover {...props} />}
        </AuthStack.Screen> */}
        <AuthStack.Screen
          {...(props) => <TabNavigation {...props} />}
          name="Home"
          component={this.TabNavigation}
        ></AuthStack.Screen>
      </AuthStack.Navigator>
    );
  };

  DiscoverNavigation = (props) => {
    return (
      <DiscoverStack.Navigator initialRouteName="Discover">
        <DiscoverStack.Screen name="Discover" component={Discover} />
      </DiscoverStack.Navigator>
    );
  };

  NearMeNavigation = (props) => {
    return (
      <NearMeStack.Navigator initialRouteName="NearMe">
        <NearMeStack.Screen name="NearMe" component={NearMe} />
      </NearMeStack.Navigator>
    );
  };

  ProfileNavigation = (props) => {
    return (
      <ProfileStack.Navigator initialRouteName="Profile">
        <ProfileStack.Screen name="Profile" component={Profile} />
      </ProfileStack.Navigator>
    );
  };

  TabNavigation = (props) => {
    return (
      <Tab.Navigator tabBarOptions={{ style: { height: 90, paddingTop: 10 }} }>
        <Tab.Screen
          {...(props) => <DiscoverNavigation {...props} />}
          name="Discover"
          component={this.DiscoverNavigation}
          options={{tabBarIcon: () => <Image source={DiscoverIcon} />}}
        />
        <Tab.Screen 
            name="Post" 
            component={this.NearMeNavigation} 
            options={{tabBarIcon: () => <Image source={NearMeIcon} />}}
        />
        <Tab.Screen 
            name="Profile" 
            component={this.ProfileNavigation} 
            options={{tabBarIcon: () => <Image source={ProfileIcon} />}}
        />
      </Tab.Navigator>
    );
  };

  render() {
    return (
      <NavigationContainer>
        <this.AuthNavigation></this.AuthNavigation>
      </NavigationContainer>
    );
  }
}
