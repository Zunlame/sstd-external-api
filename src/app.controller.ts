import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Profile } from './model/profile';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':id')
  getProfile(@Param() params): Profile {
    return this.appService.getProfile(params.id);
  }
}
