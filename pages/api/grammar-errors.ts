import { NextApiRequest, NextApiResponse } from 'next';
import query from '../../utils/query';

export type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  response: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt } = req.body;
  console.log('Prompt:', prompt);
  console.log('Prompt:', prompt);
  if (!prompt || prompt === "") {
    res.status(400).json({ response: 'Please add some text...' });
  }
 
  const question = `How many grammar mistakes exist in the quoted text "${prompt}"
  
  Respond in JSON format: {"Errors": *number of mistakes*, "Words": [*words that contains mistake*]}`;

  console.log("grammar-question",question)

  const answer = await query(question);
  
  console.log('Answer:', answer);

  const response = JSON.parse(
    answer?.replaceAll('\n', '').trim().toLowerCase()!
  );

  res.status(200).json({ response });
}
