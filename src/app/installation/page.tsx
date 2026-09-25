"use client"
import { AppContext } from '@/context/AppProvider';
import React, { useContext } from 'react';
import AppCard from '../components/shared/AppCard';
import { TApp } from '@/types/apps.type';

const InstallationPage = () => {
    const {InstalledApps}=useContext(AppContext)
    return (
      
       <div className='my-[80px] container mx-auto'>
            <div className='space-y-4 max-w-[400px] mx-auto text-center'>
                <h2 className='font-bold text-3xl'>Installed Apps</h2>
                <p>Explore all trending app on the market developed.</p>
            </div>

            <div className=' mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {
                    InstalledApps.map((app: TApp, ind: number) => {
                        return <AppCard key={ind} app={app} ></AppCard>
                            

                    })
                }
            </div>
        </div>
    );
};

export default InstallationPage;