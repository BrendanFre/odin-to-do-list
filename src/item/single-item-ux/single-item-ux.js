import './single-item-ux.css';
import closeImage from '../assets/close.png';
import notesImage from '../assets/note.png';
import deleteStorageItem from '../../localStorage/deleteStorageItem';

const topBar = (subject, parent) => {
  const topContainer = document.createElement('div');
  const iconTop = document.createElement('img');
  const topHeading = document.createElement('h2');
  const deleteIcon = document.createElement('img');

  topHeading.innerText = subject;
  deleteIcon.src = closeImage;
  iconTop.src = notesImage;
  topContainer.appendChild(iconTop);
  topContainer.appendChild(topHeading);
  topContainer.appendChild(deleteIcon);
  topContainer.classList.add('topBar');

  deleteIcon.addEventListener(
    'click',
    () => {
      deleteStorageItem(parent.id);
    },
  );

  parent.appendChild(topContainer);
};

const contentsBar = (contents, parent) => {
  const contentContainer = document.createElement('div');

  contentContainer.textContent = contents;

  parent.appendChild(contentContainer);
};

export default (subject, contents, deadline, id, parent) => {
  const mainContainer = document.createElement('div');
  mainContainer.classList.add('mainContainer');
  mainContainer.id = id;

  topBar(subject, mainContainer);
  contentsBar(contents, mainContainer);
  parent.appendChild(mainContainer);
};
