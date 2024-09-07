

export const CreateAccountFixture = {
  "name": "Account #1",
  "description": "this is account Account #1",
  "account_type": "default",
  "currency": "RUB",
};

export const GetAccountFixture = {
  "id": expect.any(Number),
  "createdAt": expect.any(String),
  "updatedAt": expect.any(String),
  "deletedAt": null,
  "name": "Account #1",
  "description": "this is account Account #1",
  "account_type": "default",
  "currency": "RUB",
  "current_balance": 0,
  "is_into_general_balance": true
}