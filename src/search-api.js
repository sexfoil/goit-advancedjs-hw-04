import axios from 'axios';
axios.defaults.headers.common['x-api-key'] = "live_lRZEIkhbwtvfK1yPxtwtCkUy1ANlxpe35OrJl3neeWXcmXVdB9lEFrv8VKk1XIgE";


const BASE_URL = 'https://pixabay.com/api/';
const PIXABAY_API_KEY = '40838558-c247548bc4ad52de754856e08';
const IMAGE_PARAM_TEMPLATE = {
    key: PIXABAY_API_KEY,
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true
}

function getSearchUrl(params) {
    // console.log(`${BASE_URL}?${params}`);
    return `${BASE_URL}?${params}`;
}

function getParams(query, template) {
    template.q = query;
    return new URLSearchParams(template);    
}


async function fetchUrl(query, searchTemplate = { key: PIXABAY_API_KEY }) {
    const params = getParams(query, searchTemplate);
    const data = (await axios.get(getSearchUrl(params))).data;
    console.log("DATA: ", data);
    return data;
}

function fetchUrl2(query, searchTemplate = { key: PIXABAY_API_KEY }) {
    const params = getParams(query, searchTemplate);
    const data = axios.get(getSearchUrl(params)).then(data => console.log(data)).catch(err => console.log('ERROR', err));
    console.log("DATA: ", data);
    return data;
}


export function findImages(searchQuery) {
    return fetchUrl2(searchQuery, IMAGE_PARAM_TEMPLATE);
}