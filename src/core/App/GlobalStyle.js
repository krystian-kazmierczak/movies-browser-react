import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	html {
		box-sizing: border-box;
		overflow-y: scroll;
	}

	*,
	::after,
	::before {
		box-sizing: inherit;
	}

	body {
		font-family: 'Poppins', sans-serif;
		background-color:${({ theme }) => theme.colors.whisper};
		ocerflow-wrap: anywhere;
	}
`;
