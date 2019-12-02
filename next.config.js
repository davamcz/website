module.exports = {
  env: {
    WEBSITE_URL: process.env.WEBSITE_URL,
    AIRTABLE_SECRET: process.env.AIRTABLE_SECRET,
    PRISMA_ENDPOINT: process.env.PRISMA_ENDPOINT,
    PRISMA_SECRET: process.env.PRISMA_SECRET,
    AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
    AWS_SECRET_KEY: process.env.AWS_SECRET_KEY,
    PROJECT_DIRNAME: __dirname,
  },
}
