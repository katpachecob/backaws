import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors({
    allowedHeaders: ['content-type'],
    origin: [
      "http://localhost:3000",
      "https://localhost:3000",
      "https://front-devacas.vercel.app",
      "http://front-devacas.vercel.app"
    ],
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
