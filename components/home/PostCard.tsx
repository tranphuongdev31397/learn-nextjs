import { Post } from '@/models';
import { theme } from '@/utils';
import { Card, CardContent, Divider, Typography, useMediaQuery } from '@mui/material';
import { Stack } from '@mui/system';
import moment from 'moment';
import * as React from 'react';

export interface PostCardProps {
	post: Post;
}

export function PostCard({ post }: PostCardProps) {
	const matches = useMediaQuery(theme.breakpoints.between('sm', 'md'));
	return (
		<Card>
			<CardContent>
				<Typography variant="h6" fontWeight={'bold'}>
					{post.title}
				</Typography>
				<Stack direction={'row'} my={2}>
					<Typography>
						{matches
							? moment(Number(post.publishedDate)).format('MMM YYYY')
							: moment(Number(post.publishedDate)).format('DD MMM YYYY')}
					</Typography>
					<Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
					<Typography>{post.tagList.join(', ')}</Typography>
				</Stack>

				<Typography variant="body2">{post.description}</Typography>
			</CardContent>
		</Card>
	);
}
