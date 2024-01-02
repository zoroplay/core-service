/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "betting";

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
  productType: string;
  source: string;
  groupBy: string;
  clientID: number;
}

export interface GamingActivityResponse {
  success: boolean;
  status: number;
  message: string;
  data?: GamingActivity | undefined;
  error: string;
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
  eventType: string;
  eventId: number;
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
  matchId: number;
  awayTeam: string;
  homeTeam: string;
  type: string;
  fixed: boolean;
  selectionId: string;
  eventDate: string;
  eventPrefix: string;
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
  eventType: string;
  eventId: number;
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
  matchId: string;
  eventDate: string;
  selectionId: string;
  eventPrefix: string;
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
  winnings: number;
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
  eventId: number;
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

export interface FindBetRequest {
  clientId: number;
  betslipId: string;
}

export interface FindBetResponse {
  bet?: BetHistory | undefined;
  message: string;
  status: boolean;
}

export interface GamingActivity {
  totalStake: number;
  totalWinnings: number;
  totalTickets: number;
  bets: GamingActivityBets[];
}

export interface GamingActivityBets {
  month: string;
  date: string;
  turnover: number;
  total: number;
  average: number;
  winnings: number;
  source: string;
  betType: string;
  marketName: string;
  sportName: string;
  tournamentName: string;
}

export const BETTING_PACKAGE_NAME = "betting";

export interface BettingServiceClient {
  createSetting(request: Settings): Observable<SettingsResponse>;

  updateSetting(request: Settings): Observable<SettingsResponse>;

  getSettingsById(request: SettingsById): Observable<SettingsResponse>;

  getAllSettings(request: GetAll): Observable<AllSettingsResponse>;

  cancelBet(request: BetID): Observable<StatusResponse>;

  placeBet(request: PlaceBetRequest): Observable<PlaceBetResponse>;

  bookBet(request: PlaceBetRequest): Observable<PlaceBetResponse>;

  betHistory(request: BetHistoryRequest): Observable<BetHistoryResponse>;

  findBet(request: FindBetRequest): Observable<FindBetResponse>;

  updateBet(request: UpdateBetRequest): Observable<UpdateBetResponse>;

  getProbabilityFromBetId(request: BetID): Observable<Probability>;

  getBooking(request: BookingCode): Observable<PlaceBetResponse>;

  gamingActivity(request: GamingActivityRequest): Observable<GamingActivityResponse>;
}

export interface BettingServiceController {
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

  findBet(request: FindBetRequest): Promise<FindBetResponse> | Observable<FindBetResponse> | FindBetResponse;

  updateBet(request: UpdateBetRequest): Promise<UpdateBetResponse> | Observable<UpdateBetResponse> | UpdateBetResponse;

  getProbabilityFromBetId(request: BetID): Promise<Probability> | Observable<Probability> | Probability;

  getBooking(request: BookingCode): Promise<PlaceBetResponse> | Observable<PlaceBetResponse> | PlaceBetResponse;

  gamingActivity(
    request: GamingActivityRequest,
  ): Promise<GamingActivityResponse> | Observable<GamingActivityResponse> | GamingActivityResponse;
}

export function BettingServiceControllerMethods() {
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
      "findBet",
      "updateBet",
      "getProbabilityFromBetId",
      "getBooking",
      "gamingActivity",
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("BettingService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("BettingService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const BETTING_SERVICE_NAME = "BettingService";
