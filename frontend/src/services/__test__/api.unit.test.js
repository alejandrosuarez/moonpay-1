import * as API from "../api";
import "regenerator-runtime/runtime";
jest.mock("isomorphic-fetch");
import fetch from "isomorphic-fetch";
import { ApiRoutes } from "../../settings/routes";

describe("API Service", () => {
  afterEach(() => {
    fetch.mockReset();
  });

  it("Get function", async () => {
    fetch.mockResolvedValue(Promise.resolve(new Response([])));

    await API.get(ApiRoutes.CURRENCIES, { skip: 0 });

    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("Post function", async () => {
    fetch.mockResolvedValue(Promise.resolve(new Response([])));

    await API.post(ApiRoutes.CURRENCIES, { skip: 0 });

    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("Put function", async () => {
    fetch.mockResolvedValue(Promise.resolve(new Response([])));

    await API.put(ApiRoutes.CURRENCIES, { skip: 0 });

    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("Patch function", async () => {
    fetch.mockResolvedValue(Promise.resolve(new Response([])));

    await API.patch(ApiRoutes.CURRENCIES, { skip: 0 });

    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("Del function", async () => {
    fetch.mockResolvedValue(Promise.resolve(new Response([])));

    await API.del(ApiRoutes.CURRENCIES);

    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
