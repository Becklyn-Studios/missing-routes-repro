import { SORTIMENT_MAP } from "@lib/finders/shared/sortiments";

export const getOemCountryOptions = () => [{ label: "Global", value: SORTIMENT_MAP.oem.global }];

export const getRetailCountryOptions = () =>
    Object.entries(SORTIMENT_MAP.retail).map(([label, value]) => ({
        label,
        value,
    }));
