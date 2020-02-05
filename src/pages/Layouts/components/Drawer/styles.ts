import { makeStyles } from '@material-ui/core/styles'
import { drawerWidth, foldDrawerWidth } from '../../constants'
import { transition } from '../../tools'

const useStyles = makeStyles({
  menu: {
    position: 'relative',
    margin: 0,
    padding: '22px 15px',
    minWidth: `${drawerWidth}px`,
    minHeight: '100vh',
    color: '#ffffff',
    background:
      'url(https://static.yancey.app/cms-static/sidebar-city.jpg) no-repeat center center',
    boxShadow:
      '0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
    userSelect: 'none',
    zIndex: 9999,
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.8)',
      zIndex: -1,
    },
    '&:hover': {
      transform: 'translateX(0)',
      transition: transition('transform'),
    },
  },

  expand: {
    transform: 'translateX(0)',
    transition: transition('transform'),
  },

  shrink: {
    transform: `translateX(-${drawerWidth - foldDrawerWidth}px)`,
    transition: transition('transform'),
  },

  drawerTitle: {
    display: 'flex',
  },

  logo: {
    marginRight: '20px',
    marginLeft: '12px',
    width: '24px',
  },

  title: {
    fontSize: '18px',
    fontWeight: 400,
  },

  drawerUser: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    margin: '24px 0',
    padding: '20px 0',
    '&::before': {
      position: 'absolute',
      content: '""',
      top: '0',
      width: '100%',
      height: '1px',
      backgroundColor: 'rgba(255, 255, 255, .3)',
    },
    '&::after': {
      position: 'absolute',
      content: '""',
      bottom: 0,
      width: '100%',
      height: '1px',
      backgroundColor: 'rgba(255, 255, 255, .3)',
    },
  },

  avater: {
    width: '34px',
    height: '34px',
    marginLeft: '8px',
    marginRight: '12px',
  },

  userName: {
    fontSize: '14px',
    fontWeight: 300,
  },

  arrow: {
    display: 'inline-block',
    position: 'absolute',
    right: '20px',
    width: 0,
    height: 0,
    borderTop: '4px solid',
    borderLeft: '4px solid transparent',
    borderRight: '4px solid transparent',
    transform: 'rotate(0deg)',
    transition: 'transform 300ms ease 0ms',
  },

  reverseArrow: {
    transform: 'rotate(180deg)',
    transition: 'transform 300ms ease 0ms',
  },

  item: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    marginTop: '10px',
    padding: '15px 0',
    cursor: 'pointer',
    transform: 'translateX(0)',
    transition: 'background-color 300ms ease 0ms, transform 300ms ease 0ms',
    '&:hover': {
      backgroundColor: 'rgba(200, 200, 200, 0.2)',
      borderRadius: '3px',
      transition: 'background-color 300ms ease 0ms',
    },
  },

  hidenItem: {
    width: '48px',
    whiteSpace: 'nowrap',
    transform: `translateX(${drawerWidth - foldDrawerWidth}px)`,
    textAlign: 'center',
    transition: 'transform 300ms ease 0ms',
  },

  itemIcon: {
    marginLeft: '12px',
    marginRight: '18px',
    width: '24px',
    textAlign: 'center',
  },

  itemTxt: {
    fontSize: '14px',
    fontWeight: 300,
  },

  childItem: {
    padding: '10px 0',
  },

  showDetail: {
    display: 'flex',
    alignItems: 'center',
    opacity: 1,
    visibility: 'visible',
    transition: 'visibility 300ms ease 0ms, opacity 300ms ease 0ms',
  },

  hideDetail: {
    opacity: 0,
    visibility: 'hidden',
    transition: 'visibility 300ms ease 0ms, opacity 300ms ease 0ms',
  },
})

export default useStyles
