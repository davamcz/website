module.exports = {
  env: {
    WEBSITE_URL: process.env.WEBSITE_URL,
    AIRTABLE_SECRET: process.env.AIRTABLE_SECRET,
    PRISMA_ENDPOINT: process.env.PRISMA_ENDPOINT,
    PRISMA_SECRET: process.env.PRISMA_SECRET,
    EMAIL_ACCESS_KEY: process.env.EMAIL_ACCESS_KEY,
    EMAIL_SECRET_KEY: process.env.EMAIL_SECRET_KEY,
    PROJECT_DIRNAME: __dirname,
  },
}
