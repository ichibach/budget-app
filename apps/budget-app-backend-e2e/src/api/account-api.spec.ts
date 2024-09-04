import { request } from "./request";

const TESTING_URL = '/api/account/';
describe(`GET ${TESTING_URL}`, () => {
  it('should account create', async () => {
    const res = await request.post(TESTING_URL, {
      "name": "Account #1",
      "description": "this is account Account #1",
      "account_type": "default",
      "currency": "RUB",
    });

    expect(res.status).toBe(201);
    expect(res.data).toEqual(expect.objectContaining({ 
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