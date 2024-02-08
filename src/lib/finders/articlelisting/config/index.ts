import aerators from "./aerators";
import byPassCartridge from "./byPassCartridge";
import checkValve from "./checkValve";
import flowRegulator from "./flowRegulator";
import diverter from "./diverter";
import pressureRegulator from "./pressureRegulator";
import onOffValve from "./onOffValve";
import mountingTools from "./mountingTools";
import accessories from "./accessories";
import strainer from "./strainer";
import { MAIN_GROUP_NAMES } from "@lib/finders/shared/groups";

export default {
    [MAIN_GROUP_NAMES.AERATOR]: aerators,
    [MAIN_GROUP_NAMES.CHECK_VALVE]: checkValve,
    [MAIN_GROUP_NAMES.FLOW_REGULATOR]: flowRegulator,
    [MAIN_GROUP_NAMES.DIVERTER]: diverter,
    [MAIN_GROUP_NAMES.PRESSURE_REGULATOR]: pressureRegulator,
    [MAIN_GROUP_NAMES.BY_PASS_CARTRIDGE]: byPassCartridge,
    [MAIN_GROUP_NAMES.ON_OFF_VALVE]: onOffValve,
    [MAIN_GROUP_NAMES.MOUNTING_TOOLS]: mountingTools,
    [MAIN_GROUP_NAMES.ACCESSORIES]: accessories,
    [MAIN_GROUP_NAMES.STRAINER]: strainer,
};
