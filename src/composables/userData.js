const setUserData = (data) =>{
  window.localStorage.setItem('user_data', JSON.stringify(data));
}

const getUserData = () =>{
  return JSON.parse(localStorage.getItem('user_data'));
}

const getDummyData = () =>{
  return {
    profile: {
      name: 'John Doe',
      profession: 'Software Engineer',
      introduction: 'MERN Stack Developer. 5 years of professional experience.',
    },
    contact: {
      address: 'Los Angeles, USA',
      phone: '1234-123-321',
      email: 'john.doe@gmail.com'
    },
    social: {
      linkedin_url: 'https://in.linkedin.com/',
      github_url: 'https://github.com/',
      portfolio_url: '',
      blogging_url: ''
    },
    languages: ['Hindi', 'English'], 
    skills: ['HTML','CSS', 'JAVASCRIPT', 'REACT', 'REDUX', 'SASS'],
    work_history: [
      {
        id: 1,
        title: 'Software Engineer',
        startDate: '2021',
        endDate: 'Present',
        institute: 'Google'
      },
      {
        id: 2,
        title: 'Software Engineer Trainee',
        startDate: '2020',
        endDate: '2021',
        institute: 'Google'
      },
      {
        id: 3,
        title: 'Software Intern',
        startDate: '2019',
        endDate: '2020',
        institute: 'LinkedIn'
      }
    ],
    education_history: [
      {
        id: 4,
        title: 'Middle School Detail',
        institute: 'Institue Name',
        startDate: '2014-04-01',
        endDate: '2015-04-01',
        grade: 'A'
      },
      {
        id: 5,
        title: 'High School Detals',
        institute: 'Institue Name',
        startDate: '2016-04-01',
        endDate: '2017-04-01',
        grade: 'A'
      },
      {
        id: 6,
        title: 'College Details',
        institute: 'Institue Name',
        startDate: '2017-07-01',
        endDate: '2021-07-01',
        grade: 'A+'
      }
    ],
    certifications: [
      {
        id: 7,
        title: 'React Certification',
        institute: 'Udemy',
        date: '2021-04-01'
      },
      {
        id: 8,
        title: 'Node JS Certification',
        institute: 'Udemy',
        date: '2021-02-01'
      }
    ],
    projects: [
      {
        id: 9,
        title: 'Blog Application',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut arcu mauris, convallis quis sem vitae, scelerisque euismod est. Vivamus at dignissim est. Donec eleifend lacus elit, et dictum urna mollis et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla quis ultrices sapien. Cras erat ipsum'
      },
      {
        id: 10,
        title: 'Project 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut arcu mauris, convallis quis sem vitae, scelerisque euismod est. Vivamus at dignissim est. Donec eleifend lacus elit, et dictum urna mollis et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla quis ultrices sapien. Cras erat ipsum'
      }
    ]
  }
}

export {
  setUserData,
  getUserData,
  getDummyData
}