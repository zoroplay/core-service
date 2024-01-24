import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import {
  AssignUserCommissionProfile,
  BonusGroups,
  Empty,
  PayPowerRequest,
  PowerRequest,
  protobufPackage,
  RETAIL_SERVICE_NAME,
  RetailServiceClient,
  CommissionProfile,
  GetNormalRequest,
  PayNormalRequest,
  Meta,
} from './retail.pb';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class RetailService implements OnModuleInit {
  private service: RetailServiceClient;

  constructor(@Inject(protobufPackage) private client: ClientGrpc) {}

  onModuleInit() {
    this.service =
      this.client.getService<RetailServiceClient>(RETAIL_SERVICE_NAME);
  }

  // Bonus Groups
  async getBonusGroups(data: Empty) {
    console.log(data);
    console.log('Service here');
    return await this.service.getBonusGroups(data);
  }

  createBonusGroups(data: BonusGroups) {
    console.log(data);
    return this.service.createBonusGroups(data);
  }

  // Commission Profiles

  getCommissionProfiles(data: Meta) {
    console.log(data);
    return this.service.getCommissionProfiles(data);
  }
  createCommissionProfile(data: CommissionProfile) {
    console.log(data);
    return this.service.createCommissionProfile(data);
  }
  updateCommissionProfile(data: CommissionProfile) {
    console.log(data);
    return this.service.updateCommissionProfile(data);
  }
  assignUserCommissionProfile(data: AssignUserCommissionProfile) {
    console.log(data);
    return this.service.assignUserCommissionProfile(data);
  }

  // Power Bonus
  getPowerBonus(data: PowerRequest) {
    console.log(data);
    return this.service.getPowerBonus(data);
  }
  payOutPowerBonus(data: PayPowerRequest) {
    console.log(data);
    return this.service.payOutPowerBonus(data);
  }
  // Normal Bonus
  getNormalBonus(data: GetNormalRequest) {
    console.log(data);
    return this.service.getNormalBonus(data);
  }
  payOutNormalBonus(data: PayNormalRequest) {
    console.log(data);
    return this.service.payOutNormalBonus(data);
  }
}
