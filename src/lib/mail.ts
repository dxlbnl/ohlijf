
import nodemailer from 'nodemailer'
import { SMTP_HOST, SMTP_USER, SMTP_PASSWORD } from '$env/static/private'

export const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: 465,
  secure: true,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASSWORD,
  },
})
