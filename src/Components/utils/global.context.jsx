import { createContext, useReducer, useMemo, useEffect } from "react";

export const ContextGlobal = createContext();

export const initialState = {
  theme: false,
  data: [],
  dentist: {},
};

export const initialStateFavs = {
  favs: JSON.parse(localStorage.getItem("favs")) || [],
};

export const favsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVS":
      return {
        ...state,
        favs: action.payload,
      };

    case "REMOVE_FROM_FAVS":
      return {
        ...state,
        favs: action.payload,
      };
    default:
      return state;
  }
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

  const [stateFavs, dispatchFavs] = useReducer(favsReducer, initialStateFavs);

  const handleAddFavs = (data) => {
    dispatchFavs({ type: "ADD_TO_FAVS", payload: data });
  };

  const handleRemoveFavs = (data) => {
    dispatchFavs({ type: "REMOVE_FROM_FAVS", payload: data });
  };

  const handleDentists = (data) => {
    dispatch({ type: "GET_DENTISTS", payload: data });
  };

  const handleDentistById = (data) => {
    dispatch({ type: "GET_DENTIST_BY_ID", payload: data });
  };

  const handleTheme = () => {
    dispatch({ type: "CHANGE_THEME" });
  };

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(stateFavs.favs));
  }, [stateFavs.favs]);

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
        stateFavs,
        handleAddFavs,
        handleRemoveFavs,
      }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};
