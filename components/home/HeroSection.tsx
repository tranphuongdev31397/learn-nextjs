import { Button, Container, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { IMAGES } from 'images';
import Image from 'next/image';
import * as React from 'react';

export function HeroSection() {
	return (
		<Box component={'section'} pt={15} pb={9}>
			<Container>
				<Stack
					spacing={4}
					direction={{
						xs: 'column-reverse',
						md: 'row',
					}}
					justifyContent={'flex-start'}
					alignItems={{
						xs: 'center',
						md: 'flex-start',
					}}
				>
					<Box
						textAlign={{
							xs: 'center',
							md: 'left',
						}}
					>
						<Typography variant="h3" component={'h1'} fontWeight="bold" mb={5}>
							Hi, I am John, <br />
							Creative Technologist
						</Typography>
						<Typography mb={5}>
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
							officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud
							amet.
						</Typography>
						<Button
							variant="contained"
							color="primary"
							sx={{
								fontWeight: 'bold',
								p: 1,
							}}
						>
							Download Resume
						</Button>
					</Box>
					<Box
						sx={{
							width: 'fit-content',
							height: 'fit-content',
							minWidth: '240px',
							borderRadius: '50%',
							boxShadow: '-5px 13px',
							color: 'secondary.light',
						}}
					>
						<Image src={IMAGES.avatar} alt="avatar" layout="responsive" />
					</Box>
				</Stack>
			</Container>
		</Box>
	);
}
