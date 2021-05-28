import { AnalyzedLinkedEntity } from "./analyzed-linked-entity.model";

export class LinkedEntitiesDocument {
    id : string;
    entities : AnalyzedLinkedEntity[];
    warnings : [];
}