"use client";

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function TimezoneRedirect() {
    const router = useRouter();
    const pathname = usePathname();
    const currentLocale = useLocale();

    useEffect(() => {
        // Only run on first visit to root path
        if (pathname === '/' || pathname === `/${currentLocale}`) {
            // Check if user has already made a locale choice
            const hasLocalePreference = localStorage.getItem('locale-preference');

            if (!hasLocalePreference) {
                // Get user's timezone
                const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

                // Determine preferred locale based on timezone
                const preferredLocale = timezone === 'Asia/Tokyo' ? 'ja' : 'en';

                // Save preference to avoid future redirects
                localStorage.setItem('locale-preference', preferredLocale);

                // Redirect if current locale doesn't match preference
                if (currentLocale !== preferredLocale) {
                    const newPath = preferredLocale === 'ja' ? '/' : '/en';
                    router.replace(newPath);
                }
            }
        }
    }, [pathname, currentLocale, router]);

    return null; // This component doesn't render anything
}