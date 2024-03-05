export interface Employee {
  avatar: string;
  name: string;
  manager: string;
  team: string;
  office: string;
  permissions: string;
  status: Status[];
}

export interface Status {
  id: number;
  text: string;
}

export const EMPLOYEE_DATA = [
  {
    avatar: 'assets/img/avatar-13.jpg',
    name: 'Sean Black',
    manager: 'Richard Wilson',
    team: 'Design',
    office: 'Focus Technologies',
    permissions: 'Team Lead',
    status: [
      {id: 1, text: 'Active'},
      {id: 2, text: 'Inactive'},
    ],
  },
  {
    avatar: 'assets/img/avatar-16.jpg',
    name: 'Linda Craver',
    manager: 'Richard Wilson',
    team: 'IOS',
    office: 'Focus Technologies',
    permissions: 'Team Lead',
    status: [
      {id: 1, text: 'Active'},
      {id: 2, text: 'Inactive'},
    ],
  },
  {
    avatar: 'assets/img/avatar-17.jpg',
    name: 'Jenni Sims',
    manager: 'Richard Wilson',
    team: 'Android',
    office: 'Focus Technologies',
    permissions: 'Team Lead',
    status: [
      {id: 1, text: 'Active'},
      {id: 2, text: 'Inactive'},
    ],
  },
  {
    avatar: 'assets/img/avatar-19.jpg',
    name: 'Stacey Linville',
    manager: 'Richard Wilson',
    team: 'Testing',
    office: 'Focus Technologies',
    permissions: 'Team Lead',
    status: [
      {id: 1, text: 'Active'},
      {id: 2, text: 'Inactive'},
    ],
  },
  {
    avatar: 'assets/img/avatar-14.jpg',
    name: 'Maria Cotton',
    manager: 'Richard Wilson',
    team: 'Design',
    office: 'Focus Technologies',
    permissions: 'Team Lead',
    status: [
      {id: 1, text: 'Active'},
      {id: 2, text: 'Inactive'},
    ],
  },
  {
    avatar: 'assets/img/avatar-18.jpg',
    name: 'John Gibbs',
    manager: 'Richard Wilson',
    team: 'PHP',
    office: 'Focus Technologies',
    permissions: 'Team Lead',
    status: [
      {id: 1, text: 'Active'},
      {id: 2, text: 'Inactive'},
    ],
  },
  {
    avatar: 'assets/img/avatar-10.jpg',
    name: 'Richard Wilson',
    manager: 'No',
    team: 'Business',
    office: 'Focus Technologies',
    permissions: 'Super Admin',
    status: [
      {id: 1, text: 'Active'},
      {id: 2, text: 'Inactive'},
    ],
  },
  {
    avatar: 'assets/img/avatar-13.jpg',
    name: 'Sean Black',
    manager: 'Richard Wilson',
    team: 'Design',
    office: 'Focus Technologies',
    permissions: 'Team Lead',
    status: [
      {id: 1, text: 'Active'},
      {id: 2, text: 'Inactive'},
    ],
  },
  {
    avatar: 'assets/img/avatar-16.jpg',
    name: 'Linda Craver',
    manager: 'Richard Wilson',
    team: 'IOS',
    office: 'Focus Technologies',
    permissions: 'Team Lead',
    status: [
      {id: 1, text: 'Active'},
      {id: 2, text: 'Inactive'},
    ],
  },
  {
    avatar: 'assets/img/avatar-17.jpg',
    name: 'Jenni Sims',
    manager: 'Richard Wilson',
    team: 'Android',
    office: 'Focus Technologies',
    permissions: 'Team Lead',
    status: [
      {id: 1, text: 'Active'},
      {id: 2, text: 'Inactive'},
    ],
  },
  {
    avatar: 'assets/img/avatar-19.jpg',
    name: 'Stacey Linville',
    manager: 'Richard Wilson',
    team: 'Testing',
    office: 'Focus Technologies',
    permissions: 'Team Lead',
    status: [
      {id: 1, text: 'Active'},
      {id: 2, text: 'Inactive'},
    ],
  },
  {
    avatar: 'assets/img/avatar-14.jpg',
    name: 'Maria Cotton',
    manager: 'Richard Wilson',
    team: 'Design',
    office: 'Focus Technologies',
    permissions: 'Team Lead',
    status: [
      {id: 1, text: 'Active'},
      {id: 2, text: 'Inactive'},
    ],
  },
  {
    avatar: 'assets/img/avatar-18.jpg',
    name: 'John Gibbs',
    manager: 'Richard Wilson',
    team: 'PHP',
    office: 'Focus Technologies',
    permissions: 'Team Lead',
    status: [
      {id: 1, text: 'Active'},
      {id: 2, text: 'Inactive'},
    ],
  },
  {
    avatar: 'assets/img/avatar-10.jpg',
    name: 'Richard Wilson',
    manager: 'No',
    team: 'Business',
    office: 'Focus Technologies',
    permissions: 'Super Admin',
    status: [
      {id: 1, text: 'Active'},
      {id: 2, text: 'Inactive'},
    ],
  },
];
