import refreshStorage from './refreshStorage';
import singleItemUx from '../item/single-item-ux/single-item-ux';

export default (parent) => {
  parent.textContent = '';
  const taskListArray = refreshStorage();
  taskListArray.forEach((element) => {
    singleItemUx(
      element.taskName,
      element.taskNotes,
      element.taskDue,
      element.id,
      parent,
    );
  });
};
