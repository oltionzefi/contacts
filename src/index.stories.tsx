import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

// Updated placeholder — see component-specific story files for real stories
const AppBadge: React.FC<{
	label: string;
	variant?: 'primary' | 'success' | 'warning';
}> = ({ label, variant = 'primary' }) => {
	const bg =
		variant === 'success'
			? '#22c55e'
			: variant === 'warning'
			? '#f59e0b'
			: '#2563EB';
	return (
		<span
			style={{
				display: 'inline-block',
				padding: '4px 12px',
				borderRadius: 9999,
				background: bg,
				color: '#fff',
				fontSize: 13,
				fontWeight: 600,
				fontFamily: 'Inter, sans-serif',
			}}
		>
			{label}
		</span>
	);
};

const meta: Meta<typeof AppBadge> = {
	title: 'Design System/Badge',
	component: AppBadge,
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['primary', 'success', 'warning'],
		},
	},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { label: 'New', variant: 'primary' } };
export const Success: Story = { args: { label: 'Saved', variant: 'success' } };
export const Warning: Story = {
	args: { label: 'Pending', variant: 'warning' },
};
