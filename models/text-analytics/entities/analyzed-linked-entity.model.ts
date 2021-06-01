import { LinkedEntityMatch } from "./linked-entity-match.model";

export class AnalyzedLinkedEntity {
    name : string;
    matches : LinkedEntityMatch[];
    language : string;
    id : string;
    url : string;
    dataSource : string;
}