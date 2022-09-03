import { Post } from '@/models';
import { Box, Typography, Link as MuiLink, Grid } from '@mui/material';
import { Container, Stack } from '@mui/system';
import Link from 'next/link';
import * as React from 'react';
import { PostCard } from './PostCard';

export interface IRecentPostProps {}

export function RecentPost() {
	const postList: Post[] = [
		{
			id: 1,
			title: 'Making a design system from scratch',
			description:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
			publishedDate: '1661663315222',
			tagList: ['Design', 'Pattern'],
		},
		{
			id: 2,
			title: 'Creating pixel perfect icons in Figma',
			description:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
			publishedDate: '1661663315222',
			tagList: ['Figma', 'Icon Design'],
		},
	];
	return (
		<Box component={'section'} bgcolor={'secondary.light'} py={4}>
			<Container>
				<Stack
					direction={'row'}
					justifyContent={{ xs: 'center', sm: 'space-between' }}
					alignItems={'center'}
					my={2}
				>
					<Typography variant="h6" component={'h5'}>
						Recent posts
					</Typography>
					<Link passHref href={'/posts'}>
						<MuiLink sx={{ display: { xs: 'none', sm: 'block' } }}>View all</MuiLink>
					</Link>
				</Stack>
				<Grid container spacing={2}>
					{postList.map((post) => (
						<Grid key={post.id} item xs={12} sm={6}>
							<PostCard post={post} />
						</Grid>
					))}
				</Grid>
			</Container>
		</Box>
	);
}
