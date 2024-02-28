import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";

@ApiTags('Channels')
@Controller('api/workspace/:url/channels')
export class ChannelsController {
  @Get()
  getChannel() {}

  @Post()
  createChannel() {}

  @Get(':name/chats')
  getChat(@Query() query, @Param() param) {
    console.log(query.perPage, query.page);
    console.log(param.url, param.id);
  }

  @Post(':name/chat')
  postChat(@Body() body) {}

  @Get(':name/members')
  getAllMembers() {}

  @Post(':name/members')
  inviteMembers() {}
}
