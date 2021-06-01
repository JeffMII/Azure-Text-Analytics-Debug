import { NextFunction, Request, Response, Router } from "express";
import { SearchResponse } from "../models/bing/search-response.model";
import * as search from "../services/bing/search";
import * as analytics from "../services/analytics/analytics";

const router = Router();

router.get('/search', async (req : Request, res : Response, next : NextFunction) => {
    try {
        // await search.query(req.query.query.toString(), res, sentiment);
    } catch(err) { res.statusCode = 500; res.send({error : err.message}); }
});

router.get('/search/analyze', async (req : Request, res : Response, next : NextFunction) => {
    try {
        await search.query(req.query.query.toString(), res, analyze);
    } catch(err) { res.statusCode = 500; res.send({error : err.message}); }
});

async function analyze(res : Response, searchRes : SearchResponse) {
    try{
        const snippets = [];
        for(const page of searchRes.webPages.value) {
            snippets.push(page.snippet);
        }
        const sentiments = await analytics.sentiment(snippets);
        const phrases = await analytics.keyPhrases(snippets);
        const languages = await analytics.language(snippets);
        const ents = await analytics.entities(snippets);
        const linkedEntities = await analytics.linkedEntities(snippets);
        res.send({ snippets, sentiments, phrases, languages, entities : ents, linkedEntities });
    } catch(err) { res.statusCode = 500; res.send({error : err.message}); }
}

router.get('/search/analyze/sentiment', async (req : Request, res : Response, next : NextFunction) => {
    try {
        await search.query(req.query.query.toString(), res, sentiment);
    } catch(err) { res.statusCode = 500; res.send({error : err.message}); }
});

async function sentiment(res : Response, searchRes : SearchResponse) {
    try {
        const snippets = [];
        for(const page of searchRes.webPages.value) {
            snippets.push(page.snippet);
        }
        const sentiments = await analytics.sentiment(snippets);
        res.send({ snippets, sentiments });
    } catch(err) { res.statusCode = 500; res.send({error : err.message}); }
}

router.get('/search/analyze/phrases', async (req : Request, res : Response, next : NextFunction) => {
    try {
        await search.query(req.query.query.toString(), res, keyPhrases);
    } catch(err) { res.statusCode = 500; res.send({error : err.message}); }
});

async function keyPhrases(res : Response, searchRes : SearchResponse) {
    try {
        const snippets = [];
        for(const page of searchRes.webPages.value) {
            snippets.push(page.snippet);
        }
        const phrases = await analytics.keyPhrases(snippets);
        res.send({ snippets, phrases });
    } catch(err) { res.statusCode = 500; res.send({error : err.message}); }
}

router.get('/search/analyze/language', async (req : Request, res : Response, next : NextFunction) => {
    try {
        await search.query(req.query.query.toString(), res, language);
    } catch(err) { res.statusCode = 500; res.send({error : err.message}); }
});

async function language(res : Response, searchRes : SearchResponse) {
    try {
        const snippets = [];
        for(const page of searchRes.webPages.value) {
            snippets.push(page.snippet);
        }
        const languages = await analytics.language(snippets);
        res.send({ snippets, languages });
    } catch(err) { res.statusCode = 500; res.send({error : err.message}); }
}

router.get('/search/analyze/entities', async (req : Request, res : Response, next : NextFunction) => {
    try {
        await search.query(req.query.query.toString(), res, entities);
    } catch(err) { res.statusCode = 500; res.send({error : err.message}); }
});

async function entities(res : Response, searchRes : SearchResponse) {
    try {
        const snippets = [];
        for(const page of searchRes.webPages.value) {
            snippets.push(page.snippet);
        }
        const ents = await analytics.entities(snippets);
        res.send({ snippets, entities : ents });
    } catch(err) { res.statusCode = 500; res.send({error : err.message}); }
}

router.get('/search/analyze/linked/entities', async (req : Request, res : Response, next : NextFunction) => {
    try {
        await search.query(req.query.query.toString(), res, linked_entities);
    } catch(err) { res.statusCode = 500; res.send({error : err.message}); }
});

async function linked_entities(res : Response, searchRes : SearchResponse) {
    try {
        const snippets = [];
        for(const page of searchRes.webPages.value) {
            snippets.push(page.snippet);
        }
        const linkedEntities = await analytics.linkedEntities(snippets);
        res.send({ snippets, linkedEntities });
    } catch(err) { res.statusCode = 500; res.send({error : err.message}); }
}

export = router;