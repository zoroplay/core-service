import { ApiProperty } from '@nestjs/swagger';
import { PlayerBonusData } from 'src/interfaces/identity.pb';

export class SwaggerPaymentMethodRequest {
  @ApiProperty({ description: 'Client ID of the operator' })
  clientId: number;

  @ApiProperty({ description: 'Payment method title' })
  title: string;

  @ApiProperty({ description: 'Payment method provider name' })
  provider: string;

  @ApiProperty({ description: 'Secret Key for the payment method if any' })
  secretKey?: string;

  @ApiProperty({ description: 'Public Key for the payment method if any' })
  publicKey: string;

  @ApiProperty({ description: 'Merchant ID or contract code' })
  merchantId: string;

  @ApiProperty({ description: 'API base url of the payment method' })
  baseUrl: string;

  @ApiProperty({ description: 'Status of payment method (active or inactive' })
  status: number;

  @ApiProperty({
    description: 'If the payment method should be used for disbursement',
  })
  forDisbursement: number;

  @ApiProperty({
    description: 'ID of the payment method. Only available when editing',
  })
  id: number;
}

export class SwaggerPaymentMethodResponse {
  @ApiProperty({ description: 'Response status' })
  success: boolean;

  @ApiProperty({ description: 'Server Message' })
  message: string;

  @ApiProperty({ description: 'Request Status (true or false)' })
  status: boolean;
}

export class SwaggerFetchReportResponse {
  @ApiProperty({ description: 'Message' })
  message: string;

  @ApiProperty({ description: 'Request Status (true or false)' })
  status: boolean;

  data?: PlayerBonusData[];
}

export class SwaggerGetPaymentMethodResponse {
  @ApiProperty({ description: 'Message' })
  message: string;

  @ApiProperty({ description: 'Request Status (true or false)' })
  status: boolean;

  data?: PaymentMethod[];
}

export class SwaggerListDepositRequest {
  @ApiProperty({ description: 'SBE Client ID of the operator' })
  clientId: number;

  @ApiProperty({ description: 'Start Date to query' })
  startDate: string;

  @ApiProperty({ description: 'End date to query' })
  endDate: string;

  @ApiProperty({
    description:
      'Payment method type to fetch (paystack, opay, flutterwave, monnify)',
  })
  paymentMethod: string;

  @ApiProperty({
    description: 'Transaction status (1 - Completed, 0 - Pending, 2 - Failed',
  })
  status: number;

  @ApiProperty({ description: 'Filter transactions by username' })
  username: string;

  @ApiProperty({ description: 'Filter transactions by transaction ID' })
  transactionId: string;
}

export class SwaggerApproveExpenseRequest {
  @ApiProperty({ description: 'ID of Admin that requested the expense' })
  status: number;

  @ApiProperty({ description: 'ID of Admin to verify the expense' })
  verifiedBy: number;

  @ApiProperty({ description: 'Id of expense in case of update' })
  expenseId: number;

  @ApiProperty({ description: 'Expense Amount' })
  amount: number;

  @ApiProperty({ description: 'Comment for expense' })
  comment: string;
}

export class SwaggerApproveCashInOutRequest {
  @ApiProperty({ description: 'ID of Admin that requested the cashin?cashout' })
  status: number;

  @ApiProperty({ description: 'ID of Branch toverify the cashin/cashut' })
  verifiedBy: number;

  @ApiProperty({ description: 'Id of cashin/cashout in case of update' })
  id: number;
}

export class SwaggerCreateCashInOutRequest {
  @ApiProperty({ description: 'ID of Admin that requested the cashin?cashout' })
  userId: number;

  @ApiProperty({ description: 'Branch Id ' })
  branchId: number;

  @ApiProperty({ description: 'Id of cashin/cashout in case of update' })
  id!: number;

  @ApiProperty({ description: 'Cashin/Cashout Amount' })
  amount: number;

  @ApiProperty({ description: 'Comment for cashin/cashout' })
  comment: string;
}

export class SwaggerInitiateDepositRequest {
  @ApiProperty({ description: 'Client ID of the operator' })
  clientId: number;

  @ApiProperty({ description: 'Deposit Amount' })
  amount: number;

  @ApiProperty({ description: 'Payment method selected for deposit' })
  paymentMethod: string;
}

export class SwaggerVerifyBankAccountRequest {
  @ApiProperty({ description: 'Client ID of the operator' })
  clientId: number;

  @ApiProperty({ description: 'Deposit Amount' })
  accountNumber: number;

  @ApiProperty({ description: 'Payment method selected for deposit' })
  bankCode: string;
}

export class SwaggerWithdrawalRequest {
  @ApiProperty({ description: 'Client ID of the operator' })
  clientId: number;

  @ApiProperty({ description: 'Account number' })
  accountNumber: number;

  @ApiProperty({ description: 'Account name' })
  accountName: string;

  @ApiProperty({ description: 'Withdrawal Amount' })
  amount: number;

  @ApiProperty({ description: 'Bank Code' })
  bankCode?: string;

  @ApiProperty({ description: 'Bank name' })
  bankName?: string;

  @ApiProperty({ description: 'Withdrawal type' })
  type?: string;
}

export class SwaggerCashbookReponse {
  @ApiProperty({ description: 'Message' })
  message: string;

  @ApiProperty({ description: 'Request Status (true or false)' })
  success: boolean;

  @ApiProperty({
    description: 'Data object containing cashbook response',
  })
  data?: any;
}
export class SwaggerDepositReponse {
  @ApiProperty({ description: 'Message' })
  message: string;

  @ApiProperty({ description: 'Request Status (true or false)' })
  success: boolean;

  @ApiProperty({
    description:
      'Data object containing deposit link and transaction reference',
  })
  data?: DepositResponseData;
}

export class SwaggerVerifyDepositReponse {
  @ApiProperty({ description: 'Message' })
  message: string;

  @ApiProperty({ description: 'Request Status (true or false)' })
  success: boolean;

  @ApiProperty({ description: 'HTTP Request status' })
  status?: number;
}

export class SwaggerListTransactions {
  @ApiProperty({ description: 'Client ID of the operator' })
  clientId: number;

  @ApiProperty({ description: 'Account number' })
  userId: number;

  @ApiProperty({ description: 'Transaction Start date' })
  startDate: string;

  @ApiProperty({ description: 'Transaction End date' })
  endDate: number;

  @ApiProperty({ description: 'Bank Code' })
  page?: string;

  @ApiProperty({ description: 'Bank name' })
  perPage?: string;
}

export class SwaggerListTransactionResponse {
  @ApiProperty({ description: 'Message' })
  message: string;

  @ApiProperty({ description: 'Request Status (true or false)' })
  success: boolean;

  @ApiProperty({ description: 'data' })
  data?: any;
}

export class SwaggerListWithdrawalRequests {
  @ApiProperty({ description: 'SBE Client ID' })
  clientId: number;
  @ApiProperty({ description: 'Start date' })
  from: string;
  @ApiProperty({ description: 'End Date' })
  to: string;
  @ApiProperty({ description: 'Status' })
  status?: number;
  @ApiProperty({ description: 'Username' })
  userId?: number;
}

export class SwaggerUpdateWithdrawalRequest {
  @ApiProperty({ description: 'SBE Client ID' })
  clientId: number;
  @ApiProperty({ description: 'Withdrawal Request ID' })
  withdrawalId: number;
  @ApiProperty({ description: 'Update action' })
  action: string;
  @ApiProperty({ description: 'Comment if rejected' })
  comment: string;
}

export class SwaggerFundTransfer {
  @ApiProperty({ description: 'SBE Client ID' })
  clientId: number;
  @ApiProperty({ description: 'User ID' })
  userId: number;
  @ApiProperty({ description: 'Username' })
  username: string;
  @ApiProperty({ description: 'Transfer Acction (deposit|withdraw)' })
  action: string;
  @ApiProperty({ description: 'Transfer amount' })
  amount: number;
  @ApiProperty({ description: 'Transfer Title' })
  subject: string;
  @ApiProperty({ description: 'Transaction description' })
  description: string;
  @ApiProperty({ description: 'Wallet to be funded' })
  wallet: string;
  @ApiProperty({ description: 'Source of transaction' })
  source: string;
  @ApiProperty({ description: 'Method of transaction' })
  channel: string;
}

interface DepositResponseData {
  link: string;
  transactionRef: string;
}

interface PaymentMethod {
  title: string;
  provider: string;
  secretKey: string;
  publicKey: string;
  merchantId: string;
  baseUrl: string;
  status: number;
  forDisbursement: number;
  id: number;
}
