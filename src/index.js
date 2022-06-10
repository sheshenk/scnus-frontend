import { ApolloProvider } from '@apollo/client';
import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import apolloClient from './services/apolloClientProvider';

const theme = {
	fontFamily: 'Encode Sans',
	headings: { fontFamily: 'Encode Sans'},
	primaryColor: 'orange'
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ApolloProvider client={apolloClient}>
			<BrowserRouter>
				<MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
					<App/>
				</MantineProvider>
			</BrowserRouter>
		</ApolloProvider>
	</React.StrictMode>
);