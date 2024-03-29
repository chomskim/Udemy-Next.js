import { createSlice } from '@reduxjs/toolkit'

export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    list: [
      { id: 1, title: 'Rambo' },
      { id: 2, title: 'Pulp fiction' },
    ],
  },
  reducers: {},
})

export default moviesSlice.reducer
