import { NextApiRequest, NextApiResponse } from 'next'

import { items } from '../../src/components/AllData'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.status(200).json(items)
}
