export default ({ env }) => ({
  email: {
    config: {
      provider: 'strapi-provider-email-sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'dev.mohamedbelkahla@gmail.com', // نفس الإيميل لي فعلتو ف SendGrid
        defaultReplyTo: 'dev.mohamedbelkahla@gmail.com',
      },
    },
  },
});
