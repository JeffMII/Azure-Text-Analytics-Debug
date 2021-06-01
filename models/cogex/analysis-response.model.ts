import { LanguageAnalysis } from "../text-analytics/detect-language/language-analysis.model";
import { EntitiesAnalysis } from "../text-analytics/entities/entities-analysis.model";
import { LinkedEntitiesAnalysis } from "../text-analytics/entities/linked-entities-analysis.model";
import { KeyPhrasesAnalysis } from "../text-analytics/key-phrases/key-phrases-analysis.model";
import { SentimentAnalysis } from "../text-analytics/sentiment/sentiment-analysis.model"

export class AnalysisResponse {
    snippets : string[];
    sentiments : SentimentAnalysis[];
    phrases : KeyPhrasesAnalysis[];
    languages : LanguageAnalysis[];
    entities : EntitiesAnalysis[];
    linkedEntities : LinkedEntitiesAnalysis[];
}