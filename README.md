
# Static Form

[![Netlify Status](https://api.netlify.com/api/v1/badges/a7080df2-1a6f-4408-b74f-ad09b0e26e9f/deploy-status)](https://app.netlify.com/sites/staticform21/deploys)

Static From is a form builder, like Google Form, that built on JAMStack technology.

![Static Form](docs/web.gif)

On the front end side we use Eleventy static site generator, Netlify CMS for the admin panel, and Tailwind CSS.

No complicated build tools, just using PostCSS CLI and Eleventy. HTML and JS minifier are included in Eleventy build process.

On the back end, well there is no back end. Static Form is configured to work with WhatsApp API and Netlify Form as endpoint out-of-the-box so you don't really have to bake your own API endpoint. Netlify will automatically re-build the website when git repo updated.


## Usage

Static Form demo is live [here](staticform21.netlify.app). You can also try make a draft of form in the [admin interface](staticform21.netlify.app/admin) with Github account.


## Installation

TLDR;

```
git clone https://github.com/zulvkr/StaticForm.git
cd StaticForm
npm install
npm run start
```

### Requirement

1. Git, see https://git-scm.com/downloads
2. Node JS, see https://nodejs.org/en/
3. A good linux-like terminal/command line. If you use Windows, I suggest to try [CMDER](https://cmder.net/).


### Step by step installation

1. Fire up your terminal 🔥
2. Move to directory where you want to install **Static Form** with `cd` command.

    ![cd image](docs/cd.gif)

    tips: you can use `tab` to autocomplete terminal command or double `tab` for suggestion.

3. Clone this project from Github to your local system


    ```
    git clone https://github.com/zulvkr/StaticForm.git
    ```

4. `cd` to the project folder

    ```
    cd StaticForm
    ```

5. Install dependencies

    ```
    npm install
    ```

    This command will install all dependecies of this project in *node_modules* directory. You can see all dependecies of this project in *package.json*.

6. You can start the development server by running

    ```
    npm run start
    ```

    ![npm run start image](docs/start.gif)
    
    Open *localhost:8080* in your browser to see if the server running properly
