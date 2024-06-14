-- Create the table if needed
CREATE TABLE IF NOT EXISTS "user" (
    "id" SERIAL PRIMARY KEY,
    "firstName" VARCHAR NOT NULL,
    "lastName" VARCHAR NOT NULL
);

-- Insert seed data
INSERT INTO "user" (first_name, last_name) VALUES
('Alice', 'Chang'),
('Andrea', 'Jao'),
('Ricky', 'Perex'),
('Jacob', 'Rashid'),
('Aubrey', 'Sherman'),
('Zach', 'Bunting');
('Anya', 'Aven');

-- Create the table if needed
CREATE TABLE IF NOT EXISTS "user_active" (
    "id" SERIAL PRIMARY KEY,
    "firstName" VARCHAR NOT NULL,
    "lastName" VARCHAR NOT NULL
);

-- Insert seed data
INSERT INTO "user" (first_name, last_name) VALUES
('Alice', 'Chang'),
('Andrea', 'Jao'),
('Ricky', 'Perex'),
('Jacob', 'Rashid'),
('Aubrey', 'Sherman'),
('Zach', 'Bunting');
('Anya', 'Aven');


-- Insert Questions
INSERT INTO "question" (title, text)
VALUES
  ('What is TypeORM?', 'Can someone explain what TypeORM is and how it is used?'),
  ('How to create a Many-to-Many relationship?', 'I need help understanding how to create a many-to-many relationship using TypeORM.'),
  ('Best practices for database migrations', 'What are some best practices for managing database migrations in a TypeScript project?'),
  ('How to seed data in TypeORM?', 'I am looking for examples of how to seed data in a TypeORM project.');

-- Insert Relations between Users and Questions
INSERT INTO "question_categories_user" ("questionId", "userId")
VALUES
  (1, 1), -- John Doe is interested in "What is TypeORM?"
  (2, 1), -- John Doe is interested in "How to create a Many-to-Many relationship?"
  (2, 2), -- Jane Smith is interested in "How to create a Many-to-Many relationship?"
  (3, 3), -- Alice Johnson is interested in "Best practices for database migrations"
  (4, 3), -- Alice Johnson is interested in "How to seed data in TypeORM?"
  (4, 4); -- Bob Brown is interested in "How to seed data in TypeORM?"