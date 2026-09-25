"use client"
import { TApp } from '@/types/apps.type';
import React, { Children, createContext, ReactNode, useState } from 'react';


type TAppContext ={
    InstalledApps:TApp[];
     setInstalledApps:React.Dispatch<React.SetStateAction<TApp[]>>;
}

export const AppContext = createContext<TAppContext>({
    InstalledApps:[],
    setInstalledApps:()=>{

    }
});

const AppProvider = ({children}:{children: ReactNode}) => {

    const [InstalledApps, setInstalledApps] =useState<TApp[]>([])

    const shareData={InstalledApps, setInstalledApps};

    return <AppContext.Provider value={{shareData}}>
        {children}
    </AppContext.Provider>
};

export default AppProvider;