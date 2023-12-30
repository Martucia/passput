import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { PasswordListQueryDto } from './dto';

@Injectable()
export class PasswordListService {
  constructor(private db: DbService) {}

  async create(userId: number) {
    const passwordList = await this.db.passwordList.create({
      data: {
        ownerId: userId,
      },
    });

    return passwordList;
  }

  getPasswordListByQuery(userId: number, query: PasswordListQueryDto) {
    return this.db.passwordList.findUniqueOrThrow({
      where: { ownerId: userId },
      include: {
        items: {
          where: { data: { contains: query.q, mode: 'insensitive' } },
          orderBy: { createdAt: 'desc' },
        },
      },
    });
  };

  getPasswordListByUser(userId: number) {
    return this.db.passwordList.findUniqueOrThrow({
      where: { ownerId: userId },
    });
  };

  

  async getPasswordListById(id: number) {
    return this.db.passwordList.findUniqueOrThrow({
      where: { id },
    });
  }
}
