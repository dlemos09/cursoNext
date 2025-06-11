// src/app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET, // não esqueça esse!
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
