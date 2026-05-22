import * as SQLite from 'expo-sqlite';
import * as FileSystem from 'expo-file-system/legacy';

let db: SQLite.SQLiteDatabase | undefined;
export async function getDb(): Promise<SQLite.SQLiteDatabase> {
    try {
        if (!db) {
            db = SQLite.openDatabaseSync('app.db');
            await db.execAsync("PRAGMA foreign_keys = ON");
        }
        return db;
    } catch (error) {
        console.log(error);
        throw new Error("Erro getDb");
    }
}

export async function resetDatabase() {
    try {
        const db = await getDb();
        await db.closeAsync();
        await SQLite.deleteDatabaseAsync('app.db');
        console.log('🗑️ Banco deletado');

    } catch (error) {
        console.log(error);
    }
}

export async function initDB():Promise<void>{
    try {
        await getDb();
        if(db)
        db.execSync(`
            CREATE TABLE IF NOT EXISTS categorias(
            Id INTEGER PRIMARY KEY AUTOINCREMENT,
            Nome TEXT NOT NULL
            );
            
            CREATE TABLE IF NOT EXISTS produtos(
            Id INTEGER PRIMARY KEY AUTOINCREMENT,
            CategoriaId INTEGER,
            Nome TEXT NOT NULL,
            Valor REAL,
            DataCad TEXT DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (CategoriaId) REFERENCES categorias(Id));
            `
        );
        console.log('✅ Banco de dados inicializado');
        

        // ON DELETE CASCADE ou ON DELETE RESTRICT -> caso queira deletar em cascata a foreign key

    } catch (error) {

    }
}