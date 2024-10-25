import { AccountType } from "../entities/account-type.enum";
import { Account } from "../entities/account.entity";




export class CreateAccountDto 
  implements Pick<
  Account, 
    | 'name' 
    | 'description'
    | 'account_type'
    | 'currency'
  > 
{
  name: string;
  description: string;
  account_type: AccountType;
  currency: string;
}
