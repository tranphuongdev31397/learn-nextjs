import { Work } from '@/models';
import { Chip, Divider, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import moment from 'moment';
import Image from 'next/image';
import * as React from 'react';

export interface WorkItemProps {
	work: Work;
}

export function WorkItem({ work }: WorkItemProps) {
	return (
		<Stack
			direction={{
				xs: 'column',
				sm: 'row',
			}}
			spacing={2}
			py={2}
		>
			<Box
				width={{
					xs: '100%',
					sm: '246px',
				}}
				height={'180px'}
				borderRadius={'6px'}
				overflow={'hidden'}
			>
				<Image src={work.thumbnailUrl} width={246} height={180} alt="avatar" layout="responsive" />
			</Box>
			<Stack flex={1}>
				<Typography variant="h5" fontWeight={'bold'}>
					{work.title}
				</Typography>
				<Stack direction={'row'} spacing={2} mt={1} mb={3} alignItems={'center'}>
					<Chip
						sx={{
							bgcolor: '#000',
							color: '#fff',
							fontWeight: 'bold',
						}}
						size="small"
						label={moment(Number(work.createdAt)).format('YYYY')}
					/>
					<Typography color={'GrayText'}>{work.tagList.join(', ')}</Typography>
				</Stack>
				<Typography variant="body2">{work.shortDescription}</Typography>
			</Stack>
		</Stack>
	);
}
