import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getStation } from "../../store/actions/Stations";

const Station = () => {
    const dispatch = useDispatch();
    const { name, metrics: { volume, profit, margin } } = useSelector(store => store.auth.station)
    const error = useSelector(store => store.auth.error)

    let { id } = useParams();

    useEffect(() => {
        dispatch(getStation(`{
         station (id: ${id}) {
            id
            name
            metrics {
              volume
              margin
              profit
            }
          }  
        }`))
    },[dispatch, id])

    return (
        <div className="content">
            <h2 className="name">
                { error ? "We have a problem" : `Station - ${name}` }
            </h2>
            { error ? <div>{ error }</div> : <div className="metrics">
                <h4>Metrics</h4>
                <div>Volume - { volume }</div>
                <div>Profit - { profit }</div>
                <div>Margin - { margin }</div>
            </div> }
        </div>
    )
};

export default Station