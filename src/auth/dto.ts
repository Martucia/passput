import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class SignUpBodyDto {
  @ApiProperty({ required: true, example: 'email@gmail.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ required: true, example: '12345' })
  @IsNotEmpty()
  password: string;
}

export class SignInBodyDto {
  @ApiProperty({ required: true, example: 'email@gmail.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ required: true, example: '12345' })
  @IsNotEmpty()
  password: string;
}

export class GetSessionInfoDto {
  @ApiProperty()
  id: number;

  @ApiProperty({ example: 'email@gmail.com' })
  email: string;

  @ApiProperty()
  iat: number;

  @ApiProperty()
  exp: number;
}
