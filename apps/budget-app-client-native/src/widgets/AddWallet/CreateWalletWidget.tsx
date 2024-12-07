import { useRouter } from 'expo-router';
import { Modal, View, Text, Button } from 'react-native';
import { style } from '../WalletModal/style';

export function CreateWalletWidget() {
    const router = useRouter();
    const onClose = () => router.back();

    return (
        <Modal
            animationType='none'
            transparent={false}
            visible={true}
            onRequestClose={onClose}
        >
            <View style={style.overlay}>
                <Text>Create Wallet Widget</Text>
                <Button title='Go Back' onPress={onClose} />
            </View>
        </Modal>
    );
}
