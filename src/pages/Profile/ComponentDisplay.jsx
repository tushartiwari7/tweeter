import React from "react";
import { ProfileCard } from "../../components";

export const ComponentDisplay = () => {
    console.log("this is component")
    return(
        <>
            <h3>This will be component space</h3>
            <ProfileCard/>
        </>
    )
}
