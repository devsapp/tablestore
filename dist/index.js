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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var TableStore = require('tablestore');
var logger_1 = __importDefault(require("./common/logger"));
var SAT = require('./sat');
var ComponentDemo = /** @class */ (function () {
    function ComponentDemo() {
    }
    /**
     * demo 实例
     * @param inputs
     * @returns
     */
    ComponentDemo.prototype.test = function (inputs) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                logger_1.default.debug("input: ".concat(JSON.stringify(inputs.props)));
                logger_1.default.info('command test');
                return [2 /*return*/, { hello: 'world' }];
            });
        });
    };
    ComponentDemo.prototype.createTable = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var props, credentials, argsObj, endpoint, instancename, AccessKeyID, AccessKeySecret, tableClient;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        props = params.props, credentials = params.credentials, argsObj = params.argsObj;
                        endpoint = '';
                        instancename = '';
                        argsObj.forEach(function (key, i) {
                            if (key === 'instance') {
                                instancename = argsObj[i + 1];
                            }
                            ;
                            if (key === 'endpoint') {
                                endpoint = argsObj[i + 1];
                            }
                        });
                        AccessKeyID = credentials.AccessKeyID, AccessKeySecret = credentials.AccessKeySecret;
                        tableClient = new TableStore.Client({
                            accessKeyId: AccessKeyID,
                            accessKeySecret: AccessKeySecret,
                            endpoint: endpoint,
                            instancename: instancename,
                        });
                        return [4 /*yield*/, tableClient.createTable(props)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ComponentDemo.prototype.insertTable = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var props, credentials, argsObj, endpoint, instancename, tablename, primaryKey, primaryValue, AccessKeyID, AccessKeySecret;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        props = params.props, credentials = params.credentials, argsObj = params.argsObj;
                        endpoint = '';
                        instancename = '';
                        tablename = '';
                        primaryKey = '';
                        primaryValue = '';
                        argsObj.forEach(function (key, i) {
                            if (key === 'instance') {
                                instancename = argsObj[i + 1];
                            }
                            ;
                            if (key === 'endpoint') {
                                endpoint = argsObj[i + 1];
                            }
                            if (key === 'tablename') {
                                tablename = argsObj[i + 1];
                            }
                            if (key === 'primaryKey') {
                                primaryKey = argsObj[i + 1];
                            }
                            if (key === 'primaryValue') {
                                primaryValue = argsObj[i + 1];
                            }
                        });
                        AccessKeyID = credentials.AccessKeyID, AccessKeySecret = credentials.AccessKeySecret;
                        SAT.init(endpoint, instancename, AccessKeyID, AccessKeySecret);
                        return [4 /*yield*/, SAT.table(tablename, [primaryKey]).put([parseInt(primaryValue)], props, 'I')];
                    case 1: return [2 /*return*/, _a.sent()]; //注册用户
                }
            });
        });
    };
    return ComponentDemo;
}());
exports.default = ComponentDemo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDekMsMkRBQXFDO0FBRXJDLElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUU3QjtJQUFBO0lBZ0VBLENBQUM7SUEvREM7Ozs7T0FJRztJQUNVLDRCQUFJLEdBQWpCLFVBQWtCLE1BQWtCOzs7Z0JBQ2xDLGdCQUFNLENBQUMsS0FBSyxDQUFDLGlCQUFVLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFFLENBQUMsQ0FBQztnQkFDdkQsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBQzVCLHNCQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFDOzs7S0FDM0I7SUFFWSxtQ0FBVyxHQUF4QixVQUF5QixNQUFNOzs7Ozs7d0JBQ3JCLEtBQUssR0FBMkIsTUFBTSxNQUFqQyxFQUFFLFdBQVcsR0FBYyxNQUFNLFlBQXBCLEVBQUUsT0FBTyxHQUFLLE1BQU0sUUFBWCxDQUFZO3dCQUMzQyxRQUFRLEdBQUcsRUFBRSxDQUFDO3dCQUNkLFlBQVksR0FBRyxFQUFFLENBQUM7d0JBQ3RCLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHLEVBQUUsQ0FBQzs0QkFDckIsSUFBSSxHQUFHLEtBQUssVUFBVSxFQUFFO2dDQUN0QixZQUFZLEdBQUcsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs2QkFDL0I7NEJBQUEsQ0FBQzs0QkFDRixJQUFJLEdBQUcsS0FBSyxVQUFVLEVBQUU7Z0NBQ3RCLFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDOzZCQUMzQjt3QkFDSCxDQUFDLENBQUMsQ0FBQTt3QkFDTSxXQUFXLEdBQXNCLFdBQVcsWUFBakMsRUFBRSxlQUFlLEdBQUssV0FBVyxnQkFBaEIsQ0FBaUI7d0JBQy9DLFdBQVcsR0FBRyxJQUFJLFVBQVUsQ0FBQyxNQUFNLENBQUM7NEJBQ3hDLFdBQVcsRUFBRSxXQUFXOzRCQUN4QixlQUFlLEVBQUUsZUFBZTs0QkFDaEMsUUFBUSxVQUFBOzRCQUNSLFlBQVksY0FBQTt5QkFDYixDQUFDLENBQUM7d0JBQ0kscUJBQU0sV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBQTs0QkFBM0Msc0JBQU8sU0FBb0MsRUFBQzs7OztLQUM3QztJQUVZLG1DQUFXLEdBQXhCLFVBQXlCLE1BQU07Ozs7Ozt3QkFDckIsS0FBSyxHQUEyQixNQUFNLE1BQWpDLEVBQUUsV0FBVyxHQUFjLE1BQU0sWUFBcEIsRUFBRSxPQUFPLEdBQUssTUFBTSxRQUFYLENBQVk7d0JBQzNDLFFBQVEsR0FBRyxFQUFFLENBQUM7d0JBQ2QsWUFBWSxHQUFHLEVBQUUsQ0FBQzt3QkFDbEIsU0FBUyxHQUFHLEVBQUUsQ0FBQzt3QkFDZixVQUFVLEdBQUcsRUFBRSxDQUFDO3dCQUNoQixZQUFZLEdBQUcsRUFBRSxDQUFDO3dCQUN0QixPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRyxFQUFFLENBQUM7NEJBQ3JCLElBQUksR0FBRyxLQUFLLFVBQVUsRUFBRTtnQ0FDdEIsWUFBWSxHQUFHLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7NkJBQy9COzRCQUFBLENBQUM7NEJBQ0YsSUFBSSxHQUFHLEtBQUssVUFBVSxFQUFFO2dDQUN0QixRQUFRLEdBQUcsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs2QkFDM0I7NEJBQ0QsSUFBSSxHQUFHLEtBQUssV0FBVyxFQUFFO2dDQUN2QixTQUFTLEdBQUcsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs2QkFDNUI7NEJBQ0QsSUFBSSxHQUFHLEtBQUssWUFBWSxFQUFFO2dDQUN4QixVQUFVLEdBQUcsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs2QkFDN0I7NEJBQ0QsSUFBSSxHQUFHLEtBQUssY0FBYyxFQUFFO2dDQUMxQixZQUFZLEdBQUcsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs2QkFDL0I7d0JBQ0gsQ0FBQyxDQUFDLENBQUM7d0JBQ0ssV0FBVyxHQUFzQixXQUFXLFlBQWpDLEVBQUUsZUFBZSxHQUFLLFdBQVcsZ0JBQWhCLENBQWlCO3dCQUNyRCxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLGVBQWUsQ0FBQyxDQUFDO3dCQUV4RCxxQkFBTSxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFBOzRCQUF6RixzQkFBTyxTQUFrRixFQUFDLENBQUMsTUFBTTs7OztLQUNsRztJQUVILG9CQUFDO0FBQUQsQ0FBQyxBQWhFRCxJQWdFQyJ9