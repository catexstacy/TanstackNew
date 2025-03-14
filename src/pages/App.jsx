import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const App = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchTerm.trim() !== "") {
            navigate(`/${searchTerm}`);
        }
    };

    return (
        <section className="w-full h-[90vh] flex flex-col justify-center items-center bg-[#1b1b1bb7] px-2">
            <h1 className="w-full max-w-[800px] text-6xl md:text-7xl text-center font-bold text-[#4e7fea]">
                GitHub User Info
            </h1>
            <p className="text-white text-center mt-[1rem] text-xl py-3">
                Get users' profile information completely for free using this template made by 
                <span className="text-[#4e7fea] text-underline"> CatexStacy</span>
            </p>
            <article className="bg-white w-[500px] rounded-lg p-[2rem] shadow-lg">
                <h1 className="font-bold text-center text-2xl">Search user</h1>
                <form className="w-full flex gap-3 my-[1.5rem]" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="text"
                        className="px-[2rem] py-[1rem] outline-0 bg-[#EAEDF7] rounded-lg flex-grow"
                        placeholder="Enter a valid username"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} // updates the searchTerm state as the user types
                    />
                    <button 
                        type="button"
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
    
                </form>
                <p className="mt-4 text-center text-black">.Please Enter a valid Username</p>
            </article>
        </section>
    );
};

export default App;
