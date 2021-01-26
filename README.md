# Static Form 📝

[![Netlify Status](https://api.netlify.com/api/v1/badges/a7080df2-1a6f-4408-b74f-ad09b0e26e9f/deploy-status)](https://app.netlify.com/sites/staticform21/deploys)

Static Form is a form builder, like Google Form, that built on JAMStack aka static website.

![Static Form](docs/web.gif)

Sounds like a Google Form ripoff, but it has some benefits:

1. **Hackable front end - both on admin and user side -, hackable form API end point, hackable data processing.**
2. **Fast! Near 100 Google Lighthouse test.**
3. **Zero cost on netlify free tier**, but you probably waste your time due to hacking happy.

## Roadmap

1. Build more basic form component: checkbox, radio button, text field.
2. Make advanced programmable form. Form can be programmed to be sent between several Whatsapp numbers based on user input.
3. Make advanced programmable form. Form output can be customized heavily in admin panel, in example choose different separator, using custom text.
4. Build more advanced form component: star rating, progress bar.

## Technology Stack

On the front end side, *Static Form* uses [Eleventy](https://www.11ty.dev/), [Netlify CMS](https://www.netlifycms.org/), and [Tailwind CSS](https://tailwindcss.com/).

No complicated build tools, just `postcss` and `eleventy`. HTML, CSS and JS minifier are included in the build process. Javascript is used minimally and we sticks with ES6, at least for now.

On the back end, well... There is no back end.

Actually [Netlify](https://www.netlify.com/) provide the back end, which include the static hosting, form API end point and authentication. Possibly this project will also use Netlify serverless function.

Static Form is configured to work with WhatsApp API and Netlify Form as form end point. It was meant to be used that way, but you can bring your own form end point.


## Usage

Static Form demo is live **[here](https://staticform21.netlify.app)**.

You can also log in with Github and make a draft of form in the **[admin interface](https://staticform21.netlify.app/admin)**.


## Installation

### TLDR;

```
git clone https://github.com/zulvkr/StaticForm.git
cd StaticForm
npm install
npm run start
```

or click this button:

[![Netlify Status](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/zulvkr/StaticForm&stack=cms)

Netlify will fork this repository on your account, build it in their edge server and set up the CI/CD automagically.

#### Prerequisites

1. A good Unix-like terminal/command line interface. If you use Windows, [CMDER](https://cmder.net/) with bundled git will do.
2. `git` should be installed with inital setup done.
3. Node JS >= 10.0. The latest currently (^15.0) should work fine.


### Step by step installation for local development

1. Fire up your terminal 🔥.
2. Move to directory where you want to install **Static Form** with `cd` command.

    ![cd image](docs/cd.gif)

    tips: you can use `tab` to autocomplete terminal command or double `tab` for suggestion.

3. `clone` this project from Github to your local system


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

    This command will tell node package manager to install all dependecies of this project to *node_modules* directory. You can see all dependecies of this project in *package.json*.

6. You can start the development server by running

    ```
    npm run start
    ```
    Open *localhost:8080* in your browser to see if the server running properly

    ![npm run start image](docs/start.gif)
    
    