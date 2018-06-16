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