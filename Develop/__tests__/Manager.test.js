const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe('Initialization', () => {
    describe('getOfficeNumber', () => {
  it('should have an officeNumber', () => {
    const manager = new Manager('Lashawn', 1, 'eight19@stars.com', 7077890000);
    expect(manager.getOfficeNumber()).toEqual(7077890000);
   });
 });
});
describe('getRole', () => {
  it('should have a role of Manager', () => {
    const manager = new Manager('Lashawn', 1, 'eight19@stars.com', 7077890000);
    expect(manager.getRole()).toEqual('Manager');
   });
 });
});