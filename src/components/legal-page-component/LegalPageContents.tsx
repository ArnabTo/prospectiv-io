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
    const [activeTab, setActiveTab] = useState('cookies');

    useEffect(() => {
        const tab = searchParams.get('tab') || 'cookies';
        setActiveTab(tab);
    }, [searchParams]);


    const handleTabChange = (value) => {
        setActiveTab(value);
        router.push(`/legal?tab=${value}`);
    };
console.log(activeTab)
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