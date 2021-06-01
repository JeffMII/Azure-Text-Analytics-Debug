import { Image } from "./image.model";
import { Organization } from "./organization.model";
import { Thing } from "./thing.model";
import { Video } from "./video.model";

export class NewsArticle {
    category : string;
    clusteredArticles : NewsArticle[];
    contractualRules : object[];
    datePublished : string;
    description : string;
    headline : boolean;
    id : string;
    image : Image;
    mentions : Thing[];
    name : string;
    provider : Organization[];
    url : string;
    video : Video;

}