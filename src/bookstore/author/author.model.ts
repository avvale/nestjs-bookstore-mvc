import { Column, Model, Table, HasMany } from 'sequelize-typescript';
import { Book } from '../book/book.model';
import { DataTypes } from 'sequelize';

@Table({ modelName: 'author', freezeTableName: true, updatedAt: 'updated_at', createdAt: 'created_at' })
export class Author extends Model<Author>
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

    @HasMany(() => Book)
    books: Book[];
}
