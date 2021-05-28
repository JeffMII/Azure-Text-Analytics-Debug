"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
const xmlhttprequest_ts_1 = require("xmlhttprequest-ts");
const request = new xmlhttprequest_ts_1.XMLHttpRequest();
// Returns the JSON received from Microsoft's Bing Search API using the query param
function query(q, res, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        q = encodeURI(q);
        const opt = [];
        opt.push("q=" + q);
        opt.push("mkt=en-US");
        const options = opt.join("&");
        // const queryurl = url() + 'search?' + options;
        const queryurl = 'url' + 'search?' + options;
        try {
            request.open("GET", queryurl);
        }
        catch (e) {
            return null;
        }
        // request.setRequestHeader('Ocp-Apim-Subscription-Key', key());
        request.setRequestHeader('Ocp-Apim-Subscription-Key', 'key');
        request.setRequestHeader('Accept', 'application/json');
        request.onreadystatechange = () => {
            if (request.readyState === request.DONE) {
                callback(res, JSON.stringify(JSON.parse(request.responseText)));
                return;
            }
        };
        request.send();
    });
}
exports.query = query;
//# sourceMappingURL=search.js.map