import md5 from 'md5'

export const getConfirmationHash = (id, createdAt): String =>
  md5(`${id}-${createdAt}-${process.env.CONFIRMATION_SECRET_KEY}`)
  