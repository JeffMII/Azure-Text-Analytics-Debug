import { DetectedLanguage } from "./detected-language.model";

export class LanguageDocument {
    detectedLanguage : DetectedLanguage;
    id : number;
    warnings : object[];
}