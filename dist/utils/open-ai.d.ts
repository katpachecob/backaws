import OpenAI from "openai";
export default function searchList(req: any, res?: any): Promise<OpenAI.Completions.CompletionChoice[]>;
export declare function generatePrompt(country: any, date: any): string;
