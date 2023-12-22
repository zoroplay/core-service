/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "outrights";

export interface Settings {
  clientID: number;
  taxOnStake: number;
  taxOnWinning: number;
  minimumStake: number;
  maximumStake: number;
  maximumWinning: number;
  maximumSelections: number;
  mtsLimitID: number;
  currency: string;
  url: string;
}

export interface SettingsResponse {
  clientID: number;
  taxOnStake: number;
  taxOnWinning: number;
  minimumStake: number;
  maximumStake: number;
  maximumWinning: number;
  maximumSelections: number;
  mtsLimitID: number;
  currency: string;
  url: string;
  created: string;
  updated: string;
}

export interface SettingsById {
  clientID: number;
}

export interface GetAll {
}

export interface AllSettingsResponse {
  settings: SettingsResponse[];
}

export interface BetID {
  betID: number;
}

export interface GamingActivityRequest {
  period: string;
  username: string;
  from: string;
  to: string;
  betType: string;
  eventType: string;
  sport: string;
  league: string;
  market: string;
  state: string;
  product: string;
  source: string;
  groupBy: string;
  clientId: number;
}

export interface GamingActivityResponse {
}

export interface UpdateBetRequest {
  betId: number;
  status: string;
  entityType: string;
  clientId: number;
}

export interface UpdateBetResponse {
  success: boolean;
  status: number;
  message: string;
}

export interface BookingCode {
  code: string;
  clientId: number;
}

export interface StatusResponse {
  response: string;
}

export interface PlaceBetRequest {
  selections: BetSlip[];
  clientId: number;
  userId: number;
  stake: number;
  source: string;
  ipAddress: string;
  betType: string;
  username: string;
}

export interface BetSlip {
  eventName: string;
  urn: string;
  producerId: number;
  marketId: number;
  marketName: string;
  specifier: string;
  outcomeId: string;
  outcomeName: string;
  odds: number;
  sportId: number;
  sport: string;
  tournament: string;
  category: string;
  awayTeam: string;
  homeTeam: string;
  type: string;
  fixed: boolean;
  selectionId: string;
  eventDate: string;
}

export interface PlaceBetResponse {
  success: boolean;
  status: number;
  message: string;
  data?: BetHistory | undefined;
}

export interface BetHistoryRequest {
  userId: number;
  clientId: number;
  from: string;
  to: string;
  status: string;
  page: number;
  perPage: number;
  betslipId: string;
  username: string;
}

export interface BetSlipHistory {
  eventName: string;
  urn: string;
  producerId: number;
  marketId: number;
  marketName: string;
  specifier: string;
  outcomeId: string;
  outcomeName: string;
  odds: number;
  sportId: number;
  status: string;
  statusDescription: string;
  won: number;
  type: string;
  sport: string;
  tournament: string;
  category: string;
  eventDate: string;
  selectionId: string;
}

export interface BetHistory {
  selections: BetSlipHistory[];
  stake: number;
  created: string;
  status: number;
  cashOutAmount: number;
  statusDescription: string;
  source: string;
  totalOdd: number;
  possibleWin: number;
  betType: string;
  betslipId: string;
  totalSelections: number;
  betCategory: number;
  id: number;
  userId: number;
  username: string;
}

export interface BetHistoryResponse {
  bets: BetHistory[];
  /** Last pagination page */
  lastPage: number;
  /** From data index */
  from: number;
  /** to data index */
  to: number;
  /** how many records are remaining */
  remainingRecords: number;
  totalRecords: number;
  totalStake: number;
  currentPage: number;
}

export interface ProbabilityBetSlipSelection {
  urn: string;
  marketId: number;
  marketName: string;
  specifier: string;
  outcomeId: string;
  outcomeName: string;
  sportId: number;
  currentProbability: number;
  initialProbability: number;
}

export interface Probability {
  probability: number;
  currentProbability: number;
  initialProbability: number;
  selections: ProbabilityBetSlipSelection[];
}

export const OUTRIGHTS_PACKAGE_NAME = "outrights";

export interface OutrightsServiceClient {
  createSetting(request: Settings): Observable<SettingsResponse>;

  updateSetting(request: Settings): Observable<SettingsResponse>;

  getSettingsById(request: SettingsById): Observable<SettingsResponse>;

  getAllSettings(request: GetAll): Observable<AllSettingsResponse>;

  cancelBet(request: BetID): Observable<StatusResponse>;

  placeBet(request: PlaceBetRequest): Observable<PlaceBetResponse>;

  bookBet(request: PlaceBetRequest): Observable<PlaceBetResponse>;

  betHistory(request: BetHistoryRequest): Observable<BetHistoryResponse>;

  updateBet(request: UpdateBetRequest): Observable<UpdateBetResponse>;

  getProbabilityFromBetId(request: BetID): Observable<Probability>;

  getBooking(request: BookingCode): Observable<PlaceBetResponse>;
}

export interface OutrightsServiceController {
  createSetting(request: Settings): Promise<SettingsResponse> | Observable<SettingsResponse> | SettingsResponse;

  updateSetting(request: Settings): Promise<SettingsResponse> | Observable<SettingsResponse> | SettingsResponse;

  getSettingsById(request: SettingsById): Promise<SettingsResponse> | Observable<SettingsResponse> | SettingsResponse;

  getAllSettings(request: GetAll): Promise<AllSettingsResponse> | Observable<AllSettingsResponse> | AllSettingsResponse;

  cancelBet(request: BetID): Promise<StatusResponse> | Observable<StatusResponse> | StatusResponse;

  placeBet(request: PlaceBetRequest): Promise<PlaceBetResponse> | Observable<PlaceBetResponse> | PlaceBetResponse;

  bookBet(request: PlaceBetRequest): Promise<PlaceBetResponse> | Observable<PlaceBetResponse> | PlaceBetResponse;

  betHistory(
    request: BetHistoryRequest,
  ): Promise<BetHistoryResponse> | Observable<BetHistoryResponse> | BetHistoryResponse;

  updateBet(request: UpdateBetRequest): Promise<UpdateBetResponse> | Observable<UpdateBetResponse> | UpdateBetResponse;

  getProbabilityFromBetId(request: BetID): Promise<Probability> | Observable<Probability> | Probability;

  getBooking(request: BookingCode): Promise<PlaceBetResponse> | Observable<PlaceBetResponse> | PlaceBetResponse;
}

export function OutrightsServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "createSetting",
      "updateSetting",
      "getSettingsById",
      "getAllSettings",
      "cancelBet",
      "placeBet",
      "bookBet",
      "betHistory",
      "updateBet",
      "getProbabilityFromBetId",
      "getBooking",
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("OutrightsService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("OutrightsService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const OUTRIGHTS_SERVICE_NAME = "OutrightsService";
