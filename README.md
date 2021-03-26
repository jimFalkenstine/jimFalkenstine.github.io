# spyros_adventure_checklist
<h1>Skylanders: Spyro's Adventure Checklist</h1>
<p>A web-based checklist to keep track of figures from the Skylanders: Spyro's Adventure video game.</p>

<h2>Intro</h2>
<p>This is my Final Project for Code Louisville's January 2021 Front End Web Development Session.  For my project, I chose to create an interactive web-based checklist for collectors of figures related to the Skylanders: Spyro’s Adventure video game.  The checklist is divided into three main sections: Core Skylanders, In-Game Variants, and Magic Items.  When the checklist is loaded, an image of each figure is shown at 50% opacity.  Underneath each image is the name of the figure and a checkbox displayed in gray.  When a figure’s checkbox is clicked/checked, the figure’s image is displayed at 100% opacity and a message is displayed in bold stating the user owns that figure.  When the checkbox is clicked again/unchecked, the figure’s image returns to 50% opacity and the message is hidden.</p>

<h2>CSS Feature #1</h2>
<p>I created a responsive navigation menu using Flexbox.  At screen sizes smaller than 768 pixels, the navigation menu has a flex-direction of column and is displayed vertically.  At 768 pixels, I created a media query that changes the flex-direction of the menu to row and justify content to space-between.</p>

<h2>CSS Feature #2</h2>
<p>I used Flexbox to organize the content on my page.  My page consists of 3 sections.  I made each section a flex container by giving it a display of flex.  Using a mobile first approach, each content section has an initial flex-direction of column.  So on smaller screens each content section has a single column layout .  At 768 pixels, each content section switches flex-direction to row and has a flex-wrap of wrap.  Each content section now has a 3 column layout.  At 1025 pixels, the Core Skylanders and In-Game Variants sections expand to 4 columns while the Magic Items section stays at 3 columns.</p>

<h2>JavaScript Feature #1</h2>
<p>I created three JavaScript Objects and stored them in the characters.js file.  Each object contains the name of each figure, the figure’s image path, and figure’s index value.  I used the objects to dynamically render content to my web page.</p> 

<h2>JavaScript Feature #2</h2>
<p>I created 4 JavaScript Functions.  The first three functions dynamically add HTML to my web page and are called when the page loads.  The fourth function is called when a user clicks on the checkbox beneath the image of a figure.  The function changes the opacity of the image to “1” and displays a hidden message to the user stating he has the figure.  When the checkbox is clicked again, the message is hidden and the opacity of the image reverts back to “0.5”.</p>

<h2>JavaScript Feature #3</h2>
<p>I created 3 JavaScript loops to dynamically add HTML to my web page.  Each loop is a for loop.  A for loop is included in each of the three JavaScript Functions I used to dynamically add content to my page.  Each for loop iterates over one of the three JavaScript Objects I created.</p>

<h2>JavaScript Feature #4</h2>
<p>I created twelve JavaScript Variables.  Nine variables were used in my three JavaScript functions to dynamically add HTML Content.  I used three variables in creating the JavaScript function involving each figure’s checkbox.</p>  

<h2>JavaScript Feature #5</h2>
<p>When the user clicks/checks the checkbox next to the name of a figure, a hidden message is shown stating the user owns the figure.  The message is hidden again if the checkbox is clicked again/unchecked.</p>
