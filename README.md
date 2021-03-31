# spyros_adventure_checklist
<h1>Skylanders: Spyro's Adventure Checklist</h1>
<p>A web-based checklist to keep track of figures from the Skylanders: Spyro's Adventure video game.</p>

<h2>Intro</h2>
<p>This is my Final Project for Code Louisville's January 2021 Front End Web Development session.  For my project, I chose to create an interactive web-based checklist for collectors of figures related to the Skylanders: Spyro’s Adventure video game.  The checklist is divided into three main sections: Core Skylanders, In-Game Variants, and Magic Items.  When the checklist is loaded, an image of each figure is shown at 50% opacity.  Underneath each image is the name of the figure in gray along with a checkbox. When a figure’s checkbox is clicked/checked, a box pops up showing the figure at 100% opacity along with a message stating that the user has the figure.  When the checkbox is clicked again/unchecked, the figure’s image returns to 50% opacity and the box with the message is hidden.</p>

<h2>CSS Feature #1</h2>
<p>I created a responsive navigation menu using Flexbox.  At screen sizes smaller than 768 pixels, the navigation menu has a flex-direction property with the value of column.  Thus, the navigation menu is displayed vertically.  At 768 pixels, I created a media query that changes the flex-direction property of the navigation menu to the value of row.  I also gave the navigation menu the property of justify-content with the value of space-between.</p>

<h2>CSS Feature #2</h2>
<p>I used Flexbox to organize the content on my page.  My page consists of 3 sections.  I made each section a flex container by setting each section's display property to the value of flex.  Using a mobile first approach, each content section has an initial property of flex-direction with the value of column.  So on smaller screens each content section has a single column layout.  At 768 pixels, each content section's flex-direction property is changed to row.  Each section is also given a flex-wrap property with the value of wrap.  Now each content section has a 3 column layout.  At 1025 pixels, the Core Skylanders and In-Game Variants sections expand to 4 columns while the Magic Items section stays at 3 columns.</p>

<h2>JavaScript Feature #1</h2>
<p>I created three JavaScript Objects and stored them in the characters.js file.  Each object contains the name of each figure, the figure’s image path, and the figure’s index value.  I used the objects to dynamically render HTML to my web page.</p> 

<h2>JavaScript Feature #2</h2>
<p>I created 4 JavaScript Functions.  The first three functions dynamically add HTML to my web page and are called when the page loads.  The fourth function is called when a user clicks on the checkbox beneath the image of a figure.  The function changes the opacity of the image to “1” and displays a hidden message box stating the user has the figure.  When the checkbox is clicked again, the message box is hidden and the opacity of the image reverts back to “0.5”.</p>

<h2>JavaScript Feature #3</h2>
<p>I created 3 JavaScript For Loops to dynamically add HTML to my web page.  Each for loop iterates over one of the three JavaScript Objects I created.</p>

<h2>JavaScript Feature #4</h2>
<p>I created twelve JavaScript Variables.  Nine variables were used in my three JavaScript functions to dynamically add HTML Content.  I used three variables in creating the JavaScript function involving functionality related each figure’s checkbox.</p>  

<h2>JavaScript Feature #5</h2>
<p>When the user clicks/checks the checkbox next to the name of a figure, a hidden message box is shown stating the user owns the figure.  The message box is hidden again if the checkbox is clicked again/unchecked.</p>