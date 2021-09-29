import React  from "react";
import store from '../store'

import {
    ApolloClient,
    InMemoryCache,
    gql
} from "@apollo/client";

import { setLoading, setError } from "../store/reducers/Stations";

const ApiRequest = async (url, query) => {
    const host = process.env.REACT_APP_GRAPH_URL
    const queryString = gql`${query}`

    const client = new ApolloClient({
        uri: `${host}/${url}`,
        cache: new InMemoryCache()
    });

    try {
        store.dispatch(setLoading(true));
        const { data } = await client.query({
            query: queryString
        })
        store.dispatch(setLoading(false));
        return data
    } catch (error) {
        store.dispatch(setLoading(false));
        error.networkError
        if (error.networkError) {
            store.dispatch(setError("API request failed"))
        } else {
            store.dispatch(setError(error.graphQLErrors[0]?.message))
        }
    }
};

export default ApiRequest;
