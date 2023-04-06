import React, { useState } from "react";

interface addReminderProps {
  onAddReminder: (title: string) => void;
}

const AddRminders = ({ onAddReminder }: addReminderProps): JSX.Element => {
  const [title, setTitle] = useState("");

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;
    onAddReminder(title);
    setTitle("");
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title"></label>
      <input
        className="form-control"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        id="title"
        placeholder="title of your todos"
      />
      <button
        className="btn btn-primary rounded pill my-3 justify-conten-center"
        style={{ marginLeft: "45%" }}
      >
        Add your Reminder
      </button>
    </form>
  );
};

export default AddRminders;
