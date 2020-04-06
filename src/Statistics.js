import React from 'react';

const Statistics = ({ width }) => { 
    return (
        <div style={{ textAlign: 'center', width: width, fontSize: '31px', fontFamily: 'Helvetica' }}>
            <b> 01 </b>
            <span> | </span>
            <b> moves: </b>
            <span> 0003 </span>
            <b> pushes: </b>
            <span> 0000 </span>
            <b> time </b>
            <span> 0:00:03 </span>
        </div>
    );
};

export default Statistics;