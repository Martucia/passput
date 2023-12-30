import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { CreatePasswordItemDto, PatchPasswordItemDto } from './dto';
import { PasswordListService } from 'src/password-list/password-list.service';

@Injectable()
export class PasswordItemService {
  constructor(
    private db: DbService,
    private passwordListService: PasswordListService,
  ) {}

  async create(userId: number, data: CreatePasswordItemDto) {
    const passwordList =
      await this.passwordListService.getPasswordListByUser(userId);

    return this.db.passwordItem.create({
      data: { passwordListId: passwordList.id, ...data },
    });
  }

  async getPasswordItem(id: number) {
    return this.db.passwordItem.findFirst({ where: { id } });
  }

  async patchPasswordItem(id: number, patch: PatchPasswordItemDto) {
    return this.db.passwordItem.update({ where: { id }, data: patch });
  }

  async removePasswordItem(userId: number, itemId: number) {
    const passwordList =
      await this.passwordListService.getPasswordListByUser(userId);

    return this.db.passwordItem.delete({
      where: {
        passwordListId: passwordList.id,
        id: itemId,
      },
    });
  }
}
