export interface AssignedInterface {
  personName: string;
  status: string;
};

export interface TaskInterface {
  id: number;
  description: string;
  received: string;
  assigned: AssignedInterface[];
  status: string;
  priority: string;
};
