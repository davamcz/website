import { createTransport, SendMailOptions } from 'nodemailer'
import {
  transactionCreatedSeller,
  transactionCreatedBuyer,
  linkCreated,
} from './templates'
import { SES } from 'aws-sdk'

type TemplateNames =
  | 'transactionCreatedSeller'
  | 'transactionCreatedBuyer'
  | 'linkCreated'

interface TemplateData {
  template: TemplateNames
  subject: string
  data: any
}

const transporter = createTransport({
  SES: new SES({
    accessKeyId: process.env.EMAIL_ACCESS_KEY,
    secretAccessKey: process.env.EMAIL_SECRET_KEY,
    region: 'eu-west-1',
    apiVersion: '2010-12-01',
  }),
})

const getTemplateFor = (templateName: string, data: any): string => {
  let mjmlObject
  switch (templateName) {
    case 'linkCreated':
      mjmlObject = linkCreated(data)
      break
    case 'transactionCreatedSeller':
      mjmlObject = transactionCreatedSeller(data)
      break
    case 'transactionCreatedBuyer':
      mjmlObject = transactionCreatedBuyer(data)
      break
  }
  console.log('generated HTML')
  return mjmlObject.html
}

export const sendEmail = async (
  emailAddress: string,
  templateData: TemplateData
) => {
  const htmlContent = getTemplateFor(templateData.template, templateData.data)
  try {
    console.log('sendign email')
    const mailStatus = await transporter.sendMail({
      from: 'Davam.cz <info@davam.cz>',
      to: emailAddress,
      subject: templateData.subject,
      html: htmlContent,
    } as SendMailOptions)
    console.log('MailStatus: ', mailStatus);
  } catch (e) {
    console.log(e)
  }
}
