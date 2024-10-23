import { ThemedText } from "@/shared/components/ThemedText";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { TextInput, View, StyleSheet, SafeAreaView } from "react-native";




export function WalletForm () {
  const [text, onChangeText] = useState('Useless Text');
  const [number, onChangeNumber] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('Useless Text');


  return (
    <SafeAreaView>
      <ThemedText>Wallet name</ThemedText>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />

      <ThemedText>Currency</ThemedText>

      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
        <Picker.Item label="RUB" value="RUB" />
        <Picker.Item label="USD" value="USD" />
      </Picker>



      <ThemedText>Current balance</ThemedText>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="decimal-pad"
      />
    </SafeAreaView>
  )

}


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});