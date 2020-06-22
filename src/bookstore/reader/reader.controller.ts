import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateReaderDto } from './dto/create-reader.dto';
import { Reader } from './reader.model';
import { ReaderService } from './reader.service';

@Controller('reader')
export class ReaderController 
{
    constructor(private readonly readerService: ReaderService) { }

    @Post()
    create(@Body() createReaderDto: CreateReaderDto): Promise<Reader> 
    {
        return this.readerService.create(createReaderDto);
    }

    @Get()
    findAll(): Promise<Reader[]> 
    {
        return this.readerService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<Reader> 
    {
        return this.readerService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> 
    {
        return this.readerService.remove(id);
    }
}
