import { createSlice } from '@reduxjs/toolkit';

const intitialState = {
  articlesData: null,
  uniqueArticlesData: null,
  beratungData: [],
  priceData: [],
  serviceData: [],
  wikiData: null,
  lawsData: [],
  inputValue: null,
  isDerectedToSeachPage: false,
  getArticlesRequest: false,
  getArticlesRequestSuccess: false,
  getArticlesRequestFailed: false,
  getUniqueArticlesRequest: false,
  getUniqueArticlesRequestSuccess: false,
  getUniqueArticlesRequestFailed: false,
  getBeratungRequest: false,
  getBeratungRequestSuccess: false,
  getBeratungRequestFailed: false,
  getPriceRequest: false,
  getPriceRequestSuccess: false,
  getPriceRequestFailed: false,
  getServiceRequest: false,
  getServiceRequestSuccess: false,
  getServiceRequestFailed: false,
  getWikiRequest: false,
  getWikiRequestSuccess: false,
  getWikiRequestFailed: false,
  getLawsRequest: false,
  getLawsRequestSuccess: false,
  getLawsRequestFailed: false,
  error: null,
}

export const swaggerDataSlice = createSlice({
  name: 'swaggerData',
  initialState: intitialState,
  reducers: {
    getArticlesRequest(state) {
      state.getArticlesRequest = true;
      state.articlesData = null;
      state.getArticlesRequestSuccess = false; 
      state.getArticlesRequestFailed = false; 
    },
    getArticlesRequestSuccessed(state, action) {
      state.getArticlesRequest = false; 
      state.articlesData = action.payload;
      state.getArticlesRequestSuccess = true; 
      state.getArticlesRequestFailed = false; 
    },
    getArticlesRequestFailed(state, action) {
      state.getArticlesRequest = false;
      state.getArticlesRequestFailed = true; 
      state.getArticlesRequestSuccess = false; 
      state.error = action.payload;
    },
    getUniqueArticlesRequest(state) {
      state.getUniqueArticlesRequest = true;
      state.uniqueArticlesData = null;
      state.getUniqueArticlesRequestSuccess = false; 
      state.getUniqueArticlesRequestFailed = false; 
    },
    getUniqueArticlesRequestSuccessed(state, action) {
      state.getUniqueArticlesRequest = false; 
      state.uniqueArticlesData = action.payload;
      state.getUniqueArticlesRequestSuccess = true; 
      state.getUniqueArticlesRequestFailed = false; 
    },
    getUniqueArticlesRequestFailed(state, action) {
      state.getUniqueArticlesRequest = false;
      state.getUniqueArticlesRequestFailed = true; 
      state.getUniqueArticlesRequestSuccess = false; 
      state.error = action.payload;
    },
    getBeratungRequest(state) {
      state.getBeratungRequest = true;
      state.beratungData = null;
      state.getBeratungRequestSuccess = false; 
      state.getBeratungRequestFailed = false; 
    },
    getBeratungRequestSuccess(state, action) {
      state.getBeratungRequest = false; 
      state.beratungData = action.payload;
      state.getBeratungRequestSuccess = true; 
      state.getBeratungRequestFailed = false; 
    },
    getBeratungRequestFailed(state, action) {
      state.getBeratungRequest = false;
      state.getBeratungRequestFailed = true; 
      state.getBeratungRequestSuccess = false; 
      state.error = action.payload;
    },
    getPriceRequest(state) {
      state.getPriceRequest = true;
      state.priceData = null;
      state.getPriceRequestSuccess = false; 
      state.getPriceRequestFailed = false; 
    },
    getPriceRequestSuccess(state, action) {
      state.getPriceRequest = false; 
      state.priceData = action.payload;
      state.getPriceRequestSuccess = true; 
      state.getPriceRequestFailed = false; 
    },
    getPriceRequestFailed(state, action) {
      state.getPriceRequest = false;
      state.getPriceRequestFailed = true; 
      state.getPriceRequestSuccess = false; 
      state.error = action.payload;
    },
    getServiceRequest(state) {
      state.getServiceRequest = true;
      state.serviceData = null;
      state.getServiceRequestSuccess = false; 
      state.getServiceRequestFailed = false; 
    },
    getServiceRequestSuccess(state, action) {
      state.getServiceRequest = false; 
      state.serviceData = action.payload;
      state.getServiceRequestSuccess = true; 
      state.getServiceRequestFailed = false; 
    },
    getServiceRequestFailed(state, action) {
      state.getServiceRequest = false;
      state.getServiceRequestFailed = true; 
      state.getServiceRequestSuccess = false; 
      state.error = action.payload;
    },
    getWikiRequest(state) {
      state.getWikiRequest = true;
      state.wikiData = null;
      state.getWikiRequestSuccess = false; 
      state.getWikiRequestFailed = false; 
    },
    getWikiRequestSuccess(state, action) {
      state.getWikiRequest = false; 
      state.wikiData = action.payload;
      state.getWikiRequestSuccess = true; 
      state.getWikiRequestFailed = false; 
    },
    getWikiRequestFailed(state, action) {
      state.getWikiRequest = false;
      state.getWikiRequestFailed = true; 
      state.getWikiRequestSuccess = false; 
      state.error = action.payload;
    },
    getLawsRequest(state) {
      state.getLawsRequest = true;
      // state.lawsData = null;
      state.getLawsRequestSuccess = false; 
      state.getLawsRequestFailed = false; 
    },
    getLawsRequestSuccess(state, action) {
      state.getLawsRequest = false;
      state.lawsData = action.payload;
      state.getLawsRequestSuccess = true; 
      state.getLawsRequestFailed = false; 
    },
    getLawsRequestFailed(state) {
      state.getLawsRequest = false;
      // state.lawsData = null;
      state.getLawsRequestSuccess = false; 
      state.getLawsRequestFailed = true; 
    },

    setInputValueAction(state, action) {
      state.inputValue = action.payload;
    },

    setIsDerectedToSeachPage(state,action) {
      state.isDerectedToSeachPage = action.payload;
    }
    
  },
})


export const { getArticlesRequest,
  getArticlesRequestSuccessed,
  getArticlesRequestFailed,
  getUniqueArticlesRequest,
  getUniqueArticlesRequestSuccessed,
  getUniqueArticlesRequestFailed,
  getBeratungRequest,
  getBeratungRequestSuccess,
  getBeratungRequestFailed,
  getPriceRequest,
  getPriceRequestSuccess,
  getPriceRequestFailed,
  getServiceRequest,
  getServiceRequestSuccess,
  getServiceRequestFailed,
  getWikiRequest,
  getWikiRequestSuccess,
  getWikiRequestFailed,
  getLawsRequest,
  getLawsRequestSuccess,
  getLawsRequestFailed,
  setInputValueAction,
  setIsDerectedToSeachPage,
 } = swaggerDataSlice.actions;

export default swaggerDataSlice.reducer