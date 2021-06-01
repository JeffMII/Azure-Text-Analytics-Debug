import { EntitiesAnalysis } from "../text-analytics/entities/entities-analysis.model";

export class LinkedEntitiesResponse {
    snippets : string[];
    linkedEntities : EntitiesAnalysis[];
}