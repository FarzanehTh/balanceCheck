# iteration-03.plan
# BalanceCheck / Team 14


## Iteration 3

 * **Start date:** 13/11/18.
 * **End date:** 30/11/18.

## Process

#### Introduction

In the final iteration, the primary task ahead of us is the completion of finishing touches to the components of each layer, and the integration of all layers via endpoints. 

During the planning meeting, we clarified the components of the MVP for BalanceCheck, and made some changes to our workflow.

This document summarizes the changes made in order to help achieve these goals.

### Changes from previous iteration

 * We decided to allocate a portion of each meeting to clarifications about the endpoints and specifications of the methods which connect different parts of the app.
     * We decided to add this segment because it had become difficult to keep track of some of the different methods, which became a damper on efficiency during coding sessions, since these are usually done within the different teams.
     * By ensuring a specific time frame was designated for this purpose, we hoped that it would encourage questions which team members might have been afraid to ask during the meeting.
     * This decision would be supported by less confusion and more productive coding sessions, especially with the endpoints. 

 * During the planning meeting, we performed a thorough review of our workflow practices. 
     * This was done in light of a few minor incidents in which a non-lead merged a PR causing conflicts, or when cards were incorrectly removed from the Trello board.
     * The team walked through the stages of proper GitHub procedure, and Trello responsibilities were clarified (who creates tasks, who progresses cards, etc.).

## Roles & responsibilities
| Note |
| -------- | 
| Roles were slightly revised from the last iteration. Database was folded into the backend as most access was taking place from within the Django backend. |


#### Roles:
-   **Frontend Developers:** **Marco,**  Naz, Marina
-   **Backend Developers:** **Galex,** Farzaneh, Josh.
-   **Product Management:** Consensus.

**Bold** indicates senior developer (see below).

#### Responsibilities:
**Frontend** create and implement the look and feel of the site, using the frameworks chosen by the team.

**Backend** oversee the design and operation of the different databases, writing the codebase of the site, and ensuring the information remains secure.

**Product Management** includes the content, style, features, and user experience of the product.

**Senior developers** oversee the merging of pull requests, and perform code review.
  

### Events
| Note |
| -------- | 
| Meetings will continue along the schedule set out in the previous iteration, as this has worked well for the team. |



 * Weekly, 2hr+, full-team meeting every Friday in BA3200.
 * Weekly scrum at the tutorial to review weekly goals.
 * Coding sessions coordinated within the teams once goals are set.
 * Online communication via Messenger to setup new meetings / adjust weekly goals.
 * A single iteration meeting to film and record content for demo video

### Artifacts


#### [Trello](https://trello.com/b/aTQmNo7I/csc301) - (now view-able 😅) 
   * Keeps track of tasks and goals in iteration.
   * Used as a Kanban task board.
   * Assigned to relevant team by color and label.
   * Prioritized by listing.
   * Team leaders decide on task assignment within their team.

#### hackMD
   * Allows for simultaneous collaboration of markdown documents, which speeds up the creation of the planning and review documents.

#### Google Drive
   * Easy-to-use space for sharing ideas, design elements, editing text content for the site, and other miscellaneous files.
   * Useful for quick, simultaneous brainstorming on a shared page.

#### Facebook Messenger
   * Used as a communication board, primarily to set team meetings, or other urgent team-wide communication.

#### Readme
   * Contains basic instructions for certain technical features the group is implementing
   * This includes installation instructions, and starter guide for using docker

#### Paper Prototypes.
   * Several master sketches were extremely helpful in describing and organizing the structure and components of the final webapp:
       * [Gallery of paper wireframes/prototypes](https://drive.google.com/drive/folders/1NgTd0tAVr2rIYr0VN8xHMLv6bhVzjICb?usp=sharing)



#### Git / GitHub workflow

| Note |
| -------- | 
| The workflow is pretty much unchanged from the previous iteration, as it has worked very well for the team.  A review of the workflow was conducted during the planning meeting.  |


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
  
   *   Any group member can merge to master, after reviewing the code with the branch author.
   * Emphasis is placed on concise, single-purpose commits, and clear naming of branches.


This simplistic workflow was chosen since the code aspect of our project usually will not require large amounts of complexity, and we wanted to make sure all team members are able to work on the project on a whim without fear of merge problems. 

As long as the pull requests are issued thoughtfully, and reviewed responsibly, this workflow should help avoid confusion between the teams.


## Product

### Goals and tasks

**General**
* Have a working frontend
* Define database and backend structure
* Connecting frontend and backend
* Demo video
* Chrome Extension (maybe)
* User login


**Frontend**
* Finish up views:
    * Homepage.
      * Change search button to create article
      * Add a suggestion notification for no article result
* Article Card 
    * Improve visuals and display the vote in a color coordinated bar graph
* Article Page
    * Title, author, text, link to article and "vote now" button
        * Create vote card with category voting feature
* Add Article
    * Text field with add article button that creates an article into DB from a valid url


**Backend**
* Working user login and session.
    * Working user data update.
    * Login with Google / Facebook. (maybe)
* Finish all end points of the app and define related functions in Django views
    * Implement methods to query & update DB.
    * Make sure all methods are securing updating or getting data for DB by using appropriate responses.



### Artifacts


 * Working website.
     * Hosted locally on a team member's machine.
     * Operates with all functionalities set out in MVP.
         * Search, Add, Check, Vote.
         * Scraper populates article data on Add.
     * Finalized Design.
         * Graphics and views display correctly.
         * No dead links.
 * Video deliverable showcasing website usage.
     * Showcasing user personas performing different uses of app.
     * Clear and to the point.
