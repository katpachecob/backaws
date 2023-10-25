"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePrompt = void 0;
const openai_1 = require("openai");
async function searchList(req, res) {
    const openai = new openai_1.default({
        apiKey: process.env.OPENAI_API_KEY,
    });
    const country = req.country || '';
    const date = req.date || '';
    if (country.trim().length === 0) {
        return;
    }
    try {
        const completion = await openai.completions.create({
            model: "text-davinci-003",
            prompt: generatePrompt(country, date),
            temperature: 0.6,
            max_tokens: 2048
        });
        return completion.choices;
    }
    catch (error) {
        if (error instanceof openai_1.default.APIError) {
            console.error(error.status);
            console.error(error.message);
            console.error(error.code);
            console.error(error.type);
        }
        else {
            console.log(error);
        }
    }
}
exports.default = searchList;
function generatePrompt(country, date) {
    return `Sugiere una cosa de suma importancia para empacar antes de viajar a ${country} por ${date}. No necesito detalles, tu respuesta en una linea`;
}
exports.generatePrompt = generatePrompt;
//# sourceMappingURL=open-ai.js.map