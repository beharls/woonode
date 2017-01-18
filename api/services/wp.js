var WP = require( 'wordpress-rest-api' );
var wp = new WP({ endpoint: sails.config.woocommerce.wpUrl + '/wp-json' });


module.exports = wp;