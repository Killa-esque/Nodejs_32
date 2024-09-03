import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Node 32!';
  }

  sum(n1: number, n2: number): Number {
    return Number(n1) + Number(n2);
  }
}
