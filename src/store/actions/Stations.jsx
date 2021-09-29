import ApiRequest from "../../shared/ApiRequest";
import { handleChange } from "../reducers/Stations";

export const getStations = (data) => async dispatch => {
    const response = await ApiRequest("graphql",data);
    response && dispatch(handleChange({name: "stations", value: response.stations}))
}

export const getStation = (query) => async dispatch => {
    const response = await ApiRequest("graphql", query)
    response && dispatch(handleChange({name: "station", value: response.station}))
}
