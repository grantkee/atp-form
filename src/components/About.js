import React from 'react';

const About = () => {
    return(
        <>
        
<h2 id="info">Info</h2>
<p>DME project for Cap Stone Final ACA</p>
<h2 id="project-instructions">Project Instructions</h2>
<p>Create an efficient system for Assistive Technology Professionals (ATP) to gather the necessary information insurance requires for specific pieces of Durable Medical Equipment (DME).</p>
<h4 id="notes-to-continue">Notes to continue</h4>
<ul>
<li>I need to control the day/month/year inputs on the NewClient component so that I can enter the data in correctly using mySql. I should drop downs and use the autocomplete feature. That way I can control the formatting when I send it to the server.</li>
</ul>
<h4 id="current-issues">Current Issues</h4>
<ul>
<li><p>NewClient component will only setState of the Medicare/Medicaid/Private checkboxes once to true and once to false. After that, they stay false. Also, if marked true then false again, the TextField stays open. I even tried turnary operator, still nothing. I think it's because it's not re-rendering onClick.</p></li>
<li><p>The order of '/clients' and '/clients/:id' in the React Router matters, and I'm not sure if there's a better way to include this. I'm concerned about user experience when hitting backspace. Backspace is definitely not working.</p></li>
<li><p>I want the Navigation component located in App.js to unmount when the user visits /atp-dashboard</p></li>
<li><p>props.fetchClients() is returning an object that goes into my clients=[] in the state.js folder. In order to map over the information, I have to use props.clients[0].map(). //try reviewing 311_wk2_day1 to see how they export the array in the exercise</p></li>
<li><p>Where should I store my photos? I use one in the Measurement component, but I'm not sure if I should use 'require' or 'import'</p></li>
<li><p>How can I use .env files to protect my database instance? Trying process.env.REACT_APP_CLOUD_INSTANCE returned undefined everytime.</p></li>
</ul>
<p>// * I've tied the fetchClients() action 1-ClientType component. The problem is when the server restarts in development mode, the state.clients = [] again and there's no way to call the function again without going back to '/' and clicking the "Existing Client" paper. I need to figure out a better way to request the existing clients array and populate the array in state.  --> </p>
<p>I'm checking if the array.length is 0, and calling the fetch again if it is</p>
<p>// * Routing ('/new-client'): when should I start posting information to the database? --> </p>
<p>I'm going to post all the information needed for my clients table and post at once. FunctionalAssessment and Equipment selections are going to come later.</p>
<h4 id="future-additions">Future Additions</h4>
<ul>
<li><p>I want to handle my fetching more properly by adding a begin/succes/failure response in my redux actions. https://daveceddia.com/where-fetch-data-redux/</p></li>
<li><p>Use API http://icd10api.com/ to save diagnosis ICD 10 codes. Will help fill out other additional details about the code.</p></li>
<li><p>Autoformat the date input on new clients</p></li>
<li><p>Collect date and setState of date on FunctionalAssessment to add logic component: If the last assessment was less than 30 days ago, we don't need to do it again. Mostly helpful if doing multiple pieces of equipment at the same time.</p></li>
<li><p>Search function for client list: DOB, first_name, last_name, etc. Review this article https://hub.packtpub.com/implementing-autocompletion-in-a-react-material-ui-application-tutorial/</p></li>
<li><p>Ability to search DME equipment and obtain manufacturer information</p></li>
</ul>
<h4 id="name-ideas">Name Ideas</h4>
<ul>
<li>DME Hassle Free</li>
<li>DME4Me</li>
<li>DME &amp; ME</li>
<li>QUICKFiL</li>
<li>Cache Client</li>
</ul>
<h5 id="further-readings">Further Readings</h5>
<ul>
<li>https://blog.logrocket.com/react-redux-connect-when-and-how-to-use-it-f2a1edab2013/</li>
</ul>
</>
    )
};

export default About;