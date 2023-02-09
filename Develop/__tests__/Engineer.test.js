const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe('Initialization', () => {
    describe('getGitHub', () => {
  it('should have a GitHub', () => {
    const engineer = new Engineer('Ashley Danielle', 1, 'Infinityfriend@email.com', 'ADInfinity');
    expect(engineer.getGitHub()).toEqual('ADInfinity');
   });
 });
});
describe('getRole', () => {
  it('should have a role of Engineer', () => {
    const engineer = new Engineer('Ashley Danielle', 1, 'Infinityfriend@email.com', 'ADInfinity');
    expect(engineer.getRole()).toEqual('Engineer');
   });
 });
});
