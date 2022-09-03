import { LayoutProps } from '@/models';
import { Box } from '@mui/material';
import { Container, Stack } from '@mui/system';
import Link from 'next/link';
import * as React from 'react';
import { Footer, Header } from '../common';

export function MainLayout({ children }: LayoutProps) {
	return (
		<Stack minHeight={'100vh'}>
			<Header />

			<Container sx={{ bgcolor: 'primary.main' }}></Container>

			<Container maxWidth="sm" sx={{ bgcolor: 'primary.main' }}></Container>

			<Box flexGrow={1} component="main">
				{children}
			</Box>
			<Footer />
		</Stack>
	);
}
