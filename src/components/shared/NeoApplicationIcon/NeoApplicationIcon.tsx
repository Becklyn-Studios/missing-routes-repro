import { IconName, NeoIcon } from "@components/shared/NeoIcon/NeoIcon";
import React from "react";
import "./NeoApplicationIcon.scss";
import { getTranslation } from "@lib/layers/translate/server";

interface NeoApplicationType {
    icon: IconName;
    label: string;
}

export const applicationTypes = {
    water_meter: {
        icon: "Watercounter",
    },
    water_saving_applications: {
        icon: "Watersavingapplication",
    },
    water_treatment_filtration: {
        icon: "Waterconditioner",
    },
    basin_tap: {
        icon: "Washbasinfitting",
    },
    technical_applications: {
        icon: "Technicalapplications",
    },
    solar_heater: {
        icon: "Solartherme",
    },
    side_spray: {
        icon: "Sidespray",
    },
    keys: {
        icon: "Keys",
    },
    sanitary_plumbing_applications: {
        icon: "Sanitaryapplications",
    },
    rain_shower: {
        icon: "Rainshower",
    },
    pump: {
        icon: "Pump",
    },
    maintenance_service: {
        icon: "Maintenanceservice",
    },
    kitchen_tap: {
        icon: "Kitchenfitting",
    },
    heating: {
        icon: "Heater",
    },
    shower_set: {
        icon: "Showerfitting",
    },
    bidet: {
        icon: "Bidet",
    },
    bath_filler: {
        icon: "Bathtubfitting",
    },
    shower_toilet: {
        icon: "Showertoilet",
    },
    toilet: {
        icon: "Toilet",
    },
    thermostatic_faucet: {
        icon: "Thermostaticfaucet",
    },
    hot_water_applications: {
        icon: "Hotwaterapplications",
    },
    electronic_faucet: {
        icon: "Electronicfaucet",
    },
};

export type ApplicationType = keyof typeof applicationTypes;

export interface NeoApplicationItemProps {
    typeId: ApplicationType;
}

export const NeoApplicationIcon: React.FC<NeoApplicationItemProps> = ({ typeId }) => {
    const type = applicationTypes[typeId] as NeoApplicationType;
    const t = getTranslation();

    if (!type) {
        return null;
    }

    return (
        <div className={"neo-application-icon"}>
            <NeoIcon icon={type.icon} />
            <p className={"application-label"}>
                {t.contentful.text[typeId] || "⚠️ TRANSLATION MISSING ⚠️"}
            </p>
        </div>
    );
};
