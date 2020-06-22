import { Column, Model, Table, BelongsToMany } from 'sequelize-typescript';
import { Book } from '../book/book.model';
import { ReadersBooks } from './readers-books.model';
import { DataTypes } from 'sequelize';

@Table({ modelName: 'reader', freezeTableName: true, updatedAt: 'updated_at', createdAt: 'created_at' })
export class Reader extends Model<Reader>
{
    @Column({
        field: 'id',
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
    })
    id: string;
    
    @Column
    name: string;

    @BelongsToMany(() => Book, () => ReadersBooks)
    books: Book[];
}
