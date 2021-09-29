import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Spinner from "../Spinner/Spinner";

const InnerPage = ({ children }) => {
    const loading = useSelector(store => store.auth.loading)
    return (
        <>
        { loading && <Spinner/> }
        { children }
        </>
    )
};

export default InnerPage
