import { Work } from '@/models';
import { Divider } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { WorkItem } from './WorkItem';

export interface WorkListProps {
	workList: Work[];
}

export function WorkList({ workList }: WorkListProps) {
	if (workList.length === 0) return null;
	return (
		<Box>
			{workList.map((work: Work, index: number) => (
				<React.Fragment key={work.id}>
					<WorkItem work={work} />
					<Divider />
				</React.Fragment>
			))}
		</Box>
	);
}
