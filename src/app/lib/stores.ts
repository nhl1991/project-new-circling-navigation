import { create } from "zustand";

export interface Item {
      id: string,
      href: string,
      imgSrc: string,
}

interface State {
    rotation: number,
    item: Item|undefined,
}

interface Action {
    setRotation: (value: number) => void;
    setItem: (value: Item) => void;
}

export const useStore = create<State & Action>((set) => ({
    rotation: 0,
    item: undefined,
    setRotation: (value) => set(() => ({ rotation: value })),
    setItem: (value) => set(() => ({ item: value })),


}))