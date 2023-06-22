
DROP TABLE books; 

CREATE TABLE books (
  isbn TEXT PRIMARY KEY,
  amazon_url TEXT,
  author TEXT,
  language TEXT, 
  pages INTEGER,
  publisher TEXT,
  title TEXT, 
  year INTEGER
);

INSERT INTO books (isbn, amazon_url, author, language, pages, publisher, title, year)
VALUES
    ('9780446310789', 'https://www.amazon.com/To-Kill-Mockingbird-Harper-Lee/dp/0446310786', 'Harper Lee', 'English', 324, 'Grand Central Publishing', 'To Kill a Mockingbird', 1960),
    ('9780743273565', 'https://www.amazon.com/The-Great-Gatsby-F-Scott-Fitzgerald/dp/0743273567', 'F. Scott Fitzgerald', 'English', 180, 'Scribner', 'The Great Gatsby', 1925),
    ('9780061120084', 'https://www.amazon.com/1984-George-Orwell/dp/0061120081', 'George Orwell', 'English', 328, 'Houghton Mifflin Harcourt', '1984', 1949),
    ('9780141187761', 'https://www.amazon.com/Animal-Farm-George-Orwell/dp/014118776X', 'George Orwell', 'English', 144, 'Penguin Classics', 'Animal Farm', 1945),
    ('9780060850524', 'https://www.amazon.com/Brave-New-World-Aldous-Huxley/dp/0060850523', 'Aldous Huxley', 'English', 288, 'Harper Perennial Modern Classics', 'Brave New World', 1932);
