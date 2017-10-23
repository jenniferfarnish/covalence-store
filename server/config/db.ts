import * as mysql from 'mysql';

export let pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DATABASE_URL,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
});

function callProcedure(procedureName: string, args: Array<any> = []): Promise<Array<Array<any>>> {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err);
            } else {
                let placeholders = '';
                if (args && args.length > 0) {
                    for (let i = 0; i < args.length; i++) {
                        if (i === args.length - 1) {
                            placeholders += '?';
                        } else {
                            placeholders += '?,';
                        }
                    }
                }
                let callString = 'CALL ' + procedureName + '(' + placeholders + ');';
                connection.query(callString, args, (err, resultsets) => {
                    connection.release();
                    if (err) {
                        reject(err);
                    } else {
                        resolve(resultsets);
                    }
                });
            }
        });
    });
}

export function rows(procedureName: string, args: Array<any> = []) {
    return callProcedure(procedureName, args)
        .then((resultsets) => {
            return resultsets[0];
        });
}

export function row(procedureName: string, args: Array<any> = []) {
    return callProcedure(procedureName, args)
        .then((resultsets) => {
            return resultsets[0][0];
        });
}

export function empty(procedureName: string, args: Array<any> = []) {
    return callProcedure(procedureName, args)
        .then(() => {
            return;
        });
}