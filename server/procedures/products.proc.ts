import { row, rows, empty } from '../config/db';

export function all() {
    return rows('GetProducts');
}

export function read(id: number) {
    return row('SelectProduct', [id]);
}