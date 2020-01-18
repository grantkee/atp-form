## Info

DME project for Cap Stone Final ACA

## Project Instructions

Create an efficient system for Assistive Technology Professionals (ATP) to gather the necessary information insurance requires for specific pieces of Durable Medical Equipment (DME). 

#### Current Issues

* props.fetchClients() is returning an object that goes into my clients=[] in the state.js folder. In order to map over the information, I have to use props.clients[0].map(). //try reviewing 311_wk2_day1 to see how they export the array in the exercise

* I've tied the fetchClients() action 1-ClientType component. The problem is when the server restarts in development mode, the state.clients = [] again and there's no way to call the function again without going back to '/' and clicking the "Existing Client" paper. I need to figure out a better way to request the existing clients array and populate the array in state. 

* Where should I store my photos? I use one in the Measurement component, but I'm not sure if I should use 'require' or 'import'

* Routing ('/new-client'): when should I start posting information to the database? 

#### Future Additions

* Collect date and setState of date on FunctionalAssessment to add logic component: If the last assessment was less than 30 days ago, we don't need to do it again. Mostly helpful if doing multiple pieces of equipment at the same time.

* Search function for client list: DOB, first_name, last_name, etc. 

* Ability to search DME equipment and obtain manufacturer information

#### Name Ideas

* DME Hassle Free
* DME4Me
* DME & ME
* QUICKFiL
* Cache Client