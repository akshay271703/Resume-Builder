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
        title: 'Software Engineer',
        startDate: '2021-12-01',
        endDate: '',
        institue: 'Google'
      },
      {
        title: 'Software Engineer Trainee',
        startDate: '2021-06-01',
        endDate: '2021-12-01',
        institue: 'Google'
      },
      {
        title: 'Software Intern',
        startDate: '2021-01-01',
        endDate: '2021-06-01',
        institue: 'LinkedIn'
      }
    ],
    education_history: [
      {
        title: 'Middle School Detail',
        startDate: '2014-04-01',
        endDate: '2015-04-01',
        grade: 'A'
      },
      {
        title: 'High School Detals',
        startDate: '2016-04-01',
        endDate: '2017-04-01',
        grade: 'A'
      },
      {
        title: 'College Details',
        startDate: '2017-07-01',
        endDate: '2021-07-01',
        grade: 'A+'
      }
    ],
    certifications: [
      {
        title: 'React Certification',
        institute: 'Udemy',
        date: '2021-04-01'
      },
      {
        title: 'Node JS Certification',
        institute: 'Udemy',
        date: '2021-02-01'
      }
    ],
    projects: [
      {
        title: 'Blog Application',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut arcu mauris, convallis quis sem vitae, scelerisque euismod est. Vivamus at dignissim est. Donec eleifend lacus elit, et dictum urna mollis et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla quis ultrices sapien. Cras erat ipsum'
      },
      {
        title: 'Project 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut arcu mauris, convallis quis sem vitae, scelerisque euismod est. Vivamus at dignissim est. Donec eleifend lacus elit, et dictum urna mollis et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla quis ultrices sapien. Cras erat ipsum'
      }
    ]
  }
}

export default {
  setUserData,
  getUserData,
  getDummyData
}