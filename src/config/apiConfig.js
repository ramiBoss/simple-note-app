export const apiEndpoints = {
  prod:{
    baseUrl: "/api",

    getAllNotes: "/notes",
    createNote: "/notes",
    updateNote: "/notes/note/{id}",
  },

  local:{
    baseUrl: "http://localhost:3000/api",

    getAllNotes: "/notes",
    createNote: "/notes",
    updateNote: "/notes/note/{id}",
  }
};
