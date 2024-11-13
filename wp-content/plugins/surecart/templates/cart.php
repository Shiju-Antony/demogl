<?php
/**
 * Cart page block template.
 */
return [
	'title'      => __( 'Cart', 'surecart' ),
	'categories' => [],
	'blockTypes' => [],
	'content'    => '<!-- wp:surecart/slide-out-cart {"layout":{"type":"default"}} -->
	<!-- wp:surecart/slide-out-cart-header {"text":"Review Your Cart"} /-->

	<!-- wp:surecart/slide-out-cart-items /-->

	<!-- wp:surecart/slide-out-cart-coupon /-->

	<!-- wp:surecart/slide-out-cart-subtotal /-->

	<!-- wp:surecart/slide-out-cart-bump-line-item /-->

	<!-- wp:surecart/slide-out-cart-submit /-->
	<!-- /wp:surecart/slide-out-cart -->',
];