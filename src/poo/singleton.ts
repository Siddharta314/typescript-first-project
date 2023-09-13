class Database {
  private _data: string[] = ["xxxxx", "yyyyy"];
  static instance: Database | null = null;

  constructor(private name: string) {}

  get data(): string[] {
    return this._data;
  }

  static createInstance(name: string): Database {
    if ( !Database.instance )
      Database.instance = new Database(name);
    return Database.instance;
  }
}

const db1 = Database.createInstance('db1');
const db2 = Database.createInstance('db2');

console.log({db1})
console.log({db2})
console.log( db1 === db2)

// { db1: Database { name: 'db1', _data: [ 'xxxxx', 'yyyyy' ] } }
// { db2: Database { name: 'db1', _data: [ 'xxxxx', 'yyyyy' ] } }
// true
