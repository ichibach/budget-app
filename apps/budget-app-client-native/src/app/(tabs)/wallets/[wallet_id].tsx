import { WalletModalWidget } from "@/widgets/WalletModal";
import { useLocalSearchParams, useGlobalSearchParams } from "expo-router"
import { View, Text } from "react-native";



function WalletModal () {
  const {wallet_id} = useLocalSearchParams<{wallet_id: string}>();


  return (
    <WalletModalWidget/>
  )
} 

export default WalletModal;