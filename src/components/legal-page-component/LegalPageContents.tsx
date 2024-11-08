// @ts-nocheck

'use client';
import React, { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import PrivacyComponent from './privacy-component/PrivacyComponent';
import { useRouter, useSearchParams } from 'next/navigation';
import TermsComponent from './terms-component/TermsComponent';
import GdprComponent from './gdpr-component/GdprComponent';
import UsCompliance from './us-compliance/UsCompliance';
import GdprFaq from './gdpr-faq/GdprFaq';
import CookeComponent from './cookie-component.tsx/CookeComponent';

const LegalPageContents = () => {

    const router = useRouter();
    const searchParams = useSearchParams();

    // Initialize the activeTab state with the URL parameter or default to 'cookies'
    const initialTab = searchParams.get('tab') || 'cookies';
    const [activeTab, setActiveTab] = useState(initialTab);

    // Update active tab when URL changes
    useEffect(() => {
        const currentTab = searchParams.get('tab');
        if (currentTab) {
            setActiveTab(currentTab);
        }
    }, [searchParams]);

    const handleTabChange = (value) => {
        setActiveTab(value);
        // Use replace instead of push to avoid adding to history stack
        router.replace(`/legal?tab=${value}`, { scroll: false });
    };

    // Validate that the current tab is one of the allowed values
    const validTabs = ['cookies', 'privacy', 'terms', 'gdpr', 'us', 'faq'];
    const currentTab = validTabs.includes(activeTab) ? activeTab : 'cookies';


    return (
        <div>
            <Tabs defaultValue={activeTab} onValueChange={handleTabChange} className="w-full">
                <TabsList className="w-full justify-between items-center rounded-full overflow-x-auto lg:overflow-hidden">
                    <TabsTrigger value="cookies">Cookie Policy</TabsTrigger>
                    <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
                    <TabsTrigger value="terms">Terms</TabsTrigger>
                    <TabsTrigger value="gdpr">GDPR Compliance Statement</TabsTrigger>
                    <TabsTrigger value="us">US Complaiance Statement</TabsTrigger>
                    <TabsTrigger value="faq">GDPR FAQ</TabsTrigger>
                </TabsList>

                <TabsContent value="cookies">
                    <CookeComponent />
                </TabsContent>

                <TabsContent value="privacy">
                    <PrivacyComponent />
                </TabsContent>
                <TabsContent value="terms">
                    <TermsComponent />
                </TabsContent>
                <TabsContent value="gdpr">
                    <GdprComponent />
                </TabsContent>
                <TabsContent value="us">
                    <UsCompliance />
                </TabsContent>
                <TabsContent value="faq">
                    <GdprFaq />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default LegalPageContents;