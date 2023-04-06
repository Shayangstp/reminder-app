import axios from "axios";
import Reminder from "../Models/reminder";

class ReminderServices {
  http = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
  });

  async getReminders() {
    const response = await this.http.get<Reminder[]>("/todos");
    return response.data;
  }

  async addtReminder(title: string) {
    const response = await this.http.post<Reminder>("/todos", { title });
    return response.data;
  }

  async removeReminder(id: number) {
    const response = await this.http.delete("/todos" + id);
    return response.data;
  }
}
//we use new for when we want to use it dont use new every time for classes
export default new ReminderServices();
