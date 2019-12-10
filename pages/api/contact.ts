import { NextApiRequest, NextApiResponse } from 'next'
import Airtable from 'airtable'
import { ContactFormValidationSchema } from '../../validation/contact'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, question } = req.body

  try {
    await ContactFormValidationSchema.validate({ email, name, question })

    const airtable = new Airtable({ apiKey: process.env.AIRTABLE_SECRET }).base(
      'appkii6Xo3MF8CNIf'
    )
    await airtable('Records').create({
      name,
      email,
      question,
    })

    res.status(200).json({
      message: 'Vaše zpráva byla odeslána.',
      detail: 'Brzy se vám ozveme.',
    })
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
}
