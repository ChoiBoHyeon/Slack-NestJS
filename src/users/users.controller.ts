import { Controller, Get, Post, Req, Res, Body } from '@nestjs/common';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller('api/users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  getUsers(@Req() req) {
    return req.user;
  }

  @ApiOperation({ summary: '회원가입' })
  @Post()
  PostUsers(@Body() data: JoinRequestDto) {
    this.usersService.postUsers(data.email, data.nickname, data.password);
  }

  @ApiOperation({ summary: '로그인' })
  @Post('login')
  logIn(@Req() req) {
    return req.user;
  }

  @ApiOperation({ summary: '로그아웃' })
  @Post('logout')
  logOut(@Req() req, @Res() res) {
    req.logOut();
    res.clearCookie('connect.sid', { httpOnly: true });
    res.send('ok');
  }
}
