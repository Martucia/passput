import { ApiProperty } from "@nestjs/swagger";

export class AccountDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    ownerId: number;
}
