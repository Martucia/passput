import { Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { PasswordListService } from './password-list.service';
import { ApiOkResponse } from '@nestjs/swagger';
import { PasswordListDto, PasswordListQueryDto } from './dto';
import { SessionInfo } from 'src/auth/session-info.decorator';
import { GetSessionInfoDto } from 'src/auth/dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('password-list')
@UseGuards(AuthGuard)
export class PasswordListController {
    constructor(private passwordListService: PasswordListService) {}

    @Get()
    @ApiOkResponse({
        type: PasswordListDto
    })
    async getPasswordList(
        @Query() query: PasswordListQueryDto,
        @SessionInfo() session: GetSessionInfoDto
    ): Promise<PasswordListDto> {
        return this.passwordListService.getPasswordListByQuery(session.id, query)
    }
}