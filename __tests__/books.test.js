process.env.NODE_ENV = "test";
const request = require("supertest");

const app = require("../app");
const Book = require("../models/book");
const db = require("../db");

describe("Book Routes Test", function () {
  beforeEach(async function () {
    await db.query("DELETE from books");
    let b1 = await Book.create({
      isbn: "9780060850524",
      amazon_url:
        "https://www.amazon.com/Brave-New-World-Aldous-Huxley/dp/0060850523",
      author: "Aldous Huxley",
      language: "English",
      pages: 288,
      publisher: "Harper Perennial Modern Classics",
      title: "Brave New World",
      year: 1932,
    });
  });

  describe("GET request", function () {
    test("can get all books", async function () {
      let response = await request(app).get("/books");
      expect(response.status).toEqual(200);
      expect(response.body.books).toEqual(
        expect.arrayContaining([
          {
            isbn: "9780060850524",
            amazon_url:
              "https://www.amazon.com/Brave-New-World-Aldous-Huxley/dp/0060850523",
            author: "Aldous Huxley",
            language: "English",
            pages: 288,
            publisher: "Harper Perennial Modern Classics",
            title: "Brave New World",
            year: 1932,
          },
        ])
      );
    });
  });

  describe("POST request", () => {
    test("displays error on incorrect schema", async () => {
      let response = await request(app)
      .post("/books")
      .send({
        isbn: "9780060850524",
        amazon_url: "https://www.amazon.com/Brave-New-World-Aldous-Huxley/dp/0060850523",
        author: 1111,
        language: "English",
        pages: "hello there",
        publisher: "Harper Perennial Modern Classics",
        title: "Brave New World",
        year: 1932
      })
      expect(response.body.error.message.length).toEqual(2);
    })
  })

  describe("PUT request", () => {
    test("allows PUT request", async () => {
      let response = await request(app)
      .put("/books/9780060850524")
      .send({
        isbn: "9780060850524",
        amazon_url: "https://www.amazon.com/Brave-New-World-Aldous-Huxley/dp/0060850523",
        author: "Candy",
        language: "English",
        pages: 333,
        publisher: "Harper Perennial Modern Classics",
        title: "Brave New World",
        year: 1932
      })
      expect(response.body.book).toHaveProperty('author', "Candy");
    })
  })

});

afterAll(async function () {
  await db.end();
});
