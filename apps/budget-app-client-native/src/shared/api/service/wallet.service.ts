import { Wallet } from "../model/wallet";
import { PaginationCollection, PaginationParam } from "../pagination-collection.type";
import { RequestFn, request as requestInstance } from "../request";

export class WalletServiceAPI {

  constructor (private request: RequestFn = requestInstance) {}

  static target_url = '/api/account/';
  static total_balance_target_url = WalletServiceAPI.target_url + 'total-balance/';

  getWallet(payload: Pick<Wallet, 'id'>) {
    return this.request({
      url: `${WalletServiceAPI.target_url}${payload.id}`, 
      method: 'GET' 
    })
  }

  getWalletList(payload?: PaginationParam) {
    return this.request<PaginationCollection<Wallet>>({
      url: WalletServiceAPI.target_url, 
      method: 'GET',
      params: { ...payload }
    })
  }

  getTotalBalance() {
    return this.request({
      url: WalletServiceAPI.total_balance_target_url, 
      method: 'GET',
    })
  }

  createWallet(payload: Omit<Wallet, 'id' | 'userId'>) {
    return this.request({ 
      url: WalletServiceAPI.target_url, 
      method: 'POST', 
      data: payload
    })
  }

  updateWallet(payload: { 
    id: Wallet['id'], 
    patch: Omit<Partial<Wallet>, 'id'>
  }) {
    return this.request({
      url: `${WalletServiceAPI.target_url}${payload.id}`, 
      method: 'PATCH',
      data: payload.patch
    })
  }

  deleteWallet (payload: Pick<Wallet, 'id'>) {
    return this.request({
      url: `${WalletServiceAPI.target_url}${payload.id}`, 
      method: 'DELETE'
    })
  }

}
