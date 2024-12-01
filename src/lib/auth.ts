import {NextAuthOptions,User,getServerSession} from "next-auth"
import GithubProvider from "next-auth/providers/github"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import  CredentialsProvider  from "next-auth/providers/credentials"
import googleProvider from "next-auth/providers/google"
export const authConfig: NextAuthOptions = {

  // Configure one or more authentication providers
  providers: [
    
    // ...add more providers here
  ],
}

