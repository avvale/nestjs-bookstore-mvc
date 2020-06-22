import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { Author } from './author.model';
import { AuthorService } from './author.service';

@Controller('author')
export class AuthorController 
{
    constructor(private readonly authorService: AuthorService) { }

    @Post()
    create(@Body() createUserDto: CreateAuthorDto): Promise<Author> 
    {
        return this.authorService.create(createUserDto);
    }

    @Get()
    findAll(): Promise<Author[]> 
    {
        return this.authorService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Author> 
    {
        return this.authorService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> 
    {
        return this.authorService.remove(id);
    }
}
