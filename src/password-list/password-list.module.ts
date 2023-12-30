import { Module } from '@nestjs/common';
import { PasswordListService } from './password-list.service';
import { PasswordListController } from './password-list.controller';
import { DbModule } from 'src/db/db.module';

@Module({
  imports: [DbModule],
  providers: [PasswordListService],
  controllers: [PasswordListController],
  exports: [PasswordListService]
})
export class PasswordListModule {}
