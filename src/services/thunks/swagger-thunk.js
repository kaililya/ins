import { API_BASE_URL, getAccessToken, getArticles, getBeratung, getBeratungs, getPrice, getServices, getUniqueArticle, getWiki } from "../../utils/api";
import { getArticlesRequest, getArticlesRequestFailed, getArticlesRequestSuccessed, getBeratungRequest, getBeratungRequestFailed, getBeratungRequestSuccess, getLawsRequest, getLawsRequestFailed, getLawsRequestSuccess, getPriceRequest, getPriceRequestFailed, getPriceRequestSuccess, getServiceRequest, getServiceRequestFailed, getServiceRequestSuccess, getUniqueArticlesRequest, getUniqueArticlesRequestFailed, getUniqueArticlesRequestSuccessed, getWikiRequest, getWikiRequestFailed, getWikiRequestSuccess } from "../slices/initialSlice";
import axios from "axios";

export const fetchGetArticlesThunk = () => async(dispatch) => {
  try {
    dispatch(getArticlesRequest());
    const response = await getArticles();
    // console.log(response);
    dispatch(getArticlesRequestSuccessed(response.data));
  } catch ({ httpCode, message }) {
    const msg = httpCode ? message : 'Не удалось связаться с сервером';
    dispatch(getArticlesRequestFailed(msg));
  }
}

export const fetchGetUniqueArticleThunk = (id) => async(dispatch) => {
  try {
    dispatch(getUniqueArticlesRequest());
    const response = await getUniqueArticle(id);
    dispatch(getUniqueArticlesRequestSuccessed(response.data.data));
  } catch ({ httpCode, message }) {
    const msg = httpCode ? message : 'Не удалось связаться с сервером';
    dispatch(getUniqueArticlesRequestFailed(msg));
  }
}

export const fetchGetBeratungThunk = () => async(dispatch) => {
  try {
    dispatch(getBeratungRequest());
    const response = await getBeratungs();
    dispatch(getBeratungRequestSuccess(response.data.data));
  } catch ({ httpCode, message }) {
    const msg = httpCode ? message : 'Не удалось связаться с сервером';
    dispatch(getBeratungRequestFailed(msg));
  }
}


export const fetchGetPriceThunk = () => async(dispatch) => {
  try {
    dispatch(getPriceRequest());
    const response = await getPrice();
    // console.log(response.data.data);
    dispatch(getPriceRequestSuccess(response.data.data));
  } catch ({ httpCode, message }) {
    const msg = httpCode ? message : 'Не удалось связаться с сервером';
    dispatch(getPriceRequestFailed(msg));
  }
}

export const fetchGetServiceThunk = () => async(dispatch) => {
  try {
    dispatch(getServiceRequest());
    const response = await getServices();
    // console.log(response.data.data);
    dispatch(getServiceRequestSuccess(response.data.data));
  } catch ({ httpCode, message }) {
    const msg = httpCode ? message : 'Не удалось связаться с сервером';
    dispatch(getServiceRequestFailed(msg));
  }
}

export const fetchGetWikiThunk = () => async(dispatch) => {
  try {
    dispatch(getWikiRequest());
    const response = await getWiki();
    dispatch(getWikiRequestSuccess(response.data));
  } catch ({ httpCode, message }) {
    const msg = httpCode ? message : 'Не удалось связаться с сервером';
    dispatch(getWikiRequestFailed(msg));
  }
}

export const fetchLaws = (searchText, pageNumber, pageSize) => async(dispatch) => {
  try {
    const accessToken = await getAccessToken();
    dispatch(getLawsRequest());
    console.log(searchText);
    const response = await axios.get(`${API_BASE_URL}/api/laws?filter[searchText]=${encodeURIComponent(searchText)}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    dispatch(getLawsRequestSuccess(response.data));
    console.log(response.data);
    return response.data;
  } catch (error) {
    dispatch(getLawsRequestFailed('error'));
    console.error("Error fetching laws", error);
  }
};