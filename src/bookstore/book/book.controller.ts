import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { Book } from './book.model';
import { BookService } from './book.service';

@Controller('book')
export class BookController 
{
    constructor(private readonly bookService: BookService) { }

    @Post()
    create(@Body() createUserDto: CreateBookDto): Promise<Book> 
    {
        return this.bookService.create(createUserDto);
    }

    @Get()
    findAll(): Promise<Book[]> 
    {
        return this.bookService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Book> 
    {
        return this.bookService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> 
    {
        return this.bookService.remove(id);
    }
}
