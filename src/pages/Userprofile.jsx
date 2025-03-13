import React from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const UserProfile = () => {
    const { username } = useParams();

    const { data: userDetails, isLoading, isError } = useQuery({
        queryKey: ['user', username],
        queryFn: async () => {
            try {
                const { data } = await axios.get(`https://api.github.com/users/${username}`);
                return data;
            } catch (error) {
                throw new Error("User not found");
            }
        }
    });

    if (isLoading) return <p className="text-center mt-10">Loading...</p>;
    if (isError) return <p className="text-center mt-10 text-red-500">User not found</p>;

    return (
        <section className="w-full h-[90vh] flex flex-col justify-center items-center bg-[#1b1b1bb7] px-2">
            <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-md text-center">
                <img src={userDetails.avatar_url} alt="Avatar" className="w-24 h-24 rounded-full mx-auto" />
                <h2 className="text-xl font-bold mt-2">{userDetails.login}</h2>
                <p className="text-gray-500">{userDetails.bio || "No bio available"}</p>

                <div className="mt-4 text-left">
                    <p><strong>Name:</strong> {userDetails.name || "Not available"}</p>
                    <p><strong>Location:</strong> {userDetails.location || "Not available"}</p>
                    <p><strong>Public Repos:</strong> {userDetails.public_repos}</p>
                    <p><strong>Followers:</strong> {userDetails.followers}</p>
                    <p><strong>Following:</strong> {userDetails.following}</p>
                    <p>
                        <strong>GitHub Profile:</strong>  
                        <a href={userDetails.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                            Visit
                        </a>
                    </p>
                </div>

                <Link to="/" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg">
                    Back to Search
                </Link>
            </div>
        </section>
    );
};

export default UserProfile;
