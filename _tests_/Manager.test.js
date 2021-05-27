const Manager = require("../lib/Manager");

describe("Manager Subclass", () => {
    it("Adds a additional office phone number and role constructor to the class ", () => {
      const name1 = "Alyssa";
      const id1 = "183832";
      const email1 = "alyssa@email.com";
      const phone1 = "3452345";
      const role1 = "Manager";
      const manager = new Manager(name1, id1, email1, phone1, role1);

      //test that the name in the Employee object matches the name inputed. Do this for each constructor:
      expect(manager.name).toBe(name1);
      expect(manager.id).toBe(id1);
      expect(manager.email).toBe(email1);
      expect(manager.officeNumber).toBe(phone1);
      expect(manager.role).toBe(role1);

    });
  });