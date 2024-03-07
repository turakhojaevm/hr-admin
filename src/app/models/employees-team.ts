export interface EmployeesTeam {
  id: number;
  team: string;
}

export const EMPLOYEE_TEAM = [
  {
    id: 1,
    team: 'PHP'
  },
  {
    id: 2,
    team: 'Designing'
  },
  {
    id: 3,
    team: 'IOS'
  },
  {
    id: 4,
    team: 'Android'
  },
  {
    id: 5,
    team: 'Business'
  },
  {
    id: 6,
    team: 'Testing'
  },
];

export interface TeamAction {
  id: number;
  class: string;
  icon: string;
}
export const TEAM_ACTION = [
  {
    id: 1,
    class: 'edit_employee',
    icon: 'pi pi-user-edit',
  },
  {
    id: 2,
    class: 'edit_delete',
    icon: 'pi pi-trash',
  },
];
