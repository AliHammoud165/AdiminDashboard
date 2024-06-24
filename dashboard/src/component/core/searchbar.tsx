
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Redux/store';
import { setString } from '../../Redux/saerch/searchSlice'; // Adjust path as per your project structure
import { SearchIcon } from '../../assets/Searchicon';

function Searchbar() {
    const dispatch = useDispatch();
    const searchQuery = useSelector((state: RootState) => state.string.stringValue);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setString(event.target.value)); 
        console.log(searchQuery)// Dispatch action to update search query in Redux store
    };

    return (
        <div className="h-full w-full border-gray-200 border-[2px] px-[20px] rounded-[2px] flex items-center justify-between">
            <div><SearchIcon /></div>
            <input
                type="text"
                className="h-full w-[90%] border-0 outline-none"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleInputChange}
            />
        </div>
    );
}

export  {Searchbar};
