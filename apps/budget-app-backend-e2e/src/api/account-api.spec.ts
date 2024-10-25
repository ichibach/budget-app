import { CreateAccountFixture, GetAccountFixture } from "../fixtures/account.fixture";
import { request } from "../request";

const target_url = '/api/account/';
const get_total_balance_target_url = target_url + 'total-balance/'; 

describe(`POST ${target_url}`, () => {
  it('should account create', async () => {
    const response = await request.post(target_url, { ...CreateAccountFixture });

    expect(response.status).toBe(201);
    expect(response.data).toEqual(expect.objectContaining(GetAccountFixture));
  });
});

describe(`GET ${target_url}`, () => {
  it('should account get', async () => {
    const post_response = await request.post(target_url, { ...CreateAccountFixture });

    expect(post_response.status).toBe(201);
    expect(post_response.data.id).toEqual(expect.any(Number));

    const response = await request.get(`${target_url}${post_response.data.id}`)

    expect(response.status).toBe(200);
    expect(response.data).toEqual(expect.objectContaining(GetAccountFixture));
  });
});

describe(`GET ${target_url}`, () => {
  it('should get list of accounts', async () => {
    const response = await request.get(target_url)

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('data');
    expect(Array.isArray(response.data.data)).toBe(true);
    expect(response.data).toHaveProperty('meta');
  });
});

describe(`GET ${get_total_balance_target_url}`, () => {
  it('should get total balance', async () => {
    const response = await request.get(get_total_balance_target_url)

    expect(response.status).toBe(200);
    expect(response.data).toEqual(expect.any(Number));
    expect(response.data).toBeGreaterThan(0);
  });
});

describe(`PATCH ${target_url}`, () => {
  it('should account update', async () => {
    const post_response = await request.post(target_url, { ...CreateAccountFixture });

    expect(post_response.status).toBe(201);
    expect(post_response.data.id).toEqual(expect.any(Number));

    const response = await request.patch(`${target_url}${post_response.data.id}`, { current_balance: 333.33 });

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('current_balance', 333.33);
  });
});

describe(`DELETE ${target_url}`, () => {
  it('should account delete', async () => {
    const post_response = await request.post(target_url, { ...CreateAccountFixture });

    expect(post_response.status).toBe(201);
    expect(post_response.data.id).toEqual(expect.any(Number));

    const response = await request.delete(`${target_url}${post_response.data.id}`);

    expect(response.status).toBe(200);
    expect(response.data).toEqual({deleted: 1});
  });
});