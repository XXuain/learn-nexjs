/** @format */

import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const user = { id: '1', name: 'J Smith', email: 'jsmith@example.com' };

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
      // async authorize(credentials, req) {
      //   console.log("credentials", credentials);
      //   // { idToken: user.accessToken, fcmToken: "a" }

      //   const res = await fetch(`${process.env.RESTFUL_API_URL}/login`, {
      //     method: "POST",
      //     body: JSON.stringify(credentials),
      //     headers: { "Content-Type": "application/json" },
      //   });
      //   console.log("res", res);
      //   // const user = await res.json()

      //   // // If no error and we have user data, return it
      //   // if (res.ok && user) {
      //   //   return user
      //   // }
      //   // Return null if user data could not be retrieved

      //   return { token: "tttt" };
      // },
    }),
  ],
});
