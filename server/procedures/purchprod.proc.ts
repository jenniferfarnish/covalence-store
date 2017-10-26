import { row } from '../config/db';

export function create(price: number, stripetransactionid: string) {
    return row('NewPurchase', [price, stripetransactionid]);
}