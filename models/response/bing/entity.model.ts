import { EntityPresentationInfo } from './entity-presentation-info.model';
import { Image } from './image.model';

export class Entity {
    bingId : string;
    contractualRules : object[];
    description : string;
    entityPresentationInfo : EntityPresentationInfo;
    image : Image;
    name : string;
    webSearchUrl : string;
}