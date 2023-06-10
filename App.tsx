/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import OcticonsIcon from 'react-native-vector-icons/Octicons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import CalendarScreen from './src/screens/CalendarScreen';
import EventScreen from './src/screens/EventScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BackButton from './src/components/BackButton';

const queryClient = new QueryClient();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AppScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#e91e63',
        tabBarItemStyle: {padding: 4},
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Главная',
          tabBarIcon: ({color, size}) => (
            <OcticonsIcon name="home" color={color} size={size - 4} />
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={{
          tabBarLabel: 'Календарь',
          tabBarIcon: ({color, size}) => (
            <AntDesignIcon name="calendar" color={color} size={size - 4} />
          ),
        }}
      />
      {/* <Tab.Screen
              name="Event"
              component={EventScreen}
                options={{tabBarButton: () => null}}
            /> */}
    </Tab.Navigator>
  );
}
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          {/* <Tab.Navigator
            initialRouteName="Home"
            backBehavior="initialRoute"
            screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: '#e91e63',
              tabBarItemStyle: {padding: 4},
            }}>
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{
                tabBarLabel: 'Главная',
                tabBarIcon: ({color, size}) => (
                  <OcticonsIcon name="home" color={color} size={size - 4} />
                ),
              }}
            />
            <Tab.Screen
              name="Calendar"
              component={CalendarScreen}
              options={{
                tabBarLabel: 'Календарь',
                tabBarIcon: ({color, size}) => (
                  <AntDesignIcon
                    name="calendar"
                    color={color}
                    size={size - 4}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Event"
              component={EventScreen}
              options={{
                tabBarButton: () => null,
                headerShown: true,
                headerLeft: BackButton,
              }}
            />
          </Tab.Navigator> */}
          <Stack.Navigator
            initialRouteName="AppScreen"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen
              name="AppScreen"
              component={AppScreen}
              options={{headerTitle: ''}}
            />
            <Stack.Screen
              name="Event"
              component={EventScreen}
              options={{
                headerShown: true,
                // headerTransparent: true,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaView>
  );
}

export default App;
