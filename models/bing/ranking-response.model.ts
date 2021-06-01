import { RankingGroup } from "./ranking-group.model";

export class RankingResponse {
    mainline : RankingGroup;
    pole : RankingGroup;
    sidebar : RankingGroup;
}