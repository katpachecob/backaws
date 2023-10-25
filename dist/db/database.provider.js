"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const typeorm_1 = require("@nestjs/typeorm");
exports.Database = typeorm_1.TypeOrmModule.forRoot({
    type: 'mysql',
    name: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT) || 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [
        "src/**/**.entity.ts",
        "dist/**/**.entity.js"
    ],
    synchronize: true,
});
//# sourceMappingURL=database.provider.js.map