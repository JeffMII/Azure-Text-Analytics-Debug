import { SentimentDocument } from "./sentiment-document.model";

export class SentimentAnalysis {
    documents : SentimentDocument[];
    errors : object[];
    modelVersion : string;
}