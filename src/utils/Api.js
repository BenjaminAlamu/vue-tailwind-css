import axios from "axios";
import { store } from "@/store/store";

const instance = axios.create({
  baseURL: process.env.baseURL,
});

// request interceptor
instance.interceptors.request.use(
  (config, reqAuth) => {
    console.log({ reqAuth });
    return config;
  },
  (error) => {
    console.log({ error });
  }
);

class Api {
  static async get(url) {
    try {
      let config = {
        headers: {
          Authorization: `Bearer ${store.state.auth.token}`,
        },
      };
      let response = await instance.get(url, config);

      return response;
    } catch (error) {
      return error.response;
    }
  }

  static async post(url, payload) {
    try {
      let config = {
        headers: {
          Authorization: `Bearer ${store.state.auth.token}`,
        },
      };
      let response = await instance.post(url, payload, config);

      return response;
    } catch (error) {
      return error.response;
    }
  }

  static async put(url, payload = {}) {
    try {
      let config = {
        headers: {
          Authorization: `Bearer ${store.state.auth.token}`,
        },
      };
      let response = await instance.put(url, payload, config);

      return response;
    } catch (error) {
      return error.response;
    }
  }

  static async patch(url, payload = {}) {
    try {
      let config = {
        headers: {
          Authorization: `Bearer ${store.state.auth.token}`,
        },
      };
      let response = await instance.patch(url, payload, config);

      return response;
    } catch (error) {
      return error.response;
    }
  }

  static async delete(url, payload = {}) {
    try {
      let config = {
        headers: {
          Authorization: `Bearer ${store.state.auth.token}`,
        },
        data: payload,
      };
      let response = await instance.delete(url, config);

      return response;
    } catch (error) {
      return error.response;
    }
  }
}

export default Api;
