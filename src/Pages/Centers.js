import React from 'react';
import Header from '../components/Header';
import './Centers.css'
import Background from '../components/Background';
import DetailLine from '../components/DetailLine';

const Centers= () => {

    return (
        <div className='center-page'>
        <Header/>
        <Background/>
        <DetailLine/>
    
            <div className="center-container">
            <div className="location-search-bar">
                        <img src="/images/search-icon.png" alt="Search Icon" className="location-search-icon"/>
                        <span className="location-search-text">Search Center Location</span>
                    </div>
                
                    <div className="location-row">

                        <div className='location-column-details'>
                            <div className='location-column-topic'>Center Location</div>
                            <div className='column-details'>
                            <img src="/images/embryo.jpg" alt="location" className="location-image"/>
                            <p>Embreyo Innovation Center</p>
                            </div>
                        </div>
                    

                    <div className='equipments-details'>

                    <div className='column-details'>
                        <div className='location-column-topic'>Center Equipment</div>
                        <p>Heart Rate Moniter</p>
                        <p> Weight Scale</p>
                        <p>Height Scale</p>
                        <p>Thermometers</p>
                    </div>
            

                        <div className='column-details'>
                        <div className='location-column-topic'>Equipment ID</div>
                        <p>HR1001</p>
                        <p>WS2002</p>
                        <p>HS3001</p>
                        <p>TM4000</p>
                        </div>
                        
                    <div className='column-details'>
                        <div className='location-column-topic'>Equipment Usage</div>
                        <p>05</p>
                        <p>05</p>
                        <p>08</p>
                        <p>10</p>
                        </div>
                        </div>
            
                    </div>
            </div>
        </div>
    );
};

export default Centers;