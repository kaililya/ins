import axios from "axios";
import { json } from "react-router-dom";

const defaultHeaders = {
  "Content-Type": "application/json"
};
export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return res.json()
    .then((err) => {
      console.log(err)

      err.httpCode = res.status;
      return Promise.reject(err);
    })
}

const makeFetchOptions = (method, headers, body) => {
  const options = {
    method: !!method ? method : 'GET',
    headers
  };
  if (body) {
    options.body = JSON.stringify(body)
  }
  return options;
}

export const getArticles = () => {
  const url = 'https://admin.compleon-solutions.de/api/articles?populate=*';
  const headers = {
    'Content-Type': 'application/json',
  };
  return axios.get(url, { headers });
};

export const getUniqueArticle = (id) => {
  const url = `https://admin.compleon-solutions.de/api/articles/${id}?populate=*`;
  const headers = {
    'Content-Type': 'application/json',
  };
  return axios.get(url, { headers });
};

export const getBeratungs = () => {
  const url = 'https://admin.compleon-solutions.de/api/beratungs';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer d4076c478b5fe8b64c1dfb1c8bdfd09f015aef61ab05a2ee6de50e4ab4fdecf979359b47f97df44de82af0694b0629265a865db43a379cde5ef3bc9dbc8a62a4aeb6e717780a8aa0f3742bb2cf4c8eae1460779571477abeb918b2b070333fc3df5e98a37e7b5fe1bfc1a5e1abdb2b3916bb644e9077939275cc21f4d1fb321b',
  };
  return axios.get(url, { headers });
};



export const getPrice = () => {
  const url = 'https://admin.compleon-solutions.de/api/prices?populate=*';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer d4076c478b5fe8b64c1dfb1c8bdfd09f015aef61ab05a2ee6de50e4ab4fdecf979359b47f97df44de82af0694b0629265a865db43a379cde5ef3bc9dbc8a62a4aeb6e717780a8aa0f3742bb2cf4c8eae1460779571477abeb918b2b070333fc3df5e98a37e7b5fe1bfc1a5e1abdb2b3916bb644e9077939275cc21f4d1fb321b',
  };
  return axios.get(url, { headers });
};

export const getServices = () => {
  const url = 'https://admin.compleon-solutions.de/api/services?populate=*';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer d4076c478b5fe8b64c1dfb1c8bdfd09f015aef61ab05a2ee6de50e4ab4fdecf979359b47f97df44de82af0694b0629265a865db43a379cde5ef3bc9dbc8a62a4aeb6e717780a8aa0f3742bb2cf4c8eae1460779571477abeb918b2b070333fc3df5e98a37e7b5fe1bfc1a5e1abdb2b3916bb644e9077939275cc21f4d1fb321b',
  };
  return axios.get(url, { headers });
};

export const getWiki = () => {
  const url = 'https://admin.compleon-solutions.de/api/wiki?populate[Categories][populate][SubContent][populate]=Content';
  const headers = {
    'Content-Type': 'application/json',
  };
  return axios.get(url, { headers });
};

export const API_BASE_URL = "https://staging.compleon-solutions.de";
export const CLIENT_ID = "O8o7nhK-UAbSBYdB3vcSRhx3wg__ztmK";
export const CLIENT_SECRET =
  "GxgwC7r5zh04mN5lmESGpSiJJ4PYU7OB_vPIs7c29xoUQ5u06gQiqxzyN1rvxdOJbeSEBn0NepmfShXW459SxV";

export const getAccessToken = async () => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/oauth2-token`,
      {
        grant_type: "client_credentials",
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data.access_token);
    return response.data.access_token;
  } catch (error) {
    console.error("Error fetching access token", error);
  }
};



