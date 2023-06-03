import { SolidAuth, type SolidAuthConfig } from "@auth/solid-start"
import GoogleProvider from "@auth/core/providers/google"
import { Provider } from "@auth/core/providers"
import { Profile } from "@auth/core/types"

export const authOpts: SolidAuthConfig = {
  providers: [
    GoogleProvider({
    	clientId: process.env.GOOGLE_CLIENT_ID,
    	clientSecret: process.env.GOOGLE_CLIENT_SECRET
		}) as Provider<Profile> // Used "as" here due to bug in type assumption in the dependency
  ],
  debug: false,
}

export const { GET, POST } = SolidAuth(authOpts)
