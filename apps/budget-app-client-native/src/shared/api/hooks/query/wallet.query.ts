import { useQuery } from "@tanstack/react-query";
import { WalletServiceAPI } from "../../service/wallet.service";


export const WalletListQueryKey = 'WalletListQueryKey'; 
export const walletServiceApi = new WalletServiceAPI();

export function useWalletListQuery () {

  return useQuery({
    queryKey: [WalletListQueryKey],
    queryFn: () => walletServiceApi.getWalletList()
  });
} 

export const TotalBalanceQueryKey = 'TotalBalanceQueryKey'; 


export function useTotalBalanceQuery () {
  return useQuery({
    queryKey: [TotalBalanceQueryKey],
    queryFn: () => walletServiceApi.getTotalBalance()
  });
}