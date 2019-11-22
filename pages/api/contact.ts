import { NextApiRequest, NextApiResponse } from 'next'
import Airtable from 'airtable'
import { object, string } from 'yup'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email, question } = req.body

  const schema = object().shape({
    name: string()
      .required('This is required')
      .max(100),
    email: string()
      .email('Email is not in valid form!')
      .required('Email is required!'),
    question: string().required('Question is required field!'),
  })

  try {
    await schema.validate({ email, name, question })

    const airtable = new Airtable({ apiKey: process.env.AIRTABLE_SECRET }).base(
      'appkii6Xo3MF8CNIf',
    )
    await airtable('Records').create({
      name,
      email,
      question
    })

    res.status(200).json({ message: 'Contact' })
  } catch (e) {
    res.status(400).json({ error: e.message })
  }
}
