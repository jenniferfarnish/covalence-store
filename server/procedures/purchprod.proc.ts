import { row } from '../config/db';

export function create(id: number, price: number, stripetransactionid: string) {
    return row('NewPurchase', [id, price, stripetransactionid]);
}