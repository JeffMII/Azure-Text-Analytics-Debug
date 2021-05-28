import { Pivot } from "./pivot.model";
import { Query } from "./query.model";
import { Video } from "./video.model";

export class Videos {
    _type : string;
    id : string;
    isFamilyFriendly : boolean;
    nextOffset : number;
    pivotSuggestions : Pivot[];
    queryExpansions : Query[];
    scenario : string;
    totalEstimatedMatches : number;
    value : Video[];
    webSearchUrl : string;
}