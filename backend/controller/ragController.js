const axios = require('axios')
const OpenAI = require('openai')
const dotenv = require('dotenv');
const { response } = require('../utils/responseHandler');
dotenv.config();
const getRag = async (req, res) => {

    const { query } = req.body;
    if (!query) {
        return response(res, 400, "Invalid query not received")
    }
    const systemPrompt = `You are a waste management advisor. 
    The user will provide a message describing the waste details, such as type of waste and amount gathered.

    Your task:
        1. Identify the waste type and quantity mentioned in the message.
        2. Suggest safe, practical, and sustainable methods for managing or disposing of this waste.
        3. If recycling or reuse is possible, explain how.
        4. If special facilities or government-approved centers are required, mention them.
        5. Adapt recommendations depending on scale:
           - Small amounts → household or community solutions.
           - Large amounts → industrial or municipal solutions.
        6. Always present the answer in clear, actionable steps.
        `;
    const openai = new OpenAI({
        baseURL: 'https://openrouter.ai/api/v1',
        apiKey: process.env.OPEN_ROUTER_API_KEY,
    });
    try {
        const completion = await openai.chat.completions.create({
            model: 'deepseek/deepseek-chat-v3.1:free',
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: query },
            ],
        });
        const finalAnswer = completion.choices[0].message;
        return response(res, 200, "Model responded success", finalAnswer)
    }
    catch (error) {
        console.error(error)
        return response(res, 500, "Internal Server Error")
    }

}

module.exports = {
    getRag
};