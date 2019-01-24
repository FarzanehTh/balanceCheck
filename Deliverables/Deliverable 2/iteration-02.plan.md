# iteration-02.plan
# BalanceCheck / Team 14

## Iteration 02
  
* Start date: Tue Oct/16/2018
* End date: Fri Nov/2/2018
  
# Process
  
  
### Roles & responsibilities 

##### Roles:
-   **Senior Frontend Developer:** Marco.
-   **Frontend Developers:** Naz, Marina
-   **Senior Backend Developer:** Galex.
-   **Backend Developers:** Farzaneh, Josh.
-   **Product Management:** Consensus.

##### Responsibilities:
**Frontend** will create and implement the look and feel of the site, using the frameworks chosen by the team.

**Backend** oversee the design and operation of the diffrent databases, writing the codebase of the site, and ensuring the information remains secure.

**Product Management** includes the content, style, features, and user experience of the product.
  

### Events

Meetings will continue allong the shedule set out in the previous iteration, as this has worked well and was acessible to most.

 * Weekly, 2hr, full-team meeting every Friday in BA3200.
 * Weekly scrum at the tutorial to review weekly goals.
 * Coding sessions coordinated by teams once goals are set.
 * Online communication via Messenger to setup new meetings / adjust weekly goals.

### Artifacts

#### Trello
   * Keeps track of tasks and goals in iteration.
   * Used as a Kanban task board.
   * Assigned to relevant team by color and label.
   * Prioritized by listing.
   * Team leaders decide on taks assignment within their team.

#### hackMD
   * Allows for simultaneous collaboration of markdown documents, which speeds up the planning and review stages.

#### Google Drive
   * Easy-to-use space for sharing ideas, design elements, editing text content for the site, and other miscellaneous files.
   * Useful for quick, simultaneous brainstorming on a shared page.

#### Facebook Messenger
   * Used as a communication board.


### Git / GitHub workflow

   * **All** coding is to be done on branches.
   * Anyone may create a branch, and issue a pull request.
   	
    ** Create a branch for every task:
    - git checkout -b [branch-name]
    - make your changes, add your changes, commit
    - git checkout master
    - git pull
    - git checkout [branch-name]-
    - git rebase master
    - git push
    - Go to github, and make a pull request, we'll review the code and merge to master
  
   *   **Only** the team leaders merge to master after reviewing the code with the branch author.
   * Emphasis is placed on concise, single-purpose commits, and clear naming of branches.


This simplistic workflow was chosen since the code aspect of our project usually will not require large amounts of complexity, and we wanted to make sure all team members are able to work on the project should they feel the whim. 

As long as the pull requests are issued thoughtfully, and reviewed responsibly, this workflow should help avoid confusion between the teams.


  
### Goals and tasks 

**General**
* Have a working frontend
* Define database and backend structure
* Demo video

**Frontend**
* Define views
    * Homepage - the landing page, also the entry point for the application
        * Article Card - title, rating, url, author and "read more" button
        * Search bar + button, allow user to search article by title/url
        * (maybe) Topic card for categorizing article cards
        * (maybe) Search by rating/topic/author
    * Aboutpage - Descrition about our product and team members 
* General
    * Apply a design and a theme for the site.
    * Header and footer


**Backend**
* Define and implement database schema.
    * Design functions to access & update data.
    * (maybe) Choose & implement decay algorithm for hotness rating.
* (maybe) Design user page and login page.
    * (maybe) Login with google / Facebook.
* Having working Docker container by fixing Django and data-base settings
* Designing all end points of the app and defining related functions in Django veiws


**Database**
* Description of Schema, with relations and attributes.
* Initialise DB
* Initial thoughts on models of DB are as follows:
> ### Entities:
> Topic - A topic is unique and can have one or more artcles
> Article - An article is a url
> Tags - Key words to a topic
> Title - The title of an article
> 
> ### Users
> **Attributes:**
> username
> password
> email
> 
> **Functions:**
> Create account
> Delete account
> Comment
> Rate
> 
> ### Topic
> **Attibutes:**
> Tags
> Topic name
> Date
> 
> **Functions:**
> Create - Users can create a topic
> Add article - Users can add link to a topic
> Comment - Users can comment on a topic
> Upvote downvote - Users can upvote downvote a topic
> 
> ### Articles
> 
> **Attributes:**
> Score - An article has a score in terms of its biasness
> Title - Each article has a title
> Author 
> Date 
> url - A url that links to the article
> Source - Include a source
> 
> **Functions:**
> Rate Article - Users can rate an article

**User Experience**
* User stories on the trello task board.

**Demo Video Guideline**
* Define a problem
* Possible solution -> introduction to our product
* Formal introduction
* Frontend demo
* Summary

  
### Artifacts
    
List/describe the artifacts you will produce in order to present your project idea.

 * Working alpha stage of the webapp(BalanceCheck) to portray the usage of the site.
     * With example data, such as articles and users.
     * Able to show the search and vote process.
 * Video delivarable explaining the site and showcasing the above usage.
 * (maybe) Upload the example site to a public server to allow anyone interested to have a look at the site and see how it would work.

