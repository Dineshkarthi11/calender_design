const CalendarService = {
  getCalendarEvents: () => {
    return fetch('/calendarfromtoenddate.json')
      .then((response) => response.json())
      .catch((error) => {
        console.error('Error fetching calendar events:', error);
        throw error;
      });
  },

  getEventDetails: (id) => {
    return fetch(`/calendarmeeting.json?id=${id}`)
      .then((response) => response.json())
      .catch((error) => {
        console.error('Error fetching event details:', error);
        throw error;
      });
  }
};

export default CalendarService;
