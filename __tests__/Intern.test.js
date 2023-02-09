const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe('Initialization', () => {
    describe('getSchool', () => {
  it('should have a school', () => {
    const intern = new Intern('Yani', 1, 'ys@maybe.com', 'UNCC');
    expect(intern.getSchool()).toEqual('UNCC');
   });
 });
});
describe('getRole', () => {
  it('should have a role of Intern', () => {
    const intern = new Intern('Yani', 1, 'ys@maybe.com', 'UNCC');
    expect(intern.getRole()).toEqual('Intern');
  });
});
});
