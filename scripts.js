


// Get the form and input fields
const form = document.querySelector('form');
const activityInput = document.getElementById('activity');
const timeInput = document.getElementById('time');
const dateInput = document.getElementById('date');
const scheduleInput = document.getElementById('schedule');
const activityList = document.getElementById('activityList');

// Add event listener to the form
form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent default form submission
  
  // Create a new activity object
  const activity = {
    name: activityInput.value,
    time: timeInput.value,
    date: dateInput.value,
    schedule: scheduleInput.value
  };
  
  // Add the activity to the list
  const li = document.createElement('li');
  li.innerHTML = `${activity.name} - ${activity.time} - ${activity.date} - ${activity.schedule} <button class="edit">Edit</button> <button class="delete">Delete</button>`;
  activityList.appendChild(li);
  
  // Reset the form
  form.reset();
});

// Add event listener to the activityList for edit and delete buttons
activityList.addEventListener('click', (event) => {
  const target = event.target;
  
  // Handle delete button click
  if (target.matches('.delete')) {
    target.parentNode.remove();
  }
  
  // Handle edit button click
  if (target.matches('.edit')) {
    const li = target.parentNode;
    const name = li.querySelector('input[name="edit-activity"]');
    const time = li.querySelector('input[name="edit-time"]');
    const date = li.querySelector('input[name="edit-date"]');
    const schedule = li.querySelector('select[name="edit-schedule"]');
    
    // Populate the form with the current activity data
    name.value = li.querySelector('.activity-name').textContent;
    time.value = li.querySelector('.activity-time').textContent;
    date.value = li.querySelector('.activity-date').textContent;
    schedule.value = li.querySelector('.activity-schedule').textContent.toLowerCase();
    
    // Change the edit button to save button
    target.textContent = 'Save';
    target.classList.add('save');
    target.classList.remove('edit');
    
    // Add event listener to the save button
    target.addEventListener('click', () => {
      // Update the activity data
      li.querySelector('.activity-name').textContent = name.value;
      li.querySelector('.activity-time').textContent = time.value;
      li.querySelector('.activity-date').textContent = date.value;
      li.querySelector('.activity-schedule').textContent = schedule.value.charAt(0).toUpperCase() + schedule.value.slice(1);
      
      // Change the save button back to edit button
      target.textContent = 'Edit';
      target.classList.add('edit');
      target.classList.remove('save');
    });
  }
});

// Add function for the Set button
function setActivity() {
  form.dispatchEvent(new Event('submit'));
}

// Add functions for the Back and Home buttons
function Back() {
  window.history.back();
}

function home() {
  window.location.href = 'index.html';
}
