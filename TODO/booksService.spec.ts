import {Injector, provide} from 'angular2/core';
import {inject, AsyncTestCompleter, describe, beforeEach, it} from 'angular2/testing_internal';

import {BooksService} from './booksService';
import {Book, Comment} from '../beans/book';

import {
	Http, XHRBackend, Response,
	ResponseOptions, BaseRequestOptions, ConnectionBackend} from 'angular2/http';

import {MockBackend, MockConnection} from 'angular2/src/http/backends/mock_backend';


export function main() {

	describe('BookService', () => {

		let asyncCompleter: AsyncTestCompleter;
		let parentInjector: Injector;
		let bookService: BooksService;
		let backend: MockBackend;
		let book: Book;
		let booksResponse: Response;


		beforeEach(() => {

			parentInjector = Injector.resolveAndCreate([
				BaseRequestOptions,
				MockBackend,
				ConnectionBackend,
				provide(
					Http,
					{
						useFactory: function(backend: ConnectionBackend, defaultOptions: BaseRequestOptions) {
							return new Http(backend, defaultOptions);
						},
						deps: [MockBackend, BaseRequestOptions]
					}),
				BooksService
			]);

			bookService = parentInjector.get(BooksService);
			backend = parentInjector.get(MockBackend);
			book = {
				"id": 1,
				"name": "AngularJS",
				"author": "Brad Green, Shyam Seshadri",
				"price": 15.34,
				"description": "Description...",
				"category": "book",
				"isNew": false,
				"comments": [
					{
						"rate": 2,
						"user": "Laurent Wroblewski",
						"comment": "Test comment"
					},
					{
						"rate": 4,
						"user": "Pierre Marot",
						"comment": "my comment..."
					}
				]
			};

			booksResponse = new Response(new ResponseOptions({ body: JSON.stringify([book]) }));
			backend.connections.subscribe((c: MockConnection) => {
				c.mockRespond(booksResponse);
				console.log('> mocking response');
				console.log(asyncCompleter);
				asyncCompleter.done();
			});

		});

		afterEach(() => {
			backend.verifyNoPendingRequests();
		});


		it('getBooks', inject([AsyncTestCompleter], (async: AsyncTestCompleter) => {
			asyncCompleter = async;
			bookService.getBooks()
				.subscribe((currentBook: Book) => {
					console.log('> getBooks -> subscribe');
					expect(currentBook).toEqual(book);
				});

		}));



	});

}