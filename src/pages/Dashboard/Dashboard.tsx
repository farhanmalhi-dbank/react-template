import React, { useEffect } from 'react';
import './Dashboard.css';

const Dashboard = () => {
    useEffect(()=>{
        alert("DashBoards");
    })
    return (       
        <>
            <div className="container mx-auto">
            DashBoard
            </div>
        </>
        
    );
};

export default Dashboard;
