import { createContext, useContext } from "react";
import cart from "./Carts";
import counter from "./Counter";
import comment from './Comments'
class RootStore {
    cart = cart
    counter = counter
    comment= comment
}
const store = new RootStore();

const context = createContext(store)
export function useStore() {
    return useContext(context)
}