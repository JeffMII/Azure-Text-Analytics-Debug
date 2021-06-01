import { MetaTag } from './meta-tag.model';

export class WebPage {
    dateLastCrawled : string;
    deepLinks : WebPage[];
    displayUrl : string;
    id : string;
    name : string;
    searchTags : MetaTag[];
    snippet : string;
    url : string;
}