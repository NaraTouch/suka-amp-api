"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const dotenv = require("dotenv");
dotenv.config();
const app_module_1 = require("./app.module");
const validate_pipe_1 = require("./core/pipes/validate.pipe");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api/v1');
    app.useGlobalPipes(new validate_pipe_1.ValidateInputPipe());
    await app.listen(process.env.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map