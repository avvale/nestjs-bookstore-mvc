import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

// models
import { Reader } from './reader/reader.model';
import { Author } from './author/author.model';
import { Book } from './book/book.model';
import { BooksReaders } from './book/books-readers.model';

// services
import { AuthorService } from './author/author.service';
import { BookService } from './book/book.service';
import { ReaderService } from './reader/reader.service';

// controllers
import { AuthorController } from './author/author.controller';
import { BookController } from './book/book.controller';
import { ReaderController } from './reader/reader.controller';

// implementations
import { IBookRepository } from './book/book.repository';
import { SequelizeBookRepository } from './book/sequelize-book.repository';

@Module({
    imports: [
        SequelizeModule.forFeature([
            Author, 
            Book,
            Reader,
            BooksReaders
        ])
    ],
    providers: [
        AuthorService, 
        BookService,
        ReaderService,
        {
            provide: IBookRepository,
            useClass: SequelizeBookRepository
        }
    ],
    controllers: [
        AuthorController,
        BookController,
        ReaderController
    ],
})
export class BookstoreModule { }
