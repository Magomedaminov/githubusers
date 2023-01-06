import React, { useContext } from "react";
import { Card } from "../../card";
import { Search } from "../../search";
import { GithubContext } from "../../../context/github/githubContext";

export const Home = () => {
   const { loading, users } = useContext(GithubContext)
    console.log(users)
    return (
        <>
            <Search/>
            <div className="row mt-4">
                { loading ? <p className="text-center">загрузка...</p> : users.map(user => (<div className="col-sm-4 mb-4" key={user.id}>
                    <Card user={user}/>
                </div>))}
            </div>
        </>
    )
}