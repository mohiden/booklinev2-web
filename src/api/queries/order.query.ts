import { Api } from "@api"
import { IOrder } from "@core"

export const getOrders = {
    queryName: 'getOrders',
    queryFn: (url: string) => Api.get<IOrder[]>(url).then((res) => res.data)
}