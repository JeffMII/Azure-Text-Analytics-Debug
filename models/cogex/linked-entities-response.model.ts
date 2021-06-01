import { LinkedEntitiesAnalysis } from "../text-analytics/entities/linked-entities-analysis.model";

export class LinkedEntitiesResponse {
    snippets : string[];
    linkedEntities : LinkedEntitiesAnalysis[];
}