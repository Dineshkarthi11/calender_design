const CalendarService = {
  getCalendarEvents: () => {
    return Promise.resolve([
      // Events for 8 days with multiple events on some days
      { date: "2024-09-05", title: "Python Developer Interview", role: "Python Developer", interviewer: "Geetha", round: "1st Level", time: "10 - 11 AM" },
      { date: "2024-09-05", title: "Senior Software Engineer Interview", role: "Senior Software Engineer", interviewer: "Geetha", round: "1st Level", time: "10 - 11:30 AM" },
      
      { date: "2024-09-06", title: "React Developer Interview", role: "React Developer", interviewer: "Rahul", round: "Technical", time: "12 - 1 PM" },
      { date: "2024-09-06", title: "Full Stack Developer Interview", role: "Full Stack Developer", interviewer: "Priya", round: "HR", time: "2 - 3 PM" },

      { date: "2024-09-07", title: "Data Analyst Interview", role: "Data Analyst", interviewer: "Anita", round: "1st Level", time: "11 AM - 12 PM" },
      { date: "2024-09-07", title: "QA Engineer Interview", role: "QA Engineer", interviewer: "Suresh", round: "General", time: "3 - 4 PM" },

      { date: "2024-09-08", title: "Machine Learning Engineer Interview", role: "ML Engineer", interviewer: "Akash", round: "Technical", time: "9 - 10 AM" },

      { date: "2024-09-09", title: "DevOps Engineer Interview", role: "DevOps Engineer", interviewer: "Reena", round: "HR", time: "11 AM - 12 PM" },
      { date: "2024-09-09", title: "Cloud Engineer Interview", role: "Cloud Engineer", interviewer: "Vijay", round: "Technical", time: "1 - 2 PM" },

      { date: "2024-09-10", title: "UX/UI Designer Interview", role: "UX/UI Designer", interviewer: "Geetha", round: "General", time: "10 - 11 AM" },
      { date: "2024-09-10", title: "Informatica Cloud Developer Interview", role: "Informatica Developer", interviewer: "Geetha", round: "General", time: "10 - 11:30 AM" },

      { date: "2024-09-11", title: "Backend Developer Interview", role: "Backend Developer", interviewer: "Arjun", round: "1st Level", time: "10 - 11 AM" },

      { date: "2024-09-12", title: "Android Developer Interview", role: "Android Developer", interviewer: "Neha", round: "Technical", time: "11 AM - 12 PM" },
      { date: "2024-09-12", title: "iOS Developer Interview", role: "iOS Developer", interviewer: "Raj", round: "HR", time: "2 - 3 PM" }
    ]);
  },
};

export default CalendarService;
