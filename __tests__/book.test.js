
process.env.NODE_ENV = "test";

const Book = require("../models/book")
const db = require("../db")

describe("Test Book Class", () => {
    beforeEach(async () => {
    await db.query('delete from books') 
    let b = await Book.create(
        {
            isbn: "9780060850524",
            amazon_url: "https://www.amazon.com/Brave-New-World-Aldous-Huxley/dp/0060850523",
            author: "Mainstreet Markus",
            language: "English",
            pages: 222,
            publisher: "Harper Perennial Modern Classics",
            title: "Crushed On the Rocks Below",
            year: 1932
        }
    )
    console.log(b);
    });

    test("can create book", async () => {
    let b = await Book.create(
        {
            isbn: "9780077770524",
            amazon_url: "https://www.amazon.com/Brave-New-World-Aldous-Fuxley/dp/0060850523",
            author: "Gristopher",
            language: "English",
            pages: 123,
            publisher: "Harper Perennial Modern Classics",
            title: "I Tried To Be a JaRasta",
            year: 1987
        })
    expect(b.author).toBe("Gristopher");
    expect(b.pages).toEqual(123);
    expect(b.publisher).not.toBe(undefined);

    });
});
       
afterAll(async function() {
    await db.end();
  });
  