import React from 'react'
import ReactDOM from 'react-dom'

import { AppProvider } from './hooks'
import Routes from './routes/routes.js'
import GlobalStyles from './styles/globalStyles.js'

ReactDOM.render(
    <>
        <AppProvider>
            <Routes />
        </AppProvider>
        <GlobalStyles />
    </>,

    document.getElementById('root')
)
