import { LanguageDocument } from "./language-document.model";

export class LanguageAnalysis {
    documents : LanguageDocument[];
    errors : object[];
    modelVersion : string;
}