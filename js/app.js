/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/

const SECTIONS_QUERY = 'section';
const SECTION_HEADER_QUERY = 'h2';
const NAV_LIST_ID = 'navbar__list';
const NAV_ANCHOR_CLASS = 'menu__link';

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

/**
 * @description Returns the name and id of all sections in the document.
 * @returns An array of section id and name pairs.
 */
function getSections () {
  const sections = [];
  const sectionElements = document.querySelectorAll(SECTIONS_QUERY);

  sectionElements.forEach((sectionElement) => {
    sections.push({
      sectionId: sectionElement.id,
      sectionName: sectionElement.querySelector(SECTION_HEADER_QUERY).textContent
    });
  });

  return sections;
}

/**
 * Creates an li element with an anchor element inside it for a section.
 * @param {string} name The section name
 * @param {string} id The section id
 * @returns An HTMLLIElement that has an anchor tag referenced the passed id
 */
function buildNavElement (name, id) {
  const navElement = document.createElement('li');
  navElement.innerHTML = `<a href="#${id}" class="${NAV_ANCHOR_CLASS}">${name}</>`;

  return navElement;
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

/**
 * @description Build the navigation list and append it to the DOM.
 */
function buildNav () {
  const navList = document.getElementById(NAV_LIST_ID);

  getSections().forEach((section) => {
    const navElement = buildNavElement(section.sectionName, section.sectionId);
    navList.appendChild(navElement);
  });
}

/**
 * @description Adds a 'click' listener on navigation elements that smoohtly scrools
 * the view to the referenced section
 */
function addAnchorOnClickListener () {
  const navList = document.getElementById('navbar__list');

  navList.addEventListener('click', (event) => {
    event.preventDefault(); // Prevents updating the address bar and instant scrolling
    const sectionId = event.target.getAttribute('href').substring(1); // Remove # sign from href to get the id
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  });
}

/**
   * @description Creates an InteresctionObserver that monitors which section is currenlty in view
   * and then applies the relavent classes to it.
   */
function createIntersctionObserver () {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Remove active class from the 70% out-of-view section and add it to in-view section
      if (entry.intersectionRatio <= 0.7) {
        entry.target.classList.remove('your-active-class');
      } else {
        entry.target.classList.add('your-active-class');
      }
    });
  }, {
    threshold: 0.7
  });

  // Observer all section elements
  getSections().forEach((section) => {
    sectionObserver.observe(document.getElementById(section.sectionId));
  });
}

// Wait for the DOM to load to execute functions
window.addEventListener('DOMContentLoaded', (event) => {
  buildNav();
  addAnchorOnClickListener();
  createIntersctionObserver();
});
