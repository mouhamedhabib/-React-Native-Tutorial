import "react-native-url-polyfill/auto"
import { Client, Account , Avatars } from "react-native-appwrite"

export const client = new Client()
  .setProject("6a90237b00324e609184")
  .setEndpoint("https://fra.cloud.appwrite.io/v1")

export const account = new Account(client)
export const avatars = new Avatars(client)
