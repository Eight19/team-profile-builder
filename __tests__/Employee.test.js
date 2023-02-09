const Employee = require("../lib/Employee.js");

describe("Employee", () => {
  describe('Initialization', () => {
    describe("getName", () => {    
    it('should have an object with an employee name', () => {
      const employee = new Employee('Tevyn', 1, 'Tevyn@homecaretev.com');
      expect(employee.getName()).toEqual('Tevyn');
    });
  });
});
    describe('getId', () => {
    it ('should have an object with an employee id', () => {
      const employee = new Employee('Tevyn', 1, 'Tevyn@homecaretev.com');
      expect(employee.getId()).toEqual(1);
    });
  });
    describe('getEmail', () => { 
    it ('should have an object with an employee email', () => {
      const employee = new Employee('Tevyn', 1, 'Tevyn@homecaretev.com');
      expect(employee.getEmail()).toEqual('Tevyn@homecaretev.com');
    });
  });
    describe('getRole', () => {
    it ('should have an object with an employee role', () => {
      const employee = new Employee('Tevyn', 1, 'Tevyn@homecaretev.com');
      expect(employee.getRole()).toEqual('Employee');
    });
  });
 });
  