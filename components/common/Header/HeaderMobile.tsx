import { Box, Typography, Link as MuiLink } from '@mui/material';
import { Container } from '@mui/system';
import Link from 'next/link';
import * as React from 'react';
import { ROUTER_LINKS } from './routes';

export function HeaderMobile() {
	return (
		<Box display={{ xs: 'block', md: 'none' }} textAlign={'center'} component="header">
			<Container
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'flex-end',
					p: 2,
					gap: '20px',
				}}
			>
				{/* {ROUTER_LINKS.map((route) => (
					<Link key={route.path} passHref href={route.path}>
						<MuiLink>{route.label}</MuiLink>
					</Link>
				))} */}
			</Container>
		</Box>
	);
}
