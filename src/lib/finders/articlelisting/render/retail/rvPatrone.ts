import { PackagingKey, getPackagingIcon } from "@lib/finders/shared/packaging";

interface RvPatroneOem {
    boreDiameter: string;
    flowRate: string;
    design: string;
    flowRegulation: boolean;
    maxTemperature: string;
    ean: string;
    packagingValue: PackagingKey;
}

export default function (rvPatrone: RvPatroneOem) {
    return {
        bodyLists: [
            [
                {
                    label: "boreDiameter",
                    value: rvPatrone.boreDiameter,
                },
                {
                    label: "design",
                    value: rvPatrone.design,
                },
            ],
            [
                {
                    label: "flowRate",
                    value: rvPatrone.flowRate,
                },
                {
                    label: "flowRegulation",
                    translateValue: rvPatrone.flowRegulation
                        ? "flowRegulationTrue"
                        : "flowRegulationFalse",
                },
            ],
        ],
        icons: [
            getPackagingIcon(rvPatrone.packagingValue)
                ? { icon: getPackagingIcon(rvPatrone.packagingValue) }
                : null,
        ],
        detailList: [
            {
                label: "maxTemperature",
                value: rvPatrone.maxTemperature,
            },
            {
                label: "ean",
                value: rvPatrone.ean,
            },
        ],
    } as const;
}
