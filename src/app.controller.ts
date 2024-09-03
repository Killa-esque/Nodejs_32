import { Body, Controller, Delete, Get, Param, Post, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller("/app")
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("/demo/:id")
  getHello(@Req() req: Request, @Param("id") id, @Query("email") email, @Body() body): string {
    // lấy request
    // C1: Request (req.params, req.body)
    // C2: decorators của nestjs

    // let { id } = req.params

    return this.appService.getHello();
  }
  

  @Get("/tinh-tong/:n1/:n2")
  sum(@Param("n1") n1: number, @Param("n2") n2: number): Number {
    return this.appService.sum(n1, n2);
  }
}
