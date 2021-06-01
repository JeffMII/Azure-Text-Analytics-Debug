import { SentimentAnalysis } from "../text-analytics/sentiment/sentiment-analysis.model";

export class SentimentResponse {
    snippets : string[];
    sentiments : SentimentAnalysis[];
}