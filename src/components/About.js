import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Divider from '@material-ui/core/Divider';

//icons
import AccessibleForwardIcon from '@material-ui/icons/AccessibleForward';
import VisibilityIcon from '@material-ui/icons/Visibility';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import CancelPresentationOutlinedIcon from '@material-ui/icons/CancelPresentationOutlined';
import DoneOutlineOutlinedIcon from '@material-ui/icons/DoneOutlineOutlined';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',  
    // maxWidth: 480,
    backgroundColor: theme.palette.background.paper,
    // margin: 'auto'
  },
  nested: {
    paddingLeft: theme.spacing(8),
  },
  inProgress: {
      paddingLeft: theme.spacing(8)
  }
}));

const visionDescription = ["Create an efficient system for Assistive Technology Professionals (ATP) to gather the necessary information insurance requires for specific pieces of Durable Medical Equipment (DME).", 
"This is what the next paragraph would look like"]

const goalsDescription = [
    {text: "Eliminate the inefficent transfer of client information using secure connections for businesses to increase productivity and innerconnectivity"},
    {text: "Allow clients to check the status of their equipment, update medical information, and empower them to participate in the funding process"}
]

const futureAdditionsList = [
    {text: "I want to handle my fetching more properly by adding a begin/succes/failure response in my redux actions. https://daveceddia.com/where-fetch-data-redux/", status: false},
    {text: "Use API http://icd10api.com/ to save diagnosis ICD 10 codes. Will help fill out other additional details about the code.", status: false},
    {text: "Autoformat the date input on new clients", status: false},
    {text: "Collect date and setState of date on FunctionalAssessment to add logic component: If the last assessment was less than 30 days ago, we don't need to do it again. Mostly helpful if doing multiple pieces of equipment at the same time.", status: false},
    {text: "Search function for client list: DOB, first_name, last_name, etc. Review this article https://hub.packtpub.com/implementing-autocompletion-in-a-react-material-ui-application-tutorial/", status: false},
    {text: "Ability to search DME equipment and obtain manufacturer information", status: false},
    {text: "I need to create a way for administrative users to add ATPs and Funding Coordinators. Because these users have special access, I am not going to create a way for new employees to create their own profile. This will be accomplished from within the application by an admin user", status: false}
];

const challengeList = [
    {text: "Using handleSubmit when the form is submitted is not working for NewClient. I tried filling out the entire constructor in the class component and binding this to handleSubmit, but it still doesn't work.", status: false},
    {text: "NewClient component will only setState of the Medicare/Medicaid/Private checkboxes once to true and once to false. After that, they stay false. Also, if marked true then false again, the TextField stays open. I even tried turnary operator, still nothing. I think it's because it's not re-rendering onClick.", status: false},
    {text: "The order of '/clients' and '/clients/:id' in the React Router matters, and I'm not sure if there's a better way to include this. I'm concerned about user experience when hitting backspace. Backspace is definitely not working.", status: false},
    {text: "I want the Navigation component located in App.js to unmount when the user visits /atp-dashboard", status: false},
    {text: "props.fetchClients() is returning an object that goes into my clients=[] in the state.js folder. In order to map over the information, I have to use props.clients[0].map(). //try reviewing 311_wk2_day1 to see how they export the array in the exercise", status: false},
    {text: "Where should I store my photos? I use one in the Measurement component, but I'm not sure if I should use 'require' or 'import'", status: false},
    {text: "How can I use .env files to protect my database instance? Trying process.env.REACT_APP_CLOUD_INSTANCE returned undefined everytime.", status: false},
    {text: "I've tied the fetchClients() action 1-ClientType component. The problem is when the server restarts in development mode, the state.clients = [] again and there's no way to call the function again without going back to '/' and clicking the 'Existing Client' paper. I need to figure out a better way to request the existing clients array and populate the array in state.", status: true, solution: "I'm checking if the array.length is 0, and calling the fetch again if it is"},
    {text: "Routing ('/new-client'): when should I start posting information to the database?", status: true, solution: "I'm going to post all the information needed for my clients table and post at once. FunctionalAssessment and Equipment selections are going to come later."},
    {text: "Login route for users to access their dashboard. I'm hesitant to move forward until I understand security measures better. For now, I'm only going to focus on ATP logins and their dashboard. I'm using server-side authentication, but I don't really understand how it works. I'm prioritizing this because I need time to digest and ensure proper security measures are in place early on. This is the greatest challenge I face right now.", status: false}
]

const About = () => {

    const classes = useStyles();

    const [vision, openVision] = React.useState(false);
    const [goals, openGoals] = React.useState(false);
    const [future, openFuture] = React.useState(false);
    const [challenges, openChallenges] = React.useState(false);
  
    const handleClick = (num) => {
      if(num === 0){
        openVision(!vision);
      }  
      if(num === 1){
        openGoals(!goals);
      }  
      if(num === 2){
        openFuture(!future);
        console.log('future =' + future)
      }  
      if(num === 3){
        openChallenges(!challenges);
        console.log('challenges =' + challenges)
      }  
    };


    return(
        <Container>
            <Typography align='left' variant='h4'>About DME4Me</Typography>


            <List className={classes.root}>

{/* start of the vision section */}

            <ListItem button onClick={() => handleClick(0)}>
                <ListItemIcon>
                    <VisibilityIcon fontSize='large' />
                </ListItemIcon>
                <ListItemText primary="Vision" secondary="The idea behind the app and how it works" />
            </ListItem>
            <Collapse in={vision} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                {visionDescription.map((item, index) =>
                <ListItem key={index} className={classes.nested}>
                    <ListItemText primary={item} />
                </ListItem>
                )}
                </List>
            </Collapse>


{/* start of the goals section */}

            <ListItem button onClick={() => handleClick(1)}>
                <ListItemIcon>
                    <AccessibleForwardIcon fontSize='large' />
                </ListItemIcon>
                <ListItemText primary="Goals" secondary="What we aim to accomplish" />
            </ListItem>
            <Collapse in={goals} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                {goalsDescription.map((item, index) =>
                <ListItem key={index} className={classes.nested}>
                    <ListItemText primary={item.text} />
                </ListItem>
                )}
                </List>
            </Collapse>


{/* start of future additions section */}

            <ListItem button onClick={() => handleClick(2)}>
                <ListItemIcon>
                    <AssessmentOutlinedIcon fontSize='large' />
                </ListItemIcon>
                <ListItemText primary="Future Additions" secondary="What we are working on next" />
                {future ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={future} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                {futureAdditionsList.map((item, index) =>
                !item.status &&
                <ListItem key={index} className={classes.nested}>
                    <ListItemIcon>
                        <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                </ListItem>
                )}
                </List>
            </Collapse>

{/* start of challenges section */}

            <ListItem button onClick={() => handleClick(3)}>
                <ListItemIcon>
                    <ErrorOutlineOutlinedIcon fontSize='large' />
                </ListItemIcon>
                <ListItemText primary="Challenges" secondary="The road to success is never easy. Here is a list of current challenges and obstacles we overcame" />
                {challenges ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={challenges} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                {challengeList.map((item, index) => (
                    item.status ? 
                    <ListItem key={index} className={classes.nested}>
                        <ListItemIcon>
                            <DoneOutlineOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary={item.text} secondary={item.solution}/>
                    </ListItem> 
                    :
                    <ListItem key={index} className={classes.nested}>
                    <ListItemIcon>
                        <CancelPresentationOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={item.text} />
                    </ListItem> 
                ))}
                </List>
            </Collapse>

            </List>
        </Container>
    )
};

export default About;