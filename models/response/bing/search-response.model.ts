import { Computation } from './computation.model';
import { EntityAnswer } from './entity-answer.model';
import { Images } from './images.model';
import { News } from './news.model';
import { QueryContext } from './query-context.model';
import { RankingResponse } from './ranking-response.model';
import { RelatedSearchAnswer } from './related-search-answer.model';
import { SpellSuggestions } from './spell-suggestions.model';
import { TimeZone } from './timezone.model';
import { Videos } from './videos.model';
import { WebAnswer } from './web-answer.model';

export class SearchResponse {
    _type : string;
    computation : Computation;
    entities : EntityAnswer;
    images : Images;
    news : News;
    queryContext : QueryContext;
    rankingResponse : RankingResponse;
    relatedSearches : RelatedSearchAnswer;
    spellSuggestions : SpellSuggestions;
    timeZone : TimeZone;
    videos : Videos;
    webPages : WebAnswer;
}