import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor() {}

  getUsers() {}
  postUsers(email: string, nickname: string, password: string) {}
}
