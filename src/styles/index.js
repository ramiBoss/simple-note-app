const drawerWidth = 472;
export const CouponDrawerStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  search: {
    paddingBottom: theme.spacing(3),
    flexWrap: 'nowrap'
  },
  btnAddUser: {
    height: '48px',
    width: '161px',
    textTransform: 'capitalize',
    marginLeft: theme.spacing(2)
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,

  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 2),
    ...theme.mixins.toolbar,
    justifyContent: 'space-between',
  },
  close: {
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
  },
  addUser: {
    padding: theme.spacing(2),
  },
  btnAdd: {
    display: 'flex',
    alignItems: 'center'
  },
  coursesChip: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px'
  },
  error: {
    color: 'red',
    paddingTop: '5px',
    display: 'block'
  },
  w100: {
    paddingLeft: '16px',
    '& > *': {
      width: '100%',
    }
  },
  form: {
    padding: theme.spacing(2),
    '& > *': {
      width: '100%',
      marginBottom: theme.spacing(3),
    },
  },

}));
