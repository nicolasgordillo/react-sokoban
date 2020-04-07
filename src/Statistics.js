import React from 'react';

const Statistics = ({ width, level, moves }) => { 
    return (
        <div style={{ textAlign: 'center', width: width, fontSize: '31px', fontFamily: 'Helvetica' }}>
            <b> { level.toString().padStart(2, "0") } </b>
            <span> | </span>
            <b> moves: </b>
            <span> { moves.toString().padStart(3, "0") } </span>
            <b> pushes: </b>
            <span> 0000 </span>
            <b> time </b>
            <span> 0:00:03 </span>
        </div>
    );
};

export default Statistics;