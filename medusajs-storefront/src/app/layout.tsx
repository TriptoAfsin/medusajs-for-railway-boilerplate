import { getBaseURL } from "@lib/util/env"
import "app/globals.css"
import { Metadata } from "next"
import NextTopLoader from "nextjs-toploader"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
        <NextTopLoader color="#5464f7" />
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
