import type { Form } from '@/payload-types'

export const contactForm = (locale: 'en' | 'tr'): Partial<Form> => ({
  confirmationMessage: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text:
                locale === 'en'
                  ? 'The contact form has been submitted successfully.'
                  : 'İletişim formu başarıyla gönderildi.',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          tag: 'h2',
          version: 1,
        },
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    },
  },
  confirmationType: 'message',
  createdAt: '2023-01-12T21:47:41.374Z',
  emails: [
    {
      emailFrom: '"Contact Form" \u003Cform@yourdomain.com\u003E',
      emailTo: '{{email}}',
      replyTo: '"Tarik Kavaz" \u003Chello@yourdomain.com\u003E',
      bcc: '"Contact Form" \u003Chello@yourdomain.com\u003E',
      message: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text:
                    locale === 'en'
                      ? 'Your contact form submission was successfully received.\n\n{{full-name}} - {{email}} - {{phone}}\n\n{{message}}'
                      : 'İletişim formu gönderiminiz başarıyla alındı.\n\n{{full-name}} - {{email}} - {{phone}}\n\n{{message}}',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      subject: locale === 'en' ? "You've received a new message." : 'Yeni bir mesaj aldınız.',
    },
  ],
  fields: [
    {
      name: 'full-name',
      blockName: 'full-name',
      blockType: 'text',
      label: locale === 'en' ? 'Full Name' : 'İsim Soyisim',
      required: true,
      width: 100,
    },
    {
      name: 'email',
      blockName: 'email',
      blockType: 'email',
      label: 'Email',
      required: true,
      width: 100,
    },
    {
      name: 'phone',
      blockName: 'phone',
      blockType: 'number',
      label: locale === 'en' ? 'Phone' : 'Telefon',
      required: false,
      width: 100,
    },
    {
      name: 'message',
      blockName: 'message',
      blockType: 'textarea',
      label: locale === 'en' ? 'Message' : 'Mesaj',
      required: true,
      width: 100,
    },
  ],
  redirect: undefined,
  submitButtonLabel: locale === 'en' ? 'Submit' : 'Gönder',
  title: locale === 'en' ? 'Contact Form' : 'İletişim Formu',
  updatedAt: '2023-01-12T21:47:41.374Z',
})
