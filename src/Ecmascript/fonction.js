
function Search(tab, id) {
    return tab.find(obj => obj.id === id);
}

module.exports = Search;