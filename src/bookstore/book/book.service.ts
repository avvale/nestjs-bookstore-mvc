import { Injectable } from '@nestjs/common';
import { Book } from './book.model';
import { CreateBookDto } from './dto/create-book.dto';
import { IBookRepository } from './book.repository';

@Injectable()
export class BookService 
{
    constructor(
        private readonly bookRepository: IBookRepository
    ) { }

    async create(createBookDto: CreateBookDto): Promise<Book> 
    {
        return this.bookRepository.create(createBookDto);
    }

    async findAll(): Promise<Book[]> 
    {    
        return this.bookRepository.findAll();
    }

    async findOne(id: string): Promise<Book> 
    {
        return this.bookRepository.findOne(id);
    }

    async remove(id: string): Promise<void> 
    {
        return this.bookRepository.remove(id);
    }
}
