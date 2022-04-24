import * as ReactDOMClient from 'react-dom/client'

import App from './.rcp/App'

const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

ReactDOMClient.createRoot(rootElement).render(<App />)
