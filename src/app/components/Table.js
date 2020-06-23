import React from 'react';
import Category from './Category';

const Table = () => {
    return (
        <div className='table'>
            <Category x={0} />
            <Category x={1} />
            <Category x={2} />
            <Category x={3} />
            <Category x={4} />
        </div>
    )
}

export default Table;