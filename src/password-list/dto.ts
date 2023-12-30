import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { PasswordItemDto } from 'src/password-item/dto';

export class PasswordListDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  ownerId: number;

  @ApiProperty()
  items: PasswordItemDto[];
}

export class PasswordListQueryDto {
  @ApiProperty({ required: false })
  @IsOptional()
  q?: string;
}
