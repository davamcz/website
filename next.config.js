module.exports = {
  env: {
    WEBSITE_URL: process.env.WEBSITE_URL,
    AIRTABLE_SECRET: process.env.AIRTABLE_SECRET,
    PRISMA_ENDPOINT: process.env.PRISMA_ENDPOINT,
    PRISMA_SECRET: process.env.PRISMA_SECRET,
    PROJECT_DIRNAME: __dirname,
  },
}
