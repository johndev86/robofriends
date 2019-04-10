import React, { ChangeEvent } from 'react';

interface IAppProps {
    searchChange(event: ChangeEvent): void;
}

const SearchBox = ({searchChange} : IAppProps) => {
    return (
        <div className="pa2">
            <input aria-label="Search Robots" className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="search robots" onChange={e=>searchChange(e)}/>
        </div>
    );
};

export default SearchBox;