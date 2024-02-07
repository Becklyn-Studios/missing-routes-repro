import dynamic from "next/dynamic";

const icons = {
    Adapter: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Adapter").then(({ Adapter }) => Adapter)
    ),
    Aerator: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Aerator").then(({ Aerator }) => Aerator)
    ),
    BallJoint: dynamic(() =>
        import("@components/shared/NeoIcon/icon/BallJoint").then(({ BallJoint }) => BallJoint)
    ),
    Bathtubfitting: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Bathtubfitting").then(
            ({ Bathtubfitting }) => Bathtubfitting
        )
    ),
    Bidet: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Bidet").then(({ Bidet }) => Bidet)
    ),
    BypassValve: dynamic(() =>
        import("@components/shared/NeoIcon/icon/BypassValve").then(({ BypassValve }) => BypassValve)
    ),
    CheckValve: dynamic(() =>
        import("@components/shared/NeoIcon/icon/CheckValve").then(({ CheckValve }) => CheckValve)
    ),
    Diverter: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Diverter").then(({ Diverter }) => Diverter)
    ),
    Electronicfaucet: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Electronicfaucet").then(
            ({ Electronicfaucet }) => Electronicfaucet
        )
    ),
    FlowRegulator: dynamic(() =>
        import("@components/shared/NeoIcon/icon/FlowRegulator").then(
            ({ FlowRegulator }) => FlowRegulator
        )
    ),
    Heater: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Heater").then(({ Heater }) => Heater)
    ),
    Hose: dynamic(() => import("@components/shared/NeoIcon/icon/Hose").then(({ Hose }) => Hose)),
    Hotwaterapplications: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Hotwaterapplications").then(
            ({ Hotwaterapplications }) => Hotwaterapplications
        )
    ),
    Keys: dynamic(() => import("@components/shared/NeoIcon/icon/Keys").then(({ Keys }) => Keys)),
    Kitchenfitting: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Kitchenfitting").then(
            ({ Kitchenfitting }) => Kitchenfitting
        )
    ),
    Logo: dynamic(() => import("@components/shared/NeoIcon/icon/Logo").then(({ Logo }) => Logo)),
    Maintenanceservice: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Maintenanceservice").then(
            ({ Maintenanceservice }) => Maintenanceservice
        )
    ),
    PressureRegulator: dynamic(() =>
        import("@components/shared/NeoIcon/icon/PressureRegulator").then(
            ({ PressureRegulator }) => PressureRegulator
        )
    ),
    Pump: dynamic(() => import("@components/shared/NeoIcon/icon/Pump").then(({ Pump }) => Pump)),
    Rainshower: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Rainshower").then(({ Rainshower }) => Rainshower)
    ),
    Sanitaryapplications: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Sanitaryapplications").then(
            ({ Sanitaryapplications }) => Sanitaryapplications
        )
    ),
    ServiceKey: dynamic(() =>
        import("@components/shared/NeoIcon/icon/ServiceKey").then(({ ServiceKey }) => ServiceKey)
    ),
    Showerfitting: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Showerfitting").then(
            ({ Showerfitting }) => Showerfitting
        )
    ),
    Showertoilet: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Showertoilet").then(
            ({ Showertoilet }) => Showertoilet
        )
    ),
    Sidespray: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Sidespray").then(({ Sidespray }) => Sidespray)
    ),
    Solartherme: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Solartherme").then(({ Solartherme }) => Solartherme)
    ),
    StopValve: dynamic(() =>
        import("@components/shared/NeoIcon/icon/StopValve").then(({ StopValve }) => StopValve)
    ),
    Strainer: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Strainer").then(({ Strainer }) => Strainer)
    ),
    Technicalapplications: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Technicalapplications").then(
            ({ Technicalapplications }) => Technicalapplications
        )
    ),
    Thermostaticfaucet: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Thermostaticfaucet").then(
            ({ Thermostaticfaucet }) => Thermostaticfaucet
        )
    ),
    Toilet: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Toilet").then(({ Toilet }) => Toilet)
    ),
    Washbasinfitting: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Washbasinfitting").then(
            ({ Washbasinfitting }) => Washbasinfitting
        )
    ),
    Waterconditioner: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Waterconditioner").then(
            ({ Waterconditioner }) => Waterconditioner
        )
    ),
    Watercounter: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Watercounter").then(
            ({ Watercounter }) => Watercounter
        )
    ),
    Watersavingapplication: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Watersavingapplication").then(
            ({ Watersavingapplication }) => Watersavingapplication
        )
    ),
    arrowThinLeft: dynamic(() =>
        import("@components/shared/NeoIcon/icon/ArrowThinLeft").then(
            ({ ArrowThinLeft }) => ArrowThinLeft
        )
    ),
    arrowThinUp: dynamic(() =>
        import("@components/shared/NeoIcon/icon/ArrowThinUp").then(({ ArrowThinUp }) => ArrowThinUp)
    ),
    banderole: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Banderole").then(({ Banderole }) => Banderole)
    ),
    boxEuro_1: dynamic(() =>
        import("@components/shared/NeoIcon/icon/BoxEuro1").then(({ BoxEuro1 }) => BoxEuro1)
    ),
    boxNoEuro_1: dynamic(() =>
        import("@components/shared/NeoIcon/icon/BoxNoEuro1").then(({ BoxNoEuro1 }) => BoxNoEuro1)
    ),
    bulk: dynamic(() => import("@components/shared/NeoIcon/icon/Bulk").then(({ Bulk }) => Bulk)),
    bundledBrochure_10: dynamic(() =>
        import("@components/shared/NeoIcon/icon/BundledBrochure10").then(
            ({ BundledBrochure10 }) => BundledBrochure10
        )
    ),
    bundledBrochure_20: dynamic(() =>
        import("@components/shared/NeoIcon/icon/BundledBrochure20").then(
            ({ BundledBrochure20 }) => BundledBrochure20
        )
    ),
    bundledBrochure_25: dynamic(() =>
        import("@components/shared/NeoIcon/icon/BundledBrochure25").then(
            ({ BundledBrochure25 }) => BundledBrochure25
        )
    ),
    bundledTubes_1: dynamic(() =>
        import("@components/shared/NeoIcon/icon/BundledTubes1").then(
            ({ BundledTubes1 }) => BundledTubes1
        )
    ),
    bundledTubes_10: dynamic(() =>
        import("@components/shared/NeoIcon/icon/BundledTubes10").then(
            ({ BundledTubes10 }) => BundledTubes10
        )
    ),
    bundledTubes_5: dynamic(() =>
        import("@components/shared/NeoIcon/icon/BundledTubes5").then(
            ({ BundledTubes5 }) => BundledTubes5
        )
    ),
    calendar: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Calendar").then(({ Calendar }) => Calendar)
    ),
    carrierCardEuro_1: dynamic(() =>
        import("@components/shared/NeoIcon/icon/CarrierCardEuro1").then(
            ({ CarrierCardEuro1 }) => CarrierCardEuro1
        )
    ),
    carrierCardEuro_2: dynamic(() =>
        import("@components/shared/NeoIcon/icon/CarrierCardEuro2").then(
            ({ CarrierCardEuro2 }) => CarrierCardEuro2
        )
    ),
    chevronDown: dynamic(() =>
        import("@components/shared/NeoIcon/icon/ChevronDown").then(({ ChevronDown }) => ChevronDown)
    ),
    chevronRight: dynamic(() =>
        import("@components/shared/NeoIcon/icon/ChevronRight").then(
            ({ ChevronRight }) => ChevronRight
        )
    ),
    cross: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Cross").then(({ Cross }) => Cross)
    ),
    download: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Download").then(({ Download }) => Download)
    ),
    facebook: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Facebook").then(({ Facebook }) => Facebook)
    ),
    featureAutoClean: dynamic(() =>
        import("@components/shared/NeoIcon/icon/FeatureAutoClean").then(
            ({ FeatureAutoClean }) => FeatureAutoClean
        )
    ),
    featureSlc: dynamic(() =>
        import("@components/shared/NeoIcon/icon/FeatureSlc").then(({ FeatureSlc }) => FeatureSlc)
    ),
    featureSsr: dynamic(() =>
        import("@components/shared/NeoIcon/icon/FeatureSsr").then(({ FeatureSsr }) => FeatureSsr)
    ),
    file: dynamic(() => import("@components/shared/NeoIcon/icon/File").then(({ File }) => File)),
    information: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Information").then(({ Information }) => Information)
    ),
    instagram: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Instagram").then(({ Instagram }) => Instagram)
    ),
    linkedin: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Linkedin").then(({ Linkedin }) => Linkedin)
    ),
    lock: dynamic(() => import("@components/shared/NeoIcon/icon/Lock").then(({ Lock }) => Lock)),
    menu: dynamic(() => import("@components/shared/NeoIcon/icon/Menu").then(({ Menu }) => Menu)),
    minus: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Minus").then(({ Minus }) => Minus)
    ),
    plus: dynamic(() => import("@components/shared/NeoIcon/icon/Plus").then(({ Plus }) => Plus)),
    productfinder: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Productfinder").then(
            ({ Productfinder }) => Productfinder
        )
    ),
    quote: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Quote").then(({ Quote }) => Quote)
    ),
    search: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Search").then(({ Search }) => Search)
    ),
    singleblister_1: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Singleblister1").then(
            ({ Singleblister1 }) => Singleblister1
        )
    ),
    singleblister_2: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Singleblister2").then(
            ({ Singleblister2 }) => Singleblister2
        )
    ),
    singleblister_4: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Singleblister4").then(
            ({ Singleblister4 }) => Singleblister4
        )
    ),
    singleblister_6: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Singleblister6").then(
            ({ Singleblister6 }) => Singleblister6
        )
    ),
    slideBoxInBlister_10: dynamic(() =>
        import("@components/shared/NeoIcon/icon/SlideBoxInBlister10").then(
            ({ SlideBoxInBlister10 }) => SlideBoxInBlister10
        )
    ),
    slideBoxInBlister_5: dynamic(() =>
        import("@components/shared/NeoIcon/icon/SlideBoxInBlister5").then(
            ({ SlideBoxInBlister5 }) => SlideBoxInBlister5
        )
    ),
    slideBox_10: dynamic(() =>
        import("@components/shared/NeoIcon/icon/SlideBox10").then(({ SlideBox10 }) => SlideBox10)
    ),
    slideBox_5: dynamic(() =>
        import("@components/shared/NeoIcon/icon/SlideBox5").then(({ SlideBox5 }) => SlideBox5)
    ),
    smallPouchEuro_1: dynamic(() =>
        import("@components/shared/NeoIcon/icon/SmallPouchEuro1").then(
            ({ SmallPouchEuro1 }) => SmallPouchEuro1
        )
    ),
    smallPouchEuro_2: dynamic(() =>
        import("@components/shared/NeoIcon/icon/SmallPouchEuro2").then(
            ({ SmallPouchEuro2 }) => SmallPouchEuro2
        )
    ),
    smallPouchEuro_5: dynamic(() =>
        import("@components/shared/NeoIcon/icon/SmallPouchEuro5").then(
            ({ SmallPouchEuro5 }) => SmallPouchEuro5
        )
    ),
    smallPouchNoEuro_1: dynamic(() =>
        import("@components/shared/NeoIcon/icon/SmallPouchNoEuro1").then(
            ({ SmallPouchNoEuro1 }) => SmallPouchNoEuro1
        )
    ),
    stopwatch: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Stopwatch").then(({ Stopwatch }) => Stopwatch)
    ),
    twitter: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Twitter").then(({ Twitter }) => Twitter)
    ),
    upload: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Upload").then(({ Upload }) => Upload)
    ),
    user: dynamic(() => import("@components/shared/NeoIcon/icon/User").then(({ User }) => User)),
    viewThumb: dynamic(() =>
        import("@components/shared/NeoIcon/icon/ViewThumb").then(({ ViewThumb }) => ViewThumb)
    ),
    warning: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Warning").then(({ Warning }) => Warning)
    ),
    web: dynamic(() => import("@components/shared/NeoIcon/icon/Web").then(({ Web }) => Web)),
    wechat: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Wechat").then(({ Wechat }) => Wechat)
    ),
    xing: dynamic(() => import("@components/shared/NeoIcon/icon/Xing").then(({ Xing }) => Xing)),
    youtube: dynamic(() =>
        import("@components/shared/NeoIcon/icon/Youtube").then(({ Youtube }) => Youtube)
    ),
};

export type IconKey = keyof typeof icons;

export const getIcon = (icon: IconKey) => icons[icon];
