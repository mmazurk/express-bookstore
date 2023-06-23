/** Common config for bookstore. */


let DB_URI = `postgresql://`;
let DB_NAME = 'books'

if (process.env.NODE_ENV === "test") {
  DB_URI = `${DB_URI}/books-test`;
} else {
  DB_URI = process.env.DATABASE_URL || `${DB_URI}/books`;
}

if (process.env.NODE_ENV === "test") {
  DB_NAME = 'books-test';
}

module.exports = { DB_URI, DB_NAME };