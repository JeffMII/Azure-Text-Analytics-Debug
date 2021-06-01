import { WebPage } from "./web-page.model";

export class WebAnswer {
    id : string;
    someResultsRemoved : boolean;
    totalEstimatedMatches : number;
    value : WebPage[];
    webSearchUrl : string;
}