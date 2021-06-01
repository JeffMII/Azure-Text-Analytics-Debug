import { EntitiesDocument } from "./entities-document.model";

export class EntitiesAnalysis {
    documents : EntitiesDocument[];
    errors : object[];
    modelVersion : string;
}