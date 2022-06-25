import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const PORT = process.env.PORT || 7000
  app.enableCors({
    credentials: true,
    origin: process.env.CLIENT_ORIGIN
  })
  await app.listen(PORT);
   
  console.log(`Server runs on  ${PORT} port`)
}
bootstrap();
