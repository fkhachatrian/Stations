import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    stations: [],
    station: {
        metrics: {}
    }
}

const stations = createSlice({
    name: "stations",
    initialState,
    reducers: {
        setLoading(state, action) {
            state.loading = action.payload
        },
        setError(state,action) {
            state.error = action.payload
        },
        handleChange(state,action) {
          state[action.payload.name] = action.payload.value
        },
    }
})

export const { setError, setLoading, handleChange } = stations.actions

export default stations.reducer
