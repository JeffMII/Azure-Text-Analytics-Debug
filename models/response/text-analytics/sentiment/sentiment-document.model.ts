import { SentimentConfidenceScores } from "./sentiment-confidence-scores.model";
import { SentimentSentence } from "./sentiment-sentence.model";

export class SentimentDocument {
    id : string;
    sentiment : string;
    confidenceScores : SentimentConfidenceScores;
    sentences : SentimentSentence[];
    warnings : object[];
}