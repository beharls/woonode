# woonode

An API for wooact/woongular written using [Sails](http://sailsjs.org), 
[woocommerce-api](https://www.npmjs.com/package/woocommerce-api), 
and [wordpress-rest-api](https://www.npmjs.com/package/wordpress-rest-api).

At the moment I only have READ for products and pages.

###Setting up WooCommerce

For this installation to work with your installation of WooCommerce, you need to have API functionality enabled for
WooCommerce, which you can set up through WooCommerce > Settings. You also need the 
[Wordpress REST API v2](https://wordpress.org/plugins/rest-api/) installed on your WordPress/WooCommerce installation.
You also need to have HTTPS set up on your site.

[oAuth 1.0a for the WordPress REST API](https://wordpress.org/plugins/rest-api-oauth1/) will be necessary for certain functionality.

URLs and oAuth keys are set in `api/config/woocommerce.js`.
