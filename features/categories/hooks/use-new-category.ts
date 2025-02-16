import { create } from "zustand";

type NewCategoryState = {
    onOpen: () => void;
    onClose: () => void;
};

export const useNewCategory = create<NewCategoryState>((set) => ({
    isOpen:false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}));