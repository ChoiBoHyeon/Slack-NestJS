import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('api/workspaces')
export class WorkspacesController {
  @Get()
  getMyWorkspaces() {}

  @Post()
  createWorkspaces() {}

  @Get(':url/members')
  getAllMembersFromWorkspace() {}

  @Post(':url/members')
  inviteMemberFromWorkspace() {}

  @Delete(':url/members/:id')
  kickMembersToWorkspace() {}

  @Get(':url/members/:id')
  getMemberInfoWorkspace() {}

  @Get(':url/users/:id')
  DEPRECATED_getMemberInfoInWorkspce() {
    this.getMemberInfoInWorkspce();
  }
}
