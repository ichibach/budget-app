import { AccountType } from "../entities/account-type.enum";
import { Account } from "../entities/account.entity";




export class CreateAccountDto 
  implements Pick<
  Account, 
    | 'name' 
    | 'description'
    | 'account_type'
  > 
{
  name: string;
  description: string;
  account_type: AccountType;
  user_id: number;
}
