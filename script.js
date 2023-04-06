function submitForm(event) {
    event.preventDefault();
  
    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");
    const genderInput = document.getElementById("gender");
    const age = Number(ageInput.value);
  
    if (nameInput.value === "" || ageInput.value === "" || genderInput.value === "") {
      alert("Please fill in all the fields.");
      return;
    }
  
    if (age < 60) {
      alert("Sorry, you are below the age limit.");
      return;
    }
  
    if (age > 150) {
      alert("Sorry, you have crossed the maximum age limit.");
      return;
    }
  
    window.history.back();
    alert("Thank You for connecting! You are redirected to next page");
    window.location.href = "health.html";
  }
  
  const form = document.querySelector("form");
  form.addEventListener("submit", submitForm);

  function goBack() {
    window.history.back();
    alert("You are redirected to Welcome Page. Please click 'OK' to confirm! " );
    window.location.href = "index.html";
  }
  
  function addingActivity() {
    // TODO: Implement function to set activity.
    alert("I hope it is helpful to you! You can now set your activity. Thank You!" );
    window.location.href = "activity.html";
  }
  
  function Back() {
    window.history.back();
    window.location.href = "health.html";
  }
  function home() {
  
    alert("You are redirected to Welcome Page. Please click 'OK' to confirm! " );
    window.location.href = "index.html";
  }

 
  // Get the input fields and the activity list
  const activityInput = document.getElementById("activity");
  const timeInput = document.getElementById("time");
  const dateInput = document.getElementById("date");
  const scheduleInput = document.getElementById("schedule");
  const activityList = document.getElementById("activityList");

  // Function to add the activity to the list
  function addActivity() {
    // Get the input values
    const activity = activityInput.value;
    const time = timeInput.value;
    const date = dateInput.value;
    const schedule = scheduleInput.value;

    // Create a new list item with the input values
    const li = document.createElement("li");
    li.innerText = activity + " - " + time + " on " + date + " (" + schedule + ")";

    // Add edit and delete buttons to the list item
    const editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.addEventListener("click", function () {
      editActivity(li);
    });
    li.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function () {
      deleteActivity(li);
    });
    li.appendChild(deleteButton);

    // Add the new list item to the activity list
    activityList.appendChild(li);
  }

  // Function to set the activity when the "Set Activity" button is clicked
  function setActivity() {
    addActivity();

     // Clear the input fields
    activityInput.value = "";
    timeInput.value = "";
    dateInput.value = "";
    scheduleInput.value = "";
  }

  // Function to edit an activity when the "Edit" button is clicked
  function editActivity(li) {
  // Get the text content of the list item
  const activityText = li.innerText;

  // Split the text into its components (activity, time, date, schedule)
  const activityComponents = activityText.split(" - ");

  // Create input fields with the current values
  const activityInput = document.createElement("input");
  activityInput.type = "text";
  activityInput.value = activityComponents[0];
  const timeInput = document.createElement("input");
  timeInput.type = "time";
  timeInput.value = activityComponents[1].substring(0, 5); // Get only the time part (HH:MM)
  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.value = activityComponents[2];
  const scheduleInput = document.createElement("input");
  scheduleInput.type = "text";
  scheduleInput.value = activityComponents[3].substring(1, activityComponents[3].length - 1);

  // Remove the original list item and replace it with the input fields
  li.parentNode.replaceChild(activityInput, li);
  activityInput.parentNode.insertBefore(timeInput, activityInput.nextSibling);
  timeInput.parentNode.insertBefore(dateInput, timeInput.nextSibling);
  dateInput.parentNode.insertBefore(scheduleInput, dateInput.nextSibling);

  // Add a save button to the input fields
  const saveButton = document.createElement("button");
  saveButton.innerText = "Save";
  saveButton.addEventListener("click", function () {
    saveActivity(activityInput, timeInput, dateInput, scheduleInput, li);
    });
  scheduleInput.parentNode.insertBefore(saveButton, scheduleInput.nextSibling);
}

// Function to save the edited activity when the "Save" button is clicked
function saveActivity(activityInput, timeInput, dateInput, scheduleInput, li) {
  // Get the input values
  const activity = activityInput.value;
  const time = timeInput.value;
  const date = dateInput.value;
  const schedule = scheduleInput.value;
  
  // Update the list item with the new values
  li.innerText = activity + " - " + time + " on " + date + " (" + schedule + ")";
  
  // Add edit and delete buttons to the list item
  const editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.addEventListener("click", function () {
  editActivity(li);
  });
  li.appendChild(editButton);
  
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.addEventListener("click", function () {
  deleteActivity(li);
  });
  li.appendChild(deleteButton);
  }
  
  // Function to delete an activity when the "Delete" button is clicked
  function deleteActivity(li) {
  li.parentNode.removeChild(li);
  }
  
  // Function to show the list of saved activities
  function showActivities() {
  // Get the saved activities from local storage
  const activities = JSON.parse(localStorage.getItem("activities")) || [];
  
  // Clear the activity list
  activityList.innerHTML = "";
  
  // Add each saved activity to the activity list
  activities.forEach(function (activity) {
  const li = document.createElement("li");
  li.innerText = activity.name + " - " + activity.time + " on " + activity.date + " (" + activity.schedule + ")";
  

  // Add edit and delete buttons to the list item
  const editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.classList.add("edit");

  editButton.innerHTML = "Edit";
  editButton.addEventListener("click", function () {
    editActivity(li);
  });
  li.appendChild(editButton);
  






  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("delete");

  deleteButton.innerHTML = "Delete";

  deleteButton.addEventListener("click", function () {
    deleteActivity(li);
  });
  li.appendChild(deleteButton);

  // Add the list item to the activity list
  activityList.appendChild(li);
  });
}

// Event listener for the "Set Activity" button
document.getElementById("setActivityButton").addEventListener("click", function () {
// Get the input values
const activity = activityInput.value;
const time = timeInput.value;
const date = dateInput.value;
const schedule = scheduleInput.value;

// Create an object for the new activity
const newActivity = {
name: activity,
time: time,
date: date,
schedule: schedule,
};

// Get the saved activities from local storage
const activities = JSON.parse(localStorage.getItem("activities")) || [];

// Add the new activity to the saved activities
activities.push(newActivity);

// Save the updated activities to local storage
localStorage.setItem("activities", JSON.stringify(activities));

// Show the updated list of activities
showActivities();

// Clear the input fields
activityInput.value = "";
timeInput.value = "";
dateInput.value = "";
scheduleInput.value = "";
});

// Event listener for the "My Activities" button
document.getElementById("showActivitiesButton").addEventListener("click", function () {
// Show the list of saved activities
showActivities();
});

// Event listener for the "Back Home" button
document.getElementById("backHomeButton").addEventListener("click", function () {
// Go back to the home page
document.getElementById("activityTracker").style.display = "none";
document.getElementById("home").style.display = "block";
});