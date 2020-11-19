exports.index = async (req, res) => {
    const data = {
        title: 'CRUD : Node - Express - MongoDB',
        welcome: 'Welcome to Spreadulation Play!'
    };
    
    res.render('home/index', data);
};