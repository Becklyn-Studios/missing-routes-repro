const PACKAGINGS = {
    "1": "singleblister_1",
    "2": "singleblister_2",
    "3": "singleblister_4",
    "4": "singleblister_6",
    "5": "smallPouchEuro_1",
    "6": "smallPouchEuro_2",
    "7": "smallPouchEuro_5",
    "8": "smallPouchNoEuro_1",
    "9": "carrierCardEuro_1",
    "10": "carrierCardEuro_2",
    "11": "slideBox_5",
    "12": "slideBox_10",
    "13": "slideBoxInBlister_5",
    "14": "slideBoxInBlister_10",
    "15": "boxEuro_1",
    "16": "boxNoEuro_1",
    "17": "banderole",
    "18": "bundledTubes_10",
    "19": "bundledBrochure_10",
    "20": "bundledBrochure_20",
    "21": "bundledBrochure_25",
    "22": "bulk",
} as const;

export type PackagingKey = keyof typeof PACKAGINGS;
export type PackagingValue = (typeof PACKAGINGS)[keyof typeof PACKAGINGS];

export const getPackagingIcon = (packaging: PackagingKey): PackagingValue => PACKAGINGS[packaging];
