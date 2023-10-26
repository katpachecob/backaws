import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app.enableCors({
    allowedHeaders: ['content-type'],
    origin: [
      // "http://localhost:3000",
      // "https://localhost:3000",
      "https://front-devacas.vercel.app",
      "http://front-devacas.vercel.app",
      "https://front-devacas-git-main-katpachecob.vercel.app",
      "https://front-devacas-26e67tv5f-katpachecob.vercel.app"

    ],
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    credentials: true,
  })

  app.setGlobalPrefix('api/v1')
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true
    })
  )
  await app.listen(parseInt(process.env.PORT), () => console.log(`Running in port ${process.env.PORT}`));
}
bootstrap();
