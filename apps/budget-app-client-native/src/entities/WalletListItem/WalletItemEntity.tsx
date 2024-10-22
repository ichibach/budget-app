import { View } from 'react-native';
import { style } from './style';
import { ThemedText } from '@/shared/components/ThemedText';
import { Ionicons } from '@expo/vector-icons';

export function WalletItemEntity() {
    return (
        <View style={style.container}>
            <View style={style.iconContainer}>
                <Ionicons name={'card'} size={25} color={'#14966D'} />
            </View>
            <View style={style.content}>
                <ThemedText style={style.title}>Cash money</ThemedText>
                <ThemedText style={style.amount}> 8 800 $</ThemedText>
            </View>
        </View>
    );
}
