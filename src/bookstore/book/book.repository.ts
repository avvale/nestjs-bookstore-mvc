import { Book } from './book.model';
import { CreateBookDto } from './dto/create-book.dto';

export abstract class IBookRepository
{
    abstract async create(createBookDto: CreateBookDto): Promise<Book>; 
    
    abstract async findAll(): Promise<Book[]>;

    abstract async findOne(id: string): Promise<Book>;

    abstract async remove(id: string): Promise<void>;
}
