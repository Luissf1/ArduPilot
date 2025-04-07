
"use strict";

let Mavlink = require('./Mavlink.js');
let VFR_HUD = require('./VFR_HUD.js');
let ExtendedState = require('./ExtendedState.js');
let DebugValue = require('./DebugValue.js');
let RTKBaseline = require('./RTKBaseline.js');
let TerrainReport = require('./TerrainReport.js');
let RadioStatus = require('./RadioStatus.js');
let EstimatorStatus = require('./EstimatorStatus.js');
let Trajectory = require('./Trajectory.js');
let WheelOdomStamped = require('./WheelOdomStamped.js');
let HilGPS = require('./HilGPS.js');
let HomePosition = require('./HomePosition.js');
let WaypointReached = require('./WaypointReached.js');
let ESCTelemetry = require('./ESCTelemetry.js');
let HilSensor = require('./HilSensor.js');
let Waypoint = require('./Waypoint.js');
let CommandCode = require('./CommandCode.js');
let LogData = require('./LogData.js');
let ESCStatus = require('./ESCStatus.js');
let ManualControl = require('./ManualControl.js');
let Altitude = require('./Altitude.js');
let Thrust = require('./Thrust.js');
let CompanionProcessStatus = require('./CompanionProcessStatus.js');
let CameraImageCaptured = require('./CameraImageCaptured.js');
let HilControls = require('./HilControls.js');
let ESCStatusItem = require('./ESCStatusItem.js');
let ActuatorControl = require('./ActuatorControl.js');
let GPSRAW = require('./GPSRAW.js');
let FileEntry = require('./FileEntry.js');
let Tunnel = require('./Tunnel.js');
let ADSBVehicle = require('./ADSBVehicle.js');
let CellularStatus = require('./CellularStatus.js');
let OnboardComputerStatus = require('./OnboardComputerStatus.js');
let RTCM = require('./RTCM.js');
let PlayTuneV2 = require('./PlayTuneV2.js');
let ESCInfoItem = require('./ESCInfoItem.js');
let RCOut = require('./RCOut.js');
let PositionTarget = require('./PositionTarget.js');
let SysStatus = require('./SysStatus.js');
let HilStateQuaternion = require('./HilStateQuaternion.js');
let ESCInfo = require('./ESCInfo.js');
let ESCTelemetryItem = require('./ESCTelemetryItem.js');
let MountControl = require('./MountControl.js');
let TimesyncStatus = require('./TimesyncStatus.js');
let HilActuatorControls = require('./HilActuatorControls.js');
let GlobalPositionTarget = require('./GlobalPositionTarget.js');
let LogEntry = require('./LogEntry.js');
let State = require('./State.js');
let Vibration = require('./Vibration.js');
let GPSRTK = require('./GPSRTK.js');
let LandingTarget = require('./LandingTarget.js');
let MagnetometerReporter = require('./MagnetometerReporter.js');
let VehicleInfo = require('./VehicleInfo.js');
let OverrideRCIn = require('./OverrideRCIn.js');
let CamIMUStamp = require('./CamIMUStamp.js');
let Param = require('./Param.js');
let NavControllerOutput = require('./NavControllerOutput.js');
let RCIn = require('./RCIn.js');
let ParamValue = require('./ParamValue.js');
let StatusText = require('./StatusText.js');
let OpticalFlowRad = require('./OpticalFlowRad.js');
let AttitudeTarget = require('./AttitudeTarget.js');
let BatteryStatus = require('./BatteryStatus.js');
let WaypointList = require('./WaypointList.js');
let GPSINPUT = require('./GPSINPUT.js');

module.exports = {
  Mavlink: Mavlink,
  VFR_HUD: VFR_HUD,
  ExtendedState: ExtendedState,
  DebugValue: DebugValue,
  RTKBaseline: RTKBaseline,
  TerrainReport: TerrainReport,
  RadioStatus: RadioStatus,
  EstimatorStatus: EstimatorStatus,
  Trajectory: Trajectory,
  WheelOdomStamped: WheelOdomStamped,
  HilGPS: HilGPS,
  HomePosition: HomePosition,
  WaypointReached: WaypointReached,
  ESCTelemetry: ESCTelemetry,
  HilSensor: HilSensor,
  Waypoint: Waypoint,
  CommandCode: CommandCode,
  LogData: LogData,
  ESCStatus: ESCStatus,
  ManualControl: ManualControl,
  Altitude: Altitude,
  Thrust: Thrust,
  CompanionProcessStatus: CompanionProcessStatus,
  CameraImageCaptured: CameraImageCaptured,
  HilControls: HilControls,
  ESCStatusItem: ESCStatusItem,
  ActuatorControl: ActuatorControl,
  GPSRAW: GPSRAW,
  FileEntry: FileEntry,
  Tunnel: Tunnel,
  ADSBVehicle: ADSBVehicle,
  CellularStatus: CellularStatus,
  OnboardComputerStatus: OnboardComputerStatus,
  RTCM: RTCM,
  PlayTuneV2: PlayTuneV2,
  ESCInfoItem: ESCInfoItem,
  RCOut: RCOut,
  PositionTarget: PositionTarget,
  SysStatus: SysStatus,
  HilStateQuaternion: HilStateQuaternion,
  ESCInfo: ESCInfo,
  ESCTelemetryItem: ESCTelemetryItem,
  MountControl: MountControl,
  TimesyncStatus: TimesyncStatus,
  HilActuatorControls: HilActuatorControls,
  GlobalPositionTarget: GlobalPositionTarget,
  LogEntry: LogEntry,
  State: State,
  Vibration: Vibration,
  GPSRTK: GPSRTK,
  LandingTarget: LandingTarget,
  MagnetometerReporter: MagnetometerReporter,
  VehicleInfo: VehicleInfo,
  OverrideRCIn: OverrideRCIn,
  CamIMUStamp: CamIMUStamp,
  Param: Param,
  NavControllerOutput: NavControllerOutput,
  RCIn: RCIn,
  ParamValue: ParamValue,
  StatusText: StatusText,
  OpticalFlowRad: OpticalFlowRad,
  AttitudeTarget: AttitudeTarget,
  BatteryStatus: BatteryStatus,
  WaypointList: WaypointList,
  GPSINPUT: GPSINPUT,
};
