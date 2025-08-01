import {createSlice} from "@reduxjs/toolkit";

export type Theme = 'theme1' | 'theme2' | 'theme3';

const initialTheme = (localStorage.getItem('theme') as Theme) || 'theme1';

interface ThemeState {
  value: Theme;
}

const initialState: ThemeState = {
  value: initialTheme,
};

const themeSlice = createSlice({
    name: "Theme",
    initialState: initialState,
    reducers: {
        setTheme: (state, action) => {
            state.value = action.payload;
            localStorage.setItem("theme", action.payload);
            document.documentElement.className = action.payload;
        }
    }
});


export const {setTheme} = themeSlice.actions;
export default themeSlice.reducer;