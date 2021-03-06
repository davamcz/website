module.exports = {
  target: 'experimental-serverless-trace',
  env: {
    WEBSITE_URL: process.env.WEBSITE_URL,
    AIRTABLE_SECRET: process.env.AIRTABLE_SECRET,
    PRISMA_ENDPOINT: process.env.PRISMA_ENDPOINT,
    PRISMA_SECRET: process.env.PRISMA_SECRET,
    EMAIL_ACCESS_KEY: process.env.EMAIL_ACCESS_KEY,
    EMAIL_SECRET_KEY: process.env.EMAIL_SECRET_KEY,
    CONFIRMATION_SECRET_KEY: process.env.CONFIRMATION_SECRET_KEY,
    PROJECT_DIRNAME: __dirname,
    MYSQL_URL: process.env.MYSQL_URL
  },
}
