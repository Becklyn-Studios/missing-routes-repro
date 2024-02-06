import dynamic from "next/dynamic";

const icons = {
  Adapter: dynamic(() => import("./Adapter").then(({ Adapter }) => Adapter)),
  Aerator: dynamic(() => import("./Aerator").then(({ Aerator }) => Aerator)),
  BallJoint: dynamic(() =>
    import("./BallJoint").then(({ BallJoint }) => BallJoint),
  ),
  Bathtubfitting: dynamic(() =>
    import("./Bathtubfitting").then(({ Bathtubfitting }) => Bathtubfitting),
  ),
  Bidet: dynamic(() => import("./Bidet").then(({ Bidet }) => Bidet)),
  BypassValve: dynamic(() =>
    import("./BypassValve").then(({ BypassValve }) => BypassValve),
  ),
  CheckValve: dynamic(() =>
    import("./CheckValve").then(({ CheckValve }) => CheckValve),
  ),
  Diverter: dynamic(() =>
    import("./Diverter").then(({ Diverter }) => Diverter),
  ),
  Electronicfaucet: dynamic(() =>
    import("./Electronicfaucet").then(
      ({ Electronicfaucet }) => Electronicfaucet,
    ),
  ),
  FlowRegulator: dynamic(() =>
    import("./FlowRegulator").then(({ FlowRegulator }) => FlowRegulator),
  ),
  Heater: dynamic(() => import("./Heater").then(({ Heater }) => Heater)),
  Hose: dynamic(() => import("./Hose").then(({ Hose }) => Hose)),
  Hotwaterapplications: dynamic(() =>
    import("./Hotwaterapplications").then(
      ({ Hotwaterapplications }) => Hotwaterapplications,
    ),
  ),
  Keys: dynamic(() => import("./Keys").then(({ Keys }) => Keys)),
  Kitchenfitting: dynamic(() =>
    import("./Kitchenfitting").then(({ Kitchenfitting }) => Kitchenfitting),
  ),
  Logo: dynamic(() => import("./Logo").then(({ Logo }) => Logo)),
  Maintenanceservice: dynamic(() =>
    import("./Maintenanceservice").then(
      ({ Maintenanceservice }) => Maintenanceservice,
    ),
  ),
  PressureRegulator: dynamic(() =>
    import("./PressureRegulator").then(
      ({ PressureRegulator }) => PressureRegulator,
    ),
  ),
  Pump: dynamic(() => import("./Pump").then(({ Pump }) => Pump)),
  Rainshower: dynamic(() =>
    import("./Rainshower").then(({ Rainshower }) => Rainshower),
  ),
  Sanitaryapplications: dynamic(() =>
    import("./Sanitaryapplications").then(
      ({ Sanitaryapplications }) => Sanitaryapplications,
    ),
  ),
  ServiceKey: dynamic(() =>
    import("./ServiceKey").then(({ ServiceKey }) => ServiceKey),
  ),
  Showerfitting: dynamic(() =>
    import("./Showerfitting").then(({ Showerfitting }) => Showerfitting),
  ),
  Showertoilet: dynamic(() =>
    import("./Showertoilet").then(({ Showertoilet }) => Showertoilet),
  ),
  Sidespray: dynamic(() =>
    import("./Sidespray").then(({ Sidespray }) => Sidespray),
  ),
  Solartherme: dynamic(() =>
    import("./Solartherme").then(({ Solartherme }) => Solartherme),
  ),
  StopValve: dynamic(() =>
    import("./StopValve").then(({ StopValve }) => StopValve),
  ),
  Strainer: dynamic(() =>
    import("./Strainer").then(({ Strainer }) => Strainer),
  ),
  Technicalapplications: dynamic(() =>
    import("./Technicalapplications").then(
      ({ Technicalapplications }) => Technicalapplications,
    ),
  ),
  Thermostaticfaucet: dynamic(() =>
    import("./Thermostaticfaucet").then(
      ({ Thermostaticfaucet }) => Thermostaticfaucet,
    ),
  ),
  Toilet: dynamic(() => import("./Toilet").then(({ Toilet }) => Toilet)),
  Washbasinfitting: dynamic(() =>
    import("./Washbasinfitting").then(
      ({ Washbasinfitting }) => Washbasinfitting,
    ),
  ),
  Waterconditioner: dynamic(() =>
    import("./Waterconditioner").then(
      ({ Waterconditioner }) => Waterconditioner,
    ),
  ),
  Watercounter: dynamic(() =>
    import("./Watercounter").then(({ Watercounter }) => Watercounter),
  ),
  Watersavingapplication: dynamic(() =>
    import("./Watersavingapplication").then(
      ({ Watersavingapplication }) => Watersavingapplication,
    ),
  ),
  arrowThinLeft: dynamic(() =>
    import("./ArrowThinLeft").then(({ ArrowThinLeft }) => ArrowThinLeft),
  ),
  arrowThinUp: dynamic(() =>
    import("./ArrowThinUp").then(({ ArrowThinUp }) => ArrowThinUp),
  ),
  banderole: dynamic(() =>
    import("./Banderole").then(({ Banderole }) => Banderole),
  ),
  boxEuro_1: dynamic(() =>
    import("./BoxEuro1").then(({ BoxEuro1 }) => BoxEuro1),
  ),
  boxNoEuro_1: dynamic(() =>
    import("./BoxNoEuro1").then(({ BoxNoEuro1 }) => BoxNoEuro1),
  ),
  bulk: dynamic(() => import("./Bulk").then(({ Bulk }) => Bulk)),
  bundledBrochure_10: dynamic(() =>
    import("./BundledBrochure10").then(
      ({ BundledBrochure10 }) => BundledBrochure10,
    ),
  ),
  bundledBrochure_20: dynamic(() =>
    import("./BundledBrochure20").then(
      ({ BundledBrochure20 }) => BundledBrochure20,
    ),
  ),
  bundledBrochure_25: dynamic(() =>
    import("./BundledBrochure25").then(
      ({ BundledBrochure25 }) => BundledBrochure25,
    ),
  ),
  bundledTubes_1: dynamic(() =>
    import("./BundledTubes1").then(({ BundledTubes1 }) => BundledTubes1),
  ),
  bundledTubes_10: dynamic(() =>
    import("./BundledTubes10").then(({ BundledTubes10 }) => BundledTubes10),
  ),
  bundledTubes_5: dynamic(() =>
    import("./BundledTubes5").then(({ BundledTubes5 }) => BundledTubes5),
  ),
  calendar: dynamic(() =>
    import("./Calendar").then(({ Calendar }) => Calendar),
  ),
  carrierCardEuro_1: dynamic(() =>
    import("./CarrierCardEuro1").then(
      ({ CarrierCardEuro1 }) => CarrierCardEuro1,
    ),
  ),
  carrierCardEuro_2: dynamic(() =>
    import("./CarrierCardEuro2").then(
      ({ CarrierCardEuro2 }) => CarrierCardEuro2,
    ),
  ),
  chevronDown: dynamic(() =>
    import("./ChevronDown").then(({ ChevronDown }) => ChevronDown),
  ),
  chevronRight: dynamic(() =>
    import("./ChevronRight").then(({ ChevronRight }) => ChevronRight),
  ),
  cross: dynamic(() => import("./Cross").then(({ Cross }) => Cross)),
  download: dynamic(() =>
    import("./Download").then(({ Download }) => Download),
  ),
  facebook: dynamic(() =>
    import("./Facebook").then(({ Facebook }) => Facebook),
  ),
  featureAutoClean: dynamic(() =>
    import("./FeatureAutoClean").then(
      ({ FeatureAutoClean }) => FeatureAutoClean,
    ),
  ),
  featureSlc: dynamic(() =>
    import("./FeatureSlc").then(({ FeatureSlc }) => FeatureSlc),
  ),
  featureSsr: dynamic(() =>
    import("./FeatureSsr").then(({ FeatureSsr }) => FeatureSsr),
  ),
  file: dynamic(() => import("./File").then(({ File }) => File)),
  information: dynamic(() =>
    import("./Information").then(({ Information }) => Information),
  ),
  instagram: dynamic(() =>
    import("./Instagram").then(({ Instagram }) => Instagram),
  ),
  linkedin: dynamic(() =>
    import("./Linkedin").then(({ Linkedin }) => Linkedin),
  ),
  lock: dynamic(() => import("./Lock").then(({ Lock }) => Lock)),
  menu: dynamic(() => import("./Menu").then(({ Menu }) => Menu)),
  minus: dynamic(() => import("./Minus").then(({ Minus }) => Minus)),
  plus: dynamic(() => import("./Plus").then(({ Plus }) => Plus)),
  productfinder: dynamic(() =>
    import("./Productfinder").then(({ Productfinder }) => Productfinder),
  ),
  quote: dynamic(() => import("./Quote").then(({ Quote }) => Quote)),
  search: dynamic(() => import("./Search").then(({ Search }) => Search)),
  singleblister_1: dynamic(() =>
    import("./Singleblister1").then(({ Singleblister1 }) => Singleblister1),
  ),
  singleblister_2: dynamic(() =>
    import("./Singleblister2").then(({ Singleblister2 }) => Singleblister2),
  ),
  singleblister_4: dynamic(() =>
    import("./Singleblister4").then(({ Singleblister4 }) => Singleblister4),
  ),
  singleblister_6: dynamic(() =>
    import("./Singleblister6").then(({ Singleblister6 }) => Singleblister6),
  ),
  slideBoxInBlister_10: dynamic(() =>
    import("./SlideBoxInBlister10").then(
      ({ SlideBoxInBlister10 }) => SlideBoxInBlister10,
    ),
  ),
  slideBoxInBlister_5: dynamic(() =>
    import("./SlideBoxInBlister5").then(
      ({ SlideBoxInBlister5 }) => SlideBoxInBlister5,
    ),
  ),
  slideBox_10: dynamic(() =>
    import("./SlideBox10").then(({ SlideBox10 }) => SlideBox10),
  ),
  slideBox_5: dynamic(() =>
    import("./SlideBox5").then(({ SlideBox5 }) => SlideBox5),
  ),
  smallPouchEuro_1: dynamic(() =>
    import("./SmallPouchEuro1").then(({ SmallPouchEuro1 }) => SmallPouchEuro1),
  ),
  smallPouchEuro_2: dynamic(() =>
    import("./SmallPouchEuro2").then(({ SmallPouchEuro2 }) => SmallPouchEuro2),
  ),
  smallPouchEuro_5: dynamic(() =>
    import("./SmallPouchEuro5").then(({ SmallPouchEuro5 }) => SmallPouchEuro5),
  ),
  smallPouchNoEuro_1: dynamic(() =>
    import("./SmallPouchNoEuro1").then(
      ({ SmallPouchNoEuro1 }) => SmallPouchNoEuro1,
    ),
  ),
  stopwatch: dynamic(() =>
    import("./Stopwatch").then(({ Stopwatch }) => Stopwatch),
  ),
  twitter: dynamic(() => import("./Twitter").then(({ Twitter }) => Twitter)),
  upload: dynamic(() => import("./Upload").then(({ Upload }) => Upload)),
  user: dynamic(() => import("./User").then(({ User }) => User)),
  viewThumb: dynamic(() =>
    import("./ViewThumb").then(({ ViewThumb }) => ViewThumb),
  ),
  warning: dynamic(() => import("./Warning").then(({ Warning }) => Warning)),
  web: dynamic(() => import("./Web").then(({ Web }) => Web)),
  wechat: dynamic(() => import("./Wechat").then(({ Wechat }) => Wechat)),
  xing: dynamic(() => import("./Xing").then(({ Xing }) => Xing)),
  youtube: dynamic(() => import("./Youtube").then(({ Youtube }) => Youtube)),
};

export type IconKey = keyof typeof icons;

export const getIcon = (icon: IconKey) => icons[icon];
