import { NextFunction, Request, Response, Router } from "express";
import { SearchResponse } from "../models/response/bing/search-response.model";
import * as search from "../services/bing/search";
import * as analytics from "../services/analytics/analytics";

const router = Router();

router.get('/search', async (req : Request, res : Response, next : NextFunction) => {
    // await search.query(req.query.query.toString(), res, sentiment);
});

router.get('/search/analyze', async (req : Request, res : Response, next : NextFunction) => {
    await search.query(req.query.query.toString(), res, analyze);
});

async function analyze(res : Response, searchRes : SearchResponse) {
    const sentiments = [];
    const phrases = [];
    const languages = [];
    const ents = [];
    const linkedEnts = [];
    for(const page of searchRes.webPages.value) {
        const sent = await analytics.sentiment([page.snippet]);
        const phrs = await analytics.keyPhrases([page.snippet]);
        const lang = await analytics.language([page.snippet]);
        const es = await analytics.entities([page.snippet]);
        const linkedEs = await analytics.linkedEntities([page.snippet]);
        sentiments.push(sent);
        phrases.push(phrs);
        languages.push(lang);
        ents.push(es);
        linkedEnts.push(linkedEs);
    }
    res.send({ sentiments, phrases, languages, entities : ents, linkedEntities : linkedEnts });
}

router.get('/search/analyze/sentiment', async (req : Request, res : Response, next : NextFunction) => {
    await search.query(req.query.query.toString(), res, sentiment);
});

async function sentiment(res : Response, searchRes : SearchResponse) {
    const sentiments = [];
    for(const page of searchRes.webPages.value) {
        const sent = await analytics.sentiment([page.snippet]);
        sentiments.push(sent);
    }
    res.send({ sentiments });
}

router.get('/search/analyze/phrases', async (req : Request, res : Response, next : NextFunction) => {
    await search.query(req.query.query.toString(), res, keyPhrases);
});

async function keyPhrases(res : Response, searchRes : SearchResponse) {
    const phrases = [];
    for(const page of searchRes.webPages.value) {
        const phrs = await analytics.keyPhrases([page.snippet]);
        phrases.push(phrs);
    }
    res.send({ phrases });
}

router.get('/search/analyze/language', async (req : Request, res : Response, next : NextFunction) => {
    await search.query(req.query.query.toString(), res, language);
});

async function language(res : Response, searchRes : SearchResponse) {
    const languages = [];
    for(const page of searchRes.webPages.value) {
        const lang = await analytics.language([page.snippet]);
        languages.push(lang);
    }
    res.send({ languages });
}

router.get('/search/analyze/entities', async (req : Request, res : Response, next : NextFunction) => {
    await search.query(req.query.query.toString(), res, entities);
});

async function entities(res : Response, searchRes : SearchResponse) {
    const ents = [];
    for(const page of searchRes.webPages.value) {
        const es = await analytics.entities([page.snippet]);
        ents.push(es);
    }
    res.send({ entities : ents });
}

router.get('/search/analyze/linked/entities', async (req : Request, res : Response, next : NextFunction) => {
    await search.query(req.query.query.toString(), res, linked_entities);
});

async function linked_entities(res : Response, searchRes : SearchResponse) {
    const linkedEnts = [];
    for(const page of searchRes.webPages.value) {
        const linkedEs = await analytics.linkedEntities([page.snippet]);
        linkedEnts.push(linkedEs);
    }
    res.send({ linkedEntities : linkedEnts });
}

module.exports = router;