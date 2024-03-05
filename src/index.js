const projectsElement = document.getElementById("project-display");
const projects = [
 {
  title: "Weather App",
  image: "./images/weather-project.png",
  alt: "weather application",
  description:
   "A classic weather application utilizing HTML, CSS, Javascript, and the SheCodes Weather API.",
  "source-code": "https://github.com/RebeccaCL303/weather-application-revamp",
  "project-link": "https://sage-halva-a3063b.netlify.app",
 },
 {
  title: "Weather App (React)",
  image: "./images/weather-react.png",
  alt: "weather application.",
  description: "A React version of my previous weather application",
  "source-code": "https://github.com/RebeccaCL303/weather-react",
  "project-link": "https://spiffy-banoffee-229707.netlify.app",
 },
 {
  title: "Twin Peaks",
  image: "./images/twin-peaks-project.jpg",
  alt: "twin peaks landing page",
  description:
   "A responsive landing page dedicated to one of my favorite TV shows: Twin Peaks.",
  "source-code": "https://github.com/RebeccaCL303/twin-peaks-project",
  "project-link": "https://extraordinary-crostata-3cdf8f.netlify.app/",
 },
 {
  title: "Dictionary App",
  image: "./images/dictionary-react.png",
  alt: "dictionary application",
  description: "A classic dictionary application made with React.",
  "source-code": "https://github.com/RebeccaCL303/dictionary-react",
  "project-link": "https://euphonious-centaur-38b24d.netlify.app/",
 },
 {
  title: "FAERS Database",
  image: "./images/FAERS.png",
  alt: "application for the federal adverse event reporting system",
  description:
   "Application that shows data from the Federal Adverse Event Reporting System  (FAERS), a database that contains information on adverse event and   medication error reports submitted to FDA.",
  "source-code": "https://github.com/RebeccaCL303/fda-adverse-reports",
  "project-link": "https://jovial-meringue-5d040c.netlify.app/",
 },
 {
  title: "Survey Form",
  image: "./images/survey-form.png",
  alt: "survey form about videogames",
  description: "A survey form for hobbyists into videogames.",
  "source-code": "https://github.com/RebeccaCL303/survey-form",
  "project-link": "https://imaginative-boba-df8742.netlify.app/",
 },
 {
  title: "AI Movie / TV Show Generator",
  image: "./images/movie-tv-generator.png",
  alt: "ai movie and tv generator app",
  description:
   "      An AI powered app to give you personalized tv show and movie recommendations. Please note that the AI used is still in the beginning stages of development.",
  "source-code": "https://github.com/RebeccaCL303/movie-tv-generator",
  "project-link": "https://movietvgenerator.netlify.app/",
 },
 {
  title: "Palindrome Checker",
  image: "./images/palindrome-project.png",
  alt: "palidrome checker app",
  description:
   "Application that checks whether or not a word, sentence, or phrase is a palidrome.",
  "source-code": "https://github.com/RebeccaCL303/palindrome-checker",
  "project-link": "https://rebeccas-palindrome-checker.netlify.app/",
 },
];

projects.forEach((project) => {
 projectsElement.innerHTML += ` <section class="row project">
        <div class="col-md-6 description">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project["project-link"]}" class="border-link ms-0">Launch Project</a>
            <a href="${project["source-code"]}" class="border-link">Source Code</a>
        </div>
        <div class="col-md-6 project-img">
            <img src="${project.image}" alt="${project.alt}" />
        </div>
    </section>`;
});
