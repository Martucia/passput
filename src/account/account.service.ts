import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';

@Injectable()
export class AccountService {
  constructor(private db: DbService) {}

  async create(userId: number) {
    const account = await this.db.account.create({
      data: {
        ownerId: userId,
      },
    });

    return account;
  }

  async getAccount(userId: number) {
    return this.db.account.findUniqueOrThrow({ where: { ownerId: userId } });
  }
}
