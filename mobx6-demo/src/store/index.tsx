import { createContext, useContext } from "react";
import cart from "./Carts";
import counter from "./Counter";

class RootStore {
    cart = cart
    counter = counter
}
const store = new RootStore();

const context = createContext(store)
export function useStore() {
    return useContext(context)
}