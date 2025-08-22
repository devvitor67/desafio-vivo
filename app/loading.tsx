import { Loader2 } from "lucide-react"

export default function Loading() {
    return (
        <main className="min-h-dvh flex items-center justify-center bg-black">
            <span className="text-purple-700">
                <Loader2 size={36} className="animate-spin" />
            </span>
        </main>
    )
}