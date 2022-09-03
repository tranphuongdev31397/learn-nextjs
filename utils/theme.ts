import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { colors } from '@mui/material';

// Create a theme instance.
let theme = createTheme({
	typography: {
		fontFamily: 'Heebo, sans-serif',
	},
	palette: {
		primary: {
			main: '#FF6464',
		},
		secondary: {
			main: '#00A8CC',
			light: '#EDF7FA',
		},
		error: {
			main: red.A400,
		},
	},
	components: {
		MuiContainer: {
			defaultProps: {
				maxWidth: 'md',
			},
			styleOverrides: {
				maxWidthMd: {
					'@media(min-width: 900px)': {
						maxWidth: '860px',
					},
					maxWidth: '860px',
				},
				maxWidthSm: {
					'@media(min-width: 600px)': {
						maxWidth: '860px',
					},
					maxWidth: '680px',
				},
			},
		},
		MuiLink: {
			defaultProps: {
				underline: 'hover',
			},
			styleOverrides: {
				root: {
					color: 'black',
					'&:hover, &.active': {
						color: '#FF6464',
						fontWeight: 700,
					},
				},
			},
		},
		MuiButton: {
			variants: [
				{
					props: { variant: 'contained', color: 'primary' },
					style: { color: '#fff' },
				},
			],
		},
		MuiTypography: {
			variants: [
				{
					props: { variant: 'subtitle2' },
					style: {
						color: '#8695A4',
					},
				},
			],
		},
	},
});

theme = responsiveFontSizes(theme);

export { theme };
