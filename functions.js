// Function to add event listeners to list items and close buttons
function addEventListeners() {
    // Add event listeners to list items
    var listItems = document.querySelectorAll('#lists li');
    listItems.forEach(function(item) {
        item.addEventListener('click', function() {
            this.classList.toggle('selected');
        });
    });

    // Add event listeners to close buttons
    var closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(function(close) {
        close.onclick = function() {
            var div = this.parentElement;
            div.style.display = 'none';
        };
    });
}

// Creating 'Close' button and appending it to each list
var myNodelist = document.getElementsByTagName('LI');
for (var i = 0; i < myNodelist.length; i++) {
    var span = document.createElement('SPAN');
    var text = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(text);
    myNodelist[i].appendChild(span);
}

// Initial setup of event listeners
addEventListeners();
document.getElementById('add').onclick = function() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('inputText').value;
    
    if(inputValue.trim() === "") {
        alert('You should write something in the input!');
    } else {
        li.textContent = inputValue;
        document.getElementById("lists").appendChild(li);
        
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);

        addEventListeners();
    }

    document.getElementById("inputText").value = "";
};
