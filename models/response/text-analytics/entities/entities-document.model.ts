import { AnalyzedEntity } from "./analyzed-entity.model";

export class EntitiesDocument {
    id : string;
    entities : AnalyzedEntity[];
    warnings : object[];
}