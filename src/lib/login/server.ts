import { cookies } from "next/headers";
import { LOGIN_COOKIE_KEY, LoginData } from "./util";
import { isLoggedIn, parseJwt } from ".";

export const getLoginData = (): LoginData | undefined => {
    const token = cookies().get(LOGIN_COOKIE_KEY);

    if (token && token.value) {
        return parseJwt(token.value);
    }
};

export const getIsLoggedIn = () => {
    const data = getLoginData();
    return isLoggedIn(data);
};
