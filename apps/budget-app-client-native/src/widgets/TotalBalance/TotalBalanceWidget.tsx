import { ThemedText } from "@/shared/components/ThemedText";
import { ThemedView } from "@/shared/components/ThemedView";
import { style } from "./styles";



export function TotalBalanceWidget() {

  return (  
    <ThemedView style={style.container}>
      <ThemedText> Total Balance</ThemedText>
      <ThemedText type="title" >
        3 425,24 $
      </ThemedText>
    </ThemedView>
  )
}