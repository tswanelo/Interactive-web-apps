const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport:  10.2,
}
  
const tax = {
    734: '3%',
    234: '20%',
    913: '12%',
    415: '38%',
    502: '42%',
}

const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
}

// You can change below however you want

const taxAsDecimal = parseInt(tax['913']) / 100 * salary
const startingAfterTax = (salary * 1) - taxAsDecimal 
const balance = startingAfterTax  - (expenses['transport'] + expenses['food'] + rent["large-apartment"])
console.log(balance.toFixed(2))



import { BOOKS_PER_PAGE, authors, genres, books } from "./data.js";

let matches = books;
let page = 1;
const range = [0, 10];

if (!books || !Array.isArray(books)) {
  throw new Error('Source required');
}

if (!range || range.length < 2) {
  throw new Error('Range must be an array with two numbers');
}

// Theme part

const Themes = {
  day: {
    dark: '10, 10, 20',
    light: '255, 255, 255',
  },
  night: {
    dark: '255, 255, 255',
    light: '10, 10, 20',
  },
};

const Select = document.querySelector('[data-settings-theme]');
const css = document.getElementById('settings');

css.addEventListener('submit', (event) => {
  event.preventDefault();
  const theme = Select.value;
  document.documentElement.style.setProperty('--color-dark', Themes[theme].dark);
  document.documentElement.style.setProperty('--color-light', Themes[theme].light);
});

const DarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initial = DarkMode ? 'night' : 'day';
document.documentElement.style.setProperty('--color-dark', Themes[initial].dark);
document.documentElement.style.setProperty('--color-light', Themes[initial].light);

// End of Theme part



// Preview Images, Title

const fragment = document.createDocumentFragment();
const extracted = books.slice(0, 36);

function createPreview(bookData) {
  const { author, image, title } = bookData;

  const preview = document.createElement('div');
  preview.classList.add('preview');

  const previewImage = document.createElement('img');
  previewImage.src = image;
  previewImage.alt = title;
  preview.appendChild(previewImage);

  const previewTitle = document.createElement('h2');
  previewTitle.textContent = title;
  preview.appendChild(previewTitle);

  const previewAuthor = document.createElement('p');
  previewAuthor.textContent = authors[author];
  preview.appendChild(previewAuthor);

  return preview;
}

function createPreviewFragment(data, start, end) {
  const fragment = document.createDocumentFragment();

  for (let i = start; i < end && i < data.length; i++) {
    const { author, image, title, id } = data[i];

    const preview = createPreview({
      author,
      id,
      image,
      title
    });

    fragment.appendChild(preview);
  }

  return fragment;
}

for (let i = 0; i < extracted.length; i++) {
  const { author, image, title, id } = extracted[i];

  const preview = createPreview({
    author,
    id,
    image,
    title
  });

  fragment.appendChild(preview);
}

document.querySelector('[data-list-items]').appendChild(fragment);

// End preview part

const genresFragment = document.createDocumentFragment();
let element = document.createElement('option');
element.value = 'any';
element.textContent = 'All Genres';
genresFragment.appendChild(element);

for (const [id, name] of Object.entries(genres)) {
  element = document.createElement('option');
  element.value = id;
  element.textContent = name;
  genresFragment.appendChild(element);
}

document.querySelector('[data-search-genres]').appendChild(genresFragment);

const authorsFragment = document.createDocumentFragment();
element = document.createElement('option');
element.value = 'any';
element.textContent = 'All Authors';
authorsFragment.appendChild(element);

for (const [id, name] of Object.entries(authors)) {
  element = document.createElement('option');
  element.value = id;
  element.textContent = name;
  authorsFragment.appendChild(element);
}

document.querySelector('[data-search-authors]').appendChild(authorsFragment);

document.querySelector('[data-list-button]').textContent = `Show more (${Math.max(0, matches.length - page * BOOKS_PER_PAGE)})`;

document.querySelector('[data-list-button]').disabled = !(matches.length - page * BOOKS_PER_PAGE > 0);

document.querySelector('[data-list-button]').innerHTML = `
  <span>Show more</span>
  <span class="list__remaining">(${Math.max(0, matches.length - page * BOOKS_PER_PAGE)})</span>
`;

document.querySelector('[data-search-cancel]').addEventListener('click', () => {
  document.querySelector('[data-search-overlay]').close();
});

document.querySelector('[data-settings-cancel]').addEventListener('click', () => {
  document.querySelector('[data-settings-overlay]').close();
});

document.querySelector('[data-settings-form]').addEventListener('submit', (event) => {
  event.preventDefault();
  // Handle the form submission
});

document.querySelector('[data-list-close]').addEventListener('click', () => {
  document.querySelector('[data-list-active]').close();
});

document.querySelector('[data-list-button]').addEventListener('click', () => {
  const start = page * BOOKS_PER_PAGE;
  const end = (page + 1) * BOOKS_PER_PAGE;
  const fragment = createPreviewFragment(matches, start, end);
  document.querySelector('[data-list-items]').appendChild(fragment);
  document.querySelector('[data-list-button]').textContent = `Show more (${Math.max(0, matches.length - (page + 1) * BOOKS_PER_PAGE)})`;
  document.querySelector('[data-list-button]').disabled = !(matches.length - (page + 1) * BOOKS_PER_PAGE > 0);
  page++;
});

document.querySelector('[data-header-search]').addEventListener('click', () => {
  document.querySelector('[data-search-overlay]').showModal();
  document.querySelector('[data-search-title]').focus();
});

document.querySelector('[data-header-settings]').addEventListener('click', () => {
  document.querySelector('[data-settings-overlay]').showModal();
  document.querySelector('[data-settings-theme]').focus();
});

document.querySelector('[data-search-form]').addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const filters = Object.fromEntries(formData);
  const result = [];

  for (const book of books) {
    const titleMatch = filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase());
    const authorMatch = filters.author === 'any' || book.author === filters.author;
    let genreMatch = false;

    if (filters.genre === 'any') {
      genreMatch = true;
    } else {
      for (const genre of book.genres) {
        if (genre === filters.genre) {
          genreMatch = true;
          break;
        }
      }
    }

    if (titleMatch && authorMatch && genreMatch) {
      result.push(book);
    }
  }

  if (result.length < 1) {
    document.querySelector('[data-list-message]').classList.add('list__message');
  } else {
    document.querySelector('[data-list-message]').classList.remove('list__message');
  }

  document.querySelector('[data-list-items]').innerHTML = '';
  const fragment = createPreviewFragment(result, range[0], range[1]);
  document.querySelector('[data-list-items]').appendChild(fragment);
  const initial = Math.max(0, result.length - page * BOOKS_PER_PAGE);
  const remaining = result.length > page * BOOKS_PER_PAGE ? initial : 0;

  document.querySelector('[data-list-button]').disabled = initial > 0;

  document.querySelector('[data-list-button]').innerHTML = `
    <span>Show more</span>
    <span class="list__remaining">(${remaining})</span>
  `;

  window.scrollTo(0, 0);
  document.querySelector('[data-search-overlay]').close();
});

document.querySelector('[data-settings-form]').addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const result = Object.fromEntries(formData);
  document.documentElement.style.setProperty('--color-dark', Themes[result.theme].dark);
  document.documentElement.style.setProperty('--color-light', Themes[result.theme].light);
  document.querySelector('[data-settings-overlay]').close();
});

document.querySelector('[data-list-items]').addEventListener('click', (event) => {
  const pathArray = Array.from(event.path || event.composedPath());
  let active = null;

  for (const node of pathArray) {
    const previewId = node?.dataset?.preview;

    for (const singleBook of books) {
      if (singleBook.id === previewId) {
        active = singleBook;
        break;
      }
    }

    if (active) {
      break;
    }
  }

  if (!active) {
    return;
  }

  document.querySelector('[data-list-active]').showModal();
  document.querySelector('[data-list-blur]').src = active.image;
  document.querySelector('[data-list-title]').textContent = active.title;
  document.querySelector('[data-list-subtitle]').textContent = `${authors[active.author]} (${new Date(active.published).getFullYear()})`;
  document.querySelector('[data-list-description]').textContent = active.description;
});

















