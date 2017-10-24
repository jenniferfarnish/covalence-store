import { rows } from '../config/db';

export function read(id: number) {
    return rows('GetCategory', []);
}