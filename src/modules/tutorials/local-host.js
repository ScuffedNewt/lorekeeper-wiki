// local host tutorial

let config = {};

config['key'] = 'local-host';
config['title'] = 'Local Host';
config['authors'] = [['Newt', 'https://github.com/ne-wt']];
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
            <img class="img-fluid mb-2" src="/tutorials/local-host/warning.png" alt="warning">
            <br>
            When installing, you may receive multiple options on what to include.<br>The following are required, but you can choose more if you wish.
            <br>
            <img class="img-fluid mb-2" src="/tutorials/local-host/install.png" alt="install">
            <br>
            After this, complete the install as usual!
            <br>
            One completed, XAMPP should look similar to this:
            <br>
            <img class="img-fluid mb-2" src="/tutorials/local-host/xampp.png" alt="xampp">
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
                    <img class="img-fluid mb-2" src="/tutorials/local-host/config_button.png" alt="config">
                </div>
                <div class="col">
                    <img class="img-fluid mb-2" src="/tutorials/local-host/config.png" alt="config">
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
            <img class="img-fluid mb-2" src="/tutorials/local-host/composer.png" alt="composer">
            <br>
        </p>
    </div>
`;

export { config, description };
