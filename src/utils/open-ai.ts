import  OpenAI  from "openai";

  export default async function searchList(req,res?:any) {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const country = req.country || '';
    const date = req.date || '';
    if (country.trim().length === 0) {
      // res.status(400).json({
      //   error: {
      //     message: "Please enter a valid country",
      //   }
      // });
      return;
    }
  
    try {
      const completion = await openai.completions.create({
        model: "text-davinci-003",
        prompt: generatePrompt(country, date),
        temperature: 0.6,
        max_tokens: 2048
      });
      return completion.choices
    } catch (error) {
        if (error instanceof OpenAI.APIError) {
          console.error(error.status);  // e.g. 401
          console.error(error.message); // e.g. The authentication token you passed was invalid...
          console.error(error.code);  // e.g. 'invalid_api_key'
          console.error(error.type);  // e.g. 'invalid_request_error'
        } else {
          // Non-API error
          console.log(error);
        }
      }
  }
  

  export function generatePrompt(country, date) {
    return `Sugiere una cosa de suma importancia para empacar antes de viajar a ${country} por ${date}. No necesito detalles, tu respuesta en una linea`;
  }