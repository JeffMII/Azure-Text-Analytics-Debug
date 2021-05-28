"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const express_1 = require("express");
const search = __importStar(require("../services/bing/search"));
const analytics = __importStar(require("../services/analytics/analytics"));
const router = express_1.Router();
router.get('/search', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // await search.query(req.query.query.toString(), res, sentiment);
}));
router.get('/search/analyze', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield search.query(req.query.query.toString(), res, analyze);
}));
function analyze(res, searchRes) {
    return __awaiter(this, void 0, void 0, function* () {
        const sentiments = [];
        const phrases = [];
        const languages = [];
        const ents = [];
        const linkedEnts = [];
        for (const page of searchRes.webPages.value) {
            const sent = yield analytics.sentiment([page.snippet]);
            const phrs = yield analytics.keyPhrases([page.snippet]);
            const lang = yield analytics.language([page.snippet]);
            const es = yield analytics.entities([page.snippet]);
            const linkedEs = yield analytics.linkedEntities([page.snippet]);
            sentiments.push(sent);
            phrases.push(phrs);
            languages.push(lang);
            ents.push(es);
            linkedEnts.push(linkedEs);
        }
        res.send({ sentiments, phrases, languages, entities: ents, linkedEntities: linkedEnts });
    });
}
router.get('/search/analyze/sentiment', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield search.query(req.query.query.toString(), res, sentiment);
}));
function sentiment(res, searchRes) {
    return __awaiter(this, void 0, void 0, function* () {
        const sentiments = [];
        for (const page of searchRes.webPages.value) {
            const sent = yield analytics.sentiment([page.snippet]);
            sentiments.push(sent);
        }
        res.send({ sentiments });
    });
}
router.get('/search/analyze/phrases', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield search.query(req.query.query.toString(), res, keyPhrases);
}));
function keyPhrases(res, searchRes) {
    return __awaiter(this, void 0, void 0, function* () {
        const phrases = [];
        for (const page of searchRes.webPages.value) {
            const phrs = yield analytics.keyPhrases([page.snippet]);
            phrases.push(phrs);
        }
        res.send({ phrases });
    });
}
router.get('/search/analyze/language', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield search.query(req.query.query.toString(), res, language);
}));
function language(res, searchRes) {
    return __awaiter(this, void 0, void 0, function* () {
        const languages = [];
        for (const page of searchRes.webPages.value) {
            const lang = yield analytics.language([page.snippet]);
            languages.push(lang);
        }
        res.send({ languages });
    });
}
router.get('/search/analyze/entities', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield search.query(req.query.query.toString(), res, entities);
}));
function entities(res, searchRes) {
    return __awaiter(this, void 0, void 0, function* () {
        const ents = [];
        for (const page of searchRes.webPages.value) {
            const es = yield analytics.entities([page.snippet]);
            ents.push(es);
        }
        res.send({ entities: ents });
    });
}
router.get('/search/analyze/linked/entities', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield search.query(req.query.query.toString(), res, linked_entities);
}));
function linked_entities(res, searchRes) {
    return __awaiter(this, void 0, void 0, function* () {
        const linkedEnts = [];
        for (const page of searchRes.webPages.value) {
            const linkedEs = yield analytics.linkedEntities([page.snippet]);
            linkedEnts.push(linkedEs);
        }
        res.send({ linkedEntities: linkedEnts });
    });
}
module.exports = router;
//# sourceMappingURL=analytics.js.map