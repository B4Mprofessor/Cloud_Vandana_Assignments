import java.util.ArrayList;
import java.util.List;

class Employee {
    private int id;
    private String name;
    private double salary;

    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    public void displayDetails() {
        System.out.println("ID: " + id + ", Name: " + name + ", Salary: Rs." + salary);
    }
}

public class EmployeeManagement {
    public static void main(String[] args) {
        List<Employee> employees = new ArrayList<>();
        employees.add(new Employee(101, "Vanadana Patil", 50000));
        employees.add(new Employee(102, "S. Jaishankar", 60000));
        employees.add(new Employee(103, "Elon Musk", 55000));
        employees.add(new Employee(104, "Helen bob", 35000));
        employees.add(new Employee(105, "Abhik Sahana", 100000));
        System.out.println("Employee Details:");
        for (Employee emp : employees) {
            emp.displayDetails();
        }
    }
}
