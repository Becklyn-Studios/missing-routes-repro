import safeJsonStringify from "safe-json-stringify";

const unwrap = (content: any): any => {
  if (typeof content !== "object") {
    return content;
  }

  if (Array.isArray(content)) {
    return content.map((value) => unwrap(value));
  }

  if (content.fields) {
    return unwrap({ ...content.fields, sys: content.sys });
  } else {
    return Object.entries(content).reduce(
      (aggr, [key, value]) => {
        aggr[key] = unwrap(value);
        return aggr;
      },
      {} as Record<string, any>,
    );
  }
};

export const normalizer = (content: any) => {
  try {
    return unwrap(JSON.parse(safeJsonStringify(content)));
  } catch (e) {
    console.log(e);
    return undefined;
  }
};
