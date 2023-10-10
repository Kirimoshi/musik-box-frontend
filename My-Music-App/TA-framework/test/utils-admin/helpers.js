/* eslint-disable prettier/prettier */
const axios = require("axios");

async function pageNumber() {
    const url = await browser.getUrl();
    const match = url.match(/\/([^\/]+)\/?$/);
    return match ? match[1] : null;
}

function withoutEndpointPage(url) {
    return url.replace(/\/[^/]+$/, '/');
}

function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
        if (+match === 0) {
            return "";
        } else {
            return index === 0 ? match.toLowerCase() : match.toUpperCase();
        }
    });
}

function generateRandomWord() {
    const length = Math.floor(Math.random() * 6) + 5;
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let randomWord = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomWord += characters[randomIndex];
    }
    return randomWord;
}

const sendRequest = async (url, data = null, method = "get", accessToken = null, additionalHeaders = {}) => {
    try {
        const headers = {
            ...additionalHeaders
        };

        if (accessToken) {
            headers["Authorization"] = `Bearer ${accessToken}`;
        }
        
        const response = await axios({
            method,
            url: `http://127.0.0.1:3000/${url}`,
            headers,
            data
        });
        return {
            status: response.status,
            data: response.data,    
        } 
    } catch (error) {
        return {
            status: error.response.status
        };
    }
};

module.exports = {
    camelize,
    sendRequest,
    pageNumber,
    withoutEndpointPage,
    generateRandomWord
};
