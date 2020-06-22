import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { v4 as uuidv4 } from 'uuid';
import { Reader } from './reader.model';
import { CreateReaderDto } from './dto/create-reader.dto';
import { Book } from '../book/book.model';

@Injectable()
export class ReaderService 
{
    constructor(
        @InjectModel(Reader)
        private readonly readerModel: typeof Reader
    ) { }

    async create(createReaderDto: CreateReaderDto): Promise<Reader> 
    {
        createReaderDto.id  = uuidv4();
        const reader        = await this.readerModel.create(createReaderDto);   
        
        // add many to many relation
        reader.$add('books', createReaderDto.booksId);

        return reader;
    }

    async findAll(): Promise<Reader[]> 
    {    
        return this.readerModel.findAll({
            include: [Book]
        });
    }

    findOne(id: string): Promise<Reader> 
    {
        return this.readerModel.findOne({
            where: {
                id
            },
            include: [Book]
        });
    }

    async remove(id: string): Promise<void> 
    {
        const reader = await this.findOne(id);
        await reader.destroy();
    }
}
