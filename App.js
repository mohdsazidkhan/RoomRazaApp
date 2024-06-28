import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './screens/Home';
import Search from './screens/Search';
import AddProperty from './screens/AddProperty';
import Favourites from './screens/Favourites';
import Profile from './screens/Profile';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused
                ? 'search'
                : 'search-outline';
            } else if (route.name === 'Add Property') {
              iconName = focused
                ? 'add'
                : 'add-outline';
            } else if (route.name === 'Favourites') {
              iconName = focused
                ? 'heart'
                : 'heart-outline';
            } else if (route.name === 'Profile') {
              iconName = focused
                ? 'person'
                : 'person-outline';
            }


            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Add Property" component={AddProperty} />
        <Tab.Screen name="Favourites" component={Favourites} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
