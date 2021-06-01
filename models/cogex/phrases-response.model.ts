import { KeyPhrasesAnalysis } from "../text-analytics/key-phrases/key-phrases-analysis.model";

export class KeyPhrasesResponse {
    snippets : string[];
    phrases : KeyPhrasesAnalysis[];
}