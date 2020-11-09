import { makeStyles } from '@material-ui/core/styles'

const commonStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  tooltip:{
    backgroundColor:'grey',
    display:'block',
    color:'white',
    boxShadow: theme.shadows[1],
    fontSize:'12px',
    marginLeft:40,
    marginTop:-30,
  },
  organisationIconStyle: {
    height: '30px',
    paddingRight: '5px'
  },
  organisationButtonStyle: {
    height : '45px',
    padding: '0px !important',
    marginLeft: '10px !important',
    '&:hover': {
      backgroundColor: 'transparent !important'
    },
    '&>span':{
      display : 'inline-block'
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'black !important'
  },
  logo: {
    display: 'flex',
    paddingRight: '10px'
  },
  logoImg: {
    width: '40px',
    height: '40px'
  },
  loginContainer: {
    width: 'calc(100% - 30px)',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  appBarStyle: {
    backgroundColor: 'white !important',
    boxShadow: 'none !important'
  },
  primaryButton: {
    backgroundColor: 'cornflowerblue',
    cursor: 'pointer'
  },
  formControl: {
    paddingRight: '10px !important'
  },
  formInput: {
    margin: '0px !important',
    '&: focus': {
      outline: '2px black'
    }
  },
  body: {},
  headingH1: {},
  headingH2: {
    letterSpacing: '0.1em',
    fontFamily: 'unset',
    fontWeight: '700 !important',
    textTransform: 'uppercase'
  },
  subtitleH6: {
    fontSize: '0.6em'
  },
  appMainContainer: {
    width: '100vw',
    height: '100vh',
    display: 'flex'
  },
  formlabel: {
    color: 'inherit !important',
    top: '-15px !important'
  },
  htmlFormComponent: {
    width: 'calc(100% - 250px)',
    height: '100%',
    display: 'flex'
  },
  userTopContainer: {
    width: 'auto',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRight: '2px solid #ccc',
    paddingRight: '20px',
    marginLeft: 'auto'
  },
  paper: {
    backgroundColor: '#c4e3ed'
  },
  mainMenuContainer: {
    width: '70px',
    height: '100%',
    backgroundColor: '#252525',
    transition: 'width 0.5s',
    float: 'left',
    boxShadow:
      '0px 0px 0px 0px rgba(0,0,0,0.2), 0px 0px 0px 0px rgba(0,0,0,0.14), 0px 0px 20px 0px rgba(0,0,0,0.12)'
  },
  mainMenuActive: {
    width: '200px !important'
  },
  appContainer: {
    width: 'auto',
    overflowY: 'auto',
    overflowX: 'hidden',
    position: 'relative',
    padding:'20px',
    height: 'calc(100% - 44px)'
  },
  appHeaderText: {
    width: 'auto',
    marginLeft: 'auto',
    color: 'black',
    fontWeight: '700',
    fontSize: '1.7rem'
  },
  smallAppIcon: {
    width: '50px',
    height: '50px'
  },
  iconForward: {
    width: '45px',
    height: '30px',
    position: 'absolute !important',
    transition: 'position 5s ease-in-out',
    right: '-33px',
    top: '10px',
    backgroundColor: '#f89f6f !important',
    zIndex: 1,
    borderRadius: '25px !important',
    padding: '0px !important',
    '&:hover': {
      backgroundColor: '#f89f6f !important'
    }
  },
  iconBack: {
    right: '-33px !important',
    top: '10px !important'
  },
  appIcon: {
    width: '150px',
    height: '150px',
    paddingTop: '25px'
  },
  menuActive: {
    borderLeft: '2px solid white !important',
    paddingLeft: '14px !important',
    color: 'white !important'
  },
  listItemIconRoot: {
    minWidth: '30px !important',
    color: 'inherit !important'
  },
  listItemTextRoot: {
    marginTop: '0px !important',
    marginBottom: '0px !important',
    color: '0px !important'
  },
  rotate180: {
    transform: 'rotate(180deg) !important'
  },
  mainMenuBody: {
    display: 'flex',
    width: '100%',
    height: 'calc(100% - 200px)',
    overflowY: 'auto',
    overflowX: 'hidden',
    paddingLeft: '5px'
  },
  mainMenuHeader: {
    display: 'flex',
    height: '120px',
    alignItems: 'center',
    paddingLeft: '10px',
    position: 'relative'
  },
  mainMenuFooter: {
    display: 'flex',
    height: '-webkit-fill-available',
    width: '100%'
  },
  mainMenuCloseButton: {
    position: 'absolute',
    right: '2px',
    top: '2px'
  },
  loginLayoutImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: -1
  },
  headingsLoginLayout: {
    width: '85%',
    height: '100%',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'absolute',
    left: '8%',
    top: '6%'
  },
  formInputRoot: {
    marginBottom: '15px',
    position: 'relative'
  },
  formInputLabel: {
    marginBottom: '5px',
    fontWeight: 'normal',
    fontSize: '14px',
    color: '#89898a'
  },
  inputText: {
    borderRadius: '3px',
    padding: '0px 5px 0px 5px',
    fontSize: '12px',
    color: '#040404',
    display: 'block',
    width: '100%',
    height: '34px',
    border: '1px solid #ccc'
  },
  inputSearch: {
    width: '100%',
    height: '25px',
    padding: '10px 5px 0px 5px',
    border: 'none',
    borderBottom: '2px solid',
    transition: 'border-color 0.4s ease-in-out',
    cursor: 'text',
    '&:focus': {
      outline: 'none !important',
      borderColor: '#E9224A'
    }
  },
  searchIcon: {
    position: 'absolute',
    color: 'black',
    top: '25px',
    right: '10px'
  },
  mainForm: {
    padding: '15px',
    width: '315px'
  },
  formErrorLabel: {
    width: '100%',
    paddingLeft: '10%',
    color: 'red !important',
    fontSize: '1rem',
    position: 'absolute',
    bottom: '-20px',
    left: '20px'
  },
  errorInputText: {
    border: '1px solid red !important'
  },
  formHeading: {
    color: 'black',
    width: '100%',
    fontWeight: '600 !important',
    paddingBottom: '40px'
  },
  horizGrid: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'relative',
    bottom: '0px',
    right: '0px',
    padding: '20px 10px 5px 10px',
    alignItems: 'center',
    borderTop: '1px solid #ccc'
  },
  vertGrid: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px'
  },
  inputButton: {
    // backgroundColor: '#FF5722',
    // color: '#ffffff',
    border: 'none',
    padding: '4px 20px',
    borderRadius: '2px',
    minWidth: '85px',
    marginLeft: '5px',
    outline: 'none'
  },
  endEndorement: {
    position: 'absolute',
    right: '7%',
    bottom: '10px',
    height: 'calc(100% - 9px)',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center'
  },
  inputLink: {
    justifyContent: 'flex-start',
    width: 'fit-content',
    padding: '0px',
    cursor: 'pointer'
  },
  appCard: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '5px',
    boxShadow: 'none',
    backgroundColor: 'white',
    opacity: '0.7',
    minWidth: '100px',
    maxWidth: '800px',
    minHeight: '100px',
    margin: '5px',
    position: 'absolute',
    flexDirection: 'column',
    zIndex: 0,
    border: '1px solid #cfc'
  },
  appCardHeader: {
    width: '100%',
    height: '30%',
    minHeight: '35px',
    maxHeight: '50px',
    display: 'flex',
    alignItems: 'center',
    color: 'black',
    borderBottom: '1px solid white',
    cursor: 'grabbing'
  },
  appCardBody: {
    height: 'calc(100% - 50px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
    padding: '5px'
  },
  tableMenuItemMain: {
    display: 'flex',
    width: 'auto',
    height: 'calc(100% - 7px)',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginLeft: 'auto'
  },
  tableMenuItemIconContainer: {
    width: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80%',
    borderRadius: '50%',
    marginRight: '5px',
    transition: 'background 0.8s',
    '&:hover': {
      background: '#978d8dc2'
    }
  },
  headerCellMain: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    color: '#333',
    fontSize: '13px',
    fontWeight: '600',
    textTransform: 'uppercase',
    padding: '5px'
  },
  bodyCellMain: {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    color: '#333',
    fontSize: '14px',
    padding: '5px 5px 5px 20px',
  },
  tableMainContent: {
    position: 'relative',
    width: '100%'
  },
  tableBody: {
    overflowY: 'auto',
    overflowX: 'hidden',
    position: 'relative',
    width: 'calc(100% + 2px)'
  },
  tableHeading: {
    overflowY: 'hidden',
    overflowX: 'hidden',
    position: 'relative',
    width: '100%'
  },
  tabContainer: {
    width: 'fit-content',
    minWidth: '80px',
    height: 'fit-content',
    display: 'block',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
  },
  tabActiveContainer: {
    color: '#ff5722',
    borderBottom: '2px solid #ff5722 !important'
  },
  tabMainContainer: {
    listStyleType: 'none',
    display: 'inline-flex',
    padding: '0px 15px',
    margin: '0 auto',
    marginTop: '10px',
    '& li:last-child span': {
      // float: 'left !important',
      // marginLeft: '6px',
      // width: '93% !important'
    }
  },
  modalContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    top: '0px',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    zIndex: '1050'
  },
  modalHeader: {
    height: '45px',
    display: 'flex',
    position: 'relative'
  },
  modalHeadingText: {
    padding: '5px',
    fontSize: '20px',
    color: 'black',
    fontWeight: 'bold'
  },
  modalBody: {
    fontSize: '14px',
    padding: '5px',
    overflowY: 'auto',
    overflowX: 'hidden',
    maxHeight: '700px'
  },
  tabLabel: {
    display: 'flex',
    padding: '8px',
    width: '95%',
    float: 'right',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'transparent',
    marginBottom: '20px',
    borderBottom: '2px solid #ccc',
    '&:hover': {
      // borderColor: '#f37a87 !important',
      // border: '1px solid'
    },
    transition: 'background 1s'
  },
  pagingContainer: {
    display: 'flex',
    width: 'calc(100% - 20px)',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '40px'
  },
  selectedTablePage: {
    background: 'white',
    border: 'none',
    padding: '5px',
    color: '#F15379',
    fontSize: '1rem',
    '&:hover': {
      border: '1px solid #F15379 !important'
    },
    '&:focus': {
      outline: 'none'
    }
  },
  tablePage: {
    background: 'white',
    padding: '5px',
    border: 'none',
    color: '#BCBDBC',
    fontSize: '1rem',
    '&:hover': {
      border: '1px solid #F15379 !important',
      borderRadius: '25px',
      outline: 'none'
    },
    '&:focus': {
      outline: 'none'
    }
  },
  addButton: {
    width: '100%',
    borderRadius: '8px',
    background: 'linear-gradient(to right, #E9224A, #F16940)',
    border: 'none',
    height: '70%',
    cursor: 'pointer',
    color: 'white',
    fontSize: '0.9em',
    transition: 'background-color 2s',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    padding: '10px',
    '&:hover': {
      background: 'linear-gradient(to right, #F16940, #E9224A )'
    },
    '&:focus': {
      outline: 'none'
    }
  },
  linkNavigationContainer: {
    width: '100%',
    height: '100%',
    padding: '5px 10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  linkAnchorTag: {
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    fontFamily: 'Open Sans,Helvetica,Arial,sans-serif',
    fontSize: '13px',
    cursor: 'pointer',
    '&:hover': {
      color: 'lightblue'
    }
  },
  bodyContainer: {
    minHeight: '530px',
    width: 'calc(100% - 80px)',
    display: 'flex',
    maxHeight: '900px',
    margin: '15px auto',
    flexDirection: 'column'
  },
  headerContainer: {
      height: '65px',
      width: 'calc(100% - 80px)',
      margin: '0 auto'
  },
  drawerHeaderContainer: {
    display: 'flex'
  },
  drawerbodyContainer: {
    flex: '1'
  },
  drawerCloseIcon: {
    width: '100%'
  },
  imageButton: {
    width: '9px',
    padding: '0px',
    backgroundColor: 'transparent',
    border: 'none',
    height: '9px',
    outline: 'none'
  },

  selectInputMessage: {
    fontSize: '11px',
    color: '#b0b0b0',
    marginTop: '2px'
  },
  cancelButton: {
    backgroundColor: '#e7e7e7',
    color: '#9a9a9a',
    border: 'none',
    padding: '4px 20px',
    borderRadius: '2px',
    minWidth: '85px',
    marginLeft: '5px',
    outline: 'none'
  },
  saveButton: {
    backgroundColor: '#FF5722',
    color: '#ffffff',
    border: 'none',
    padding: '4px 20px',
    borderRadius: '2px',
    marginLeft: '5px',
    outline: 'none'
  },
  closeBtn: {
    textAlign: 'right'
  },
  footerConfirmDialogContainer: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'flex-end'
  },
  multiInputDivFocused: {
    border: "1px solid #2384FF",
    boxShadow: "0 0 0 1px #2384FF"
  },
  multiInputDivBlur: {
    border: "1px solid hsl(0,0%,80%)"
  },
  multiInputBox: {
    border: "none",
    cursor: "default",
    '&:focus': {
      outline: 'none',
      cursor: "auto"
    },
    backgroundColor: 'transparent'
  },
  multiInputTextTags: {
    padding: "3px 8px",
    borderRadius: "8px",
    backgroundColor: '#e7e7e7',
    boxSizing : "border-box",
    display: "inline-block",
    marginBottom: "5px",
    maxWidth:"100%",
    wordBreak:"break-word",
    marginRight: "3px",
    '&:hover': {
      backgroundColor: 'grey'
    }
  },
  multiInputTextTagTimes: {
    padding: "3px",
    cursor: "pointer",
    fontWeight: "700",
    '&:hover': {
      backgroundColor: 'grey'
    }
  },
  multiInputTextDivBlock: {
    cursor: "default",
    display: "block",
    padding: "4px",
    borderRadius: "4px",
    color: 'black',
  },
  addLinkContainer: {
    width: '100%',
    border: 'none',
    backgroundColor:'transparent',
    color: '#548ec2',
    textAlign: 'right',
    cursor: 'pointer',
    '&: focus': {
        outline: 'none',
    }
},
  buttonDisabled :{
    pointerEvents: 'none',
    opacity: '0.5'
  }
}));

export default commonStyles
