import localFont from "next/font/local";

export const regular = localFont({
    src: [
        { path: "./fonts/DINW05-Regular.woff", weight: "400" },
        { path: "./fonts/DINW05-Regular.woff2", weight: "400" },
    ],
    variable: "--font-dinw05-regular",
});

export const medium = localFont({
    src: [
        { path: "./fonts/DINW05-Medium.woff", weight: "500" },
        { path: "./fonts/DINW05-Medium.woff2", weight: "500" },
    ],
    variable: "--font-dinw05-medium",
});

export const bold = localFont({
    src: [
        { path: "./fonts/DINW05-CondBold.woff", weight: "600" },
        { path: "./fonts/DINW05-CondBold.woff2", weight: "600" },
    ],
    variable: "--font-dinw05-bold",
});

export const fonts = `${regular.variable} ${medium.variable} ${bold.variable}`;
