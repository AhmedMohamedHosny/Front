// CodeMasr — Java Object-Oriented Programming (Real Cloud JVM Execution)
window.COURSE_JAVA = {
  id: 'java',
  title: 'Java Masterclass',
  subtitle: 'Real JVM, OOP & Algorithms',
  tag: 'JAVA OOP',
  tagClass: 'tag-html',
  badgeText: '☕',
  badgeClass: 'html-badge',
  lessons: [
    {
      id: 'java-1',
      num: '01',
      title: 'Java Classes, Inheritance & Constructors',
      duration: '25 min',
      eyebrow: 'JAVA 01 · OBJECT-ORIENTED PROGRAMMING',
      lead: 'Master real Java OOP: class constructors, inheritance with super(), method overriding, and polymorphic behavior.',
      goal: 'Write an Employee base class and a Manager child class with super() constructor chaining.',
      sectionTitle: 'Constructor Chaining & Method Execution',
      explanation: [
        'In Java, a subclass inherits fields and methods from a superclass using the <code>extends</code> keyword.',
        'When an instance of a subclass is created, its constructor must invoke the superclass constructor using <code>super(...)</code> as the first statement.',
        'Real Java compilation compiles code with <code>javac Main.java</code> and executes bytecode on the real OpenJDK JVM.'
      ].join('<br>'),
      exampleCode: `class Employee {
    String name;
    double salary;

    Employee(String name, double salary) {
        System.out.println("Employee constructor");
        this.name = name;
        this.salary = salary;
    }

    void displayInfo() {
        System.out.println("Name: " + name + " | Salary: " + salary);
    }
}

class Manager extends Employee {
    Manager(String name, double salary) {
        super(name, salary);
        System.out.println("Manager constructor");
    }

    double getTotalSalary() {
        return salary + 1500.0;
    }
}

public class Main {
    public static void main(String[] args) {
        Manager m = new Manager("Hana", 9000.0);
        m.displayInfo();
        System.out.println("Total salary: " + m.getTotalSalary());
    }
}`,
      starterCode: `// Write your Java class hierarchy here and click Run Code
class Employee {
    String name;
    double salary;

    Employee(String name, double salary) {
        System.out.println("Employee constructor");
        this.name = name;
        this.salary = salary;
    }
}

class Manager extends Employee {
    Manager(String name, double salary) {
        super(name, salary);
        System.out.println("Manager constructor");
    }

    double getTotalSalary() {
        return salary + 1500.0;
    }
}

public class Main {
    public static void main(String[] args) {
        Manager m = new Manager("Hana", 9000.0);
        System.out.println("Name: " + m.name + " | Salary: " + m.salary);
        System.out.println("Total salary: " + m.getTotalSalary());
    }
}`,
      solutionCode: `class Employee {
    String name;
    double salary;
    Employee(String name, double salary) {
        System.out.println("Employee constructor");
        this.name = name;
        this.salary = salary;
    }
}
class Manager extends Employee {
    Manager(String name, double salary) {
        super(name, salary);
        System.out.println("Manager constructor");
    }
    double getTotalSalary() { return salary + 1500.0; }
}
public class Main {
    public static void main(String[] args) {
        Manager m = new Manager("Hana", 9000.0);
        System.out.println("Total salary: " + m.getTotalSalary());
    }
}`,
      challengePrompt: 'Java Challenge: Create an Employee base class and a Manager subclass extending Employee, call super() in constructor, and calculate total salary on real JVM.',
      validate: function(doc, rawCode) {
        if (!/\bclass\s+Manager\s+extends\s+Employee\b/.test(rawCode)) {
          return { passed: false, msgAr: 'تأكد من وراثة الكلاس Manager من Employee باستخدام extends.', msgEn: 'Ensure class Manager extends Employee.' };
        }
        if (!/\bsuper\s*\(/.test(rawCode)) {
          return { passed: false, msgAr: 'استخدم super() في الـ constructor لاستدعاء كلاس الأب.', msgEn: 'Call super(...) in the subclass constructor.' };
        }
        return { passed: true, msgAr: 'ممتاز! كود Java OOP متكامل ومطابق للأصول الهندسية.', msgEn: 'Java OOP structure validated!' };
      }
    }
  ]
};