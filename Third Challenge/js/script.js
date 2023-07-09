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

// MY THEME PART CODE

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

// END MY THEME PART CODE

// MY BOOKLIST PART CODE

const bookList = document.querySelector('[data-list-items]');
const fragment = document.createDocumentFragment();

const extracted = books.slice(0, 36);

for (let i = 0; i < extracted.length; i++) {
  const bookPreviews = document.createElement('dl');
  bookPreviews.className = 'preview';
  bookPreviews.dataset.id = extracted[i].id;
  bookPreviews.dataset.title = extracted[i].title;
  bookPreviews.dataset.image = extracted[i].image;
  bookPreviews.dataset.subtitle = `${authors[extracted[i].author]} (${new Date(extracted[i].published).getFullYear()})`;
  bookPreviews.dataset.description = extracted[i].description;
  bookPreviews.dataset.genre = extracted[i].genres;

  bookPreviews.innerHTML = /*html*/ `
    <div>
      <img class='preview__image' src="${extracted[i].image}" alt="no picture available" />
    </div>
    <div class='preview__info'>
      <dt class='preview__title'>${extracted[i].title}</dt>
      <dt class='preview__author'> By ${authors[extracted[i].author]}</dt>
    </div>`;

  fragment.appendChild(bookPreviews);
}

bookList.appendChild(fragment);

// END OF MY BOOKLIST PART CODE

// MY SEARCH BUTTON CODE

document.querySelector('[data-header-search]').addEventListener('click', () => {
  document.querySelector('[data-search-overlay]').showModal();
  document.querySelector('[data-search-title]').focus();
});

document.querySelector('[data-search-cancel]').addEventListener('click', () => {
  document.querySelector('[data-search-overlay]').close();
});

// END OF SEARCH BUTTON CODE

// MY SETTINGS BUTTON CODE

document.querySelector('[data-header-settings]').addEventListener('click', () => {
  document.querySelector('[data-settings-overlay]').showModal();
  document.querySelector('[data-settings-theme]').focus();
});

document.querySelector('[data-settings-cancel]').addEventListener('click', () => {
  document.querySelector('[data-settings-overlay]').close();
});

// END OF MY SETTINGS BUTTON CODE

// SELECT BOOKVIEW

const detailsToggle = (event) => {
  const dataListActive = document.querySelector('[data-list-active]');
  const dataListTitle = document.querySelector('[data-list-title]');
  const dataListSubtitle = document.querySelector('[data-list-subtitle]');
  const dataListDescription = document.querySelector('[data-list-description]');
  const dataListImage = document.querySelector('[data-list-image]');
  const dataListBlur = document.querySelector('[data-list-blur]');

  if (event.target.dataset.id) {
    dataListActive.style.display = "block";
  }

  if (event.target.dataset.title) {
    dataListTitle.textContent = event.target.dataset.title;
  }

  if (event.target.dataset.subtitle) {
    dataListSubtitle.textContent = event.target.dataset.subtitle;
  }

  if (event.target.dataset.description) {
    dataListDescription.textContent = event.target.dataset.description;
  }

  if (event.target.dataset.image) {
    dataListImage.setAttribute('src', event.target.dataset.image);
    dataListBlur.setAttribute('src', event.target.dataset.image);
  }
};

document.querySelector('[data-list-close]').addEventListener('click', () => {
  document.querySelector('[data-list-active]').style.display = "";
});

bookList.addEventListener('click', detailsToggle);

// END OF BOOKVIEW

// SHOW MORE BUTTON

function createPreviewFragment(data, start, end) {
  const fragment = document.createDocumentFragment();

  for (let i = start; i < end && i < data.length; i++) {
    const { author, image, title, id } = data[i];

    const preview = createPreview({
      author,
      id,
      image,
      title,
    });

    fragment.appendChild(preview);
  }

  return fragment;
}

document.querySelector('[data-list-button]').addEventListener('click', () => {
  const start = page * BOOKS_PER_PAGE;
  const end = (page + 1) * BOOKS_PER_PAGE;
  const fragment = createPreviewFragment(matches, start, end);
  document.querySelector('[data-list-items]').appendChild(fragment);
  document.querySelector('[data-list-button]').textContent = `Show more (${Math.max(
    0,
    matches.length - (page + 1) * BOOKS_PER_PAGE
  )})`;
  document.querySelector('[data-list-button]').disabled = !(matches.length - (page + 1) * BOOKS_PER_PAGE > 0);
  page++;
});

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
document.querySelector('[data-list-button]').innerHTML = `
  <span>Show more</span>
  <span class="list__remaining">(${Math.max(0, matches.length - page * BOOKS_PER_PAGE)})</span>
`;
document.querySelector('[data-list-button]').disabled = !(matches.length - page * BOOKS_PER_PAGE > 0);

// end show more


