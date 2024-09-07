import { CreateAccountFixture, GetAccountFixture } from "src/fixtures/account.fixture";
import { request } from "./request";

const target_url = '/api/account/';


describe(`POST ${target_url}`, () => {
  it('should account create', async () => {
    const response = await request.post(target_url, { ...CreateAccountFixture });

    expect(response.status).toBe(201);
    expect(response.data).toEqual(expect.objectContaining({ 
      ...GetAccountFixture
    }));
  });
});

describe(`GET ${target_url}`, () => {
  it('should account get', async () => {
    const post_response = await request.post(target_url, { ...CreateAccountFixture });

    expect(post_response.status).toBe(201);
    expect(post_response.data.id).toEqual(expect.any(Number));

    const response = await request.get(`${target_url}${post_response.data.id}`)

    expect(response.status).toBe(200);
    expect(response.data).toEqual(expect.objectContaining({ 
      ...GetAccountFixture
    }));
  });
});