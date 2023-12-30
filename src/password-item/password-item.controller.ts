import {
  Body,
  Controller,
  Delete,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { PasswordItemService } from './password-item.service';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { CreatePasswordItemDto, PasswordItemDto } from './dto';
import { SessionInfo } from 'src/auth/session-info.decorator';
import { GetSessionInfoDto } from 'src/auth/dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('password-item')
@UseGuards(AuthGuard)
export class PasswordItemController {
  constructor(private passwordItemService: PasswordItemService) {}

  @Post()
  @ApiOkResponse({
    type: PasswordItemDto,
  })
  async create(
    @Body() body: CreatePasswordItemDto,
    @SessionInfo() session: GetSessionInfoDto,
  ): Promise<PasswordItemDto> {
    return this.passwordItemService.create(session.id, body);
  }

  @Delete(':id')
  @ApiOkResponse({
    type: PasswordItemDto,
  })
  async removePasswordItem(
    @Param('id', ParseIntPipe) id: number,
    @SessionInfo() session: GetSessionInfoDto,
  ): Promise<PasswordItemDto> {
    return await this.passwordItemService.removePasswordItem(session.id, id);
  }
}
