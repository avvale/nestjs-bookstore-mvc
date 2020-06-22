import { Column, Model, Table, ForeignKey, BelongsTo, BelongsToMany } from 'sequelize-typescript';
import { Author } from '../author/author.model';
import { Reader } from '../reader/reader.model';
import { ReadersBooks } from '../reader/readers-books.model';
import { DataTypes } from 'sequelize';

@Table({ modelName: 'book', freezeTableName: true, updatedAt: 'updated_at', createdAt: 'created_at' })
export class Book extends Model<Book>
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

    @ForeignKey(() => Author)
    @Column({ 
        field: 'author_id',
        allowNull: false,
        type: DataTypes.UUID, 
    })
    authorId: string;

    @BelongsTo(() => Author)
    author: Author;

    @BelongsToMany(() => Book, () => ReadersBooks)
    readers: Reader[];
}
