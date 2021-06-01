import { TextAnalyticsClient, AzureKeyCredential } from '@azure/ai-text-analytics';
// import { url, key } from '../ignore/text-analytics-settings';

const client = new TextAnalyticsClient('url', new AzureKeyCredential('key'));
// const client = new TextAnalyticsClient(url(), new AzureKeyCredential(key()));

export async function sentiment(documents : string[]) {
    return await client.analyzeSentiment(documents);
}

export async function keyPhrases(documents : string[]) {
    return await client.extractKeyPhrases(documents);
}

export async function language(documents : string[]) {
    return await client.detectLanguage(documents);
}

export async function entities(documents : string[]) {
    return await client.recognizeEntities(documents);
}

export async function linkedEntities(documents : string[]) {
    return await client.recognizeLinkedEntities(documents);
}