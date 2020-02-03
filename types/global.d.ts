/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly WEBSITE_URL: string
    readonly AIRTABLE_SECRET: string
    readonly PRISMA_ENDPOINT: string
    readonly PRISMA_SECRET: string
    readonly SECRET_KEY: string
    readonly S3_ACCESS_KEY: string
    readonly S3_SECRET_KEY: string
    readonly PROJECT_DIRNAME: string
    readonly CONFIRMATION_SECRET_KEY: string
  }

  interface Global {
    prisma: any
  }
}
