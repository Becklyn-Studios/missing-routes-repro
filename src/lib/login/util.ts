export const LOGIN_COOKIE_KEY = "token";

export interface LoginData {
    // This is not a unix timestamp but epoch time!
    exp: number;
    username: string;
}
