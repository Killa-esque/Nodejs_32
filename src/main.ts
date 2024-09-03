import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8080);
}
bootstrap();


// yarn start => node index.js
// yarn start:dev => nodemon index.js

// Nếu khai báo một đối tượng thì phải tạo ra cho nó 3 thành phần là:
        // + Module : nơi kết nối các thành phần service, controller và module của đối tượng khác
        // + Controller
        // + Service
 
