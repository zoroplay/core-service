/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import { Observable } from 'rxjs';

export const protobufPackage = 'bonus';

export class SendSMSRequest {
  msisdn: string;
  text: string;
  sender_id: string;
}
export class SendSMSResponse {
  message: string;
}

export const SMS_PACKAGE_NAME = 'sms';

export interface SMSServiceClient {
  sendsms(request: SendSMSRequest): Observable<SendSMSResponse>;
}

export interface BonusServiceController {
  sendsms(
    request: SendSMSRequest,
  ): Promise<SendSMSResponse> | Observable<SendSMSResponse>;
}

export function SMSServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ['sendsms'];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('SMSService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcStreamMethod('SMSService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const SMS_SERVICE_NAME = 'SMSService';