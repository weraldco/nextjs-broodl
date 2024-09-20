import Dashboard from '@/components/Dashboard';
import Login from '@/components/Login';
import Main from '@/components/Main';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Broodl • Dashboard',
};

export default function DashboardPage() {
	const isAuthencicated = false;

	let children = <Login />;

	if (isAuthencicated) {
		children = <Dashboard />;
	}
	return <Main>{children}</Main>;
}
