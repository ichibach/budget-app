import { Pressable, View } from 'react-native';
import { style } from './style';
import { ThemedText } from '@/shared/components/ThemedText';
import { Ionicons } from '@expo/vector-icons';


interface WalletItemEntityProps {
  name: string;
  current_balance: number;
  currency: string;
  onClick?: () => void;
}

export function WalletItemEntity(props: WalletItemEntityProps) {
  const {name, current_balance, currency, onClick} = props;

  return (
    <Pressable style={style.container} onPress={onClick}>
      <View style={style.iconContainer}>
        <Ionicons name={'card'} size={25} color={'#14966D'} />
      </View>
      <View style={style.content}>
        <ThemedText style={style.title}>{name}</ThemedText>
        <ThemedText style={style.amount}>{current_balance} {currency}</ThemedText>
      </View>
    </Pressable>
  );
}
