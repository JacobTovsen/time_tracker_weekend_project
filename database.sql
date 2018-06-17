CREATE TABLE project (
	id SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL
);

CREATE TABLE entry (
	id SERIAL PRIMARY KEY,
	entry VARCHAR(100) NOT NULL,
	project VARCHAR(100) NOT NULL,
	date DATE NOT NULL,
	hours INT NOT NULL
);

INSERT INTO project ("name")
VALUES ('Weekend Project');

INSERT INTO entry ("entry", "project", "date", "hours")
VALUES ('Worked on SQL entries', 'Weekend Project', '2018-06-14', 2);

SELECT project.name, SUM(entry.hours), project.id
    FROM project
    LEFT JOIN entry ON project.name = entry.project
    GROUP BY project.name, project.id;






-- everything below this is tinkering data:

-- CREATE TABLE project (
-- 	id SERIAL PRIMARY KEY,
-- 	name VARCHAR(100) NOT NULL
-- );

-- CREATE TABLE entry (
-- 	id SERIAL PRIMARY KEY,
-- 	entry VARCHAR(100) NOT NULL,
-- 	project VARCHAR(100) NOT NULL,
-- 	date DATE NOT NULL,
-- 	hours NUMERIC(10,2) NOT NULL
-- );

-- SELECT project.name, SUM(entry.hours), project.id
-- FROM project
-- LEFT JOIN entry ON project.name = entry.project
-- GROUP BY project.name, project.id;


-- INSERT INTO project ("name")
-- VALUES ('Cleaning House'),('Sillytime Project');

-- INSERT INTO project ("name")
-- VALUES ('Working on the car'),('Honey-do list');

-- INSERT INTO entry ("entry", "project", "date", "hours")
-- VALUES ('Worked on SQL entries', 'Weekend Project', '2018-06-14', 2);

-- DELETE FROM entry WHERE id=1;

-- SELECT * FROM entry;

-- SELECT project.name, entry.project, entry.hours
-- FROM project
-- INNER JOIN entry ON project.name = entry.project;


-- SELECT project.name, SUM(entry.hours), project.id
-- FROM project
-- LEFT JOIN entry ON project.name = entry.project
-- GROUP BY project.name, project.id;

-- SELECT entry.entry, project.id, entry.project FROM project
-- INNER JOIN entry ON project.name = entry.project;

-- CREATE TABLE entry (
-- 	id SERIAL PRIMARY KEY,
-- 	entry VARCHAR(100) NOT NULL,
-- 	project VARCHAR(100) NOT NULL,
-- 	date DATE NOT NULL,
-- 	hours NUMERIC(10,2) NOT NULL
-- );
