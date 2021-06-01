import { LanguageAnalysis } from "../text-analytics/detect-language/language-analysis.model";

export class LanguageResponse {
    snippets : string[];
    languages : LanguageAnalysis[];
}