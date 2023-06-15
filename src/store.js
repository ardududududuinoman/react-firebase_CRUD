import { create } from "zustand";

const useStore = create((set) => ({
  title: "",
  dis: "",
  settitle: (param) => {
    set((state) => ({ title: param }));
  },
  setdis: (params) => {
    set((state) => ({ dis: params }));
  },
  list: [],
  addlist: (params) => {
    set((state) => ({ list: params }));
  },
  oldTitle: "",
  setoldTitle: (params) => {
    set((state) => ({ oldTitle: params }));
  },
  oldDis: "",
  setoldDis: (params) => {
    set((state) => ({ oldDis: params }));
  },
  thisId: "",
  setthisId: (params) => {
    set((state) => ({ thisId: params }));
  },
}));

export default useStore;
