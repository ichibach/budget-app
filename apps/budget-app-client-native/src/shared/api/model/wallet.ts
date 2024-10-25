
export enum WalletType {
  DEFAULT = 'default',
  SAVING = 'saving',
  DEBT = 'debt',
}

export interface Wallet {
  id: number;

  name: string;

  description: string;

  account_type: WalletType;

  iconId?: number | null;

  currency: string;

  current_balance: number;

  is_into_general_balance: boolean;
  
} 