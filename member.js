function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var projects = document.getElementById("projects");
    var contact = document.getElementById("contact");
    var about = document.getElementById("about");
    var memberContent = document.getElementById("memberContent");
    var skillsContent = document.getElementById("skillsContent");
    var projectsContent = document.getElementById("projectsContent");
    var contactContent = document.getElementById("contactContent");
    var aboutContent = document.getElementById("aboutContent");
    member.style.backgroundColor = "#1c1c1c";
    member.style.color = "#fff";
    skills.style.backgroundColor = "#fff";
    skills.style.color = "#1c1c1c";
    projects.style.backgroundColor = "#fff";
    projects.style.color = "#1c1c1c";
    contact.style.backgroundColor = "#fff";
    contact.style.color = "#1c1c1c";
    about.style.backgroundColor = "#fff";
    about.style.color = "#1c1c1c";
    memberContent.style.display = "block";
    skillsContent.style.display = "none";
    projectsContent.style.display = "none";
    contactContent.style.display = "none";
    aboutContent.style.display = "none";
}