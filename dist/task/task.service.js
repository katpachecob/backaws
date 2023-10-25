"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const task_entity_1 = require("./entity/task.entity");
const typeorm_2 = require("@nestjs/typeorm");
const open_ai_1 = require("../utils/open-ai");
let TasksService = class TasksService {
    constructor(taskService) {
        this.taskService = taskService;
    }
    findAll() {
        return this.taskService.find();
    }
    async findOneById(id) {
        return this.taskService.findOneBy({ id });
    }
    async create(createTaskDto) {
        return await this.taskService.save(createTaskDto);
    }
    async deleteByID(id) {
        return this.taskService.delete(id);
    }
    async update(id, newInfoTask) {
        return await this.taskService.update(id, newInfoTask);
    }
    async searchByCountry(searchInfo) {
        const listSearch = await (0, open_ai_1.default)(searchInfo);
        return listSearch;
    }
    async getTasksByUser({ userId }) {
        console.log(userId);
        return await this.taskService.find({
            where: {
                userId: userId
            }
        });
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(task_entity_1.Task)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], TasksService);
//# sourceMappingURL=task.service.js.map