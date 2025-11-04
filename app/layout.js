export const metadata = {
  title: 'Albert Einstein - Life and Legacy',
  description: 'An interactive exploration of Albert Einstein\'s life and contributions to science',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
