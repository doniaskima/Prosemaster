import { NextApiRequest, NextApiResponse } from 'next';
import { trimNewLines } from '../../helpers/helper';
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
  if (!prompt || prompt ==="") {
    res.status(400).json({ response: 'Please add some text...' });
  }
 
  const question = `Rewrite quoted text grammarly correct "${prompt}"`;
  console.log("question correct-text",question);
  const answer = (await query(question)) || 'Something went wrong...';
  console.log(answer)
  const response = trimNewLines(answer);
  res.status(200).json({ response });
}
