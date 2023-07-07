import { NextApiRequest, NextApiResponse } from 'next';
import { trimNewLines } from '../../helpers/helper';
import query from '../../utils/query';
 

export type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  response: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) 
 {
  const { prompt } = req.body;
  console.log("prompt", prompt);

  if (!prompt) {
    res.status(400).json({ response: 'Please add some text...' });
  }

   
  const question = `Write an three paragraphs long article about "${prompt}"`;
  const answer = (await query(question)) || 'Something went wrong...';

  const response = trimNewLines(answer);

 
  res.status(200).json({ response });
}
