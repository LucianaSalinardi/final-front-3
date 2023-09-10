import { createContext, useReducer, useMemo } from "react";

export const ContextGlobal = createContext();

export const initialState = {
  theme: false,
  data: [],
  dentist: {},
};

export const contextReducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTS":
      return {
        ...state,
        data: action.payload,
      };
    case "GET_DENTIST_BY_ID":
      return {
        ...state,
        dentist: action.payload,
      };
    case "CHANGE_THEME":
      return {
        ...state,
        theme: !state.theme,
      };
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(contextReducer, initialState);

  const handleDentists = (data) => {
    dispatch({ type: "GET_DENTISTS", payload: data });
  };

  const handleDentistById = (data) => {
    dispatch({ type: "GET_DENTIST_BY_ID", payload: data });
  };

  const handleTheme = () => {
    dispatch({ type: "CHANGE_THEME" });
  };

  const getDentists = useMemo(() => {
    return () => {
      return fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          if (!res.ok) {
            throw new Error("Error al obtener listado de dentistas");
          }
          return res.json();
        })
        .catch((error) => {
          throw new Error(error);
        });
    };
  }, []);

  const getDentistById = useMemo(() => {
    return (id) => {
      return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error(
              "No fue posible traer la informacion detallada de los dentistas"
            );
          }
          return res.json();
        })
        .catch((error) => {
          throw new Error(error);
        });
    };
  }, []);

  return (
    <ContextGlobal.Provider
      value={{
        getDentists,
        getDentistById,
        handleDentists,
        handleDentistById,
        handleTheme,
        state,
      }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};
