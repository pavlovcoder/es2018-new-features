window.onload = function() {
    const headerDOM: any = document.getElementById('main-header');
    const pagesData: any = [
        { text: 'Forms API', link: '/forms-api' },
        { text: 'DOM', link: '/dom' },
        { text: 'BOM', link: '/bom' },
        { text: 'JS Advanced', link: '/js-advanced' },
        { text: 'References', link: '/references' }
    ];
    let linkElement: any;
    for (var i = 0; i < pagesData.length; i++) {
     let ii: number = i;
     linkElement = document.createElement("a");
     linkElement.className = 'p-2 text-dark';
     linkElement.innerHTML = pagesData[ii].text;
     linkElement.setAttribute('href', pagesData[ii].link);
     headerDOM.appendChild(linkElement);
    }
}