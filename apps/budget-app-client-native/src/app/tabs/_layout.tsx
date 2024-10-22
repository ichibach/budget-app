import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/shared/components/navigation/TabBarIcon';
import { Colors } from '@/shared/constants/Colors';
import { useColorScheme } from '@/shared/hooks/useColorScheme';
import { TotalBalanceWidget } from '@/widgets/TotalBalance/TotalBalanceWidget';
import { SettingWidget } from '@/widgets/Settings/SettingsWidget';
import { AddWalletWidget } from '@/widgets/AddWallet/AddWalletWidget';
import { SafeAreaView, View } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
  <>
    <SafeAreaView>
      <SettingWidget/>
      <TotalBalanceWidget/>
      <AddWalletWidget/>
    </SafeAreaView>
    <Tabs
      initialRouteName='wallets'
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
        <Tabs.Screen
        name="wallets"
        options={{
          title: 'Wallets',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'wallet' : 'wallet-outline'} color={color} />
          ),
        }}
      />
        <Tabs.Screen
        name="categories"
        options={{
          title: 'Categories',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'apps' : 'apps-outline'} color={color} />
            ),
          }}
        />

        
    </Tabs>
  </>
    
  );
} 


const style = 
