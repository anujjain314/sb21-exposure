import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//import screens
// import Login from "./screens/Login/Login";
import Discover from "./screens/Discover/Discover";
import NearMe from "./screens/NearMe/NearMe";
import Profile from "./screens/Profile/Profile";

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
      <Tab.Navigator>
        <Tab.Screen
          {...(props) => <DiscoverNavigation {...props} />}
          name="Discover"
          component={this.DiscoverNavigation}
        />
        <Tab.Screen name="Post" component={this.NearMeNavigation} />
        <Tab.Screen name="Profile" component={this.ProfileNavigation} />
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
