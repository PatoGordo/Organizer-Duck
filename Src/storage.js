var db = new Dexie('OrganizerDuck')
db.version(1.0).stores({
  pages: 'name,values'
})

export default db