import openai from "./openai";

const query = async (prompt: string) => {
  try {
    const response = await openai.createCompletion({
      prompt,
      model: 'text-davinci-003',
      temperature: 1,
      top_p: 1,
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    return response.data.choices[0].text;
  } catch (error) {
    console.log(error);
    return 'Apologies, but the service is currently not accessible at the moment. 😞';
  }
};

export default query;
