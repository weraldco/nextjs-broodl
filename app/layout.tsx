import type { Metadata } from 'next';
import { Fugaz_One, Open_Sans } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

export const fugaz = Fugaz_One({ subsets: ['latin'], weight: ['400'] });
export const openSans = Open_Sans({ subsets: ['latin'] });
export const metadata: Metadata = {
	title: 'Broodl',
	description: 'Track your daily mood everyday of the year!',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const header = (
		<header className="p-4 sm:p-8 flex items-center justify-between gap-4">
			<Link href="/">
				<h1 className={`text-base sm:text-lg textGradient ${fugaz.className}`}>
					Broodl
				</h1>
			</Link>
			<div className="flex items-center justify-between">
				PLACEHOLDER CTA || STATS
			</div>
		</header>
	);
	const footer = (
		<footer className="p-4 sm:p-8 place-items-center grid">
			<p className={`text-indigo-400 ${fugaz.className}`}>Created with 💖</p>
		</footer>
	);

	return (
		<html lang="en">
			<body
				className={`w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-700 ${openSans.className} antialiased`}
			>
				{header}
				{children}
				{footer}
			</body>
		</html>
	);
}
