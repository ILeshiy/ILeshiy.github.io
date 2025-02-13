
const menuLevels = [
    ["Dashboard", "Settings", "User Profile", "Notifications", "Privacy", "Help Center", "Support", "Documentation", "Tools", "Search"],
    ["Reports", "Analytics", "Integrations", "API Keys", "Security", "Billing", "Subscription", "Developers", "Logs", "System Status"],
    ["Advanced Settings", "Beta Features", "Experimental", "Hidden Options", "Legacy Mode", "Deprecated APIs", "Something Cool", "Debug Mode", "Secret Menu", "Mystery Settings"],
    ["Glitch Mode", "Easter Egg", "404 Lab", "Lost & Found", "Error Generator", "Infinite Loop", "Recursive Settings", "Quantum Config", "Ghost Button", "Shady Business"],
    ["???", "404 Not Found", "Click at Your Own Risk", "Nothing to See Here", "Undefined Behavior", "The Void", "Recursive Recursion", "Forbidden Zone", "Imaginary Feature", "Portal to Nowhere"],
    ["Blue Screen of Death", "This is Fine", "Quantum Entanglement", "404: Mind Not Found", "You Weren't Supposed to Click This", "Server is Crying", "Abandon Hope", "Why Are You Here?", "Oops", "Delete the Internet"]
];

function generateMenu(parent, depth) {
    if (depth > menuLevels.length) return;
    
    let categories = menuLevels[depth - 1] || ["Something Went Wrong"];
    
    categories.forEach(category => {
        let item = document.createElement("div");
        item.classList.add("menu-item");
        item.innerText = category;
        
        let submenu = document.createElement("div");
        submenu.classList.add("submenu");
        
        item.onclick = () => submenu.style.display = submenu.style.display === "block" ? "none" : "block";
        
        parent.appendChild(item);
        parent.appendChild(submenu);
        
        generateMenu(submenu, depth + 1);
    });
}

generateMenu(document.getElementById("menu-content"), 1);

let modalSteps = ["Are you sure you want to enter?", "Really sure?", "What is 2+2? (Type '4')"];
let modalIndex = 0;

function showModal() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("modal").style.display = "block";
    document.getElementById("modal-text").innerText = modalSteps[modalIndex];
}

function nextModalStep() {
    modalIndex++;
    if (modalIndex >= modalSteps.length) {
        document.getElementById("overlay").style.display = "none";
        document.getElementById("modal").style.display = "none";
        document.body.innerHTML = '<h1>Welcome to my world</h1>';
    } else {
        document.getElementById("modal-text").innerText = modalSteps[modalIndex];
    }
}

document.getElementById("about").addEventListener("click", showModal);

document.getElementById("about").addEventListener("mouseover", function() {
    setTimeout(() => {
        this.style.top = Math.random() * window.innerHeight + "px";
        this.style.left = Math.random() * window.innerWidth + "px";
    }, 300);
});
