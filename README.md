#About
[React](http://facebook.github.io/react/index.html) and [Backbone.js](http://backbonejs.org/) **seed application**. The structure was mostly created using the [Yeoman Backbone Generator](https://github.com/yeoman/generator-backbone) and by adding some other features manually, such as [Zurb Foundation 5](http://foundation.zurb.com/).

##Install
1. `$ git clone https://github.com/jnwelzel/backbone-todo.git`
3. `$ bower install`
2. `$ npm install`
4. `$ grunt serve`

##Grunt tasks
`$ grunt jsx` a specific Grunt task for compiling React `jsx` files to plain old JavaScript. The compiled files will be copied to the application `scripts` folder and will be automatically refreshed if the live watch server is running (`grunt serve`).