export class Router {
    
    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page
    }

    route(event) {
        event = event || window.event;
        event.preventDefault();

        window.history.pushState({}, "", event.target.href)

        this.handle();
        this.handleNavHighlight(window.location.pathname)
    };

    handle() {
        const { pathname } = window.location;

        const route = this.routes[pathname] || this.routes[404]

        fetch(route)
            .then(data => data.text())
            .then(html => document.querySelector('#app').innerHTML = html)
        
    };

    handleNavHighlight(pathname) {
        console.log(pathname)
        switch (pathname) {
            case "/about":
                document.getElementById("about").classList.add("highlightedNav")
                document.getElementById("explore").classList.remove("highlightedNav")
                document.getElementById("home").classList.remove("highlightedNav")
                break;
    
            case "/explore":
                document.getElementById("explore").classList.add("highlightedNav")
                document.getElementById("about").classList.remove("highlightedNav")
                document.getElementById("home").classList.remove("highlightedNav")
                break;
                
            default:
                document.getElementById("home").classList.add("highlightedNav")
                
                document.getElementById("about").classList.remove("highlightedNav")
                document.getElementById("explore").classList.remove("highlightedNav")
                break;
        }
    }

}
