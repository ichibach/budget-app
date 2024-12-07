import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, RefreshControl } from 'react-native';


import { ThemedText } from '@/shared/components/ThemedText';
import { ThemedView } from '@/shared/components/ThemedView';
import { WalletItemEntity } from '@/entities/WalletListItem';
import ScrollView from '@/shared/components/ScrollView';
import { useEffect, useState } from 'react';
import { request } from '@/shared/api/request';
import { useWalletListQuery } from '@/shared/api/hooks/query/wallet.query';
import { Link, router, Slot, Stack, useNavigation, useRouter } from 'expo-router';

export default function WalletsLayout() {

  const {isLoading, data, refetch} = useWalletListQuery()
  const router = useRouter()
  const navigation = useNavigation()

  const wallets = data?.data.data || [];

  return (
    <>
      <ThemedView style={styles.container}>
      <ScrollView
        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={refetch} />}
      >
        { 
          wallets.map((wallet) => 
            <WalletItemEntity 
              {...wallet} 
              key={wallet.id}
              onClick={() => router.push({pathname: '/wallets/[wallet_id]', params: { wallet_id: wallet.id }})}
            />
          )
        }
      </ScrollView>
      
    </ThemedView>
    <Slot/>
    
    </>

      

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
