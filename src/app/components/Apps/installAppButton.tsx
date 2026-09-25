"use client";
import { AppContext } from '@/context/AppProvider';
import { TApp } from '@/types/apps.type';
import React, { useContext } from 'react';




const InstallAppButton = ({ app }: { app: TApp }) => {
    const {InstalledApps,setInstalledApps} = useContext(AppContext);

    console.log(InstalledApps,setInstalledApps);

    const handleInstall = () => {
        
        setInstalledApps([...InstalledApps,app])

       
    }
    return (
        <button className="btn btn-primary" onClick={() => handleInstall()}>
            Install
        </button>
    );
};

export default InstallAppButton;