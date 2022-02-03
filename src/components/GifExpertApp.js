import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    //    const handleAdd=()=>{
    //     setCategories([...categories,'Naruto']);
    //    }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory
                setCategories={setCategories}
            />
            <hr />
            <ul>
                {categories.map(c =><GifGrid 
                category={c}
                key={c}
                />
                )}
            </ul>
        </>
    );
};

export default GifExpertApp;
