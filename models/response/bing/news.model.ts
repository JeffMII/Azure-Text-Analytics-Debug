import { NewsArticle } from "./news-article.model";
import { RelatedTopic } from "./related-topic.model";
import { SortValue } from "./sort-value.model";

export class News {
    _type : string;
    id : string;
    readLink : string;
    relatedTopics : RelatedTopic[];
    sort : SortValue[];
    totalEstimatedMatches : number;
    value : NewsArticle[];
}