import { createTransport, SendMailOptions } from 'nodemailer'
import { SES } from 'aws-sdk'

type TemplateNames = 'transactionCreatedSeller' | 'transactionCreatedBuyer' | 'linkCreated';

interface TemplateData {
  template: TemplateNames
  subject: string
  data: any
}

const transporter = createTransport({
  SES: new SES({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: 'eu-west-1',
    apiVersion: '2010-12-01',
  }),
})

export const sendEmail = async (
  emailAddress: string,
  templateData: TemplateData,
) => {
  try {
    await transporter.sendMail({
      from: 'Davam.cz <info@davam.cz>',
      to: emailAddress,
      subject: templateData.subject,
      template: templateData.template,
      context: {
        ...templateData.data,
      },
    } as SendMailOptions)
  } catch (e) {
    console.log(e)
  }
}
