"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
const https = require("https");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    const httpsAgent = new https.Agent({
        rejectUnauthorized: false
    });
    app.enableCors({
        allowedHeaders: ['content-type'],
        origin: [
            "http://localhost:3000",
            "https://localhost:3000",
            "https://front-devacas.vercel.app",
            "http://front-devacas.vercel.app",
            "https://front-devacas-git-main-katpachecob.vercel.app",
            "https://front-devacas-26e67tv5f-katpachecob.vercel.app"
        ],
        methods: ["GET", "POST", "PATCH", "PUT", "OPTIONS", "HEAD", "DELETE"],
        credentials: true,
    });
    app.setGlobalPrefix('api/v1');
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true
    }));
    await app.listen(8000, () => console.log(`Running in port 8000`));
}
bootstrap();
//# sourceMappingURL=main.js.map