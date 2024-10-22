import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';


import { ThemedText } from '@/shared/components/ThemedText';
import { ThemedView } from '@/shared/components/ThemedView';
import { WalletItemEntity } from '@/entities/WalletListItem';
import ScrollView from '@/shared/components/ScrollView';

export default function Wallets() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView>
        <WalletItemEntity/>
        <WalletItemEntity/>
        <WalletItemEntity/>

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
