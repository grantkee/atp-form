## Info

DME project for Cap Stone Final ACA

## Project Instructions

Create an efficient system for Assistive Technology Professionals (ATP) to gather the necessary information insurance requires for specific pieces of Durable Medical Equipment (DME). 

#### Current Issues

* The order of '/clients' and '/clients/:id' in the React Router matters, and I'm not sure if there's a better way to include this. I'm concerned about user experience when hitting backspace

* I want the Navigation component located in App.js to unmount when the user visits /atp-dashboard

* props.fetchClients() is returning an object that goes into my clients=[] in the state.js folder. In order to map over the information, I have to use props.clients[0].map(). //try reviewing 311_wk2_day1 to see how they export the array in the exercise

* Where should I store my photos? I use one in the Measurement component, but I'm not sure if I should use 'require' or 'import'

* How can I use .env files to protect my database instance? Trying process.env.REACT_APP_CLOUD_INSTANCE returned undefined everytime.

<!-- * I've tied the fetchClients() action 1-ClientType component. The problem is when the server restarts in development mode, the state.clients = [] again and there's no way to call the function again without going back to '/' and clicking the "Existing Client" paper. I need to figure out a better way to request the existing clients array and populate the array in state.  --> I'm checking if the array.length is 0, and calling the fetch again if it is

<!-- * Routing ('/new-client'): when should I start posting information to the database? --> I'm going to post all the information needed for my clients table and post at once. FunctionalAssessment and Equipment selections are going to come later.



#### Future Additions

* Use API http://icd10api.com/ to save diagnosis ICD 10 codes. Will help fill out other additional details about the code.

* Collect date and setState of date on FunctionalAssessment to add logic component: If the last assessment was less than 30 days ago, we don't need to do it again. Mostly helpful if doing multiple pieces of equipment at the same time.

* Search function for client list: DOB, first_name, last_name, etc. 

* Ability to search DME equipment and obtain manufacturer information

#### Name Ideas

* DME Hassle Free
* DME4Me
* DME & ME
* QUICKFiL
* Cache Client