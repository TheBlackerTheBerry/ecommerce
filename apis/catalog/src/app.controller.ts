import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/api/catalog')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): any {
    return this.appService.getCatalog();
  }
}
