import { MemberStatus, MemberType } from "../enums/enums/member.enum";

export interface Member {
    _id: string;
    memberType: MemberType;
    memberStatus: MemberStatus;
    memberNick : string;
    memberPhone: string;
    memberPassword?: string;
    memberAddress?: string;
    memberDesc?: string;
    memberImage?: string;
    memberPoints: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface MemberInput {
    memberType?: MemberType;
    memberStatus?: MemberStatus;
    memberNick : string;
    memberPhone: string;
    memberPassword: string;
    memberAddress?: string;
    memberDesc?: string;
    memberImage?: string;
    memberPoints?: string;
}

export interface LoginInput {
    memberNick : string;
    memberPassword: string;
}

export interface MemberUpdateInput {
    memberNick?: string;
    memberPhone?: string;
    memberPassword?: string;
    memberAddress?: string;
    memberDesc?: string;
    memberImage?: string;
}