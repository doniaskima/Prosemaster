import { NextApiRequest, NextApiResponse } from 'next';
import query from '../../utils/query';
import { trimNewLines } from '../../helpers/helper';
 

export type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  response: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, style } = req.body;

  if (!prompt) {
    res.status(400).json({ response: 'Please add some text...' });
  }

  // prompt transformation
  const question = `Paraphrase quoted text in ${style} style and in same number of paragraphs as input "${prompt}"`;

  const answer = (await query(question)) || '';

  const response = trimNewLines(answer).replaceAll('"', '');

  res.status(200).json({ response });
}
