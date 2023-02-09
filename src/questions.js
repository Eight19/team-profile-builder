const managerQuestions = [
    {
      message: 'What is the manager\'s name?',
      name: 'name',
      default: 'Tiffany',
    },
    {
      message: 'What is the manager\'s id?',
      name: 'id',
      default: '706',
    },
    {
      message: 'What is the manager\'s email?',
      name: 'email',
      default: 'tiffany@email.com',
    },
    {
      message: 'What is the manager\'s office number?',
      name: 'officeNumber',
      default: '794-312-1931',
    },
  ];
  
  const engineerQuestions = [
    {
      message: 'What is the engineer\'s name?',
      name: 'name',
      default: 'Yani',
    },
    {
      message: 'What is the engineer\'s id?',
      name: 'id',
      default: '704',
    },
    {
      message: 'What is the engineer\'s email?',
      name: 'email',
      default: 'yanz@email.com',
    },
    {
      message: 'What is the engineer\'s GitHub name?',
      name: 'gitHub',
      default: 'yaya1921',
    },
  ];
  
  const internQuestions = [
    {
      message: 'What is the intern\'s name?',
      name: 'name',
      default: 'Jo',
    },
    {
      message: 'What is the intern\'s id?',
      name: 'id',
      default: '201',
    },
    {
      message: 'What is the intern\'s email?',
      name: 'email',
      default: 'thorne@email.com',
    },
    {
      message: 'What is the intern\'s school?',
      name: 'school',
      default: 'UNCC',
    },
  ];
  
  module.exports = { engineerQuestions, internQuestions, managerQuestions }
  