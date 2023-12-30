import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AccountModule } from './account/account.module';
import { PasswordListModule } from './password-list/password-list.module';
import { PasswordItemController } from './password-item/password-item.controller';
import { PasswordItemService } from './password-item/password-item.service';
import { PasswordItemModule } from './password-item/password-item.module';

@Module({
  imports: [DbModule, AuthModule, UsersModule, AccountModule, PasswordListModule, PasswordItemModule],
  controllers: [AppController, PasswordItemController],
  providers: [AppService, PasswordItemService],
})
export class AppModule {}
