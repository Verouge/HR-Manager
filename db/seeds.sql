-- Insert sample departments
INSERT INTO department (name) VALUES 
('Sales'),
('Engineering'),
('Finance'),
('Human Resources');

-- Insert sample roles with salaries and associated departments
INSERT INTO role (title, salary, department_id) VALUES 
('Sales Executive', 60000, 1),
('Senior Sales Executive', 70000, 1),
('Sales Associate', 40000, 1),
('Software Engineer', 80000, 2),
('Senior Software Engineer', 90000, 2),
('Lead Software Engineer', 100000, 2),
('Junior Software Engineer', 55000, 2),
('Accountant', 50000, 3),
('Senior Accountant', 60000, 3),
('Junior Accountant', 45000, 3),
('HR Manager', 55000, 4),
('HR Associate', 45000, 4),
('HR Intern', 30000, 4);

-- Insert managers for each department
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
('John', 'Doe', 1, NULL),       -- Sales Manager
('Jane', 'Smith', 3, NULL),    -- Engineering Manager
('Emily', 'Jones', 6, NULL),   -- Finance Manager
('Michael', 'Johnson', 8, NULL); -- HR Manager

-- Insert other employees with their respective managers
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES 
('Alice', 'Williams', 2, 1),   -- Senior Sales Executive under John Doe
('Charlie', 'Brown', 3, 1),    -- Sales Associate under John Doe
('Eve', 'Black', 4, 2),        -- Software Engineer under Jane Smith
('Frank', 'White', 5, 2),      -- Senior Software Engineer under Jane Smith
('George', 'Mason', 7, 2),     -- Junior Software Engineer under Jane Smith
('Grace', 'Green', 9, 3),      -- Accountant under Emily Jones
('Hank', 'Blue', 10, 3),       -- Junior Accountant under Emily Jones
('Ivy', 'Red', 12, 4),         -- HR Associate under Michael Johnson
('Jack', 'Gray', 12, 4),       -- HR Associate under Michael Johnson
('Kelly', 'Yellow', 13, 4);    -- HR Intern under Michael Johnson