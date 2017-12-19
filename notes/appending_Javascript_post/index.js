var blogContainer = document.getElementById("blog-container");

function BlogTemplate(title, author, content){
    var wrapper = document.createElement("div");
    var h1 = document.createElement("h1");
    var h4 = document.createElement("h4");
    var p = document.createElement("p");
    
    h1.innerHTML = title;
    h4.innerHTML = author;
    p.innerHTML = content;

    wrapper.appendChild(h1);
    wrapper.appendChild(h4);
    wrapper.appendChild(p);
    
    return wrapper;
}

function addBlogPost(title, author, content){
    var blogPost = new BlogTemplate(title, author, content);
    blogContainer.appendChild(blogPost);
}

// console.log(document.myForm)
function handleSubmit(event){
    event.preventDefault();
    var form = document.myForm;
    var title = form.title.value;
    var author = form.author.value;
    var content = form.content.value;
    addBlogPost(title, author, content);
}

document.myForm.onsubmit = handleSubmit;

// addBlogPost("My Blog", "Lesa", "Im learning how to cook kittens");
// addBlogPost("Best Cheese", "John Simmons", "Cheese sucks, it makes me sick")