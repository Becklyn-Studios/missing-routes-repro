import de from "./dictionaries/de.json";
import en from "./dictionaries/en.json";

export type LocalDictionary = typeof en | typeof de;

export type Dictionary = LocalDictionary & { contentful: Record<string, any> };
