import { LayoutProps } from '@/models';
import * as React from 'react';

export function AdminLayout({ children }: LayoutProps) {
	return (
		<div>
			<div>Admin Layout</div>

			<div>{children}</div>
		</div>
	);
}
