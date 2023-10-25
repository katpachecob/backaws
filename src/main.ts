import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import * as https from 'https'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const httpsAgent = new https.Agent({
    rejectUnauthorized: false
  })
  app.enableCors({
    allowedHeaders: ['Content-Type, Authorization'],
    preflightContinue: false,
    origin:'*',
    methods: ["GET", "POST", "PATCH", "PUT"],
    credentials: true,
  })

  app.setGlobalPrefix('api/v1')
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true
    })
  )
  await app.listen(8000, () => console.log(`Running in port 8000`));
}
bootstrap();
