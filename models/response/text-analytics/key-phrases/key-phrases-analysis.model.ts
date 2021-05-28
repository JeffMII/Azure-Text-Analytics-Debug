import { KeyPhrasesDocument } from "./key-phrases-document.model";

export class KeyPhrasesAnalysis {
    documents : KeyPhrasesDocument[];
    errors : object[];
    modelVersion : string;
}