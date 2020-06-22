import { Column, Model, Table, ForeignKey } from 'sequelize-typescript';
import { Reader } from './reader.model';
import { Book } from '../book/book.model';
import { DataTypes } from 'sequelize';

@Table({ modelName: 'readers_books', freezeTableName: true, updatedAt: 'updated_at', createdAt: 'created_at' })
export class ReadersBooks extends Model<Reader> 
{
    @ForeignKey(() => Reader)
    @Column({
        field: 'reader_id',
        allowNull: false,
        type: DataTypes.UUID,
    })
    readerId: string;
  
    @ForeignKey(() => Book)
    @Column({
        field: 'book_id',
        allowNull: false,
        type: DataTypes.UUID,
    })
    bookId: string;
}