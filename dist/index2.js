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
const pg_1 = require("pg");
function insertData(username, email, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            host: "ep-young-pond-a5pvdymu.us-east-2.aws.neon.tech",
            port: 5432,
            database: "test",
            user: "bansal.anmol98",
            password: "T6VBEsCA2GLq",
            ssl: {
                rejectUnauthorized: false // Set this to true if the server has a valid SSL certificate
            }
        });
        try {
            yield client.connect();
            const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
            const values = [username, email, password];
            const res = yield client.query(insertQuery, values);
            console.log("Insertion success:", res);
        }
        catch (err) {
            console.error("Error during the insertion:", err);
        }
        finally {
            yield client.end();
        }
    });
}
insertData("anmolBan", "bansal.anmol98@gmail.com", "12345678").catch(console.error);
