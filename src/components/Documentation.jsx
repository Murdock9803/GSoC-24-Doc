import React from "react";
import Accordion from "./Accordion";
import TagAccordion from "./TagAccordion";
import MarkdownRenderer from "./MarkdownRenderer";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const week123md = `
## Environment, Code & Ideation - Weeks 1, 2 & 3

These were the initial weeks of the project which went into testing the development environment, planning upcoming UI changes and getting acquainted with the working process.  Firstly, my project mentor [Sara](https://opensource.creativecommons.org/blog/authors/sara/) guided me through my first contribution in the coding period. I was granted member status at the Creative Commons Organization on GitHub, which was both new and exciting for me.

The key achievements were:

- [PR#266](https://github.com/creativecommons/cc-resource-archive/pull/266) - Updated the docker-compose.yml file to the current spec. With the help of my mentor, I opened this first pull request in the coding period. The file was out of specification, as the version element at the top of docker-compose.yml file was just informative.
- [Testing Docker Configurations](https://github.com/creativecommons/cc-resource-archive/pull/279): With immense help from mentors Sara and Timid Robot, I got the Docker environment ready for development.
- Learned more about [Jekyll](https://jekyllrb.com/docs/) and read the [Vocabulary](https://github.com/creativecommons/vocabulary) code. Got familiar with classes in vocabulary.css and the custom CSS variables in library-vars.css. 
- Accessibility Improvements: Learned about keyboard navigability and optimizing the website for better accessibility using semantic HTML and appropriate CSS properties.
- Issue Listing: Identified and listed relevant issues related to semantic code and UI changes. Also added some issues as a to-do list, as suggested by my mentor.
- Reviewed the present structure of the files, and worked on ideas to improve the structure for better understandability and grouping of similar files.

At the end of these initial weeks, I realized that I have spent enough time on understanding the code and planning on things. But as my mentor suggested, things will get smoother once we start working on them practically. So I decided to increase the pace of work in the upcoming weeks to get the planned tasks executed.
`;

const week456md =`
## Execution, Updation & Refactor - Weeks 4, 5 & 6

As the midterm evaluation approached, we held weekly review meetings to plan changes and contributions. The pace picked up in weeks 5 and 6, resulting in several presentable pull requests dedicated to UI changes and code refactoring. Notable tasks executed include:

### Improving File Structure

With discussion with my mentor, I improved the file structure in the codebase for better understandability and maintainability. After updating the structure, the paths to all the files that were changed were modified.  This was achieved by a group of Pull Requests that were created catering to the issue. The pull requests were:

- [PR#280](https://github.com/creativecommons/cc-resource-archive/pull/280) - Adds footer.html to the _includes directory.
- [PR#281](https://github.com/creativecommons/cc-resource-archive/pull/281) - Includes footer.html to all the pages of the site.
- [PR#282](https://github.com/creativecommons/cc-resource-archive/pull/282) - Shifted an-explanation-of-creative-commons to _resources.
- [PR#289](https://github.com/creativecommons/cc-resource-archive/pull/289) - Improves the file structure in the codebase.
- [PR#292](https://github.com/creativecommons/cc-resource-archive/pull/292) - Updates the paths to downloadable resources and PDFs.
- [PR#296](https://github.com/creativecommons/cc-resource-archive/pull/296) - Updated the resource-template with new paths for images.

### Listing Page UI Changes

The listing.html page is responsible for the display of resource cards on the index.html and all.html pages. The resource cards had an outdated visual setup and needed to be aligned with the Internal Design System of Creative Commons known as Vocabulary. 
Through the [PR#298](https://github.com/creativecommons/cc-resource-archive/pull/298), I performed the following tasks:

- Refactored the html structure of the resource card to IMAGE - TITLE - BLURB.
- Utilizing vocabulary, enhanced the style for thumbnail list in listing.html. Worked on the grid structure in style.css.
- Likewise, worked on enhancing style for the thumbnail box, thumbnail title, thumbnail image and thumbnail blurb.
- Worked on Fonts, colors, background colors, etc. according to vocabulary.
- Assigned properties like --underline-background-color from vocabulary into style.css.
- Formatted the style.css and listing.html files with prettier.
- Fixed the responsiveness of the resource cards.
- Added Documentation in style.css for understandability.

And through the [PR#302](https://github.com/creativecommons/cc-resource-archive/pull/302), the following tasks were completed:
- Added a heading to the page.
- Added clear documentation about various sections in the file.
- Formatted the code with prettier code formatter.

All these changes gave the website a new look, aligning more closely with the standard Creative Commons design schemes.

### Listing Page (All) Javascript Changes

The javascript code in listing.html file resided in the <head> section of the page. The code was outdated and was lacking the ES6 Javascript concepts. For example, there were uses of var keyword, document.write() method, etc.. The code was responsible for a number of tasks related to the display of resources. It extracted the user-selected categories from the URL and then returned them as variables. Also, the javascript code was responsible for displaying the resources which contained the selected categories. 
Through the [PR#300](https://github.com/creativecommons/cc-resource-archive/pull/300), the following tasks were completed:

- Updated the functions and code to follow ES6 javascript concepts.
- Replaced the document.write() method with Document Object Manipulation. The document.write() is old and not preferable.
- Utilized the javascript DOM for all the tasks related to filtering of resources in listing.js.
- Assigned checks to the categories selected by the user (which are extracted through the URL), sanitizing the input and preventing any attacks on the website.
- Added proper documentation for all the functions and sections of code for better understandability.

### Resource Page UI Changes

The resource page is a layout to show various resources that are submitted in the resource archive. This layout page accepts values from the front matter of various resources. This page was overall enhanced in terms of alignment to Creative Commons’ Design System. 
The [PR#304](https://github.com/creativecommons/cc-resource-archive/pull/304) performs the following tasks:

- Refactors the whole code for resource.html page by implementing semantic HTML.
- Improves the styling of the page in styles.css, by utilizing vocabulary.
- Makes the page responsive. 
- The inspiration is drawn from the [Vocabulary Blog Post Page](https://vocabulary-docs.netlify.app/specimen/contexts/blog-post.html).

These three weeks saw the most significant work being merged, resulting in a refreshed interface. Despite a slow start, consistent effort and mentor support helped me catch up by the midterm evaluation, making these weeks a great learning experience.
`;

const issueTillMidmd =`
## Issues Solved Till MidTerm

The issues relevant to the project which have been solved until now are listed below:

- [#17](https://github.com/creativecommons/cc-resource-archive/issues/17) - upgrade JS code in listings.html
- [#176](https://github.com/creativecommons/cc-resource-archive/issues/176) - make thumbnails responsive
- [#242](https://github.com/creativecommons/cc-resource-archive/issues/242) - add footer in submission and resource pages
- [#265](https://github.com/creativecommons/cc-resource-archive/issues/265) - The docker-compose.yml file currently out of spec
- [#267](https://github.com/creativecommons/cc-resource-archive/issues/267) - Improve documentation for Dockerfiles
- [#269](https://github.com/creativecommons/cc-resource-archive/issues/269) - relocate footer code to separate file ‘footer.html’ for reuse
- [#273](https://github.com/creativecommons/cc-resource-archive/issues/273) - Resource file in the wrong location
- [#276](https://github.com/creativecommons/cc-resource-archive/issues/276) - Inconsistent docker behavior - Parsing Gemfile
- [#283](https://github.com/creativecommons/cc-resource-archive/issues/283) - Unnecessary google analytics function in listing.html
- [#285](https://github.com/creativecommons/cc-resource-archive/issues/285) - Unnecessary google analytics function in resource and submission.html
- [#287](https://github.com/creativecommons/cc-resource-archive/issues/287) - The file structure in the codebase can be improved. (re-structuring)
- [#288](https://github.com/creativecommons/cc-resource-archive/issues/288) - The style.css file is not properly organized and lacks documentation
- [#290](https://github.com/creativecommons/cc-resource-archive/issues/290) - The download [pdf] file links at bottom of resources aren't working
- [#293](https://github.com/creativecommons/cc-resource-archive/issues/293) - The resourcetemplate.md needs to be updated.
- [#297](https://github.com/creativecommons/cc-resource-archive/issues/297) - Change the design of resource cards on homepage using vocabulary
- [#165](https://github.com/creativecommons/cc-resource-archive/issues/165) - section heading for resource cards
- [#301](https://github.com/creativecommons/cc-resource-archive/issues/301) - Add proper documentation to listing.html, refactor for structure
- [#101](https://github.com/creativecommons/cc-resource-archive/issues/101) - Organize code with proper indentation
- [#41](https://github.com/creativecommons/cc-resource-archive/issues/41) - UI/UX for resource page
- [#272](https://github.com/creativecommons/cc-resource-archive/issues/272) - unwanted underline in the resource page
`;

const week789md =`
## Completing The Timeline Tasks - Weeks 7, 8 and 9

These three weeks were planned with the aim of completing the timeline tasks to focus on further goals of the projects. The UI-related tasks included Submission page, A guide for the newcomers to submit resources, and working on the filters.

### Submission Page UI Changes

The submission.html page is responsible for the area where contributors come to contribute to the resource archive with their resources about Creative Commons or Open sharing of knowledge in general. 
With the help of the [PR#315](https://github.com/creativecommons/cc-resource-archive/pull/315), The following tasks were performed : 
- adds a new context to the element, named submit-page.
- refactors the whole html code for submission.html with semantic code.
- makes the page responsive, by adding media queries wherever needed.
- adds a step by step written guide including images, for submission of resource for new github users.
- ensures the page meets current CC aesthetics.
- adds documentation for better understanding and maintainability.
- formats the files with prettier code formatter.

### Submission guide For Newcomers

For people not familiar with GitHub or Opening Pull Requests on GitHub, a comprehensive guide was added with step by step process to submit a resource to the resource archive. The guide included instructions to fork, clone the repository and also Open the PR by committing to the repository. This was accompanied with well-labeled images for better understandability. This work was achieved with the help of [PR#315](https://github.com/creativecommons/cc-resource-archive/pull/315). This was the final addition to the submission.html page and the whole tasks related to this page were completed by this.

### Filters Placement and Functioning

The resource archive utilizes filters to select similar resources. These filters are grouped in the form of three categories, TOPIC, MEDIUM and LANGUAGE. Each category has some filter options to choose from. In the previous iteration of the resource archive site, the category filters were placed in the middle of the page, and they also did not have any icon for the indication of a selected filter. 
The [PR#316](https://github.com/creativecommons/cc-resource-archive/pull/316) makes the filters responsiveness, and more easy to access by performing the following tasks:
- adds semantic html to index.html and all.html
- removes the filters from index.html.
- removes inline styles from html pages.
- adds a new context to listing.html.
- works on the see-all-resources link.
- adds checkbox in place of [x] in category filters.
- makes the filters as a sidebar.
- makes the whole category filters responsive.
- Re-works on the media-query breakpoints.
- formats the code with prettier code formatter.
- adds documentation for the index.html, all.html and style.css files.

`;

const week101112md =`
## Stretch Goals And Ideation - Weeks 10, 11 and 12

After the completion of the tasks assigned in the timeline, we shifted the focus to the Stretch goals suggested in my proposal, and also by my mentor ([Sara](https://github.com/possumbilities)). There were 3 major goals that were considered for a discussion. These were, Implementation of Search Functionality through [Lunr.js](https://lunrjs.com/docs/index.html), Improving accessibility through the inclusion of [ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) attributes to the elements in the website, and The use of [GitHub API](https://docs.github.com/en/rest?apiVersion=2022-11-28) to automate the process of submission of resources to the site. Out of these three, the goals that were to be implemented were ARIA accessibility and LUNR.js search functionality. This was decided keeping in mind the scope of the project and the desired limit of complexity we wanted the site to have at this point.

### Aria Accessibility and Search Functionsality - LUNR.js

My mentor suggested that I read about WAI-ARIA accessibility to gain insights about the process and better select the number of attributes and features we need to implement. I studied about this thoroughly and also watched some videos on the topic. I realized about the importance of having these features in our site and how greatly they impact the accessibility for different users. 
Apart from this, we wanted to implement a search feature for the resources with the help of a lightweight searching library like LUNR.js. I started to read about the library and its execution process from various sources, majorly from the [LUNR Documentation](https://lunrjs.com/docs/index.html) present in their site. After reading it and a bit of panning, I started to code for this feature. The goal was to keep the UI similar to the CC Search feature present in the header of many Creative Commons sites.

`;

const issueTillEndmd =`
## Issues Solved From Midterm To End

The issues relevant to the project which have been solved in the period between midterm and final week are listed below:
- [#52](https://github.com/creativecommons/cc-resource-archive/issues/52) - use checkbox for resourcenavtopicknown
- [#61](https://github.com/creativecommons/cc-resource-archive/issues/61) - change UI of the homepage
- [#72](https://github.com/creativecommons/cc-resource-archive/issues/72) - UI refinement of the website
- [#119](https://github.com/creativecommons/cc-resource-archive/issues/119) - adding icon on filter text
- [#274](https://github.com/creativecommons/cc-resource-archive/issues/274) - Improve the UI of submission page with vocabulary
- [#306](https://github.com/creativecommons/cc-resource-archive/issues/306) - Language List Columns Collapsing on Website 
- [#310](https://github.com/creativecommons/cc-resource-archive/issues/310) - Add a step by step guide for submitting resources
- [#311](https://github.com/creativecommons/cc-resource-archive/issues/311) - html markup contains inline styles
- [#313](https://github.com/creativecommons/cc-resource-archive/issues/313) - improve mobile view layout for filter columns
- [#314](https://github.com/creativecommons/cc-resource-archive/issues/314) - remove extra white space between main content and footer
- [#318](https://github.com/creativecommons/cc-resource-archive/issues/318) - Links in submit page open on same page and spelling mistake-comapre

`;

const Documentation = () => {
  return (
    <div className="pt-[1px] -mt-12 pb-12 px-2 sm:px-10 bg-[#393E46]">

      <TagAccordion
        title="GSOC : PERSONAL INSIGHTS"
      />
      
      <Accordion
        title="Welcome Everyone! + Some Back Story"
        desc="Hello there, I welcome you to come along with me on this journey of self-realisation, Demotivation, hardwork and self-confidence. Let's start - In my freshman year at college, I had zero knowledge about Programming or how things work on the other side of the computer screen. One of my seniors then Introduced us to a program run by google - The Google Summer of Code. All I had grasped from that conversation was that to clear GSoC, one has to be very very good at coding, and Once you get selected, everyone will look upto you with immense respect (plus it pays really well). So, after thinking over it for some good amount of time (days maybe) I decided to finally..... quit the idea of clearing GSoC.

        Fast Forward to my 3rd year of college, Till this point I had experimented (did not become expert in all, but learned how to work with) with C++, Python and JavaScript. I made up my mind to pursue development. I realised that frontend development became my hobby and became good at it till this point. I found it interesting to achieve that 100% perfection by changing colors for minutes (sometimes hours, sometimes). Also, writing JavaScript logic became one of my favorite things. At around October 2023, I thought of reviving that old dream of getting selected to GSoC. I was fairly good with HTML, CSS, JavaScript and frameworks based on these (thanks to the projects I made), so the next step was to get familiar with version control systems. So, this started my journey of open source contributions. My first Pull Request on github got merged on October 7, 2023. I was overjoyed. After that, I made a <GSoC NoteBook> and started grabbing info about the program and strategies to get selected. I watched every video on GSoC available on youtube. Multiple times. I just wanted to not leave any room for mistake from my side.

        After shortlisting some orgs depending on my tech stack, I continued to contribute in various projects reading their big big codebases. Finally, I selected 1-2 final project(s) under orgs Creative Commons and Internet Health Report. I liked the main idea behind both of these organisations. The project with Creative Commons was made final as I knew about the organisation about 5 years ago and liked the idea of sharing of Open Knowledge. While contributing to Creative Commons, I made sure I am Communicating enough with the mentors and also with my fellow contributors. One thing was clear with me since the start : ITS ABOUT COLLABORATION, NOT COMPETITION. When the period to submit applications was near, I started making a draft of my application to get it reviewed by my mentor early. This was the most crucial aspect of my application- The Proposal pdf. I gave all my efforts into making this, with 7 days and sleepless nights, did not focus on any other activity at this time. After my proposal was ready, I was among the first guys to have their first draft of proposal ready. I did not send any incomplete proposal for review, I made sure my mentor does not have to work too hard to review it, So I made it as much detailed and good as I could. After some 2 or 3 rounds of suggestions by my mentor, I submitted the proposal. Even after submitting the proposal and while waiting for the results to come out, I did not leave the organisation. I tried to contribute and was actively looking at the github repository.

        At this point, I had gave most of my previous 6 to 7 months to GSoC. Moreover I became emotionally attached to it because It seemed to me as an opportunity to begin respecting myself again (in terms of studies and career) as in college I somewhat lagged behind my peers in academics due to the new shift from school to college. I was not able to figure it out like others, about what to pursue in the longer run. So yes, clearing GSoC became a very big deal for me, both emotionally and professionally. I informed my close friends about it, and was very nervous about the results. But, here comes one more task that I gave myself, to not get very depressed If I do not get selected, as I will not be having enough time to get sad. My internships season was on its way in 3-4 months and I had to do something this year to get that lost confidence back. With all these thoughts in mind, I waited for the final day of result. Some hindi (my mother tongue) phrases I used to say to myself - (Kaash ho jaaye GSoC) (Agar nahi bhi hua toh sambhaalna hai khudko) (Ho gaya toh sabse pehle mammi papa ko bataunga) (Chances toh hain hone ke, theek theek mehnat toh ki hai dekhte hain) (Agar ho gaya, toh acchhe se kaam karna hai). It became a really big deal for me."
      />

      <Accordion
        title="Congrats Ayush! you have been selected for <<<Google Summer of Code>>> with <<<Creative Commons>>>"
        desc="After waiting for nearly 20 days, On May 1, 1800 UTC I recieved an Email from <summerofcode.google.com> which had the Subject line - GSoC 2024: Congratulations! your proposal with Creative Commons has been accepted.

        I sat on the bed in my hostel room, and just reminisced all the moments in the previous 7 months. Those moments of self doubt, self motivation and what not. One of my friend was with me, He was also very happy about my selection but chose to keep calm. I called my parents and was just giggling in happiness all the time. For me, all those sleepless nights became worth it, when I was just trying to figure out the bug in my code. All the projects that I made to gain proficiency in development, worked for me. So this was the story till my selection to Google Summer of Code, will try to not get emotional (and be professional) while writing further chapters. I would like to thank my organisation, Creative Commons for giving me this opportunity to work on the project of my choice and considering me worthy enough. I have always recieved the required help and guidance from the mentors whenever needed. They were welcoming and easy to communicate with.

        PRO TIPS: (1) Start as early as possible (depending on your familiarity with open source). (2) If you couldn't start early, do work hard. By early I mean 7-8 months prior to application, If you are a complete beginner. (3) Start with the website repository of an organisation to sart solving easier issues first. (4) Have self confidence. (5) The most important, Be CONSISTENT."
      />

      <Accordion
        title="The Project I Am Working On"
        desc="Creative Commons Resource Archive, or the CC Resource Archive is a collection of resources. The idea of this site is to have a simple, easy-to-update area for keeping track of all of the useful resources that people make about Creative Commons licenses and open content topics in general. The Site is built using Jekyll, a static site generator.
        The project - Modernize CC Resource Archive focuses on implementing a comprehensive visual overhaul to the Resource Archive to align with current Creative Commons aesthetics and functionality standards. Utilizing the Internal Design System (Vocabulary), the project aims to upgrade the visual design, implement semantic, accessible, and standards-compliant HTML, CSS, and JavaScript, and improve user experience (UX) for resource submission while ensuring site stability on GitHub Pages. Through these efforts and solid documentation, the revamped Resources Archive will meet modern standards, enhance usability, and facilitate maintainability for both users and developers."
      />

      <Accordion
        title="Comunity Bonding Period"
        desc="The community bonding period has been an incredibly enriching experience. During this time, I had the opportunity to meet my mentors, familiarize myself with the project, and engage with the vibrant community behind Creative Commons. I participated in meetings and discussions, which have deepened my understanding of the organization's values as well as the codebase. The warm welcome and the wealth of knowledge shared by the community have been truly inspiring.

        I can surely tell, that the start of my Google Summer of Code work could not have been better. In the first meeting, We discussed about the plan ahead and also the process of submitting my work. We agreed to conduct one review meeting on every thursday (apart from some exceptions) where Me, my project Mentors and the Org admin discuss about the changes made and any doubts that I may have. By the end of coding period, I knew the functioning of the codebase and was planning on the designs that need to be executed"
      />

      <Accordion
        title="My Experience - At Midterm"
        desc="After being selected to GSoC, I was very happy and satisfied as it was a dream come true. As a result of this, I could not do the amount of work that I should have, in the initial weeks of the program. I had weekly review meetings with the org mentors, who constantly supported and encouraged me to catch up to the planned timeline of tasks. As a result of their motivation and some extra efforts, I was able to finish the tasks that needed to be done till the midterm evaluation. At this point I feel really good that we are successful in completing the tasks till the midterm evaluation. The best thing about this is that it was always a combined effort. I am planning to execute more tasks in the other half of the period, than we have till now. I’ll be faster as I have become really comfortable working with my mentors in these six weeks."
      />

      <Accordion 
        title="Thoughts On Completion"
        desc="As I mentioned in my previous blog post, Being a part of Google Summer of Code was a very big deal for me. With an organization like Creative Commons, this could not have been better. I did not only know about the organization before all this GSoC 2024 preparation, but also resonated with the idea and mission behind it, and was grateful for the learning opportunities it creates for people across the world. Being at the final week of this program makes me emotional as I had a really good time with the mentors and the project. In the weekly meetings we conducted, the amount of motivation I got every single time talking with my mentor was unmatched.
        
        I was a complete newbie in terms of professional work experience, and this is the way everything should have been. I am a better individual at this point, and far more experienced. I think I will be able to guide my juniors in a better way from now onwards. This program also instilled in me a newfound confidence that is needed to take on tough tasks. I believe the program is less about coding skills and more about the self-improvement journey one has with their mentors and fellow contributors. One more thing which caught my interest is reviewing the Pull Requests of other contributors. My mentor suggested that I try reviewing pull requests of new contributors for experience. “This is a great learning opportunity for you” as they said it. Exactly as I was told, this was indeed a great and enjoyable opportunity."
      />

      <Accordion
        title="Gratitude And Message For Future Contributors"
        desc="Sara (Possumbilities), Timid Robot and Shafiya heena were the best mentors I could have asked for this project program. My primary mentor, Sara, always encouraged me to be on track whenever I lagged behind in work. Considering this was a straightforward project, I did not predict the learning opportunities to be this much in number. I will always be grateful for these 12 weeks of support, learning and growth. All the contributors that are hoping to contribute to this repository, or this organization, I welcome you with all my heart. If you are targeting to get selected in an Open Source mentorship program, that is a great idea. But do not just contribute to Open Source for the sake of resume building and stipend. I agree they are very good benefits, but Open Source is simply much more than this. Once you contribute to Open Source, you will fall in love with the support you get from this community, just like I did. You can find me on GitHub and on the CC-Resource-Archive repository mainly. Let’s have the conversation there!"
      />

      <TagAccordion
        title="GSOC : PROjECT WORK UPDATES TILL MIDTERM"
      />
      <div className="mb-12">
        <MarkdownRenderer content={week123md} />
      </div>
      <div className="mb-12">
        <MarkdownRenderer content={week456md} />
      </div>
      <div className="mb-12">
        <MarkdownRenderer content={issueTillMidmd} />
      </div>
      <div className="mb-12">
        <MarkdownRenderer content={week789md} />
      </div>
      <div className="mb-12">
        <MarkdownRenderer content={week101112md} />
      </div>
      <div className="">
        <MarkdownRenderer content={issueTillEndmd} />
      </div>
      
    </div>
  );
};

export default Documentation;
