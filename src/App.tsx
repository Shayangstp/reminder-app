import React, { useState, useEffect } from "react";

import "./App.css";
import ReminderList from "./Components/ReminderList";
import Reminder from "./Models/reminder";
import ReminderServices from "./Services/ReminderServices";
import AddRminders from "./Components/AddRminders";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const reminders = await ReminderServices.getReminders();
    setReminders(reminders);
  };

  const removeReminder = (id: number) => {
    setReminders(reminders.filter((item) => item.id !== id));
  };

  const addReminder = async (title: string) => {
    const newRminder = await ReminderServices.addtReminder(title);

    setReminders([newRminder , ...reminders]);
  };

  return (
    <div className="App">
      <AddRminders onAddReminder={addReminder} />
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;
