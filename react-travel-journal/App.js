import React from 'react';
import data from './data';
import Navbar from './components/Navbar';
import Log from './components/Log'


function App() {
    const travelData = data.map(item => {
        return <Log 
            key={item.id}
            item={item}
        />
    })
    
    return (
       <div>
       <Navbar />
       {travelData}
       </div>
    )
}

export default App;