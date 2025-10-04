import { IPrebuiltProject } from '@/types/prebuiltProjects';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface IInitialState {
  prebuiltProjects: IPrebuiltProject[];
  city: string;
  shippingAddress: string;
  name: string;
  email: string;
}

const initialState: IInitialState = {
  name: '',
  email: '',
  shippingAddress: '',
  prebuiltProjects: [],
  city: '',
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addPrebuiltProjects: (state, { payload }) => {
      state.prebuiltProjects.push(payload);
      return;
    },

    removePrebuiltProjects: (state, { payload }) => {
      const isPrebuiltProjectExists = state.prebuiltProjects.find(
        (project) => project._id === payload._id
      );

      if (isPrebuiltProjectExists) {
        state.prebuiltProjects = state.prebuiltProjects.filter(
          (project) => project._id !== payload._id
        );
      }

      return;
    },
  },
});

export const subTotalPrebuiltProjectsSelector = (state: RootState) =>
  state.cart.prebuiltProjects.reduce((acc, project) => {
    return acc + Number(project.price);
  }, 0);

export const citySelector = (state: RootState) => {
  return state.cart.city;
};

export const shippingAddressSelector = (state: RootState) => {
  return state.cart.shippingAddress;
};

export const userNameAndEmailSelector = (state: RootState) => {
  return {
    name: state.cart.name,
    email: state.cart.email,
  };
};

export const selectCartPrebuiltProjects = (state: RootState) =>
  state.cart.prebuiltProjects;

export default cartSlice.reducer;

export const { addPrebuiltProjects, removePrebuiltProjects } =
  cartSlice.actions;
