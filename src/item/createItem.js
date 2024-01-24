import { checkStorage } from '../localStorage/checkStorage';
import addToStorage from '../localStorage/addToStorage';

export default (subject, notes, deadLine) => {
  let taskID = '';
  if (checkStorage) {
    taskID = addToStorage(subject, notes, deadLine);
  }
  let status = 'Not Started';
  let itemSubject = subject;
  let itemNotes = notes;
  let itemDeadline = deadLine;

  const getStatus = () => status;
  const getSubject = () => itemSubject;
  const getNotes = () => itemNotes;
  const getDeadline = () => itemDeadline;

  const updateSubject = (newSubject) => { itemSubject = newSubject; };
  const updateNotes = (newNotes) => { itemNotes = newNotes; };
  const updateDeadline = (newDeadline) => {
    itemDeadline = newDeadline;
  };

  const actionStatus = () => { status = 'In progress'; };
  const completedStatus = () => { status = 'Completed'; };
  const archiveStatus = () => { status = 'Archived'; };
  const deleteStatus = () => { status = 'Deleted'; };

  return {
    getStatus,
    actionStatus,
    completedStatus,
    archiveStatus,
    deleteStatus,
    getSubject,
    getNotes,
    getDeadline,
    updateSubject,
    updateNotes,
    updateDeadline,
    taskID,
  };
};
