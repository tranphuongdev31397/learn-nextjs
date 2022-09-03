import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { Box, Icon, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import * as React from 'react';

export function Footer() {
	const socialLink = [
		{
			icon: Facebook,
			link: 'https://www.google.com/',
		},
		{
			icon: Instagram,
			link: 'https://www.google.com/',
		},
		{
			icon: Twitter,
			link: 'https://www.google.com/',
		},
		{
			icon: LinkedIn,
			link: 'https://www.google.com/',
		},
	];
	return (
		<Box textAlign={'center'} component="footer" py={7} mt={{ xs: 18, sm: 9 }}>
			<Stack direction={'row'} spacing={2} justifyContent={'center'} alignItems={'center'}>
				{socialLink.map((social, idx) => (
					<Box
						key={idx}
						component="a"
						href={social.link}
						sx={{ cursor: 'pointer' }}
						target="_blank"
						rel="noopener noreferrer"
						color={'black'}
					>
						<Icon component={social.icon} sx={{ fontSize: 32 }} />
					</Box>
				))}
			</Stack>
			<Typography>Copyright ©{new Date().getFullYear()} All rights reserved</Typography>
		</Box>
	);
}
