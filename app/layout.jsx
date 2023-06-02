import Nav from '@components/Nav';
import Provider from '@components/Provider';
import '@styles/globals.css';

export const metadata = {
  title: "Prompt-AI",
  description: 'Discover & share AI Prompts'
}
const RootLayout = ({ children }) => {
  return (
    <html>
      <Provider>
        <body>
          <div className="main">
            <div className='gradient' />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </body>
      </Provider>
    </html>
  )
}

export default RootLayout