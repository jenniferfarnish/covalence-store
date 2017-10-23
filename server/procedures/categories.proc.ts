import { row, rows } from '../config/db';

export function all() {
    return rows('GetCategories');
}

export function read(id: number) {
    return row('GetCategory', [id]);
}