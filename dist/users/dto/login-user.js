"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUserDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_user_dto_1 = require("./create-user.dto");
class LoginUserDto extends (0, mapped_types_1.PickType)(create_user_dto_1.CreateUserDto, ['email', 'password']) {
}
exports.LoginUserDto = LoginUserDto;
//# sourceMappingURL=login-user.js.map