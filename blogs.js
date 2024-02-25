const icons = {
    Brainstorming: `<svg class="mr-1 w-3 h-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M184 0c30.9 0 56 25.1 56 56V456c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56V56c0-30.9 25.1-56 56-56z"/></svg>`,
    Debugging: `<svg class="mr-1 w-3 h-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M256 0c53 0 96 43 96 96v3.6c0 15.7-12.7 28.4-28.4 28.4H188.4c-15.7 0-28.4-12.7-28.4-28.4V96c0-53 43-96 96-96zM41.4 105.4c12.5-12.5 32.8-12.5 45.3 0l64 64c.7 .7 1.3 1.4 1.9 2.1c14.2-7.3 30.4-11.4 47.5-11.4H312c17.1 0 33.2 4.1 47.5 11.4c.6-.7 1.2-1.4 1.9-2.1l64-64c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-64 64c-.7 .7-1.4 1.3-2.1 1.9c6.2 12 10.1 25.3 11.1 39.5H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H416c0 24.6-5.5 47.8-15.4 68.6c2.2 1.3 4.2 2.9 6 4.8l64 64c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-63.1-63.1c-24.5 21.8-55.8 36.2-90.3 39.6V240c0-8.8-7.2-16-16-16s-16 7.2-16 16V479.2c-34.5-3.4-65.8-17.8-90.3-39.6L86.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l64-64c1.9-1.9 3.9-3.4 6-4.8C101.5 367.8 96 344.6 96 320H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96.3c1.1-14.1 5-27.5 11.1-39.5c-.7-.6-1.4-1.2-2.1-1.9l-64-64c-12.5-12.5-12.5-32.8 0-45.3z"/></svg>`,
    Testing: `<svg class="mr-1 w-3 h-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9V344c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z"/></svg>`,
    Production: `<svg class="mr-1 w-3 h-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"/></svg>`
};

function dateSorter(x, y) {
    let d1 = new Date(x.date);
    let d2 = new Date(y.date);
    return d1 > d2 ? -1: 1;
};

document.addEventListener('DOMContentLoaded', (event) => {
    function createBlog(blog, i) {

        const icon = icons[blog.category]

        return `
        <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md">
            <div class="flex justify-between items-center mb-5 text-gray-500">
                <span class="bg-primary-100 text-green-500 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
                    ${icon}
                    ${blog.category}
                </span>
                <span class="text-sm">${blog.date}</span>
            </div>
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900"><a href="#">${blog.title}</a></h2>
            <p class="mb-5 font-light text-gray-500">${blog.blurb}</p>
            <div class="flex justify-between items-center">
                <div class="flex items-center space-x-4">
                    <img class="w-7 h-7 rounded-full" src="${blog.imageUrl}" alt="${blog.author}" />
                    <span class="font-medium">
                    ${blog.author}
                    </span>
                </div>
                <a href="#" class="read-more inline-flex items-center font-medium text-green-600 hover:underline" data-blog-index="${i}">
                    Read more
                    <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </article>
        `;
    }
  

    function display() {
        const container = document.getElementById("blogs-container");
        container.style.display = "";
        document.getElementById("full-blog").innerHTML = "";
        
        let content = blogs.map((blog, i) => createBlog(blog, i)).join('');
        container.innerHTML = content;

        document.querySelectorAll(".read-more").forEach((blog) => {
            blog.addEventListener("click", function(event) {
                event.preventDefault();
                const i = parseInt(this.getAttribute("data-blog-index"), 10);
                fullBlog(i);
            });
        });
    }

    function fullBlog(i) {
        document.getElementById("blogs-container").style.display = "none";

        const container = document.getElementById("full-blog");
        const blog = blogs[i];
        const icon = icons[blog.category];
        
        container.innerHTML = `
        <section class="bg-white py-8 px-8">
            <div class="max-w-6xl mx-auto flex flex-wrap md:flex-nowrap">
                <div class="w-full">
                    <div class="flex justify-between items-center mb-5">
                        <span class="bg-primary-100 text-green-500 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded">
                            ${icon}
                            ${blog.category}
                        </span>
                        <span class="text-sm text-gray-500">${blog.date}</span>
                    </div>
                    <h1 class="text-4xl font-bold mt-2 mb-4">${blog.title}</h1>
                    <div class="flex items-center mb-4">
                        <img class="w-10 h-10 rounded-full mr-4" src=${blog.imageUrl} alt=${blog.author}>
                        <span class="font-medium text-gray-700">By ${blog.author}</span>
                    </div>
                    <p class="text-gray-500 text-lg mb-6">
                        ${blog.content}
                    </p>
                    <a href="#" class="return-blogs inline-flex items-center font-medium text-green-600 hover:underline" data-blog-index="${i}">
                        Back to Blogs
                    <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
        </section>`
        
        container.querySelector(".return-blogs").addEventListener("click", function(event) {
            event.preventDefault();
            display();
        });

        // Using highlightjs to perform any potential codeblock highlighting
        hljs.highlightAll();
    }

    display();
});

const blogs = [
    {
        title: "Everything Has To Start Somewhere",
        date: "Jan 16 2024",
        blurb: "Finally being able to lay the foundations of OptiFS!",
        category: "Production",
        author: "Zoe Collins",
        imageUrl: "zoe.jpg",
        content: "We’re finally at the point where we can start the actual filesystem!<br><br> Today I started working on the foundations of the filesystem. I had already done my own versions of a FUSE filesystem, however since we are implementing a loopback filesystem I had to learn how to handle and pass calls to an EXT4 filesystem.<br><br> I started with the Lookup function, as that’s the basis of the filesystem. Nearly every operation starts with a lookup. After this I added a function to create a new node in the system, and a function to generate a unique inode number to go along with this. As our system is being run over NFS in a lab based setting, I decided that we should have as many inode number possibilities as possible, so that there would never be overlap. If this were to happen, this would <strong>break</strong> our filesystem!!<br><br> Once I had this all implemented, I wanted to see it working in action, so I started implementing it to run as a loopback filesystem by mounting OptiFS over an already existing filesystem <i>(directory)</i>.",
    },
    {
        title: "Commonly Used Syscalls",
        date: "Jan 17 2024",
        blurb: "Figuring out how to implement common UNIX syscalls!",
        category: "Production",
        author: "Zoe Collins",
        imageUrl: "zoe.jpg",
        content: "Today I started implementing some commonly used system calls, open and read. I started with the Open and Opendir functions for nodes, as I had written the lookup function yesterday, and it does not operate properly without the different open calls. Once I had that working, I then implemented the Readdir call to be able to list the contents of a directory. At this point, it was encouraging to see progress in the filesystem, as I could see that common shell commands were working.<br><br>Then I wanted to implement the getattr function, which shows all the attributes of a file when you do something like <strong>ls -l</strong>. One thing I found interesting was that you have to stat the nodes differently depending if they are the root node of the filesystem or if it is just a normal node. If it isn't the root node, you have to use <strong>Lstat</strong> to handle symbolic links as well, which we will be implementing later on in our filesystem.",
    },
    {
        title: "Issues with Writing",
        date: "Jan 18 2024",
        blurb: "Who would have thought you had to implement so much to write to a file?",
        category: "Debugging",
        author: "Zoe Collins",
        imageUrl: "zoe.jpg",
        content: "I’ve been trying to implement the write syscall in our virtual filesystem, but it is becoming quite difficult to do. This was the first time that I had to take output from one function into another and I wasn't quite sure what to do. This was especially hard due to the surprising lack of documentation in the go FUSE library about writing to files.<br><br>Eventually I thought that I had got it working, using a stub for opening a file for writing (as I was unsure how to pass the information at that point), only to find that on running the command <strong>echo 'hi' > niall</strong> that the file system responded saying <br><strong>bash: niall: Operation not supported.</strong><br>This was not expected behaviour, as after running stat on the file <strong>niall</strong>, I discovered that it was set up for reading, writing and executing. Upon further debugging, the filesystem didn't even enter the write function in the first place.<br><br>After looking further into our code and some examples that we found online, Niall realised that we needed to implement setattr as well as setxattr. This was needed to set the most recent access for the file that we were writing to, and also things like the file size, type, ownership, etc. After implementing this writing seems to work flawlessly!<br><br>Now we have a nearly complete foundation to base on!",
    },
    {
        title: "Developing the Blogs",
        date: "Jan 31 2024",
        blurb: "Switching it up with some frontend development :)",
        category: "Production",
        author: "Zoe Collins",
        imageUrl: "zoe.jpg",
        content: "Up to this point, this blog was just some plain <i>(poorly written)</i> HTML and CSS. Since Niall was working on creating a new custom metadata system for OptiFS, I decided to spend a bit more time making it easier for us to present our blog posts, instead of just a big wall of text on a webpage.<br><br> I chose to use tailwind to help style our blogs better, using card components and minimalistic design. I also added a little sticky navbar at the top of the page, more to be a title than an actual navbar <i>(although it does link you to the repo on gitlab).</i> In the end, I went with a grid-like formation of the cards, and decided they would be split up into 4 categories:<br><br><strong><ul><li>Production</li><li>Debugging</li><li>Brainstorming</li><li>Testing</li></ul></strong><br><br>",
    },
    {
        title: "Further Developing the Blogs",
        date: "Feb 1 2024",
        blurb: "Modular == Better!!",
        category: "Production",
        author: "Zoe Collins",
        imageUrl: "zoe.jpg",
        content: "Realising just how many blogs that we had both written, and were going to continue to write, I made the decision of adding javascript to dynamically load components onto the page, instead of copying and pasting chunks of HTML. Personally, I didn’t fancy having one <strong>10k+ line</strong> file for our blog page!<br><br> I added functions to render all the blog posts, and decided to store the blog posts as JSON objects, so that whenever we have a new blog to put in, we just have to fill in the information needed and push to github pages. Another quality of life change I made was to have a map that mapped the category of the blog to the corresponding svg image, so when you put in the title it just grabs the image.<br><br> Finally, I really didn’t want to have to go and sort all of mine and Niall’s blogs by date written, so I designed a function to sort the JSON and display the most <strong>recent</strong> blogs first.<br><br>",
    },
    {
        title: "Even Further Developing the Blogs",
        date: "Feb 3 2024",
        blurb: "Here come the finishing touches… to the blog…",
        category: "Production",
        author: "Zoe Collins",
        imageUrl: "zoe.jpg",
        content: "On to the <i>(hopefully)</i> final day of developing the blog! Today I added little images of myself and Niall, so that we could have identifiers beside the blogs that we wrote, and to make it look more like somebody’s actual blog you would see on the internet.<br><br> I also created a fullBlog function to display the full blog when the card is clicked on. I implemented an index to each blog to make sure that this was possible.<br><br> Then I realsised that I had an issue when I wanted to go back, as the page was trying to render two divs at once, so I added some Javascript voodoo magic <i>(setting divs to display blank)</i> to get it to work! To finish it off, I added a few of my blogs to test that everything was in working order. Woo!!!!!<br><br>",
    },
    {
        title: "Looking into Documentation",
        date: "Feb 6 2024",
        blurb: "...But the user doesn't know our system is there!!",
        category: "Brainstorming",
        author: "Zoe Collins",
        imageUrl: "zoe.jpg",
        content: "As Niall was still polishing off the custom metadata system, I decided to have a look at the documentation required for this project, specifically the functional specification and the user manual. I wanted to get a good grasp of what was needed for each of these pieces of documentation, so that we could both be thinking about them while we were coding the actual project.<br><br> I started with the functional specification, and wrote the introduction section for that, as it is just a synopsis of the project itself, not needing any dirty details of the inner workings, which aren't finished yet.<br><br> I decided to have a look at the user manual and what was required, and then quickly got stuck. We needed to write about how the user interacts with our project - but the user (the students) <i>aren't supposed to know that our project is there!!</i> I decided to leave it and ask Stephen about it when we met with him.<br><br> Finally I did a little bit of debugging around the append function - as I had some concerns to do with <strong>race conditions over NFS</strong>, but all seemed well.<br><br>",
    },
    {
        title: "Back to the Programming Grind!",
        date: "Feb 12 2024",
        blurb: "How can we possibly handle persistance? Just wait and see…",
        category: "Production",
        author: "Zoe Collins",
        imageUrl: "zoe.jpg",
        content: "After finishing my intensive two week module, I decided to ease myself back into the swing of things by implementing locks on saving and retrieving our three hashmaps. I had already figured out how to save and retrieve one of them on an earlier date, so I copied that across to the two new hashmaps and gave them all their own file to be encoded into. I also made sure that encoding and decoding didn’t mess up any of the data, as we had implemented our own custom metadata system and we were not sure how it would take to being serialised.<br><br>After seeing that there was no issue, I decided to create 3 different read-write lock variables: <strong>one for each set of hashmaps and corresponding functions that deal with these hashmaps.</strong> I implemented write locks on the hashmaps, as it is crucial that only one process is accessing these at one time.<br><br> ",
    },
    {
        title: "Going Mutex Crazy!",
        date: "Feb 13 2024",
        blurb: "Read locks, write locks, what to use and when to use them?",
        category: "Production",
        author: "Zoe Collins",
        imageUrl: "zoe.jpg",
        content: "Today I decided to look more into locks and how to lock all operations/functions in our system, as this would play a big part in getting the system working over NFS. I discovered that there are two different types of locks that are pre implemented in the <strong>sync</strong> package in Go: RLock() and Lock(). RLock() allows for concurrent read operations, as long as there is no write, and Lock() is for write only operations, one at a time, like the ones I had put on saving the hashmaps.<br><br> I methodically went through and figured out which type of lock I needed for each function, with the general rule of if the function was modifying data in any way it needed a Lock(). I added locks in each file in the metadata package, where they were needed: <strong><br><br>persistence_api.go<br>common.go<br>directory_metadata.go<br>regular_file_metadata.go<br>general_api.go<br><br></strong> In figuring out when to use dirMutex or metadataMutex, I added a boolean flag to check whether we are working with a directory or not, and I pass it to each function where both locks could be implemented.<br><br> After this, I started implementing sysadmin privileges. I made a sysadmin struct, which holds the sysadmin’s UID, GID and a flag to tell if the sysadmin has been set. I worked on saving and retrieving the sysadmin struct, and setting a user as the sysadmin.",
    },
    {
        title: "Fat test",
        date: "Feb 16 2024",
        blurb: "code blocks",
        category: "Brainstorming",
        author: "Niall Ryan",
        imageUrl: "niall.jpg",
        content: "codeblock highlighting test!<pre><code class=\"go\">func main() {log.Println(\"Hello World!\")}</code></pre>",
    },
]

blogs.sort(dateSorter);
