import { ThemedText } from "@/shared/components/ThemedText";
import { ThemedView } from "@/shared/components/ThemedView";
import { style } from "./styles";
import { useEffect, useState } from "react";
import { request } from "@/shared/api/request";



export function TotalBalanceWidget() {
  const [totalBalance, setTotalBalance] = useState('0');

  useEffect(() => {
    request({ url: '/api/account/total-balance' }).then(
      res => setTotalBalance(res)
    )
  }, [])


  return (  
    <ThemedView style={style.container}>
      <ThemedText> Total Balance</ThemedText>
      <ThemedText type="title" >
        {totalBalance} $
      </ThemedText>
    </ThemedView>
  )
}