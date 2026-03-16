import { GoogleGenerativeAI } from "@google/generative-ai";
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;


const genAI = new GoogleGenerativeAI(API_KEY);

async function runChat(prompt) {

  try {

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash"
    });

    const result = await model.generateContent(prompt);

    const response = await result.response;

    const text = response.text();

    console.log(text);

    return text;

  } catch (error) {
    console.error("Gemini API Error:", error);
  }

}

export default runChat;