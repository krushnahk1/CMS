import React, { useState } from 'react'
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import "../patient-css/Patient_view.css"
import SideNavContent from './SideNavContent';
import DashboardOverview from './DashboardOverview';
import CreateAppointment from './CreateAppointment';
import AddEnquiry from './AddEnquiries';

function PatientView() {

    const [sideNavStatus, setSideNavStatus] = useState(false);
 
    let list1 = [
        {
          number: '1',
          name: 'Dashboard',
          icon: 'fas fa-home', 
          url: '/patient/dashboard-overview',
        },
        {
          number: '2',
          name: 'Create Appointment',
          icon: 'fas fa-calendar-check', 
          url: '/patient/create-appointment',
        },
        {
          number: '3',
          name: 'Add Enquiries',
          icon: 'fas fa-question-circle', 
          url: '/patient/add-enquiries',
        },
      ];
    

      const changeSideNavStatus=()=>{
        setSideNavStatus(!sideNavStatus);
        console.log(sideNavStatus);
      }



    return (
        <>
            <Navbar changeSideNavStatus={changeSideNavStatus}></Navbar>
            <div className='main-view'>
                <div className='main-container'>
                    <div className='side-navbar'>
                        <SideNavContent list={list1} sideNavStatus={sideNavStatus}></SideNavContent>
                    </div>
                    <div className='main-content'>
                    <div className='main-content-routes' onClick={()=>{if(sideNavStatus) changeSideNavStatus();}}>
                        <Routes>
                            <Route path="/" element={< DashboardOverview />} />
                            <Route path="/dashboard-overview" element={< DashboardOverview />} />
                            <Route path="/create-appointment" element={<CreateAppointment />} />
                            <Route path="/add-enquiries" element={<AddEnquiry />} />
                        </Routes>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PatientView;