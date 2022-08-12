import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("application")
  getApplication(): string {
    return this.appService.getApplication();
  }

  @Get()
  index() {
    return { ingredients : [] };
  }
}
