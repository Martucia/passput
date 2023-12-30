import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class PasswordItemDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  password: string;

  @ApiProperty()
  login: string;

  @ApiProperty()
  site: string;

  @ApiProperty()
  passwordListId: number;
}

export class CreatePasswordItemDto {
  @ApiProperty()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  login: string;

  @ApiProperty()
  @IsNotEmpty()
  site: string;

  @ApiProperty()
  @IsNotEmpty()
  data: string;
}

export class PatchPasswordItemDto {
  @ApiProperty({ required: false })
  @IsOptional()
  password: string;

  @ApiProperty({ required: false })
  @IsOptional()
  login: string;

  @ApiProperty({ required: false })
  @IsOptional()
  site: string;
}
