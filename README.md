# Static Form 📝

[![Netlify Status](https://api.netlify.com/api/v1/badges/a7080df2-1a6f-4408-b74f-ad09b0e26e9f/deploy-status)](https://app.netlify.com/sites/staticform21/deploys)

***Static Form*** is a form builder, like Google Form, that built on JAMStack aka static website.

![Static Form Demo](docs/web.gif)

Sounds like a Google Form ripoff, but it has some benefits:

1. **Hackable! Make custom form, make custom admin, use other CMS, or whatever.**
2. **Fast! 90+ Google Lighthouse test.**
3. **Zero cost on Netlify free tier.**
4. **Open source and can be hosted anywhere.**

## Technology Stack

On the front end side:

* [Eleventy](https://www.11ty.dev/) 
* [Netlify CMS](https://www.netlifycms.org/)
* [Tailwind CSS](https://tailwindcss.com/).

No complicated build tools, just `postcss` and `eleventy`. HTML, CSS and JS minifier are included in the build process.

Client side vanilla javascript is used minimally and we sticks with ES6.

On the back end, well... There is no back end.

Actually **[Netlify](https://www.netlify.com/)** provide the back end, which include:
* Static edge hosting.
* Form API end point.
* Authentication server.
* Possibly this project will also use Netlify serverless function.

*Static Form* is preconfigured to work with WhatsApp API, Netlify Form and Netlify CMS. The default stack is very *netlifyish*, but you can bring your own API/CMS to be integrated.

## Roadmap

1. Build complete basic form component: checkbox, radio button, text field, number and email field ⛏.
2. Advanced form feature: Route form output to between several Whatsapp number. Useful for sharing loads between several customer service.
3. Build advanced form component:
    * star rating ⭐
    * emoji rating 😃
    * bank selection component 🏦
    * country/province selection component 🏝
    * input component with custom text output 🔡
4. Advanced form feature: confugure form ouput separator.
5. Build *moar* themes 🌈.
6. Build with *moar* javascript: Nuxt JS.

## Demo

***Static Form*** lives **[here](https://staticform21.netlify.app)**.

You can log in with Github account and make form in the **[admin panel](https://staticform21.netlify.app/admin)**. Your form submission will be saved as draft at first and will be published by manual deploy daily to prevent excessive build time of our website.

Making your own instance of *Static Form* is a one-click though 😃. Give it a try!


## Installation

Thanks to netlify, deploying is a one click:

[![Netlify Status](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/zulvkr/StaticForm&stack=cms)

You need Netlify and GitHub / GitLab account.

This button will tell Netlify to fork this repository on your account, build it in their edge server and set up the CI/CD automagically.

You need to do some configuration to use Netlify CMS. See [Configuration](#configuration).


## Local Installation

### TLDR;

```
git clone https://github.com/zulvkr/StaticForm.git
cd StaticForm
npm install
npm run start
```

### Prerequisites

1. A good Unix-like terminal. If you use Windows, [CMDER](https://cmder.net/) with bundled git will do.
2. `git` should be installed.
3. Node.js should be installed.


### Step by step installation for local development

1. Fire up your terminal 🔥.
2. Move to directory where you want to install **Static Form** with `cd` command.

    ![cd image](docs/cd.gif)

    >tips: you can use `tab` to autocomplete a terminal command and double `tab` for suggestion.

3. `clone` this repository to your local system. You should clone your own fork if you used the deploy button.

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

    This command run Node Package Manager to install all dependencies of this project in *node_modules* directory. You can see all dependencies of this project in *package.json*.

6. Start the development server in your project directory

    ```
    npm run start
    ```

    This command will run `eleventy --serve` and `postcss --watch` concurrently (see  *package.json*).

    ![npm run start image](docs/start.gif)

    Open *localhost:8080* in your browser to see if the server is running properly
    
    You can stop the server with `Ctrl + C` in the terminal.
    
## Configuration

### Netlify CMS authentication

After you make your own *Static Form* instance, you need to do 3 tasks to enable Netlify CMS:
1. Make sure Netlify git-gateway enabled
2. Add your email in Netlify Identity
3. Confirm Netlify Identity in your email and input your new password.

Now, you should be able to login in https://yoursite.netlify.app/admin/.
