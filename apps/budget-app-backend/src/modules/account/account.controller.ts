import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AccountService } from './account.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { PaginationParam } from 'src/shared/app/pagination-param.decorator';
import { FilterParam } from 'src/shared/app/filter-param.decorator';
import { UserId } from 'src/shared/app/user-id.decorator';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  create(
    @Body() createAccountDto: CreateAccountDto,
    @UserId() userId: number,
  ) {
    return this.accountService.create(userId, createAccountDto);
  }

  @Get('total-balance')
  getTotalBalance( @UserId() userId: number ) {
    return this.accountService.getTotalBalance(userId)
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountService.findOne(+id);
  }

  @Get()
  findAll(
    @PaginationParam() pagination, 
    @FilterParam() filter, 
    @UserId() userId: number
  ) {
    return this.accountService.findAll(userId, pagination, filter);
  }



  @Patch(':id')
  update(
    @Param('id') id: string, 
    @Body() updateAccountDto: UpdateAccountDto,
    @UserId() userId: number
  ) {
    return this.accountService.update(+id, updateAccountDto);
  }

  @Delete(':id')
  remove(
    @Param('id') id: string,
    @UserId() userId: number
  ) {
    return this.accountService.remove(+id);
  }
}
