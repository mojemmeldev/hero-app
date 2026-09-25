import AppCard from '@/app/components/shared/AppCard';
import { getAllApp } from '@/lib/Apps';
import { TApp } from '@/types/apps.type';
import React from 'react';



const AppPage =async () => {
    const data = await getAllApp();
    return (
        <div className='my-[80px] container mx-auto'>
            <div className='space-y-4 max-w-[400px] mx-auto text-center'>
                <h2 className='font-bold text-3xl'>Trending Apps</h2>
                <p>Explore all trending app on the market developed.</p>
            </div>

            <div className=' mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {
                    data.map((app: TApp, ind: number) => {
                        return <AppCard key={ind} app={app} ></AppCard>
                            

                    })
                }
            </div>
        </div>
    );
};

export default AppPage;