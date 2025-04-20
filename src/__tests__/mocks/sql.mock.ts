// language=sql
export const sqlSelect = `
SELECT id, name FROM users WHERE active = true;
`;

// language=sql
export const sqlInsert = `
INSERT INTO posts (title, content, author_id)
VALUES ('Hello', 'Post body', 1);
`;

// language=sql
export const sqlUpdate = `
UPDATE users SET name = 'Max' WHERE id = 42;
`;

// language=sql
export const sqlDelete = `
DELETE FROM sessions WHERE created_at < NOW() - INTERVAL '7 days';
`;

// language=sql
export const sqlJoin = `
SELECT u.name, p.title
FROM users u
JOIN posts p ON u.id = p.author_id;
`;

// language=sql
export const sqlCreateTable = `
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  price NUMERIC(10, 2) NOT NULL
);
`;

// language=sql
export const sqlAlter = `
ALTER TABLE users ADD COLUMN last_login TIMESTAMP;
`;

// language=sql
export const sqlIndex = `
CREATE INDEX idx_user_email ON users(email);
`;

// language=sql
export const sqlTransaction = `
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;
`;

// language=sql
export const sqlCase = `
SELECT id,
  CASE WHEN active THEN 'Yes' ELSE 'No' END as status
FROM users;
`;
