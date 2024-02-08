import { IconName } from "@components/shared/NeoIcon/NeoIcon";

export interface MainGroupConfig {
    opaccId: string;
    icon: IconName;
    key: string;
    featureKey: string;
    internalName: string;
}

export type GroupKey = (typeof mainGroups)[number]["opaccId"];

export const MAIN_GROUP_NAMES = {
    AERATOR: "aerator",
    CHECK_VALVE: "checkValve",
    FLOW_REGULATOR: "flowRegulator",
    DIVERTER: "diverter",
    PRESSURE_REGULATOR: "pressureRegulator",
    BY_PASS_CARTRIDGE: "byPassCartridge",
    ON_OFF_VALVE: "onOffValve",
    MOUNTING_TOOLS: "mountingTools",
    ACCESSORIES: "accessories",
    STRAINER: "strainer",
    HOSES: "hoses",
};

export const mainGroups: MainGroupConfig[] = [
    {
        opaccId: "5",
        icon: "Aerator",
        key: "HG0100",
        featureKey: "1001",
        internalName: MAIN_GROUP_NAMES.AERATOR,
    },
    {
        opaccId: "6",

        icon: "FlowRegulator",
        key: "HG0300",
        featureKey: "1003",
        internalName: MAIN_GROUP_NAMES.FLOW_REGULATOR,
    },
    {
        opaccId: "7",
        icon: "CheckValve",
        key: "HG0200",
        featureKey: "1002",
        internalName: MAIN_GROUP_NAMES.CHECK_VALVE,
    },
    {
        opaccId: "14",
        icon: "Hose",
        key: "",
        featureKey: "",
        internalName: MAIN_GROUP_NAMES.HOSES,
    },
    {
        opaccId: "8",
        icon: "Diverter",
        key: "HG0800",
        featureKey: "1008",
        internalName: MAIN_GROUP_NAMES.DIVERTER,
    },
    {
        opaccId: "9",
        icon: "PressureRegulator",
        key: "HG0301",
        featureKey: "2004",
        internalName: MAIN_GROUP_NAMES.PRESSURE_REGULATOR,
    },
    {
        opaccId: "10",
        icon: "BypassValve",
        key: "HG0201",
        featureKey: "2005",
        internalName: MAIN_GROUP_NAMES.BY_PASS_CARTRIDGE,
    },
    {
        opaccId: "11",
        icon: "StopValve",
        key: "HG0700",
        featureKey: "1007",
        internalName: MAIN_GROUP_NAMES.ON_OFF_VALVE,
    },
    {
        opaccId: "12",
        icon: "ServiceKey",
        key: "HG1001",
        featureKey: "2001",
        internalName: MAIN_GROUP_NAMES.MOUNTING_TOOLS,
    },
    {
        opaccId: "13",
        icon: "BallJoint",
        key: "HG1002",
        featureKey: "2002",
        internalName: MAIN_GROUP_NAMES.ACCESSORIES,
    },

    {
        opaccId: "78",
        icon: "Strainer",
        key: "HG1003",
        featureKey: "2003",
        internalName: MAIN_GROUP_NAMES.STRAINER,
    },
];

export const getMaingroupForKey = (key: string) => mainGroups.find(group => group.key === key);
export const getMaingroupForOpaccId = (opaccId: string) =>
    mainGroups.find(group => group.opaccId === opaccId);

export const getMaingroupFeatureKeyForKey = (key: string): string =>
    getMaingroupForKey(key)?.featureKey || "";
export const getMaingroupKeyForOpaccId = (key: string): string =>
    getMaingroupForKey(key)?.featureKey || "";
export const getMaingroupNameForOpaccId = (opaccId: string): string =>
    getMaingroupForOpaccId(opaccId)?.internalName || "";
export const getMaingroupFeatureKeyForOpaccId = (opaccId: string): string =>
    getMaingroupForOpaccId(opaccId)?.featureKey || "";

export const getOpaccIdForMaingroupName = (internalName: string): string =>
    mainGroups.find(group => group.internalName == internalName)?.opaccId || "";
