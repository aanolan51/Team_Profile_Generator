const Employee = require("../lib/Employee");

describe("Employee Class", () => {
    it("Adds a name, an id, and an email constructor to the class ", () => {
      const name1 = "Alyssa";
      const id1 = "183832";
      const email1 = "alyssa@email.com";
      const employee = new Employee(name1, id1, email1);

      //test that the name in the Employee object matches the name inputed. Do this for each constructor:
      expect(employee.name).toBe(name1);
      expect(employee.id).toBe(id1);
      expect(employee.email).toBe(email1);

    });
  });
