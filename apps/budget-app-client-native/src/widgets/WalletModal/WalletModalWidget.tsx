import { useRouter } from 'expo-router';
import { Modal, View, Text, Button } from 'react-native';
import Animated, { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';
import { style } from './style';



export function WalletModalWidget() {
  const router = useRouter();
  const onClose = () => router.back();

  return (
    <Modal
      animationType='none'
      transparent={true}
      visible={true}
      onRequestClose={onClose}
    >
      <View style={style.overlay}>
        <Animated.View entering={FadeIn} exiting={FadeOut} style={[ style.background]}/>

        <Animated.View entering={FadeInDown} style={[style.container]}>
          <Text>WalletModal</Text>

          <Button title='Go Back' onPress={onClose}/>
        </Animated.View>

      </View>
      

    </Modal>
  );
}
