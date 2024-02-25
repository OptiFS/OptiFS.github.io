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
        title: "Creating Files!",
        date: "Jan 9 2024",
        blurb: "The origins of implementing files in FUSE and further experimenting with NFS!",
        category: "Brainstorming",
        author: "Niall Ryan",
        imageUrl: "niall.jpg",
        content: "Today I looked into what syscall operations we'd have to implement to allow basic functionalities of files in our FUSE filesystem!<br><br>Really exciting progress today, I built my own persistent inode structure within libfuse. It was pretty fascinating learning how to define how a filesystem would store and represent its files. In particular, I focused on implementing these essential file operations;<br><br><strong>Open</strong>: The foundation for accessing a file's contents.<br><strong>Read</strong>: How you retrieve data from a file.<br><strong>Lookup</strong>: Verifying that a file or directory exists within the filesystem.<br><strong>Getattr</strong>: Getting metadata about a file or directroy (size, permissions , etc...).<br><br>Another key insight was the need for a <strong>separate root node type</strong>. This serves as the crucial mountpoint for my system and required slightly different behaviours and attributes than a typical node. It also proves useful as somewhat of a gateway point in our code from our virtual FUSE filesystem and the actual underlying filesystem. It essentially provides as an anchorpoint in our loopback filesystem design - and figuring this out, I think, is a big step.<br><br>Additionally, I tried experimenting further with NFS and FUSE today, but I wasn't able to make any progress. It's difficult as we're just not able to tell what filesystem calls need to be implemented for NFS to work - and there's seemingly no way to figure out. I can't even find anything online about it. I believe NFS just assumes regular filesystem behaviour, so we'll have to keep fleshing out our implementation until it seems to be able to work nicely with NFS.<br><br>Finally, I also spent some time today trying to dockerise our FUSE virtual filesystem. It, however, similarly to NFS, just refuses to comply with Docker. I'll try again tomorrow."
    },
    {
        title: "More NFS Efforts",
        date: "Jan 10 2024",
        blurb: "NFS seems to just not want to work with FUSE!",
        category: "Brainstorming",
        author: "Niall Ryan",
        imageUrl: "niall.jpg",
        content: "Today was quite unsuccesful unfortunately. I have spent the day looking at various examples included in Hanwen's 'go-fuse' package that we're using, and seeing how they work, and testing whether they work over NFS.<br><br>After another unsuccesful day of brainstorming and experimenting, I made myself more familiar with FUSE, and tried yet again to get FUSE to work nicely with Docker, again, without success.",
    },
    {
        title: "NFSv4 to the Rescue!",
        date: "Jan 11 2024",
        blurb: "Turns out that NFSv4 might save us and be compatible with FUSE!",
        category: "Brainstorming",
        author: "Niall Ryan",
        imageUrl: "niall.jpg",
        content: "Today I found out that we are restricted to using only NFSv4 and that apparently most Linux distributions ship with a kernel that does not allow the exporting of a FUSE mounted file system over NFSv2 or NFSv3.<br>Here's a link to a related thread I found: <u><a href=\"https://unix.stackexchange.com/questions/102617/having-trouble-exporting-fuse-via-nfs\">here</a></u><br> So atleast there's some light on the FUSE and NFS situation!<br><br>I have also officially given up on getting docker to work for adhoc development. <br><br>Between placeholder filesystem types, volumes and dockers issues with mounting anything FUSE related, it's just quite the hassle and I'm not sure if it will even work in the end, or if it might be the case that you need quite a fleshed out filesystem for it to work, similar to NFS. I'm just setting up a spare laptop as an NFS server and going to see if it works there.<br><br>Further looked into setting up NFSv4 and mounting it correctly. Looks like we might need a very important '<code>crossmnt</code>' flag. Looking further into correct setup of NFS, bind mounts and more.<br><br> Update! Cannot seem to get any interopability between FUSE and NFS. Our FUSE virtual file system doesn't exist when accessed from a client through NFS even though it seems to export properly, I'll look more into it tomorrow, but we seem to atleast be making a little more progress!<br><br> Oh, and I also set up a github pages site for our blog - yet to be styled.",
    },
    {
        title: "Finally Progress With NFSv4 and FUSE!",
        date: "Jan 13 2024",
        blurb: "I have figured out how to get them working with eachother!",
        category: "Brainstorming",
        author: "Niall Ryan",
        imageUrl: "niall.jpg",
        content: "Making some progress with NFS and FUSE!<br><br>I was previously plagued with a FUSE virtual file system and NFS refusing to co-operate. However, after finding reddit threads online talking about mounting SSHFS (A FUSE vfs that mounts an ssh client as if it's a USB drive essentially) through NFS - I found out how they managed to get it working.<br><br>Firstly, only NFSv4 supports exporting a FUSE file system - so I switched to that. I also was previously exporting my '<code>/nfs-share</code>' drive and all its contents <strong>BEFORE</strong> mounting my virtual file system, which led me to great confusion - as there were no errors, the FUSE filesystem was interacting and behaving perfectly on the server side. But then when a client would mount the NFS, the FUSE filesystem was nowhere to be seen, and it wasn't even intercepting any filesystem calls, they were instead going straight to the kernel's ext4.<br><br>It was then a matter of mounting the FUSE filesystem <strong>FIRST</strong>, then exporting the NFS directories. However, I then came across another error.<br><code class='bash'>exportfs: Failed to stat /nfs-share/vfs/test: Permission denied</code>. This was either due to my primitive filesystem not implementing permissions OR the stat system call.<br><br>I then continued to the Go-Fuse go module we're using, which has good examples of more fleshed out virtual file systems using their bindings for FUSE. I used their WinFS example, which is a loopback filesystem that emulates Windows semantics (no delete/rename on opened files) on Unix systems.<br><br>I ran this with;<br><code class='bash'>go run main.go -debug /nfs-share/vfs/test ./other</code><br>This runs the virtual file system looping back to the '<code>./other</code>' directory, but mounted on '<code>/nfs-share/vfs/test</code>'.<br><br>I then went to export again with '<code>exportfs -arv</code>'. And I got;<br><code class='bash'>exporting *:/nfs-share/vfs/test<br>exportfs: Failed to stat /nfs-share/vfs/test: Permission denied<br>exporting *:/nfs-share/vfs<br>exporting *:/nfs-share/normal<br>exporting *:/nfs-share<br>exportfs: could not open /var/lib/nfs/.etab.lock for locking: errno 13 (Permission denied)<br>exportfs: can't lock /var/lib/nfs/etab for writing</code><br><br>I continued to change the permissions of my FUSE mount, '<code>chmod -R 777 /nfs-share/vfs/test</code>', which succeeded but didn't avoid the above error.<br><br>I then unmounted the current FUSE handler, and ran it with root privileges. '<code>sudo go run main.go -debug /nfs-share/vfs/test ./other</code>'. I then exported again with '<code>exportfs -arv</code>' and got the exact same issue. I finally tried exporting with root privileges '<code>sudo exportfs -arv</code>', and it worked! The FUSE handler script reported receiving a '<code>STATFS</code>', which returned '<code>OK</code>'.<br><br>I continued to grab my other laptop, connect them both to my mobile phone hotspot (as I was on campus, and eduroam is very strict), and I was able to mount to the NFS server on a client machine (my other laptop). <br>Continuing in '<code>/nfs-share/vfs/test</code>' on the client, and I tried an '<code>ls</code>'. When I ran it, my FUSE VFS handler reported receiving '<code>GETATTR</code>! It was working! Albeit, with a less-than-ideal delay, but I finally got NFS and FUSE talking! <br><br>It's now a matter of implementing permissions and '<code>STATFS</code>' in my primitive FUSE implementation - looking through the codebase of this loopback 'WinFS' example.<br><br>Recap of steps to get it working;<br><br>1. Mount the FUSE filesystem into your nfs-share with root privileges.<br>2. Export NFS with root privileges.<br><br>Steps to unmount FUSE:<br>1. Shutdown NFS '<code>sudo systemctl stop nfsv4-server.service</code>'<br>2. Unmount VFS '<code>sudo umount /nfs-share/vfs/test</code>'<br><br>Further looking into implementing my own loopback filesystem - implementing necessary syscalls to get FUSE mounted into NFS.<br><br>Learning about stable attributes, generation numbers used by network file systems, and analysing existing implementations of loopback filesystems from the go-fuse examples.",
    },
    {
        title: "Figuring Out How To Write!",
        date: "Jan 18 2024",
        blurb: "The mysteries of Write in FUSE!",
        category: "Brainstorming",
        author: "Niall Ryan",
        imageUrl: "niall.jpg",
        content: "Ever spent way too long troubleshooting something seemingly simple? Today, that was me and the FUSE '<code>write</code>' syscall. Infact, I spent all day troubleshooting an implementation of the it!<br><br>We have '<code>access</code>', '<code>flush</code>', '<code>fsync</code>', '<code>open</code>', and '<code>release</code>' implemented, but it seems as if the filesystem would receive an '<code>open</code>' syscall and immediately close the file before doing anything with it.<br><br>Turns out, it seems that we were forgetting the '<code>setattr</code>' method for updating access and modified times, file sizes and more. After implementing '<code>setattr</code>', writing seems to work perfectly.<br><br>It may seem quite common-sense, but unfortunately we're no experts on the inner-workings of filesystems, and are completely unaware of what's absolutely required or what's 'nice-to-have' foresay. Although we are learning incredibly amounts about this kinda stuff with all the issues we're having!<br><br>We now need to look at implementing locks for files due our filesystem being mounted over a network filesystem (NFS), this is VERY important for synchronous operation, and is somewhat slightly daunting of a task!<br><br>Additionally, we need to look at implementing our own loopback filehandle class, as up to this point we were using the go-fuse module's built-in `Loopbackfile` struct as a stub, but it will not contain the de-duplication features we'll need in the future!",
    },
    {
        title: "Testing OptiFS Over NFS",
        date: "Jan 29 2024",
        blurb: "The continued hassles of trying to integrate FUSE with FUSE",
        category: "Brainstorming",
        author: "Niall Ryan",
        imageUrl: "niall.jpg",
        content: "Today was all about putting our filesystem to the test over NFS! With several syscalls implemented, I was cautiously optimistic.<br><br>Well, things worked... mostly. Complex editors like neovim threw errors about extended attributes '<code>(E1509: Error occurred when reading or writing extended attribute)</code>'. Plus, basic file creation was a no-go, with no sign of the Create syscall in our logs.<br><br>Diving into FUSE's logs, I spotted the culprit: it was trying to call '<code>Mknod</code>', which we hadn't implemented yet. A bit of research revealed that '<code>Mknod</code>' is used for creating more specialized node types like pipes and device files, not just regular files. Interesting!<br><br>Implementing '<code>Mknod</code>' magically solved both the creation issue and the extended attribute woes. Then, we discovered we'd forgotten file moves! NFS requires atomic operations here, specifically the '<code>RENAME_EXCHANGE</code>' flag. Adapting hanwen's example from his Go FUSE bindings library that we're using, we got it working flawlessly. <br><br> Hard links and symlinks were next, and now we felt pretty confident about our loopback operations. The filesystem held up even when multiple clients edited the same file – a good sign!<br><br>Now for some testing! ...Or so I thought. That pesky extended attribute error (<code>E1509</code>) popped up again, this time only with symlinks. After some code review, I realized we were using <code>syscall.Setxattr</code> instead of the <code>unix.Lsetxattr</code> family of functions (similar to the Stat vs. Lstat distinction).<br><br>Sadly, swapping those didn't fix things. It gets stranger: after unmounting and remounting, our symlinks broke entirely. Looks like we might need to add yet another FUSE binding, <code>ReadLinker</code>, to our repertoire.",
    },
    {
        title: "Deduplication Solution and Editor Craziness",
        date: "Jan 30 2024",
        blurb: "The crazy actions of editors like Vim, and a possible solution to deduplication in our filesystem!",
        category: "Brainstorming",
        author: "Niall Ryan",
        imageUrl: "niall.jpg",
        content: `My goal today was to finish our hashing function, but it quickly went sideways. Appends weren't working – we needed to read the existing file content first since only the appended data was sent our way.<br><br>Unfortunately, that got put on hold as a major hashing bug reared its head: invalid inodes (value 0) were mysteriously appearing in our content-indexed hash map. After hours of log-diving and debugging, we pinpointed the culprit: Vim's intricate file editing behavior. Vim performs a surprisingly complex dance of '<code>OPENDIR</code>', '<code>ACCESS</code>', and '<code>CLOSEDIR</code>' calls, sometimes deleting the original file and creating temporary files like '4139' and another with the original filename plus a '~'. We suspect this is an atomic write: Vim writes to the temporary file, deletes the original, then renames the temporary file. This was flooding our hash with invalid and overwritten inodes, proving to be disastrous for our system!<br><br>While wrestling with this, I had an idea for our content-addressable storage implementation. Since our FUSE filesystem is a loopback (built on top of another filesystem), we could leverage that. Traditionally, loopback filesystems use the underlying filesystem's structure, but we want our own file tree for managing duplicate links. <br><br>Instead of completely reinventing the wheel, what if we continue using the underlying filesystem for persistence? When we find a duplicate file, we hardlink it!  This is fantastic IF hardlinks can maintain their own permissions and metadata.<br><br>This means we only need to detach file metadata management. We can use Go's '.gob' serialization to store our own metadata system. The beauty of hardlinks is that the underlying filesystem handles garbage collection for us!<br><br>This method adds reliability by delegating node structure to the existing filesystem. However, we need a giant content-addressable hash map for metadata. This could be a bottleneck, especially if collisions and loading times become an issue. We also need to diligently save this map to disk for data integrity.<br><br>Here's a simplified representation of the proposed hash map:<br><pre><code class='json'>
        {
            \"32h4u3i4328289dhdh832983289dh3982h8479539\": {
                \"references\": 3,
                \"locations\": [
                    { \"ref\": 1, \"user\": 100, \"permissions\": 0666, \"metadata\": {...} },
                    { \"ref\": 2, \"user\": 101, \"permissions\": 0700, \"metadata\": {...} },
                    ...
                ],
                \"currentMaster\": \"/OptiFS/Store/ryann62/ca169/hello.py\"
            }
        }
        </code></pre>`,
    },
    {
        title: "Implementing OptiFS Custom Metadata Hash Maps",
        date: "Jan 31 2024",
        blurb: "Making progress with our hardlinking solution!",
        category: "Production",
        author: "Niall Ryan",
        imageUrl: "niall.jpg",
        content: `Today, I'm going to focus on implementing the hard-link/meta-data overriding solution.
        <br><br>
        First things first, see if we can encode complex data structures, as it's vital that these can be saved to disk.
        <br><br>
        I tried to encode the complex '<code>MapEntry</code>', of which has mixed attribute types, including nesting structs '<code>MapEntryNode</code>' and '<code>MapEntryNodeMetadata</code>'
        <br><br>
        Additionally, this is what our structs for the custom metadata system look like (in Golang of course);
        <br>
        <pre><code class='go'>type MapEntry struct {
    ReferenceCount uint32
    Nodes map[uint16]MapEntryNode
    UnderlyingInode uint32
}

type MapEntryNode struct {
    ReferenceNum uint32
    User uint16
    Metadata MapEntryNodeMetadata
    ExtendedData map[string]string
}

type MapEntryNodeMetadata struct {
    DeviceID uint16
    Mode uint8
    LinkCount uint16
    Size uint64
    ATime time.Time
    CTime time.Time
    MTime time.Time
    BlockSize uint16
    BlocksAllocated uint64
}
</code></pre>
<p class="text-gray-500 text-lg mb-6">
And it worked perfectly!
<br><br>
Encoded and decoded without a problem - although with the times we seem to lose the monotonic clock when decoded and encoded. I don't think that's a problem though.
<br><br>
Now I'm going to try and implement it in the filesystem.
</p>`,
    },
    {
        title: "Implementing Our Custom Metadata System!",
        date: "Feb 1 2024",
        blurb: "Integrating custom metadata into OptiFS",
        category: "Production",
        author: "Niall Ryan",
        imageUrl: "niall.jpg",
        content: "Today I completed a massive amount of work!<br><br>After finishing the implementation of our custom metadata hash maps I set out to actually integrate it into our OptiFS system.<br><br>This required an entire overhaul of '<code>Setattr</code>' and '<code>Getattr</code>' filesystem calls at the Node and File level!<br><br>It didn't take too long, but now we update and retrieve from out custom metadata hashmaps instead of the underlying filesystem, but I also have implemented it so as to query the underlying filesystem as a fall-back if a virtual FUSE node has no custom metadata entry in our hash maps.<br><br>I also performed numerous other small changes on the filesystem to better integrate our custom metadata system, but it seems to be working well at the moment, although there is still more work to do!",
    },
    {
        title: "First Issues With The Custom Metadata System",
        date: "Feb 2 2024",
        blurb: "It was bound to happen, wasn't it?",
        category: "Debugging",
        author: "Niall Ryan",
        imageUrl: "niall.jpg",
        content: "We hit a snag with our new metadata system. Writes seemed to work fine, but reads turned up empty files! Even worse, edits resulted in empty, read-only files. A quick stat check revealed that all metadata values were stuck at their defaults – our changes weren't being saved.<br><br>The culprit? Our lack of pointers. Without them, changes weren't making it back to the original data structures. Time to change everything to pointers!<br><br>I refactored our hashing module to use pointers. Previously, structs were being copied needlessly, leaving the originals untouched. With pointers in play, things finally fell into place – the fix works!<br><br>This little bug was a great reminder of how crucial choosing between values and pointers can be in Go, especially when you need to modify the contents of structs directly!",
    },
    {
        title: "Unlocking Unlinking: A Metadata Challenge and Solution",
        date: "Feb 3 2024",
        blurb: "And additionally tackling persistence whilst we're at it!",
        category: "Brainstorming",
        author: "Niall Ryan",
        imageUrl: "niall.jpg",
        content: "Set out to tackle unlinking correctly with our custom metadata system. My initial plan seemed straightforward:<br><br>1. Find the metadata entry in the HashList.<br>2. Delete the metadata object if found.<br>3. Decrement the reference count in the parent MapEntry.<br>4. Delete the MapEntry if its reference count hits zero.<br>5. Finally, delete the node from the underlying filesystem.<br><br>Then I hit a roadblock. The unlink call happens on the parent directory, giving no direct access to the refNum and contentHash of the node being removed.<br><br>This also brought up the related issue of persistence. We need our filesystem nodes to keep their contentHash and refNums even when the system restarts.  Our existing hashmap handles metadata but wasn't designed for this.  Xattrs were an option but limited us to Linux and wouldn't play nice with our hardlink goals.<br><br>The solution? A new hashmap! This one would map filepaths to their refNum and contentHash. It would be created on Create calls and updated throughout operations.<br><br>This extra map does double duty:<br><strong>Persistence</strong>: We can serialize this hashmap to disk for loading when the filesystem starts again.<br><strong>Unlinking Solution</strong>: Now we can find a node's refNum and contentHash just by knowing its path.<br><br>Time to get this implemented!",
    },
    {
        title: "Metadata Maps, Permissions Problems, and Refactoring to the Rescue",
        date: "Feb 6 2024",
        blurb: "This is becoming more and more complex!",
        category: "Brainstorming",
        author: "Niall Ryan",
        imageUrl: "niall.jpg",
        content: "I wrapped up unlinking with our metadata system and expanded the hashing module API for persistent node info removal. However, a quick test revealed a flaw: overwriting a file with identical content generated a new metadata entry, leaving an orphaned entry behind after deletion. Time to tackle proper deduplication! This requires careful atomic operations for reliable cleanup.<br><br>My next goal was to integrate our metadata system into more syscalls like '<code>ACCESS.</code>' I naively assumed they were all covered by '<code>ACCESS</code>', but ad-hoc tests with '<code>cat</code>', '<code>ls</code>', and '<code>rm</code>' showed otherwise. Each of these needs its own permissions implementation – a much bigger job than I bargained for!<br><br> After adding <code>Open</code>, <code>Read</code>, and <code>Write</code>, another hiccup: directory permissions weren't being respected. FUSE forces an all-or-nothing approach: either the kernel handles permissions, or we do it all ourselves. I wanted to blend approaches, but it's not that simple.<br><br>Since file-based metadata isn't enough, I need a new hashmap for directory permissions – directories don't have content hashes! Initially, I tried using paths as keys, then switched to inodes since they are readily available.  I need to test if my generated inodes are persistent.<br><br>After this, my code felt messy... cue a massive refactoring...<br><br>The hashing module was doing way more than hashing. I created a dedicated metadata module, splitting code across multiple files. Permissions logic got its own module as well. It's closer, but I'll do more refactoring tomorrow.<br><br>So to wrap it up;<br>Deduplication is trickier than it seems - atomic operations are key for reliable cleanup.<br>FUSE can be inflexible when it comes to permissions handling.<br>Refactoring is your friend! Don't let complexity overwhelm your code structure.",
    },
    {
        title: "Circular Imports and Cleaner Code: Merging Modules",
        date: "Feb 7 2024",
        blurb: "De-spaghettifying our codebase!",
        category: "Brainstorming",
        author: "Niall Ryan",
        imageUrl: "niall.jpg",
        content: "As our codebase surpassed 2000 lines, I focused on refactoring for maintainability. My file and node modules were too intertwined, and common operations begged for consolidation.  I started by creating an internal module with a common.go file.<br><br>Uh-oh! Circular imports emerged between file, node, and my new internal module. Since these modules were so tightly connected, I decided to merge them into a single vfs (virtual file system) module. This fixed the import issues, simplified the code, and let me adjust the scope of operations and attributes to be VFS-specific. Definitely a win.<br><br>Next up: directory permissions. It's a bit of a puzzle – sometimes only directory-related syscalls get triggered (opendir, mkdir, etc.), while other times access handles validation.<br><br>To tackle this, I refactored our access file, moving permission checks into the permissions module. This significantly streamlined things and made it simpler to integrate our custom directory metadata into the access call.<br><br>Testing shows our directory permission system is mostly working. There are some wrinkles to iron out, but it's a solid step forward!<br><br>Lessons Learned:<br>Don't underestimate the importance of refactoring as your project grows.<br>When faced with circular imports, consider if the modules truly need to be separate.<br>FUSE permissions can be a maze – understanding the interplay of different syscalls is key.",
    },
    {
        title: "Small Check-in: Trying To Finish The Custom Metadata System",
        date: "Feb 8 2024",
        blurb: "Keep on keeping on!",
        category: "Brainstorming",
        author: "Niall Ryan",
        imageUrl: "niall.jpg",
        content: "Not all too much to report today.<br><br>I'm working on trying to finally finish the <strong>full</strong> implementation of our custom metadata system so we can move forward onto deduplication.<br><br>One thing I have noticed though however, is that our code is so much easier to expand and maintain after all the refactoring I performed yesterday.<br><br>Seems like we're finally making good progress with the project. I think we <strong>DEFINITELY</strong> underestimated the complexities of this project. Even just creating your own virtual filesystem in FUSE is a very difficult undertaking, nevermind the loopback design, or implementing your own custom metadata and permissions system ontop of deduplicating!<br><br>But we're getting there!",
    },
    {
        title: "A Grave Fault With Our Deduplication Approach",
        date: "Feb 9 2024",
        blurb: "Sometimes you don't always make progress...",
        category: "Brainstorming",
        author: "Niall Ryan",
        imageUrl: "niall.jpg",
        content: "Unfortunately today I unsuccesfully implemented the de-duplication feature of our filesystem.<br><br>I spent all day today meticulously implementing what I thought would be a clean, workable solution for de-duplicating content on our filesystem. However, it proved to only produce spaghetti code that didn't even work!<br><br>I have found a grave error in the logic of our filesystem. The way that FUSE works and indexes/remembers virtual nodes, is through their inodes.<br><br>In our current filesystem, we produce the inodes for virtual nodes from the nodes in the underlying filesystem. This is great as long as the underlying node doesn't change.<br><br>HOWEVER, in our filesystem when we find that we're creating duplicate content, we turn the underlying node into a hardlink to the original content - can you see the flaw?<br><br>When the underlying node is converted to a hardlink, the next time we try to retrieve the virtual node that belongs to it, it generates the wrong one! This is because it uses the underlying node to generate the virtual node.<br><br>Not sure how to approach this cleanly, and quite frankly I've turned out codebase into spaghetti trying to diagnose this issue<br><br>Unfortunately, I've just decided to stash all the changes I've made today, and I'll tackle the problem properly tomorrow."
    },
    {
        title: "Trying Again: Preparing For A Correct Deduplication Approach",
        date: "Feb 10 2024",
        blurb: "Hopefully we'll get it right this time!",
        category: "Brainstorming",
        author: "Niall Ryan",
        imageUrl: "niall.jpg",
        content: "Today I spend all day changing how we generate and retrieve our virtual FUSE nodes, so as to allow our deduplication implementation to work.<br><br>If you read my previous blog, you're aware of the issues I came across with our old implementation. But to get around it, I have decided to only generate our virtual nodes <strong>once</strong>. Before, anytime we wanted to interact with a virtual node, we would generate it from the underlying node. Now, we only generate it once, store it in our already-existing persistence hash map, and query that instead of the underlying filesystem.<br><br>It was quite a big job to change the behaviour, and it has added quite some complexity to our code, but it is a good and correct approach, and I believe it does actually slightly optimise our filesystem a small bit. Although I do have fears that another hash map could introduce a fear of bottlenecking, we really need to just get a working, functional filesystem before we begin optimising.<br><br>There's still a bit more to be done with integrating this approach throughout our filesystem calls, but I should be able to tackle deduplication soon."
    },
    {
        title: "Finishing Our Preparation For Deduplication",
        date: "Feb 11 2024",
        blurb: "So many filesystem calls!",
        category: "Brainstorming",
        author: "Niall Ryan",
        imageUrl: "niall.jpg",
        content: "I have spent today working on finalising our new virtual node generation and retrieval system.<br><br>Specifically on Mknod (which is vital as this is what NFS uses, not Create!). I also implemented it on Symlink, but we seem to have a 'dangling symlink' bug - which means it ends up pointing to nothing! I'm not sure what this is about, but it's pretty low priority for the moment, as the deadline is approaching, we need a minimum viable product.<br><br>I will tackle the integration of hardlinks and renaming into the new virtual node generation/retrieval system tomorrow, along with hopefully the underlying de-duplication writes!"
    },
    {
        title: "Even More Deduplication Issues",
        date: "Feb 14 2024",
        blurb: "When will it ever stop?",
        category: "Brainstorming",
        author: "Niall Ryan",
        imageUrl: "niall.jpg",
        content: "So, it's been a couple days, but I've managed to implement deduplication correctly and it works great! It was incredibly satisfying seeing it all work and come together in the end, but unfortunately it was too good to be true.<br><br>My current approach is that I'm hashing a file in the '<code>Write</code>' filesystem call. The logic behind this is that we can check the content being written to, hash it, and check if it's unique. If it is not unique, we throw away the write and simply perform our hardlinking deduplication logic. But if it is unique, we simply just allow it to write.<br><br>Now, unfortunately our lackluster testing allowed this solution to slide for a few days - until I began testing large files.<br><br>Our large files unfortunately completely break this solution. For whatever reason (likely due to inexperience or lackluster knowledge of filesystems), we forgot that writes for large files are performed in blocks - which completely breaks the logic of our solution that assumes that '<code>Write</code>' is only called once per file-write.<br><br>I have however, come up with a solution. I'm going to move the deduplication logic to '<code>Release</code>':<br> 1. Hash each write block and store<br> 2. Write to underlying filesystem<br> 3. Repeat as many times as necessary<br> 4. In RELEASE, hash all the hashes together (still deterministic - I think - and avoids loading entire filecontent into memory)<br> 5. Check if unique with overall hash<br> 6. If unique, simply update custom metadata + persistence<br> 7. If non-unique, overwrite written file with a hardlink and update metadata + persistence<br><br>This should (hopefully) work, and I will work on implementing it tomorrow!<br><br>Other things that I did today are;<br> - Fixed a bug where we couldn't re-name a de-duplicated file. (issue with pointers)<br> - Detecting duplicate files from persistent loaded data.<br><br>Oh, and happy Valentines Day!"
    },
    {
        title: "Deduplication Implemented And Benchmarking",
        date: "Feb 15 2024",
        blurb: "Finally!",
        category: "Brainstorming",
        author: "Niall Ryan",
        imageUrl: "niall.jpg",
        content: "So, this morning I implemented the revised de-duplication approach that allows for large file writes!<br><br>Although I did come across another small issue - it was only minor. I forgot to take into account that files aren't just released when written to, but also when read to and possibly executed too? I'm not too sure. So I just had to put in an additional check to look at a file's open flags, and see if it was originally opened with write intent. If the file had no write intent, I simply don't perform the de-duplication logic. But good news - this approach seems to work really well!<br><br>Another thing about this approach that was quite difficult was maintaining a hash for the whole content of a large file, especially when it's performing many writes! To get around this, I now hold a byte buffer, of which I fill with the BLAKE3 hash of all block writes, and then finally when the file gets Released, I hash the entire contents of the byte buffer to get my final 64-byte hash. This is a great solution, as not only does it maintain determinism, it also cleverly procedurally hashes the entire content of a large file whilst it's being written. This is very important, as hashing the contents of large files is pretty difficult, you can't assume you can fit the entire file's contents into memory. Additionally, you will see that this method actually doesn't have too scary of a slowdown either, atleast for files below 10GB.<br><br> I began testing speeds;<img src='bench1.png'/><br>And as you can see, unfortunately as you can see, this process tends to get quite a bit slower as the filesize grows.<br><br>I then continued to test the same operations on a standard ext4 filesystem to get some baseline speeds to compare these to;<br><img src='bench2.png'/><br>This shows that our method really isn't all that great, yikes.<br><br>HOWEVER, I then realised we're doing a scary amount of logging, and that this is definitely slowing down our benchmark speeds - especially for the 10gb size file, where we're doing upwards of 80,000 writes!<br><br>So I tested it again, with all the logging removed, and got these speeds;<br><img src='bench3.png'/><br>The times were halved! These really are not bad times at all, as this is the baseline performance with zero optimisation (which we will hopefully have time to do). I would say I'm quite happy with this.<br><br>I do believe however, that another approach might be to allow the file to write to disk, and then use concurrent-programming to parallelise the hashing of the file to multiple threads. BUT this would require the reading of the file again after writing which is more I/O. Furthermore, ensuring determinism through this approach would be pretty difficult, as we're collecting all these hashing to once more hash together into a single 64-byte hash - order matters.<br><br>I'm happy to leave the speeds as they are, as this is acceptable in my opinion, especially as the usecase of this filesystem are for large cohorts like the computing building's labs. Tight storage quotas under each user which would be common place would further mitigate this.<br><br>Ideally, I would like to solve this problem and get it more efficient if we have the time!<br><br>Okay, I have implemented it! It seems to work perfectly, with the exception of temporary files seemingly not being removed when they should be. E.g. Vim's mystical 4193 and vscode's .Trash files.<br><br>Okay, temporary files seem to be gone now. Seemed to be fixed when I set regular files to be ignored by our custom metadata system if their content-hashes are default values, e.g. the file is empty. This seems to have messed up the creation of empty files in vim however.<br><br>I also fixed the metadata of new duplicate files being created and transferred - the caller's UID and GID in Release were always 0 (root), which makes no sense - but we simply store it along with the byte buffer inside Write, where the caller's information is correct. I also ensured times and everything were correctly set up.<br><br>Finally, I put checks in place to actually ensure that UID and GID that are being set is Setattr actually exist, as previously if you made a type and put in a non-existent UID or GID, you would be locked out of the file! (As we have it set that only the file owner can change the owner)<br><br>Performed some other miscellanious testing, like tarring and untarring in our filesystem, using vscode, etc...<br>All seems to work perfectly!"
    },
    {
        title: "Near the Deadline - Disastrout NFS Problems!",
        date: "Feb 20 2024",
        blurb: "NFS comes back to fight again...",
        category: "Brainstorming",
        author: "Niall Ryan",
        imageUrl: "niall.jpg",
        content: "So, it's been a few days, unfortunately I haven't been the best at keeping up with the blogs due to the ever-nearing doom of submission!<br><br>SO, over the past few days I have;<br> - Implemented a TON of unit tests (~3000 lines of code or more I believe)<br> - Found out that NFS lost its compatibility somewhere along the past week or so<br> - Partially fixed NFS (The special root node had issues being treated correctly)<br> - Found out that writing didn't work over NFS, it isn't synchronous<br> - Believing NFS's vicious caching habits to be at fault, spent a whole day trying to invalidate it over file updates.<br> - Failing, I then began blaming FUSE's caching, and spent a day hinting to the kernel to invalidate its own cache (Still didn't fix it).<br> - Fixed many numerous smaller bugs found due to extensive unit testing.<br><br>Today, I had given up hope on NFS compatibility, and continued implementing more unit tests.<br><br>But then, going into the '<code>go-fuse</code>' source code to try and get better understanding of what might be going on, I saw an attribute on his own 'inode' struct, called 'Generation', with a comment specifically talking about how it's required for NFS. This inspired me, and I then continued to increment this number each time a file got updated. I then tested NFS again, and this didn't do anything!<br><br>I then realised that this is only if you'd like to re-use inode numbers, you need to utilise a 'Generation' number for NFS to allow it.<br><br>I then realised that I had forgotten to implement the updating of node timestamps, like Access and Modification. Thinking this might be to blame for the faulty NFS compatibility with OptiFS, I implemented it, and... it didn't work.<br><br>Finally, I realised that the third time-stamp, '<code>CTIM</code>', didn't stand for 'Creation Time', but for 'Change Time'. Knowing that NFS's caching system works on 'Change Counters', I thought this might be the trigger for updating those counters and invalidating the NFS cache. So I went and implemented the updating of change timestamps, and IT WORKED!<br><br>After almost five days of believing we would have to submit our project without supporting NFS, I had somehow managed to solve it.<br><br>The final thing that I did today, was to automate our testing to run on-commit through CI/CD.",
    },
]

blogs.sort(dateSorter);
