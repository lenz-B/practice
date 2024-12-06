Here are expanded collections to practice:

---

### **Collection 1: `students`**
```json
[
  { "_id": 1, "name": "Alice", "age": 23, "department": "Computer Science", "marks": 85, "enrolled": true },
  { "_id": 2, "name": "Bob", "age": 22, "department": "Mechanical Engineering", "marks": 78, "enrolled": true },
  { "_id": 3, "name": "Charlie", "age": 24, "department": "Computer Science", "marks": 92, "enrolled": true },
  { "_id": 4, "name": "Diana", "age": 21, "department": "Electrical Engineering", "marks": 74, "enrolled": false },
  { "_id": 5, "name": "Eve", "age": 22, "department": "Computer Science", "marks": 67, "enrolled": true },
  { "_id": 6, "name": "Frank", "age": 25, "department": "Civil Engineering", "marks": 88, "enrolled": false },
  { "_id": 7, "name": "Grace", "age": 23, "department": "Computer Science", "marks": 91, "enrolled": true },
  { "_id": 8, "name": "Hank", "age": 22, "department": "Mechanical Engineering", "marks": 69, "enrolled": true },
  { "_id": 9, "name": "Ivy", "age": 21, "department": "Electrical Engineering", "marks": 82, "enrolled": false },
  { "_id": 10, "name": "Jack", "age": 24, "department": "Civil Engineering", "marks": 76, "enrolled": true },
  { "_id": 11, "name": "Kate", "age": 22, "department": "Computer Science", "marks": 93, "enrolled": true },
  { "_id": 12, "name": "Leo", "age": 23, "department": "Mechanical Engineering", "marks": 84, "enrolled": true }
]
```

---

### **Collection 2: `courses`**
```json
[
  { "_id": "CS101", "title": "Data Structures", "department": "Computer Science", "instructor": "Dr. Smith", "credits": 3 },
  { "_id": "ME201", "title": "Thermodynamics", "department": "Mechanical Engineering", "instructor": "Dr. Taylor", "credits": 4 },
  { "_id": "CS102", "title": "Algorithms", "department": "Computer Science", "instructor": "Dr. Jones", "credits": 3 },
  { "_id": "EE101", "title": "Circuits", "department": "Electrical Engineering", "instructor": "Dr. Brown", "credits": 4 },
  { "_id": "CS103", "title": "Operating Systems", "department": "Computer Science", "instructor": "Dr. Adams", "credits": 3 },
  { "_id": "CE101", "title": "Structural Engineering", "department": "Civil Engineering", "instructor": "Dr. Lee", "credits": 4 },
  { "_id": "ME202", "title": "Fluid Mechanics", "department": "Mechanical Engineering", "instructor": "Dr. Taylor", "credits": 4 },
  { "_id": "EE102", "title": "Signal Processing", "department": "Electrical Engineering", "instructor": "Dr. Brown", "credits": 3 },
  { "_id": "CS104", "title": "Machine Learning", "department": "Computer Science", "instructor": "Dr. Clark", "credits": 3 },
  { "_id": "CE102", "title": "Construction Management", "department": "Civil Engineering", "instructor": "Dr. Lee", "credits": 3 }
]
```

---

### **Additional Practice Questions**

#### **Basic Queries**
1. Fetch all students aged 22 or older.
2. Retrieve all courses that are worth 4 credits.
3. Find students who are not enrolled (`enrolled: false`).
4. List all courses where the title includes the word "Engineering".

#### **Advanced Queries**
5. Fetch students with marks between 70 and 90.
6. Retrieve students' names and departments but exclude their ages and `_id`.
7. Find courses taught by either "Dr. Taylor" or "Dr. Brown".
8. Update Ivy's marks to 85.

#### **Aggregation**
9. Calculate the average age of students for each department.
10. Sort students by their marks in descending order and retrieve the top 3 scorers.
11. Count how many students are enrolled in each department.

#### **Joins (using `$lookup`)**
12. Match students with their courses based on department and list both.
13. Find all students enrolled in the "Civil Engineering" department along with their courses.

Let me know if you want to dive into solutions or if you have a specific MongoDB query you'd like to practice!