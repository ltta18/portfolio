import actions, { getView } from './actions';

const initState = {
  collapsed: !(window.innerWidth > 1220),
  view: getView(window.innerWidth),
  height: window.innerHeight,
  openDrawer: false,
  openKeys: 'home',
  current: 'home',
};

export default function appReducer(state = initState, action) {
  switch (action.type) {
    case actions.COLLAPSE_CHANGE:
      return {
        ...state,
        collapsed: !state.collapsed,
      };
    case actions.COLLAPSE_OPEN_DRAWER:
      return {
        ...state,
        openDrawer: !state.openDrawer,
      };
    case actions.TOGGLE_ALL:
      if (state.view !== action.view || action.height !== state.height) {
        const height = action.height ? action.height : state.height;
        return {
          ...state,
          collapsed: action.collapsed,
          view: action.view,
          height,
        };
      }
      break;
    case actions.CHANGE_OPEN_KEYS:
      return {
        ...state,
        openKeys: action.openKeys,
      };
    case actions.CHANGE_CURRENT:
      return {
        ...state,
        current: action.current,
      };
    case actions.CLEAR_MENU:
      return {
        ...state,
        openKeys: [],
        current: [],
      };
    default:
      return state;
  }
  return state;
}
