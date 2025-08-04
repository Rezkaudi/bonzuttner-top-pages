"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

const LanguageSwitcher = () => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const switchLanguage = (newLocale: string) => {
        // Remove the current locale from the pathname
        const segments = pathname.split('/');
        segments[1] = newLocale; // Replace the locale segment
        const newPath = segments.join('/');

        router.push(newPath);
        setIsOpen(false);
    };

    const languages = [
        { code: 'ja', name: '日本語', flag: '🇯🇵' },
        { code: 'en', name: 'English', flag: '🇺🇸' }
    ];

    const currentLanguage = languages.find(lang => lang.code === locale);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 px-3 py-2 text-white hover:bg-cyan-500 rounded-md transition-colors"
            >
                <span className="text-lg">{currentLanguage?.flag}</span>
                <span className="text-sm font-medium">{currentLanguage?.code.toUpperCase()}</span>
                <svg
                    className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 mt-1 bg-white rounded-md shadow-lg border border-gray-200 min-w-[120px] z-50">
                    {languages.map((language) => (
                        <button
                            key={language.code}
                            onClick={() => switchLanguage(language.code)}
                            className={`w-full text-left px-3 py-2 text-sm hover:bg-gray-100 flex items-center space-x-2 first:rounded-t-md last:rounded-b-md ${locale === language.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
                                }`}
                        >
                            <span>{language.flag}</span>
                            <span>{language.name}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSwitcher;