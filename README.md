# Task-Management

A feature-rich and user-friendly Task-Management Application built using **Spring Boot**, designed to simplify task management. This application allows users to efficiently organize their daily activities by adding, updating, and deleting tasks with a clear and interactive interface.

---

## Features

- **Task Management**: Add, update, delete, and view tasks effortlessly.
- **Prioritization**: Set priorities for tasks to manage them effectively.
- **Interactive UI**: Intuitive interface for seamless user experience.
- **Persistence**: Tasks are stored in a database for consistent access.
- **RESTful API**: Clean and robust API endpoints for CRUD operations.

---

## Tech Stack

- **Backend**: Spring Boot, Spring MVC, Spring Data JPA
- **Database**: H2 (In-memory) / MySQL (configurable for production)
- **Frontend**: HTML, CSS, JavaScript
- **Build Tool**: Maven

---

## Getting Started

### Prerequisites

- Java 11 or later
- Maven 3.6+
- MySQL (optional for production setup)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/todo-list-application.git
   cd todo-list-application
   ```

2. Build the application:
   ```bash
   mvn clean install
   ```

3. Run the application:
   ```bash
   mvn spring-boot:run
   ```

4. Access the application at:
   ```
   http://localhost:8080
   ```

---

## API Endpoints

| HTTP Method | Endpoint           | Description               |
|-------------|--------------------|---------------------------|
| GET         | `/tasks`           | Get all tasks             |
| GET         | `/tasks/{id}`      | Get task by ID            |
| POST        | `/tasks`           | Create a new task         |
| PUT         | `/tasks/{id}`      | Update an existing task   |
| DELETE      | `/tasks/{id}`      | Delete a task by ID       |

---

## Database Configuration

The default configuration uses an **H2 in-memory database**. For production, you can configure MySQL:

1. Update `application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/todo_db
   spring.datasource.username=root
   spring.datasource.password=yourpassword
   spring.jpa.hibernate.ddl-auto=update
   ```

2. Ensure MySQL is running and a database named `todo_db` is created.

---

## Testing

Run unit and integration tests with:
```bash
mvn test
```

---

## Project Structure

```
src/
├── main/
│   ├── java/
│   │   └── com.example.todo/  # Application packages
│   ├── resources/
│       ├── static/            # Frontend files
│       ├── templates/         # Thymeleaf templates (if applicable)
│       ├── application.properties
│
├── test/
    └── java/                  # Test cases
```

## Author

[VidyasagarAlajangi](https://github.com/VidyasagarAlajangi)  
Feel free to reach out for any queries or suggestions!
