import { MediaSize } from "./media-size.model";

export class Video {
    allowHttpsEmbed : boolean;
    embedHtml : string;
    motionThumbnailUrl : string;
    name : string;
    thumbnail : MediaSize;
    thumbnailUrl : string;
}