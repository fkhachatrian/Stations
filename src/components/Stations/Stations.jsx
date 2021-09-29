import React, {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { getStations } from "../../store/actions/Stations";

import "./styles.scss"

const Stations = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const stations = useSelector(store => store.auth.stations);

    const [ localStations, setLocalStation ] = useState([])
    const [ sortingByType, setSortingByType ] = useState({
        name: "increase",
        margin: "",
        volume: "",
        profit: "",
    })

    const { margin, volume, profit, name } = sortingByType

    useEffect(() => {
        dispatch(getStations(`{
          stations {
            id
            name
            metrics {
              volume
              margin
              profit
            }
          }
        }`))
    },[dispatch])

    const sortIncreasing = (type) => {
        const sortedStations = localStations?.sort(function(a, b) {
            return a.metrics[type] - b.metrics[type]
        })
        setSortingByType({
            [type]: "increase"
        })
        return setLocalStation([...sortedStations])
    };

    const sortDecreasing = (type) => {
        const sortedStations = localStations?.sort(function(a, b) {
            return b.metrics[type] - a.metrics[type]
        })
        setSortingByType({
            [type]: "decrease"
        })
        return setLocalStation([...sortedStations])
    }

    const sortNameIncrease = () => {
        const sortedName = localStations.sort(function(a, b) {
            return a.name.localeCompare(b.name);
        });
        setSortingByType({
            name: "increase"
        })
        return setLocalStation([...sortedName])
    }

    const sortNameDecrease = () => {
        const sortedName = localStations.sort(function(a, b) {
            return b.name.localeCompare(a.name);
        });
        setSortingByType({
            name: "decrease"
        })
        return setLocalStation([...sortedName])
    }

    useEffect(() => {
        setLocalStation([...stations].sort(function(a, b) {
            return a.name.localeCompare(b.name);
        }))
    },[stations])

    return (
        <div className="content">
            <h2>Stations</h2>
            <table>
                <tbody>
                <tr>
                    <th onClick={() => name === "increase" ? sortNameDecrease() : sortNameIncrease()}>
                        Name
                        { name && <div className={`triangle ${name === "decrease" ? `decrease-icon` : ""}`}/> }
                    </th>
                    <th onClick={() => margin === "increase" ? sortDecreasing("margin") : sortIncreasing("margin")}>
                        Margin
                        { margin && <div className={`triangle ${margin === "decrease" ? `decrease-icon` : ""}`}/> }
                    </th>
                    <th onClick={() => profit === "increase" ?  sortDecreasing("profit") : sortIncreasing("profit")}>
                        { profit && <div className={`triangle ${profit === "decrease" ? `decrease-icon` : ""}`}/> }
                        Profit
                    </th>
                    <th onClick={() => volume === "increase" ? sortDecreasing("volume") : sortIncreasing("volume")}>
                        { volume && <div className={`triangle ${volume === "decrease" ? `decrease-icon` : ""}`}/> }
                        Volume
                    </th>
                </tr>
                </tbody>
                <tbody>
                { localStations?.map(station => {
                    return (
                        <tr key={station.id}>
                            <td onClick={() => history.push(`/stations/${station.id}`)}>{ station.name }</td>
                            <td>{ station.metrics.margin }</td>
                            <td>{ station.metrics.profit }</td>
                            <td>{ station.metrics.volume }</td>
                        </tr>
                    )
                }) }
                </tbody>
            </table>
        </div>
    )
};

export default Stations