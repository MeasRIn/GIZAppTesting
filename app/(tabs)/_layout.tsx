import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import Feather from '@expo/vector-icons/Feather';
import { useColorScheme } from '@/hooks/useColorScheme';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { View,Image, Avatar, AvatarFallbackText ,Text} from '@gluestack-ui/themed';
import Ionicons from '@expo/vector-icons/Ionicons';



export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            backgroundColor: 'transparent',
            position: 'absolute',
            
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="Home"
        options={{
        title:'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Knowledge"
        options={{
          title: 'Knowledge',
          tabBarIcon: ({ color }) => <Feather name="book" size={24} color={color} />,
        }}
      />
       <Tabs.Screen
        name="News"
        options={{
          title: 'News',
          tabBarIcon: ({ color }) => <Fontisto name="world-o" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Reports"
        options={{
          title: 'Report',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="chart-line" size={24} color={color} />,
        }}
      />
       <Tabs.Screen
        name="Menu"
        options={{
          title: 'Menu',
          tabBarIcon: ({ color }) => <Feather name="menu" size={32} color={color} />,
        }}
      />
    </Tabs>
  );
}
