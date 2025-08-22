'use client'

import { useEffect } from "react"

declare global {
    interface Window {
        Landbot: any
    }
}

export function LandbotChat() {
    useEffect(() => {
        const script = document.createElement('script')

        script.type = "module"
        script.src = "https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs"

        script.onload = () => {
            new window.Landbot.Fullpage({
                configUrl: "https://storage.googleapis.com/landbot.online/v3/H-3083000-4V3QQWT2TLZRMQVA/index.json"
            })
        }

        document.body.appendChild(script)

        return () => {
            script.remove()

            const iframe = document.querySelector('iframe[src*="landbot.io"]')

            if (iframe) iframe.remove()
        }
    }, [])

    return null
}