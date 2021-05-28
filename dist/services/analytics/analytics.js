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
exports.linkedEntities = exports.entities = exports.language = exports.keyPhrases = exports.sentiment = void 0;
const ai_text_analytics_1 = require("@azure/ai-text-analytics");
// import { url, key } from '../ignore/text-analytics-settings';
// const client = new TextAnalyticsClient(url(), new AzureKeyCredential(key()));
const client = new ai_text_analytics_1.TextAnalyticsClient('url', new ai_text_analytics_1.AzureKeyCredential('key'));
function sentiment(documents) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield client.analyzeSentiment(documents);
    });
}
exports.sentiment = sentiment;
function keyPhrases(documents) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield client.extractKeyPhrases(documents);
    });
}
exports.keyPhrases = keyPhrases;
function language(documents) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield client.detectLanguage(documents);
    });
}
exports.language = language;
function entities(documents) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield client.recognizeEntities(documents);
    });
}
exports.entities = entities;
function linkedEntities(documents) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield client.recognizeLinkedEntities(documents);
    });
}
exports.linkedEntities = linkedEntities;
//# sourceMappingURL=analytics.js.map