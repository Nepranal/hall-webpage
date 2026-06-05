export default class ProfileInfoModel {
    // TODO: Implement
    public static getTutorsProfileInfo(): ProfileInfo[] {
        return [];
    }

    // TODO: Implement
    public static getBenefactorsInfo(): ProfileInfo[] {
        return [];
    }
}

export type ProfileInfo = {
    name: string;
    position: string;
    details: string;
    contact_info: string;
    alt_name: string;
};
