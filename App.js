import * as React from "react";
import { Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import DiscoverIcon from "./src/assets/discover.png";
// import NearMeIcon from "./src/assets/nearMe.png";
// import ProfileIcon from "./src/assets/profile.png"

// function Discover() {
//     return (
//         <View
//             style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
//         >
//             <Text>Discover -- anuj!</Text>
//         </View>
//     );
// }

// function nearMe() {
//     return (
//         <View
//             style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
//         >
//             <Text>Near Me!</Text>
//         </View>
//     );
// }

// function profile() {
//     return (
//         <View
//             style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
//         >
//             <Text>Profile!</Text>
//         </View>
//     );
// }

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer style={{ height: 1000}}>
            <Tab.Navigator tabBarOptions={{ style: { height: 90, paddingTop: 10 } }}>
                <Tab.Screen
                    name="Discover"
                    component={Discover}
                    options={{
                        tabBarIcon: () => <Image source={DiscoverIcon} />,
                    }}
                />
                <Tab.Screen name="Near Me" component={nearMe} 
                    name="Near Me"
                    component={nearMe}
                    options={{
                        tabBarIcon: () => <Image source={NearMeIcon} />,
                    }}
                />
                <Tab.Screen name="Profile" component={profile} 
                    name="Profile"
                    component={profile}
                    options={{
                        tabBarIcon: () => <Image source={ProfileIcon} />,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
