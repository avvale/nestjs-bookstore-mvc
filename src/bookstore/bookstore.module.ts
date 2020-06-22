import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

// models
import { Reader } from './reader/reader.model';
import { Author } from './author/author.model';
import { Book } from './book/book.model';
import { ReadersBooks } from './reader/readers-books.model';

// services
import { AuthorService } from './author/author.service';
import { BookService } from './book/book.service';
import { ReaderService } from './reader/reader.service';

// controllers
import { AuthorController } from './author/author.controller';
import { BookController } from './book/book.controller';
import { ReaderController } from './reader/reader.controller';

@Module({
    imports: [
        SequelizeModule.forFeature([
            Author, 
            Book,
            Reader,
            ReadersBooks
        ])
    ],
    providers: [
        AuthorService, 
        BookService,
        ReaderService
    ],
    controllers: [
        AuthorController,
        BookController,
        ReaderController
    ],
})
export class BookstoreModule { }
