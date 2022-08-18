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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var client_1 = require("@prisma/client");
var client = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var posts;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client.user.deleteMany()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, client.post.deleteMany()
                        // await client.user.create({
                        // 	data: {
                        // 		name: "kokhayas",
                        // 		email: "1234.884.koki@gmail.com",
                        // 	}
                        // })
                        // await client.post.create({
                        // 	data: {
                        // 		title: "創造情報についての紹介記事",
                        // 		author: "kokhayas",
                        // 		classification: "information",
                        // 		content: "創造情報は、創造性に焦点を当てた学科です。",
                        // 		users: {
                        // 			create: [
                        // 				{
                        // 					user: {
                        // 						connect: {
                        // 							id: 1
                        // 						}
                        // 					}
                        // 				}
                        // 			]
                        // 		}
                        // 	}
                        // })
                        // await client.post.create({
                        //     data: {
                        //   title: "吾輩は猫である",
                        //   author: "夏目漱石",
                        //   content: "賛成です: あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。\n本プロジェクトでは,不完全ゲームの一種である人狼ゲームをプレイするAI「人狼知能」を対象として,不完全情報協力ゲームにおける人工知能の開発を目指す.特に,単にゲームをプレイするAIの開発だけではなく,自然言語による自然な対話の実現, AIと人間プレイヤーとの協調等高度なAI技術の実現を目指す.",
                        //   classification: "national",
                        // }
                        // })
                        // await client.post.create({
                        //     data: {
                        //   title: "君の名は",
                        //   author: "Shinkai Makoto",
                        //   content: "賛成です: 東京の四ツ谷[注 2]に暮らす男子高校生・立花 瀧（たちばな たき）は、ある朝、目を覚ますと飛騨地方[13]の山深い田舎町である糸守町[注 3]に住む女子高生で宮水神社の巫女を務める宮水 三葉（みやみず みつは）になっており、逆に三葉は瀧になっていた。2人とも「奇妙な夢」だと思いながら、知らない誰かの一日を過ごす。",
                        //   classification: "national",
                        // }
                        // })
                        // await client.post.create({
                        //     data: {
                        //   title: "The Law of Return and the Right of Return",
                        //   author: "Michael Sandel",
                        //   content: "What it means to be free is to recognize certain moral ties we haven't chosen, ties bound up with history, membership, memory, then it's hard to separate the idea of obligations that point inward sometimes in and sometimes outward.",
                        // 	classification: "international",
                        // }
                        // })
                        // await client.post.create({
                        // 		data: {
                        // 			title: "hello world",
                        // 			author: "robot",
                        // 			content: "hello world",
                        // 			classification: "information",
                        // 		}
                        // })
                        // await client.post.create({
                        // 		data:{
                        // 			title: "physics",
                        // 			author: "yamanaka shinya",
                        // 			content: "f = ma",
                        // 			classification: "science",
                        // 		}
                        // })
                    ];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, client.post.findMany()];
                case 3:
                    posts = _a.sent();
                    console.log(posts);
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .then(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, client.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })["catch"](function (e) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.error(e);
                return [4 /*yield*/, client.$disconnect()];
            case 1:
                _a.sent();
                process.exit(1);
                return [2 /*return*/];
        }
    });
}); });
