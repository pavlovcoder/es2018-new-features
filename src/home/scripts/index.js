window.onload = function () {
    var headerDOM = document.getElementById('main-header');
    var pagesData = [
        { text: 'Forms API', link: '/forms-api' },
        { text: 'DOM', link: '/dom' },
        { text: 'BOM', link: '/bom' },
        { text: 'JS Advanced', link: '/js-advanced' },
        { text: 'References', link: '/references' }
    ];
    var linkElement;
    for (var i = 0; i < pagesData.length; i++) {
        var ii = i;
        linkElement = document.createElement("a");
        linkElement.className = 'p-2 text-dark';
        linkElement.innerHTML = pagesData[ii].text;
        linkElement.setAttribute('href', pagesData[ii].link);
        headerDOM.appendChild(linkElement);
    }
};
