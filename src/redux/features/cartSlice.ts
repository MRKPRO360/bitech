import { IPrebuiltProject } from '@/types/prebuiltProjects';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { toast } from 'sonner';

interface IInitialState {
  prebuiltProjects: IPrebuiltProject[];
  city: string;
  name: string;
  email: string;
  services: string[];
}

const initialState: IInitialState = {
  name: '',
  email: '',
  city: '',
  prebuiltProjects: [],
  services: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addPrebuiltProjects: (
      state,
      { payload }: { payload: IPrebuiltProject }
    ) => {
      const isPrebuiltProjectExists = state.prebuiltProjects.find(
        (project) => project._id === payload._id
      );

      const addToast = toast.loading('Adding project to cart...');

      if (isPrebuiltProjectExists) {
        toast.error('Project already added!', { id: addToast });
      } else {
        toast.success('Project added to the cart :)', { id: addToast });
        state.prebuiltProjects.push(payload);
      }
      return;
    },

    removePrebuiltProjects: (
      state,
      { payload }: { payload: IPrebuiltProject }
    ) => {
      const removeToast = toast.loading('Removing project from cart..');
      const isPrebuiltProjectExists = state.prebuiltProjects.find(
        (project) => project._id === payload._id
      );

      if (isPrebuiltProjectExists) {
        state.prebuiltProjects = state.prebuiltProjects.filter(
          (project) => project._id !== payload._id
        );
        toast.success('Removed project from cart', { id: removeToast });
      } else {
        toast.error('Project is not found!', { id: removeToast });
        state.prebuiltProjects.push(payload);
      }
      return;
    },

    clearCart: (state) => {
      state.prebuiltProjects = [];
      state.services = [];
      return;
    },

    clearPrebuiltProject: (state) => {
      state.prebuiltProjects = [];
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

export const userNameAndEmailSelector = (state: RootState) => {
  return {
    name: state.cart.name,
    email: state.cart.email,
  };
};

export const orderedPrebuiltProjects = (state: RootState) =>
  state.cart.prebuiltProjects;

export const orderSelector = (state: RootState) => state.cart;

export const totalCartItemsSelector = (state: RootState) => {
  return state.cart.prebuiltProjects.length + state.cart.services.length;
};

export default cartSlice.reducer;

export const {
  addPrebuiltProjects,
  removePrebuiltProjects,
  clearPrebuiltProject,
  clearCart,
} = cartSlice.actions;
