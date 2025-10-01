import type { Metadata } from 'next';
import '../globals.css';
import { ClientLayout } from '@/components/ClientLayout/ClientLayout';

export const metadata: Metadata = {
    title: 'Profile service',
    description: 'Profile service',
    icons: {
        icon: '/favicon.svg',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClientLayout>{children}</ClientLayout>
    );
}