import { Box, Typography, Link as MuiLink, Stack } from '@mui/material';
import { Container } from '@mui/system';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { ROUTER_LINKS } from './routes';
import clsx from 'clsx';
export function HeaderDesktop() {
	const router = useRouter();
	return (
		<Box display={{ xs: 'none', md: 'block' }} textAlign={'center'} component="header" p={2}>
			<Container>
				<Stack
					sx={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'flex-end',
						gap: '20px',
					}}
				>
					{ROUTER_LINKS.map((route) => (
						<Link key={route.path} passHref href={route.path}>
							<MuiLink className={clsx({ active: router.pathname === route.path })}>
								{route.label}
							</MuiLink>
						</Link>
					))}
				</Stack>
			</Container>
		</Box>
	);
}
