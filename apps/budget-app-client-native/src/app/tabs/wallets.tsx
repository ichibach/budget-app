import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';


import { ThemedText } from '@/shared/components/ThemedText';
import { ThemedView } from '@/shared/components/ThemedView';
import { WalletItemEntity } from '@/entities/WalletListItem';
import ScrollView from '@/shared/components/ScrollView';
import { useEffect, useState } from 'react';
import { request } from '@/shared/api/request';

export default function Wallets() {

  const [wallets, setWallets] = useState<any[]>([])

  useEffect(() => {
    request({ url: '/api/account' }).then(
      res => setWallets(res.data)
    )
  }, [])


  useEffect(() => console.log(wallets.map(w => w.current_balance)), [wallets])


  return (
    <ThemedView style={styles.container}>
      <ScrollView>
        { wallets.map((wallet) => <WalletItemEntity {...wallet}/>)

        }
      </ScrollView>
    </ThemedView>
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
