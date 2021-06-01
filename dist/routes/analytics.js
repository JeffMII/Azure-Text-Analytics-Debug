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
const express_1 = require("express");
const search = __importStar(require("../services/bing/search"));
const analytics = __importStar(require("../services/analytics/analytics"));
const router = express_1.Router();
router.get('/search', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // await search.query(req.query.query.toString(), res, sentiment);
    }
    catch (err) {
        res.statusCode = 500;
        res.send({ error: err.message });
    }
}));
router.get('/search/analyze', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield search.query(req.query.query.toString(), res, analyze);
    }
    catch (err) {
        res.statusCode = 500;
        res.send({ error: err.message });
    }
}));
function analyze(res, searchRes) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const snippets = [];
            for (const page of searchRes.webPages.value) {
                snippets.push(page.snippet);
            }
            const sentiments = yield analytics.sentiment(snippets);
            const phrases = yield analytics.keyPhrases(snippets);
            const languages = yield analytics.language(snippets);
            const ents = yield analytics.entities(snippets);
            const linkedEntities = yield analytics.linkedEntities(snippets);
            res.send({ snippets, sentiments, phrases, languages, entities: ents, linkedEntities });
        }
        catch (err) {
            res.statusCode = 500;
            res.send({ error: err.message });
        }
    });
}
router.get('/search/analyze/sentiment', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield search.query(req.query.query.toString(), res, sentiment);
    }
    catch (err) {
        res.statusCode = 500;
        res.send({ error: err.message });
    }
}));
function sentiment(res, searchRes) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const snippets = [];
            for (const page of searchRes.webPages.value) {
                snippets.push(page.snippet);
            }
            const sentiments = yield analytics.sentiment(snippets);
            res.send({ snippets, sentiments });
        }
        catch (err) {
            res.statusCode = 500;
            res.send({ error: err.message });
        }
    });
}
router.get('/search/analyze/phrases', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield search.query(req.query.query.toString(), res, keyPhrases);
    }
    catch (err) {
        res.statusCode = 500;
        res.send({ error: err.message });
    }
}));
function keyPhrases(res, searchRes) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const snippets = [];
            for (const page of searchRes.webPages.value) {
                snippets.push(page.snippet);
            }
            const phrases = yield analytics.keyPhrases(snippets);
            res.send({ snippets, phrases });
        }
        catch (err) {
            res.statusCode = 500;
            res.send({ error: err.message });
        }
    });
}
router.get('/search/analyze/language', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield search.query(req.query.query.toString(), res, language);
    }
    catch (err) {
        res.statusCode = 500;
        res.send({ error: err.message });
    }
}));
function language(res, searchRes) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const snippets = [];
            for (const page of searchRes.webPages.value) {
                snippets.push(page.snippet);
            }
            const languages = yield analytics.language(snippets);
            res.send({ snippets, languages });
        }
        catch (err) {
            res.statusCode = 500;
            res.send({ error: err.message });
        }
    });
}
router.get('/search/analyze/entities', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield search.query(req.query.query.toString(), res, entities);
    }
    catch (err) {
        res.statusCode = 500;
        res.send({ error: err.message });
    }
}));
function entities(res, searchRes) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const snippets = [];
            for (const page of searchRes.webPages.value) {
                snippets.push(page.snippet);
            }
            const ents = yield analytics.entities(snippets);
            res.send({ snippets, entities: ents });
        }
        catch (err) {
            res.statusCode = 500;
            res.send({ error: err.message });
        }
    });
}
router.get('/search/analyze/linked/entities', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield search.query(req.query.query.toString(), res, linked_entities);
    }
    catch (err) {
        res.statusCode = 500;
        res.send({ error: err.message });
    }
}));
function linked_entities(res, searchRes) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const snippets = [];
            for (const page of searchRes.webPages.value) {
                snippets.push(page.snippet);
            }
            const linkedEntities = yield analytics.linkedEntities(snippets);
            res.send({ snippets, linkedEntities });
        }
        catch (err) {
            res.statusCode = 500;
            res.send({ error: err.message });
        }
    });
}
module.exports = router;
//# sourceMappingURL=analytics.js.map