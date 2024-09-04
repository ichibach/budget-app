import { request } from "./request";

const target_url = '/api/account/';


describe(`POST ${target_url}`, () => {
  it('should account create', async () => {
    const response = await request.post(target_url, {
      "name": "Account #1",
      "description": "this is account Account #1",
      "account_type": "default",
      "currency": "RUB",
    });

    expect(response.status).toBe(201);
    expect(response.data).toEqual(expect.objectContaining({ 
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
    }));
  });
});