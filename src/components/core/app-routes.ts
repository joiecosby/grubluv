type RouteKey = 'HOME' | 'NOTES' | 'CALENDAR' | 'FOOD';

interface RouteItem {
  ROUTE: string;
  TITLE: string;
  DESCRIPTION: string;
  NEW_UNTIL?: number;
}

type RouteMap = Record<RouteKey, RouteItem>;

export const APP_ROUTES: RouteMap = {
  HOME: {
    ROUTE: '/home',
    TITLE: 'Home',
    DESCRIPTION: 'Welcome to GrubLuv',
  },
  NOTES: {
    ROUTE: '/notes',
    TITLE: 'Create a new note!',
    DESCRIPTION: 'Create a new note!',
  },
  CALENDAR: {
    ROUTE: '/calendar',
    TITLE: 'Navigate to calendar',
    DESCRIPTION: 'Navigate to calendar',
  },
  FOOD: {
    ROUTE: '/food',
    TITLE: 'Discover new recipes',
    DESCRIPTION: 'Discover new recipes',
  },
} as const;
