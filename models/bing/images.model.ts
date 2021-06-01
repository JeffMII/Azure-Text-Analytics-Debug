import { Image } from './image.model';
import { Query } from './query.model';
import { Pivot } from './pivot.model';

export class Images {
    _type : string;
    id : string;
    isFamilyFriendly : boolean;
    nextOffset : number;
    pivotSuggestions : Pivot;
    queryExpansions : Query;
    readLink : string;
    similarTerms : Query;
    totalEstimatedMatches : number;
    value : Image[];
    webSearchUrl : string;
}