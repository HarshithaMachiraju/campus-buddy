const STORAGE_KEY = 'campus_buddy_tasks_v1';

// Initial realistic starter tasks for college students
const getInitialTasks = () => {
  const today = new Date();
  
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  
  const threeDaysLater = new Date(today);
  threeDaysLater.setDate(today.getDate() + 3);
  
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  return [
    {
      id: 'task-starter-1',
      title: 'Complete DSA Lab: AVL Tree Balancing Assignment',
      subject: 'Data Structures',
      dueDate: tomorrow.toISOString().split('T')[0],
      priority: 'High',
      completed: false,
      createdAt: new Date().toISOString()
    },
    {
      id: 'task-starter-2',
      title: 'Prepare Presentation Slides on Cloud Virtualization',
      subject: 'Cloud Computing',
      dueDate: threeDaysLater.toISOString().split('T')[0],
      priority: 'Medium',
      completed: false,
      createdAt: new Date().toISOString()
    },
    {
      id: 'task-starter-3',
      title: 'Submit Database Management Mini-Project ER Diagrams',
      subject: 'DBMS',
      dueDate: yesterday.toISOString().split('T')[0],
      priority: 'High',
      completed: true,
      createdAt: new Date().toISOString()
    }
  ];
};

export const loadTasksFromStorage = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const initial = getInitialTasks();
      saveTasksToStorage(initial);
      return initial;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('Error loading tasks from localStorage:', error);
    return [];
  }
};

export const saveTasksToStorage = (tasks) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error('Error saving tasks to localStorage:', error);
  }
};
