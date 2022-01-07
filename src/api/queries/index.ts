import { Api } from '@api';
import { IOrder, IShipment, IBook, IShipmentItem } from '@core';


export const queries = {
    book: {
        getBooks: {
            queryName: 'getBooks',
            queryFn: (url: string) => Api.get<IBook[]>(url).then((res) => res.data)
        },
    },
    shipment: {
        getShipments: {
            queryName: 'getShipments',
            queryFn: (url: string) => Api.get<IShipment[]>(url).then((res) => res.data)
        },
    },
    order: {
        getOrders: {
            queryName: 'getOrders',
            queryFn: (url: string) => Api.get<IOrder[]>(url).then((res) => res.data)
        },
        mark_as_delivered: {
            queryName: "markAsDelivered",
            queryFn: (url: string) => Api.get<boolean>(url).then(res => res.data)
        }
    },
    shipmentItem: {
        getShipmentItems: {
            queryName: 'getShipmentItems',
            queryFn: (url: string) => Api.get<IShipmentItem[]>(url).then((res) => res.data)
        },
    }
}