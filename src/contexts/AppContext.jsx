import React, { createContext, useContext, useReducer } from "react";

const MUDAR_TEMA = "MUDAR_TEMA";
const SET_TOKEN = "SET_TOKEN";

function appReducer(state, action) {
  const novoTema = state.tema === "light" ? "dark" : "light";
  switch (action.type) {
    case MUDAR_TEMA:
      localStorage.setItem("tema", novoTema);
      return { ...state, tema: novoTema };
    case SET_TOKEN:
      localStorage.setItem("token", action.token);
      return { ...state, token: action.token };
    default:
      return state;
  }
}

const initialState = {
  tema: localStorage.getItem("tema") || "light",
  token: localStorage.getItem("token"),
};

const AppContext = createContext();

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
