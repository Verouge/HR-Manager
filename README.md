# HR Manager

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![NPM-Package:](https://img.shields.io/badge/NPM_Package-MySQL2@3.6.0-blue.svg)](https://www.npmjs.com/package/mysql2)
[![NPM-Package: Inquirer@8.2.4](https://img.shields.io/badge/NPM_Package-Inquirer@8.2.4-lightgreen.svg)](https://www.npmjs.com/package/inquirer)

## Description

This command-line application is designed for business owners seeking a streamlined and efficient way to manage the core structures of their company. At its heart, the application facilitates the organization and planning of a business by allowing users to view and manipulate departments, roles, and employees. Upon launching the application, users are greeted with a menu of options. They can peruse comprehensive tables that display department names, roles complete with associated salaries and departmental affiliations, and detailed employee data, showcasing everything from basic identification details to roles, salaries, and immediate supervisors. Adding new departments, roles, or employees is made straightforward with intuitive prompts that guide the user through the necessary data input. Additionally, existing employee data can be seamlessly updated, especially when it comes to adjusting roles. With this tool, business owners can ensure that their company's organizational information is both accessible and current, enabling them to make informed decisions for the future of their business.

## Table of Contents

- [Getting Started](#getting-started)
  - [Cloning the Repository](#cloning-the-repository)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)
- [Acknowledgements](#acknowledgements)
- [Questions](#questions)

## Getting Started

### Cloning the Repository

To clone the repository, navigate to the directory you want to clone the repository into.

Then, run the following command.

```bash
git clone 'git@github.com:Verouge/HR-Manager.git'
```

## Usage

1. Database Setup: Before diving into the application, you need to initialize your local database.

   - Ensure you have MySQL installed on your system.
   - Open your terminal or MySQL command-line tool.
   - Run the command:

     ```bash
     mysql -u [username] -p (replace [username] with your MySQL username)
     ```

   - enter your password when prompted.

   - Create a new database by running:

     ```bash
     CREATE DATABASE HR_db;
     ```

   - Select the database you've just created:

     ```bash
     USE HR_db;
     ```

2. Initializing the Schema and Seeds:

   - With the database selected, navigate to the directory containing the schema.sql and seeds.sql files in your terminal.
   - Initialize your database structure by entering: source schema.sql.
   - To populate the database with sample data, run: source seeds.sql.

3. Launching the Application:

   - After initializing your database, navigate to the root directory of the project in your terminal.
   - Run the command: node index.js to start the application.
   - You'll be presented with a main menu of actions to select from.

4. Navigating Options:

   - Using the arrow keys, choose from options like viewing all departments, roles, or employees, or adding and updating entries.
   - Select your desired action and hit Enter.

5. Adding Entities:

   - When adding a department, role, or employee, you'll be prompted with specific questions to guide the input process.
   - Fill in the necessary details as requested and confirm to add the entity to the database.

6. Viewing Entities:

   - If you choose to view departments, roles, or employees, the application will fetch and neatly display the relevant information in a table format in the terminal.

7. Updating Employee Roles:

   - When opting to update an employee's role, you'll first be prompted to select an employee.
   - Then, you'll be asked to choose the new role for the selected employee.
   - Confirm your changes to update the database.

8. Exiting the Application:

   - To end your session and exit the application, select the Exit option from the main menu or simply close your terminal.

![](/assets/demo.gif)

## Contributing

Please contact me to add your contributions

## License

This project is licensed under the MIT license.

```
Copyright <2023> <Brandon Zhang>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```

## Credits

## Acknowledgements

## Technologies and Tools Used

This project leverages a range of technologies and tools to deliver a streamlined HR management experience:

- **MySQL**: A reliable and efficient relational database system that forms the backbone of our data storage solution. [Official website](https://www.mysql.com/)

- **Inquirer**: A command line user interface toolkit for Node.js, facilitating interactive prompts and user inputs for our application. [View on npm](https://www.npmjs.com/package/inquirer)

- **Node.js**: The runtime environment that allows us to execute server-side JavaScript code, making dynamic data operations possible.

- **MySQL2**: A MySQL driver for Node.js, providing asynchronous (non-blocking) operations for enhanced performance. [View on npm](https://www.npmjs.com/package/mysql2)

## Questions

If you have any questions, please feel free to contact me via email or on GitHub.

Email: branola1998628@gmail.com

GitHub: [verouge](https://github.com/verouge)
