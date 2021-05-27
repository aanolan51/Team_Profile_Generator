const Intern = require("../lib/Intern");

describe("Intern Subclass", () => {
    it("Adds a additional school and role constructor to the class ", () => {
      const name1 = "Alyssa";
      const id1 = "183832";
      const email1 = "alyssa@email.com";
      const school1 = "BootCamp";
      const role1 = "Intern";
      const intern = new Intern(name1, id1, email1, school1, role1);

      //test that the name in the Employee object matches the name inputed. Do this for each constructor:
      expect(intern.name).toBe(name1);
      expect(intern.id).toBe(id1);
      expect(intern.email).toBe(email1);
      expect(intern.school).toBe(school1);
      expect(intern.role).toBe(role1);

    });
  });