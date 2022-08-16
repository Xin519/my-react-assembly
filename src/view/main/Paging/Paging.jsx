import React from 'react';
import Paging from '.';

const PagingDemonstration = () => {
    const fn = e => {
        console.log(e)
    }
    return (
        <div>
            <Paging pageSize={5} total={500} pageCount={20} currentPage={1} callback={fn} />
        </div>
    );
}

export default PagingDemonstration;
