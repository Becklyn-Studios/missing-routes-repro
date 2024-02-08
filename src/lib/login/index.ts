import { LoginData } from "./util";

export const isLoggedIn = (data?: LoginData) => {
    if (!data) {
        return false;
    }

    const { username, exp } = data;

    if (!username || !exp) {
        return false;
    }

    if (exp >= Math.floor(Date.now() / 1000)) {
        return false;
    }

    return true;
};

export const parseJwt = (token: string) => {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
        atob(base64)
            .split("")
            .map(c => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
            .join("")
    );

    const { username, exp } = JSON.parse(jsonPayload);
    return { username, exp: parseInt(exp, 10) } as LoginData;
};
