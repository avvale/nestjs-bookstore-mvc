import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { v4 as uuidv4 } from 'uuid';
import { Book } from './book.model';
import { Author } from './../author/author.model';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BookService 
{
    constructor(
        @InjectModel(Book)
        private readonly bookModel: typeof Book
    ) { }

    create(createBookDto: CreateBookDto): Promise<Book> 
    {
        const book      = new Book();
        book.id         = uuidv4();
        book.authorId   = createBookDto.authorId;
        book.name       = createBookDto.name;

        return book.save();
    }

    async findAll(): Promise<Book[]> 
    {    
        return this.bookModel.findAll({
            include: [Author]
        });
    }

    findOne(id: string): Promise<Book> 
    {
        return this.bookModel.findOne({
            where: {
                id
            },
            include: [Author]
        });
    }

    async remove(id: string): Promise<void> 
    {
        const user = await this.findOne(id);
        await user.destroy();
    }
}
