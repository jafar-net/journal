import { EntryListComponent } from "./JournalEntryList.js";
import {getJournalEntries, createPost} from "./data/DataManager.js";
import {postEntry} from "./JournalEntry.js"

EntryListComponent()

const applicationElement = document.querySelector(".journal");

const allEntries = getJournalEntries()
.then(apiEntries => {
    console.log ("now we can console the entries",apiEntries)
})

applicationElement.addEventListener("click", (event) => {
	
	if (event.target.id.startsWith("edit")){
		console.log("post clicked", event.target.id.split("--"))
		console.log("the id is", event.target.id.split("--")[1])
	}
})

applicationElement.addEventListener("change", event => {
    if (event.target.id === "yearSelection") {
      const yearAsNumber = parseInt(event.target.value)
      console.log(`User wants to see posts since ${yearAsNumber}`)
      //invoke a filter function passing the year as an argument
      showFilteredPosts(yearAsNumber);
    }
  })
  
  const showFilteredPosts = (year) => {
    //get a copy of the post collection
    const epoch = Date.parse(`01/01/${year}`);
    //filter the data
    const filteredData = getJournalEntries().filter(singleEntry => {
      if (singleEntry.timestamp >= epoch) {
        return singleEntry
      }
    })
    const entryElement = document.querySelector(".journalEntry");
    entryElement.innerHTML = getJournalEntries(filteredData);
  }
  const showPostList = () => {
    //Get a reference to the location on the DOM where the list will display
    const entryElement = document.querySelector(".entryList");
    getJournalEntries().then((allEntries) => {
     entryElement.innerHTML = entryList(allEntries);
    })
  }

  applicationElement.addEventListener("click", (event) => {
	
    if (event.target.id.startsWith("edit")){
      console.log("post clicked", event.target.id.split("--"))
      console.log("the id is", event.target.id.split("--")[1])
    }
  })

  applicationElement.addEventListener("change", event => {
    if (event.target.id === "yearSelection") {
      const yearAsNumber = parseInt(event.target.value)
      console.log(`User wants to see posts since ${yearAsNumber}`)
      //invoke a filter function passing the year as an argument
      showFilteredPosts2(yearAsNumber);
    }
  })
  
  const showFilteredPosts2 = (year) => {
    //get a copy of the post collection
    const epoch = Date.parse(`01/01/${year}`);
    //filter the data
    const filteredData = getJournalEntries().filter(singlePost => {
      if (singlePost.timestamp >= epoch) {
        return singlePost
      }
    })
    const postElement = document.querySelector(".entryList");
    postElement.innerHTML = PostList(filteredData);
  }

  applicationElement.addEventListener("change", event => {
    if (event.target.id === "yearSelection") {
      const yearAsNumber = parseInt(event.target.value)
    
      console.log(`User wants to see posts since ${yearAsNumber}`)
      showFilteredPosts(yearAsNumber);
    }
    })

    const showFooter = () => {
      //Get a reference to the location on the DOM where the nav will display
      const navElement = document.querySelector("footer");
    navElement.innerHTML = Footer();
  }

  applicationElement.addEventListener("click", event => {
    if (event.target.id === "newPost__cancel") {
        //clear the input fields
    }
  })
  
  applicationElement.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id === "newPost__submit") {
    //collect the input values into an object to post to the DB
      const title = document.querySelector("input[name='postTitle']").value
      const url = document.querySelector("input[name='postURL']").value
      const description = document.querySelector("textarea[name='postDescription']").value
      //we have not created a user yet - for now, we will hard code `1`.
      //we can add the current time as well
      const postObject = {
          title: title,
          imageURL: url,
          description: description,
          userId: 1,
          timestamp: Date.now()
      }
  
    // be sure to import from the DataManager
        createPost(postObject)
    }
  })

  const showPostEntry = () => { 
    //Get a reference to the location on the DOM where the nav will display
    const entryElement = document.querySelector(".entryList");
    entryElement.innerHTML = postEntry();
  }

  showPostList();
  showPostEntry();