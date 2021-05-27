const Engineer = require("../lib/Engineer");

describe("Engineer Subclass", () => {
    it("Adds a additional gitHub information and role constructor to the class ", () => {
      const name1 = "Alyssa";
      const id1 = "183832";
      const email1 = "alyssa@email.com";
      const gitHub1 = "alyssa1234";
      const role1 = "Engineer";
      const engineer = new Engineer(name1, id1, email1, gitHub1, role1);

      //test that the name in the Employee object matches the name inputed. Do this for each constructor:
      expect(engineer.name).toBe(name1);
      expect(engineer.id).toBe(id1);
      expect(engineer.email).toBe(email1);
      expect(engineer.gitHub).toBe(gitHub1);
      expect(engineer.role).toBe(role1);

    });
  });