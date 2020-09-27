db.createUser({
  user: 'yourUserName',
  pwd: 'yourPasswordHere',
  roles: [
    {
      role: 'readWrite',
      db: 'node-starter'
    }
  ]
});
