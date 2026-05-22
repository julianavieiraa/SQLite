import { getDb } from '../database/database';
import { Categoria } from '../models/Categoria';
import * as SQLite from 'expo-sqlite';


export class CategoriaRepository {

    async create(categoria: Categoria): Promise<void> {
        try {
            const db = await getDb();
            db.runAsync(
                'INSERT INTO categorias (Nome) VALUES (?)', [categoria.Nome]
            );
        } catch (error) {
            console.error('Erro insert', error);
        }
    }
    async findAll(): Promise<Categoria[]> {
        try {
            const db = await getDb();
            const result = db.getAllAsync<Categoria>('SELECT * FROM categorias');
            return result;
        } catch (error) {
            console.error('Erro no select', error);

            throw new Error("Erro ao buscar categorias");
        }
    }
    async delete(id: number): Promise<SQLite.SQLiteRunResult> {
        try {
            const db = await getDb();
            const result = await db.runAsync(
                'DELETE FROM categorias WHERE Id =?', [id]
            );
            return result;

        } catch (error) {
            console.error('Erro delete', error);
            throw new Error("Erro ao deletar categoria");
        }
    }
    async update(categoria:Categoria): Promise<SQLite.SQLiteRunResult | undefined> {
        try {
            const db = await getDb();
            return await db.runAsync(
                'UPDATE categorias SET Nome = ? WHERE Id =?', [categoria.Nome, categoria.Id]
            );

        } catch (error) {
            console.error('Erro update', error);
            throw new Error("Erro ao atualizar categoria");
        }
    }
}