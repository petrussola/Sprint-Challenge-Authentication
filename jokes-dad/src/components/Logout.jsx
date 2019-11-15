import React from "react";

export default function Logout({isLoggedIn, logoutHandler}) {
    return (
        <>
        {!isLoggedIn ? null : <button onClick={logoutHandler}>Logout</button>}
        </>

    )
}
