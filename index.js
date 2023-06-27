function query(OPENAI_API_KEY_MAIN, prompt) {
    const OPENAI_API_KEY = OPENAI_API_KEY_MAIN;
    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
      apiKey: OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
  
    return new Promise((resolve, reject) => {
      const question = prompt;
  
      openai
        .createCompletion({
          model: "text-davinci-003",
          prompt: question,
          max_tokens: 4000,
          temperature: 0,
        })
        .then((response) => {
          const result = response.data.choices[0].text;
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  
  module.exports.query = query;
  