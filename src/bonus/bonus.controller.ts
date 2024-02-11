import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { BonusService } from './bonus.service';

import {
  AwardBonusRequest,
  BonusStatusRequest,
  GetUserBonusRequest,
  RedeemCampaignBonusDto,
} from './bonus.pb';
import {
  SwaggerAwardBonusRequest,
  SwaggerBonusStatusRequest,
  SwaggerCreateBonusResponse,
  SwaggerGetUserBonusResponse,
  SwaggerRedeemCampaignBonusDto,
  SwaggerUserBetWithBonus,
} from './dto';
import { SwaggerPlaceBetResponse } from '../betting/dto';
import { UserBetWithBonus } from './bet.interface';

@ApiTags('Bonus APIs')
@Controller('bonus')
export class BonusController {
  constructor(private readonly bonusService: BonusService) {}

  @Get('/user/list')
  @ApiOperation({
    summary: 'Get all bonus balance for a user ',
    description:
      'This endpoint retrieves all the bonus balance for a particular user',
  })
  @ApiQuery({ name: 'clientId', description: 'ID of the client' })
  @ApiQuery({ name: 'userId', description: 'ID of the user' })
  @ApiQuery({ name: 'id', description: 'ID of the bonus to filter' })
  @ApiQuery({ name: 'status', description: 'bonus status' })
  @ApiQuery({ name: 'bonus_type', description: 'filter by bonus type' })
  @ApiOkResponse({ type: SwaggerGetUserBonusResponse })
  GetUserBonus(@Query() query: any) {
    try {
      const data = {} as GetUserBonusRequest;
      data.clientId = query.clientId ? parseInt(query.clientId) : -1;
      data.userId = query.userId ? parseInt(query.userId) : -1;
      data.id = query.id ? parseInt(query.id) : 0;
      data.status = query.status ? parseInt(query.status) : -1;
      data.bonusType = query.bonus_type ? query.bonus_type : '';

      return this.bonusService.GetUserBonus(data);
    } catch (error) {
      console.error(error);
    }
  }

  @Post('/user/award')
  @ApiOperation({
    summary: 'Award user a bonus ',
    description:
      'This endpoint awards a user a bonus, this endpoint is meant to be used for administrative purposes only',
  })
  @ApiBody({ type: SwaggerAwardBonusRequest })
  @ApiOkResponse({ type: SwaggerGetUserBonusResponse })
  AwardBonus(@Body() data: AwardBonusRequest) {
    try {
      return this.bonusService.AwardBonus(data);
    } catch (error) {
      console.error(error);
    }
  }

  @Post('/bet/create')
  @ApiOperation({
    summary: 'Place a new bet bet using bonus ',
    description: 'This endpoint will place a new bonus bet',
  })
  @ApiBody({ type: SwaggerUserBetWithBonus })
  @ApiOkResponse({ type: SwaggerPlaceBetResponse })
  PlaceBonusBet(@Body() data: UserBetWithBonus) {
    try {
      return this.bonusService.PlaceBonusBet(data);
    } catch (error) {
      console.error(error);
    }
  }

  @Patch('/status/update')
  @ApiOperation({
    summary: 'Activate or Deactivate client bonus type ',
    description: 'Use this endpoint to activate or deactivate a client bonus',
  })
  @ApiBody({ type: SwaggerBonusStatusRequest })
  @ApiOkResponse({ type: SwaggerCreateBonusResponse })
  UpdateBonusStatus(@Body() data: BonusStatusRequest) {
    try {
      return this.bonusService.UpdateBonusStatus(data);
    } catch (error) {
      console.error(error);
    }
  }


  @Post('/redeem')
  @ApiOperation({
    summary: 'Redeems a bonus code',
    description: 'This endpoint redeems a bonus code ',
  })
  @ApiBody({ type: SwaggerRedeemCampaignBonusDto })
  @ApiOkResponse({ type: SwaggerCreateBonusResponse })
  RedeemCampaignBonus(@Body() data: RedeemCampaignBonusDto) {
    try {
      return this.bonusService.RedeemCampaignBonus(data);
    } catch (error) {
      console.error(error);
    }
  }
}
