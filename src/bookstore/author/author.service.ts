import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { v4 as uuidv4 } from 'uuid';
import { Author } from './author.model';
import { Book } from '../book/book.model';
import { CreateAuthorDto } from './dto/create-author.dto';

@Injectable()
export class AuthorService 
{
    constructor(
        @InjectModel(Author)
        private readonly authorModel: typeof Author
    ) { }

    async create(createAuthorDto: CreateAuthorDto): Promise<Author> 
    {
        const author      = new Author();
        author.id         = uuidv4();
        author.name       = createAuthorDto.name;

        return author.save();
    }

    async findAll(): Promise<Author[]> 
    {    
        return this.authorModel.findAll({
            include: [Book]
        });
    }

    async findOne(id: string): Promise<Author> 
    {
        return this.authorModel.findOne({
            where: {
                id
            },
            include: [Book]
        });
    }

    async remove(id: string): Promise<void> 
    {
        const user = await this.findOne(id);
        await user.destroy();
    }
}
