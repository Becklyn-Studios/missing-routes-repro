export const filterValue = (
    key: string,
    value: string | number | undefined
): string | undefined => {
    if (!value) {
        return;
    }

    let v = value;

    if (v === "true") {
        v = 1;
    }

    // Edgecase for search
    if (key === "articleNumber") {
        return `number:${value}*`;
    }

    return `${key}:"${encodeURIComponent(v).replaceAll("%22", `\\"`).replaceAll("%20", ` `)}"`;
};
