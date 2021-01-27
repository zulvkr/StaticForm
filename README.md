# Static Form 📝

[![Netlify Status](https://api.netlify.com/api/v1/badges/a7080df2-1a6f-4408-b74f-ad09b0e26e9f/deploy-status)](https://app.netlify.com/sites/staticform21/deploys)

***Static Form*** is a form builder, like Google Form, that built on JAMStack aka static website.

![Static Form Demo](docs/web.gif)

Sounds like a Google Form ripoff, but it has some benefits:

1. **Hackable, make custom form, make custom admin, use other CMS, or whatever.**
2. **Fast! 90+ Google Lighthouse test.**
3. **Zero cost on netlify free tier.**
4. **Open source and can be hosted anywhere.**

## Technology Stack

On the front end side:

* [Eleventy](https://www.11ty.dev/) 
* [Netlify CMS](https://www.netlifycms.org/)
* [Tailwind CSS](https://tailwindcss.com/).

No complicated build tools, just `postcss` and `eleventy`. HTML, CSS and JS minifier are included in the build process.

Client side javascript is used minimally and we sticks with ES6, at least for now.

On the back end, well... There is no back end.

Actually **[Netlify](https://www.netlify.com/)** provide the back end, which include:
* Static edge hosting.
* Form API end point.
* Authentication.
* Possibly this project will also use Netlify serverless function.

*Static Form* is preconfigured to work with WhatsApp API, Netlify Form and Netlify CMS. You can bring your own API/CMSto be integrated.

## Roadmap

1. Build complete basic form component: checkbox, radio button, text field, number and email field ⛏.
2. Make advanced programmable form. Form can be programmed to be sent between several Whatsapp numbers based on user input 🌏.
3. Make advanced programmable form. Form output can be customized heavily in admin panel, in example choose different separator, using custom text ⛓.
4. Build advanced form component: star rating, emoji rating, bank select with good background image, select province component, select country component 🚅.
5. Build even more advanced component using netlify function. Make shipping cost calculator component by consuming API, maybe..
6. Build more theme 🌈.
7. Build custom form for the demo website, extend the possibility.

## Demo

*Static Form* lives **[here](https://staticform21.netlify.app)**.

You can also log in with Github account and make form draft in the **[admin interface](https://staticform21.netlify.app/admin)**. We will accept your form submission, the site will be updated daily by manual deploy to prevent excessive build time.


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

This button will tell Netlify to fork this repository on your account, build it in their edge server and set up the CI/CD automagically.

### Prerequisites

1. A good Unix-like terminal. If you use Windows, [CMDER](https://cmder.net/) with bundled git will do.
2. `git` should be installed.
3. Node JS >=10.


### Step by step installation for local development

1. Fire up your terminal 🔥.
2. Move to directory where you want to install **Static Form** with `cd` command.

    ![cd image](docs/cd.gif)

    tips: you can use `tab` to autocomplete terminal command and double `tab` for suggestion.

3. `clone` this repository to your local system


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

    This command will tell node package manager to install all dependencies of this project to *node_modules* directory. You can see all dependencies of this project in *package.json*.

6. Start the development server in your project directory

    ```
    npm run start
    ```
    Open *localhost:8080* in your browser to see if the server is running properly

    ![npm run start image](docs/start.gif)


## Usage

TODO