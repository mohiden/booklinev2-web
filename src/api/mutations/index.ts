import { Api } from "@api";
import { OrderInput } from "@lib";

export const mutations = {
    order: {
        createOrder: {
            mutationName: "",
            mutationFn: (input: OrderInput) => Api.post<OrderInput>("order", input).then(res => res.data)
        }
    }
}