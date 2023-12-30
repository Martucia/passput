import { Injectable } from '@nestjs/common';
import { AccountService } from 'src/account/account.service';
import { DbService } from 'src/db/db.service';
import { PasswordListService } from 'src/password-list/password-list.service';

@Injectable()
export class UsersService {
  constructor(
    private db: DbService,
    private accountService: AccountService,
    private passwordListService: PasswordListService,
  ) {}

  findByEmail(email: string) {
    return this.db.user.findFirst({ where: { email } });
  }

  async create(email: string, hash: string, salt: string) {
    const user = await this.db.user.create({ data: { email, hash, salt } });
    
    await this.accountService.create(user.id);
    await this.passwordListService.create(user.id);

    return user;
  }
}