import { Module } from '@nestjs/common';
import { PasswordItemService } from './password-item.service';
import { PasswordItemController } from './password-item.controller';
import { DbModule } from 'src/db/db.module';
import { PasswordListModule } from 'src/password-list/password-list.module';

@Module({
  imports: [DbModule, PasswordListModule],
  providers: [PasswordItemService],
  controllers: [PasswordItemController],
  exports: [PasswordItemService],
})
export class PasswordItemModule {}
