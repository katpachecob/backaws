import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import cors from 'cors'

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors:true});

  app.setGlobalPrefix('api/v1')
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true
    })
  )
  await app.listen(8000, () => console.log(`Running in port 8000`));
}
bootstrap();
