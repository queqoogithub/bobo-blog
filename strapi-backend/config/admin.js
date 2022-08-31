module.exports = ({ env }) => ({
  auth: {
    //secret: env('ADMIN_JWT_SECRET'),
    secret: "y1jUmOTWjfnn7zoDFLdP9Q==",
  },
  apiToken: {
    //salt: env('API_TOKEN_SALT'),
    salt: "g1jUmOTWjfnn7zoDFLdP9Q==",
  },
});
