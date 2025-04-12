import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovie: null,
        trailerVideo: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovie = action.payload
        },
        addTrailerVideo: (state,action) => {
            state.trailer = action.payload
        },
        addPopularMovies: (state,action) => {
            state.popularMovies = action.payload
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload
        },
        addUpcomingMovies: (state,action) => {
            state.upcomingMovies = action.payload
        }
    }
})

export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies , addUpcomingMovies} = moviesSlice.actions
export default moviesSlice.reducer