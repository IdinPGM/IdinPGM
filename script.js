let data = [
  {
    "Name": "Harry Potter",
    "Email": "harrypotter@hogwarts.edu",
    "Phone": "555-1234"
  },
  {
    "Name": "Hermione Granger",
    "Email": "hermionegranger@hogwarts.edu",
    "Phone": "555-5678"
  },
  {
    "Name": "Ron Weasley",
    "Email": "ronweasley@hogwarts.edu",
    "Phone": "555-2468"
  },
  {
    "Name": "Luna Lovegood",
    "Email": "lunalovegood@hogwarts.edu",
    "Phone": "555-3691"
  },
  {
    "Name": "Draco Malfoy",
    "Email": "dracomalfoy@hogwarts.edu",
    "Phone": "555-8024"
  },
  {
    "Name": "Neville Longbottom",
    "Email": "nevillelongbottom@hogwarts.edu",
    "Phone": "555-1357"
  },
  {
    "Name": "Ginny Weasley",
    "Email": "ginnyweasley@hogwarts.edu",
    "Phone": "555-2468"
  },
  {
    "Name": "Cho Chang",
    "Email": "chochang@hogwarts.edu",
    "Phone": "555-3691"
  },
  {
    "Name": "Fred Weasley",
    "Email": "fredweasley@hogwarts.edu",
    "Phone": "555-8024"
  },
  {
    "Name": "Lavender Brown",
    "Email": "lavenderbrown@hogwarts.edu",
    "Phone": "555-1357"
  }
];

const container = document.getElementsByClassName("container")[0];

data.forEach(person => {
  const content = document.createElement("div")
  content.classList.add("box")
  content.innerHTML = `
  <h2>Name: ${person.Name}</h2>
  <h3>E-mail: ${person.Email}</h3>
  <h3>Phone: ${person.Phone}</h3>
  `;
  container.appendChild(content)
});

const button = document.getElementsByClassName("c-button")[0];

button.addEventListener("click", Animation(pop))