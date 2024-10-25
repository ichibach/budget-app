import { ThemedText } from "@/shared/components/ThemedText";
import { ThemedView } from "@/shared/components/ThemedView";
import { style } from "./styles";
import { useEffect, useState } from "react";
import { request } from "@/shared/api/request";
import { useTotalBalanceQuery } from "@/shared/api/hooks/query/wallet.query";



export function TotalBalanceWidget() {
  const {data} = useTotalBalanceQuery();
  
  const totalBalance = data?.data;

  return (  
    <ThemedView style={style.container}>
      <ThemedText>Total Balance</ThemedText>
      <ThemedText type="title" >
        {totalBalance} $
      </ThemedText>
    </ThemedView>
  )
}