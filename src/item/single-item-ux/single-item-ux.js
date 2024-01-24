import './single-item-ux.css';

const topBar = (subject) => {
  const topContainer = document.createElement('div');
  const iconTop = document.createElement('img');
  const topHeading = document.createElement('h2');
  const deleteIcon = document.createElement('img');

  topHeading.innerText = subject;
  topContainer.appendChild(iconTop);
  topContainer.appendChild(topHeading);
  topContainer.appendChild(deleteIcon);

  return topContainer;
};

export default (subject, contents, deadline) => {
  const mainContainer = document.createElement('div');
  mainContainer.innerHTML = topBar(subject);
  mainContainer.textContent = contents + deadline;
  return mainContainer;
};
