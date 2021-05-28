// import { url, key } from '../ignore/bing-search-settings';
import { SearchResponse } from "../../models/response/bing/search-response.model";
import { Response } from 'express';
import { XMLHttpRequest } from 'xmlhttprequest-ts';

const request = new XMLHttpRequest();

// Returns the JSON received from Microsoft's Bing Search API using the query param
export async function query(q : string, res : Response, callback : (res : Response, content : any) => void) : Promise<SearchResponse> {
    q = encodeURI(q);

    const opt = [];
    opt.push("q=" + q);
    opt.push("mkt=en-US");
    const options = opt.join("&");

    // const queryurl = url() + 'search?' + options;
    const queryurl = 'url' + 'search?' + options;

    try {
        request.open("GET", queryurl)
    } catch(e) { return null }

    // request.setRequestHeader('Ocp-Apim-Subscription-Key', key());
    request.setRequestHeader('Ocp-Apim-Subscription-Key', 'key');
    request.setRequestHeader('Accept', 'application/json');

    request.onreadystatechange = () => {
        if(request.readyState === request.DONE) {
            callback(res, JSON.stringify(JSON.parse(request.responseText))); return;
        }
    }

    request.send();
}