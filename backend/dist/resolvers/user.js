"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../models/user.entity");
exports.default = {
    //comment
    Query: {
        hello: (root, arg) => {
            return "hello we deploy to circle ci!!!";
        },
        users: () => __awaiter(void 0, void 0, void 0, function* () {
            const repository = typeorm_1.getRepository(user_entity_1.User);
            const users = yield repository.find({});
            return users;
        }),
        user: (_, { id }) => __awaiter(void 0, void 0, void 0, function* () {
            const repository = typeorm_1.getRepository(user_entity_1.User);
            const user = yield repository.findOne({ id });
            return user;
        })
    },
    Mutation: {
        register: (_, { email, name, role = "user" }) => {
            const repository = typeorm_1.getRepository(user_entity_1.User);
            const user = repository.create({
                email,
                name,
                role
            });
            user.save();
            return user;
        }
    }
};
//# sourceMappingURL=user.js.map