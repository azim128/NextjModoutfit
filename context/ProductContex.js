'use client'
import { useReducer, createContext, useContext } from "react";
import Pdata from "../app/data.json";

const initialState = {
  productdata: Pdata,
  selectCatagory: [],
  selectRange: [],
  filter: {
    name:"",
    category: "",
    range: "",
  },
};

export const ProductContext = createContext();

export const ADD_CATEGORY = "ADD_CATEGORY";
export const REMOVE_CATEGORY = "REMOVE_CATEGORY";
export const ADD_RANGE = "ADD_RANGE";
export const REMOVE_RANGE = "REMOVE_RANGE";
export const ADD_NAME_FILTER = 'ADD_NAME_FILTER';
export const REMOVE_NAME_FILTER = 'REMOVE_NAME_FILTER';
function filterReducer(state, action) {
    switch (action.type) {
      case ADD_CATEGORY:
        return {
          ...state,
          selectCatagory: [...state.selectCatagory, action.payload],
          filter: { ...state.filter, category: action.payload }
        };
      case REMOVE_CATEGORY:
        const updatedCatagories = state.selectCatagory.filter(
          (catg) => catg !== action.payload
        );
        return {
          ...state,
          selectCatagory: updatedCatagories,
          filter: {
            ...state.filter,
            category: updatedCatagories.length > 0 ? updatedCatagories[0] : ''
          }
        };
      case ADD_RANGE:
        return {
          ...state,
          selectRange: [...state.selectRange, action.payload],
          filter: { ...state.filter, range: action.payload }
        };
      case REMOVE_RANGE:
        const updatedRanges = state.selectRange.filter(
          (range) => range !== action.payload
        );
        return {
          ...state,
          selectRange: updatedRanges,
          filter: {
            ...state.filter,
            range: updatedRanges.length > 0 ? updatedRanges[0] : ''
          }
        };
        case ADD_NAME_FILTER:
          return {
            ...state,
            filter: { ...state.filter, name: action.payload },
          };
        case REMOVE_NAME_FILTER:
          return {
            ...state,
            filter: { ...state.filter, name: '' },
          };
      default:
        return state;
    }
  }

  export function ProductProvider({ children }) {
    const [state, dispatch] = useReducer(filterReducer, initialState);
  
    return (
      <ProductContext.Provider value={{ state, dispatch }}>
        {children}
      </ProductContext.Provider>
    );
  }

  // Custom hook to access the filter context
  export function useProductContext() {
    return useContext(ProductContext);
  }