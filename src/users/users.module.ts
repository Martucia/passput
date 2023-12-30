import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { DbModule } from 'src/db/db.module';
import { AccountModule } from 'src/account/account.module';
import { PasswordListModule } from 'src/password-list/password-list.module';

@Module({
  imports: [DbModule, AccountModule, PasswordListModule],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
