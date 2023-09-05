'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";

export default function GitHubButton() {
    const supabase = createClientComponentClient()
    const handleSignIn = async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'github',
            options: {
                redirectTo: `${location.origin}/auth/callback`
            }
        })
        console.log("clicked");
      }
    return <button onClick={handleSignIn}
    className="hover:bg-gray-800 p-8 rounded-xl">
        <Image src="/github-mark-white.png"
        alt="GitHub logo" width={100} height={100}
        />
    </button>
}