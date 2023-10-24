// local host tutorial

let config = {};

config['key'] = 'local-host';
config['title'] = 'Local Host';
config['authors'] = [
    ['Newt', 'https://github.com/ne-wt'],
    ['Mercury', 'https://github.com/itinerare']
];
config['contents'] = [
	['Introduction', '#introduction'],
	['Install/Initial Setup', '#install-initial-setup'],
	['Lorekeeper Setup', '#lorekeeper-setup']
];

let description = /*html*/ `
    <h5 class="alert alert-warning">NOTE THAT THIS IS FOR A WINDOWS BASED SETUP</h5>
    <div class="p-2" id="introduction">
        <p>
            I personally use a windows device, I have very limited knowledge of MacOS setup, however both should be very similar.
            I cannot provide help for bugs encountered on this Operating System outside of general google search.
        </p>
        <b><a href="/tutorial/setup">Lorekeeper Setup Tutorial</a></b><br>
        <p>
            This guide takes the approach that the reader has no or very little knowledge about XAMPP before beginning the guide.
            It may be more beneficial for more advanced users to skip towards the end of the guide, or read Draginraptor’s guide located here.
        </p>
        <p>
            This guide is also made under the assumption the user is already familiar with Sourcetree or another git client and has a local copy of the Lorekeeper files.
            See the <a href="/tutorial/git">Introduction To Git for Git Basics Tutorial</a> for more information on this.
        </p>
        <p><a href="https://docs.google.com/document/d/1K7_BAYfTg7ZQahxNMcILLyn5D5mIGnnKvqhYOm6iFKo/edit?usp=sharing">Original/Google doc version</a></p>
    </div>
    <hr>
    <div class="p-2" id="install-initial-setup">
        <h2>Install/Initial Setup</h2>
        <p><b>To begin our tutorial, you’ll need the following:</b></p>
        <ul>
            <li><a href="https://www.apachefriends.org/download.html">XAMPP</a></li>
            <ul>
                <li>Note that you must download a version of XAMPP with specifically <u>PHP 8.1.</u></li>
            </ul>
        </ul>
        <p>
            If you see the following warning, press OK. It shouldn’t impact anything Lorekeeper related.
            <br>
            <img class="img-fluid mb-2" src="/images/tutorials/local-host/warning.png" alt="warning">
            <br>
            When installing, you may receive multiple options on what to include.<br>The following are required, but you can choose more if you wish.
            <br>
            <img class="img-fluid mb-2" src="/images/tutorials/local-host/install.png" alt="install">
            <br>
            After this, complete the install as usual!
            <br>
            One completed, XAMPP should look similar to this:
            <br>
            <img class="img-fluid mb-2" src="/images/tutorials/local-host/xampp.png" alt="xampp">
        </p>
        <p>
            <div class="card-header p-2">
                <button class="" type="button" data-toggle="collapse" data-target="#config" aria-expanded="false" aria-controls="config">
                    <b>The following is optional, but recommended</b><br>
                </button>
            </div>
            To make starting your server easier, consider enabling MySQL and Apache to either:
            <br>
            <ul>
                <li>Start as a service (requires running XAMPP in administrator mode), or</li>
                <li>Start as soon as XAMPP is opened.</li>
            </ul>
            You can do this by going into config and selecting the following options:
            <div class="row">
                <div class="col">
                    <img class="img-fluid mb-2" src="/images/tutorials/local-host/config_button.png" alt="config">
                </div>
                <div class="col">
                    <img class="img-fluid mb-2" src="/images/tutorials/local-host/config.png" alt="config">
                </div>
            </div>
        </p>
    </div>
    <hr />
    <div class="p-2" id="lorekeeper-setup">
        <h2>Lorekeeper Setup</h2>
        <p>
            Similarly to live servers, Lorekeeper running locally requires a database and packages (managed by Composer).
            <br>
            To start, we will install Composer.
            <br><b>Composer can be downloaded <a href="https://getcomposer.org/download/">here</a>.</b>
            <br><br>
            Follow the instructions in the install wizard, and when prompted, select the following options:
            <ul>
                <li>If you are prompted to add PHP to your path, <b>do so;</b> this is important for running commands later.</li>
                <li>Do not select developer mode, and you can also skip the proxy URL.</li>
            </ul>
            Your install should look similar to this:
            <br>
            <img class="img-fluid mb-2" src="/images/tutorials/local-host/composer.png" alt="composer">
            <br>
            Once installed globally, open your local Lorekeeper folder and copy the file directory:
            <br>
            <img class="img-fluid mb-2" src="/images/tutorials/local-host/file_directory.png" alt="file_directory">
            <br>
            Open command prompt. You may need to run with administrator privileges.
            <br>
            Type the following:
            <br>
            <code>cd [directory]</code>
            <br>
            If typed correctly, the next line should read as your directory
            <br>
            <img class="img-fluid mb-2" src="/images/tutorials/local-host/command_prompt_directory.png" alt="directory">
            <br>
            Type the following:
            <br>
            <code class="p-1 rounded" style="background-color: #ddd;">composer install</code>
            <br>
            It should start an install process, like so:
            <br>
            <img class="img-fluid mb-2" src="/images/tutorials/local-host/composer_install.png" alt="composer_install">
            <br>
            While composer installs, if you have not already, start Apache and MySQL via your XAMPP control panel:
            <br>
            Go to <a href="http://localhost/phpmyadmin">http://localhost/phpmyadmin</a> in your browser.
            <br>
            (note the link may be http://localhost:8080 if you have set your port to 80. If you haven’t or don’t know what port you’re using, localhost will work fine.)
            <br>
            Create a new database:
            <br>
            <img class="img-fluid mb-2" src="/images/tutorials/local-host/database_1.png" alt="create_database">
            <br>
            <img class="img-fluid mb-2" src="/images/tutorials/local-host/database_2.png" alt="create_database">
            Set the name aside to add to your .env file.
            <br>
            Create a file in your Lorekeeper directory with the name .env. An example .env is included at the bottom of this tutorial.
            <br>
            Once done and packages have been installed using Composer, run the following commands in command prompt, ensuring you are in your Lorekeeper directory:
            <br>
            <b>Your .env file MUST be set up for these to work.</b>
            <br>
            <code class="p-2 rounded" style="background-color: #ddd;">
                php artisan key:generate<br>
                php artisan migrate<br>
                php artisan add-site-settings<br>
                php artisan add-text-pages<br>
                php artisan copy-default-images<br>
                php artisan setup-admin-user<br>
            </code>
            <br>
            As of 2.0.0, when you run the setup-admin-user command in a local environment (see the example .env settings below), it will ask you if you wish to enter an alias (a deviantArt username by default, does not need to be a real account given that it is for testing, etc.) and verify your email address. However, subsequent users must still be manually verified in the database.
            <br>
            You now have two options for accessing your local Lorekeeper:
            <br>
            <ul>
                <li>Editing your Document Root
                    <ul>
                        <li>
                            This is recommended ONLY if you are only working on one project (in this case, Lorekeeper), as you can set it up initially and then have it just work.
                        </li>
                    </ul>
                </li>
                <li>
                    Using php artisan serve <b>*RECOMMENDED*</b>
                    <ul>
                        <li>
                            This is recommended if you work on multiple projects, as it makes it much easier to switch between them on the fly without having to make config edits...
                            And/or if you have other things you host locally via XAMPP, as editing your document root will disrupt access to them.
                            However, you must run the command each time you wish to access your local Lorekeeper.
                        </li>
                    </ul>
                </li>
            </ul>
        </p>
    </div>
`;

export { config, description };
