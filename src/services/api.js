import axios from "axios";
import { BASE_URL, API_TOKEN } from "../config/apiConfig";
import qs from 'qs'


export const getMovies = async (category) => {
    

    const url = `${BASE_URL}/movie/${category}?language=en-US&page=1`;
    const auth = `Bearer ${API_TOKEN}`;

    const options = {
        method: 'GET',
        url: url,
        headers: {
            accept: 'application/json',
            Authorization: auth
        }
    };

    try {
        const response = await axios.request(options);
        return response.data.results;

    } catch (error) {
        console.log(error);
    }

};

export const  getMoviesBySearchResult = async (queryString, category) => {

    const url = `${BASE_URL}/search/${category}?query=${queryString}&include_adult=false&language=en-US&page=1`;
    const auth = `Bearer ${API_TOKEN}`;

    // console.log("I am here 3", queryString, category);

    const options = {
        method: 'GET',
        url: url,
        headers: {
            accept: 'application/json',
            Authorization: auth
        }
    };

    try {
        const response = await axios.request(options);
        return response.data.results;

    } catch (error) {
        console.log(error);
    }
};

export const getMoviesByTvShow = async (category) => {
    
    const url = `${BASE_URL}/tv/${category}?language=en-US&page=1`;
    const auth = `Bearer ${API_TOKEN}`;

    const options = {
        method: 'GET',
        url: url,
        headers: {
            accept: 'application/json',
            Authorization: auth
        }
    };

    try {
        const response = await axios.request(options);
        return response.data.results;

    } catch (error) {
        console.log(error);
    }

};