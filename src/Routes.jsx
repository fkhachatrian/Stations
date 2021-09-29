import React from "react";

import Stations from "./components/Stations/Stations";
import Station from "./components/Station/Station";

export const Routes = [
    {
        path: "/stations",
        isExact: true,
        component: () => <Stations/>
    },
    {
        path: "/stations/:id",
        component: () => <Station/>
    }
];
