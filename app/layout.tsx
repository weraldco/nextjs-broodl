import type { Metadata } from 'next';
import { Fugaz_One } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const fugaz = Fugaz_One({ subsets: ['latin'], weight: ['400'] });
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
			<h1 className={`text-base sm:text-lg textGradient ${fugaz.className}`}>
				Broodl
			</h1>
		</header>
	);
	const footer = <footer className="p-4 sm:p-8">Footer</footer>;

	return (
		<html lang="en">
			<body
				className={`w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col ${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{header}
				{children}
				{footer}
			</body>
		</html>
	);
}
