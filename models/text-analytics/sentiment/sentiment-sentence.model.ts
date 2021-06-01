import { SentimentConfidenceScores } from "./sentiment-confidence-scores.model";

export class SentimentSentence {
    sentiment : string;
    confidenceScores : SentimentConfidenceScores;
    offset : number;
    length : number;
    text : string;
}