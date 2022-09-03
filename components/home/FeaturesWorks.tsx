import { Post, Work } from '@/models';
import { Box, Typography, Link as MuiLink, Grid } from '@mui/material';
import { Container, Stack } from '@mui/system';
import Link from 'next/link';
import * as React from 'react';
import { WorkList } from '../common/WorkList';
import { PostCard } from './PostCard';

export interface IRecentPostProps {}

export function FeaturesWorks() {
	const workList: Work[] = [
		{
			id: 1,
			title: 'Designing Dashboards',
			shortDescription:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
			description: '',
			createdAt: '1661663315222',
			updatedAt: '1661663315222',
			tagList: ['Dashboard'],
			thumbnailUrl:
				'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
		},
		{
			id: 2,
			title: 'Vibrant Portraits of 2020',
			shortDescription:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
			description: '',
			createdAt: '1661663315222',
			updatedAt: '1661663315222',
			tagList: ['Illustration'],
			thumbnailUrl:
				'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80',
		},
		{
			id: 3,
			title: '36 Days of Malayalam type',
			shortDescription:
				'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
			description: '',
			createdAt: '1661663315222',
			updatedAt: '1661663315222',
			tagList: ['Typography'],
			thumbnailUrl:
				'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
		},
	];
	return (
		<Box component={'section'} py={4}>
			<Container>
				<Typography textAlign={{ xs: 'center', sm: 'left' }} variant="h6" component={'h5'} mb={1}>
					Featured works
				</Typography>
				<Box>
					<WorkList workList={workList} />
				</Box>
			</Container>
		</Box>
	);
}
