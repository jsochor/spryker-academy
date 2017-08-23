define({"72":{i:0.00862880315492431,u:"../developing_with_spryker/module_guide/content_management/cms/cms_versions.html",a:"With CMS Versioning, you can manage all changes for a CMS page.  You can Compare CMS versions, Rollback or discard changes to a page.  To view versioning for a CMS page, click Version History from the top of the page. Rollback to CMS Version By selecting previous CMS versions you will be able to ...",t:"CMS Versioning"},"73":{i:0.00130104210149156,u:"../developing_with_spryker/module_guide/content_management/cms/cms_widget.html",a:"\n\t\t\tCMS content widgets is a new CMS feature for adding  dynamic content to CMS pages/blocks.\n\t\t For example, you can list a single product, product lists, product groups or product sets.\n\t\t Integration First of all you need to install the cms-content-widget module with Composer (update ...",t:"CMS - Content Widget"},"74":{i:0.000993422715491739,u:"../developing_with_spryker/module_guide/content_management/cms_block/cms_block.html",a:"How to Use Blocks \n        Blocks can be viewed as partial content snippets that can be embedded in other pages. From an SEO perspective\n        blocks are a real advantage.         \n        The CMS Block module supports flexible extension by adding a new connector.  Spryker provides two extensions\n ...",t:"CMS Block"},"75":{i:0.000993422715491739,u:"../developing_with_spryker/module_guide/content_management/cms_block/cms_block_category_connector.html",a:"Category Blocks Category blocks are blocks that can be embedded in the category template, for which we can specify on which specific categories we want them to be rendered.\n\t\t For example, we have a Christmas sale that affects the categories  related to toys and sweets. For these categories, we want ...",t:"CMS Block Category Connector"},"76":{i:0.000993422715491739,u:"../developing_with_spryker/module_guide/content_management/cms_block/cms_block_product_connector.html",a:"Product Blocks Product blocks are blocks that can be embedded in the product template, for which we can specify on which specific product we want them to be rendered.\n\t\t Installation Install the CMS Block Product Connector module with composer: \n\t\t\t\"spryker/cms-block-product-connector\": \"^1.0.0\" ...",t:"CMS Block Product Connector"},"77":{i:0.00101756618383631,u:"../developing_with_spryker/module_guide/content_management/glossary/glossary.html",a:"The Glossary module has the responsibility to manage glossary keys that hold the localized content in the database. For each entry in the glossary keys table there is a corresponding entry in the Touch table that has a timestamp that marks the last update that was made on that glossary keys that ...",t:"Glossary"},"78":{i:0.00128173494677698,u:"../developing_with_spryker/module_guide/content_management/glossary/glossary_keys.html",a:"Glossary keys present two layers of persistence: SQL database storage in-memory key-value storage (Redis) In this section we’ll exemplify the usage of the functionality for managing the glossary keys from the backoffice user interface and the usage of them for the Yves interface through twig ...",t:"Managing Glossary Keys"},"79":{i:0.00128173494677698,u:"../developing_with_spryker/module_guide/content_management/glossary/glossary_keys_use.html",a:"One of the usages of the glossary keys in the front office application (Yves) is for rendering translated content. For allowing to render translated content, a dedicated extension for the twig template engine is available to be used. You can see bellow how you can add translated content in Yves  ...",t:"Using Glossary Keys"},"80":{i:0.00128173494677698,u:"../developing_with_spryker/module_guide/content_management/glossary/glossary_translations.html",a:"The key concept for rendering web pages with translated content very fast and with limited resource usage is using a key-value storage. Yves has no connection to Zed’s SQL database and it fetches all dynamic data from a key-value storage(Redis) and a search engine(Elasticsearch). This data contains ...",t:"How Translations are Managed - Glossary"},"81":{i:0.000993422715491739,u:"../developing_with_spryker/module_guide/customer_management/customer/about_customer.html",a:"The following modules are used to establish customer centric functionality. Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  Navigate previous ...",t:"About Customer"},"82":{i:0.00147899526283604,u:"../developing_with_spryker/module_guide/customer_management/wishlist/wishlist.html",a:"The Wishlist module is very straight forward and easy to use. A Customer has a default wishlist, which will be created first time when there is a request made to manage its items. There is only one wishlist per customer by default, however one customer can have multiple named wishlists, if required. ...",t:"Wishlist"},"83":{i:0.000993422715491739,u:"../developing_with_spryker/module_guide/customer_management/wishlist/wishlist_items_mgmt.html",a:"addItem(WishlistItemTransfer $wishlistItemTransfer) Adds item to wishlist. Required values: fkCustomer, fkProduct. Optional: wishlistName. In case wishlist name is not provided the default value will be used. \u003c?php\n$wishlistItemTransfer = (new WishlistItemTransfer())\n    -\u003esetWishlistName(\u0027foobar\u0027)\n ...",t:"Wishlist Items Management"},"84":{i:0.000993422715491739,u:"../developing_with_spryker/module_guide/customer_management/wishlist/wishlist_management.html",a:"createWishlist(WishlistTransfer $wishlistTransfer) Creates wishlist for a specific customer with given name. Required values: name, fkCustomer. \u003c?php\n$wishlistTransfer = (new WishlistTransfer())\n    -\u003esetName(\u0027foobar\u0027)\n    -\u003esetFkCustomer(1);\n\n$wishlistTransfer = ...",t:"Wishlist Management"},"85":{i:0.000993422715491739,u:"../developing_with_spryker/module_guide/customer_management/wishlist/wishlist_schema.html",a:"Wishlist Schema As is the concept of the wishlist, the schema is also very straightforward. A customer can have multiple wishlists, which can have multiple items.",t:"Wishlist Schema"},"86":{i:0.00101756618383631,u:"../developing_with_spryker/module_guide/customer_management/customer/customer.html",a:"The customer entity wraps data around registered customers. Customer data is managed from the backend application (Zed) and frontend application (Yves). Customer Address One customer can have many customer addresses stored in the database. There are two types of customer addresses: Billing Address: ...",t:"Customer"},"87":{i:0.00317155431137924,u:"../developing_with_spryker/module_guide/discount/discount.html",a:"Discount The Discount module is responsible for managing discounts in the Spryker framework. Overview In the diagram below you can see how the discount details are stored in the database: The spy_discount_voucher_pool table purpose is to group the the vouchers codes generated for each discount. You ...",t:"Discount"},"88":{i:0.00144273070843748,u:"../developing_with_spryker/module_guide/discount/discount_applying.html",a:"There two ways of applying a discount to an order : for cart rule discounts : these discounts are contained in the cart and are calculated automatically for voucher code discounts : these discounts must be added by the customer and they are calculated once they are entered Cart Rule Discounts Cart ...",t:"Applying a Discount"},"89":{i:0.00144273070843748,u:"../developing_with_spryker/module_guide/discount/discount_calculator_plugin.html",a:"Once the discountable items are collected, there are 2 ways to calculate the discounted value. Depending on the calculator_plugin linked to the discount, we identify: PLUGIN_CALCULATOR_FIXED - fixed amount discount ( e.g. 10€ off) the currency in which the discount is calculated is the currency ...",t:"Discount Calculator Plugin"},"90":{i:0.00144273070843748,u:"../developing_with_spryker/module_guide/discount/discount_excl_nonexcl.html",a:"Exclusive and Non-Exclusive Discounts Discounts that have the Is_Exclusive flag set with value true cannot be combined. If the cart includes more than one exclusive discount, only the discount that offers the highest discounted value will be applied. If the cart includes a mix of exclusive and ...",t:"Exclusive and Non-exclusive Discounts"},"91":{i:0.00144273070843748,u:"../developing_with_spryker/module_guide/discount/discount_ext_module.html",a:"The main components that describe a discount are: discount collector: specifies for which items discount is being applied/calculated. Example: the discount can be applied for a specific set of products or for orders that contain a minimum number of items or for orders that have a minimum grand total ...",t:"Extending the Discount Module"},"92":{i:0.00250911567085147,u:"../developing_with_spryker/module_guide/discount/discount_2_0.html",a:"The latest version of this module can be found here  Discount The Discount Module is responsible of managing discounts in the Spryker framework. The schema below illustrates how discounts are modeled in Zed’s database. Discount Types There are two types of discounts: fixed amount discount ( e.g. 10€ ...",t:"Discount - Version 2.0"},"93":{i:0.000993422715491739,u:"../developing_with_spryker/module_guide/engines/about_engines.html",a:"The following modules are Engines. Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  Navigate previous button takes you the page preceding the one ...",t:"About Engines"},"94":{i:0.00141429690714814,u:"../developing_with_spryker/module_guide/engines/state_machine/state_machine.html",a:"The StateMachine module provides generic implementation for state machines (SM). This module provides functionality for drawing the SM graph, triggering events, initializing a new state machine or for getting the state history for a processed item.   If you are looking for information on the OMS ...",t:"State Machine"},"95":{i:0.00215555250156903,u:"../developing_with_spryker/module_guide/engines/state_machine/state_machine_cronjob.html",a:"There are three console commands dedicated for the state machine: state-machine:check-condition--state-machine-name (string) name of state machine - checks all the states that have a condition without event and triggers them. state-machine:check-timeout--state-machine-name (string) name of state ...",t:"Cron Jobs - State Machine"},"96":{i:0.00116515996922622,u:"../developing_with_spryker/module_guide/engines/state_machine/state_machine_events.html",a:"There are two main triggers: first one StateMachineFacade::triggerForNewStateMachineItem() is used when first time triggering the state machine for an item; this trigger will initialize the state machine and start transition through states until a decision without event, timeout or manual event is ...",t:"Triggering Events - State Machine"},"97":{i:0.00116515996922622,u:"../developing_with_spryker/module_guide/engines/state_machine/state_machine_implementing_plugin.html",a:"To start using state machine, you need create a new plugin by implementing the  StateMachineHandlerInterface. This plugin is used when there is need for additional information from client or some action happens and the client needs to be notified about it. List of interface methods that need to be ...",t:"Implementing the Plugin - State Machine"},"98":{i:0.00116515996922622,u:"../developing_with_spryker/module_guide/engines/state_machine/state_machine_modelling.html",a:"States How are the states modelled in XML? A list of state elements can be easily defined in an XML file, as in the example below. A state is defined by a name. The display attribute allows to link a glossary key that contains the name of the state for the locales configured in the application, as ...",t:"Modelling - State Machine"},"99":{i:0.00116515996922622,u:"../developing_with_spryker/module_guide/engines/state_machine/state_machine_persistence.html",a:"To persist the state of the item and make the connection with the state machine, you need to store related data into the database. For example, you can create two fields (idStateMachineState(int) and idStateMachineProcess(int)) and store their id’s when itemStateUpdated is being triggered.",t:"Persistence - State Machine"},"100":{i:0.00116515996922622,u:"../developing_with_spryker/module_guide/engines/state_machine/state_machine_zed_presentation.html",a:"To add manual trigger button or history for items, you need to add some implementation. State machine provides methods for triggering events and for retrieving history. StateMachineFacade::processedStateMachine(StateMachineItemTransfer[]) updates the given array of items with data from state machine ...",t:"Updating Presentation in Zed - State Machine"},"101":{i:0.00115830194773794,u:"../developing_with_spryker/module_guide/engines/step_engine/step_engine.html",a:"The StepEngine module provides an easy way to define multi-step pages with forms. Using this module you can define Steps and additionally you can link forms to interact with the user. This is useful in handling the checkout process where you can define multiple steps, such as: select payment method; ...",t:"Step Engine"},"102":{i:0.00119033532202432,u:"../developing_with_spryker/module_guide/engines/step_engine/step_engine_breadcrumb.html",a:"To set up breadcrumb navigation for a step collection, first you’ll need to mark which steps you would like to have in your breadcrumb. To mark a step available for breadcrumb just implement \\Spryker\\Yves\\StepEngine\\Dependency\\Step\\StepWithBreadcrumbInterface in all the necessary steps. The ...",t:"Breadcrumb Navigation - Step Engine"},"103":{i:0.00119033532202432,u:"../developing_with_spryker/module_guide/engines/step_engine/step_engine_define_step.html",a:"When adding a new step, you must implement the StepInterface. The StepInterface defines all the methods that StepEngine needs when executing a step: preCondition() - here you define the requirements for the step to get executed requireInput() - here you define if the step requires user input (e.g. ...",t:"Defining a Step - Step Engine"},"104":{i:0.00119033532202432,u:"../developing_with_spryker/module_guide/engines/step_engine/step_engine_use_case_scenario.html",a:"Below you can see an example of configuration for the checkout process, containing two steps: an entry step and a success step. Click to expand the code sample \u003c?php\nnamespace Pyz\\Yves\\Checkout;\n\nuse Pyz\\Yves\\Checkout\\Form\\FormFactory;\nuse ...",t:"Use Case Scenario - Step Engine"},"105":{i:0.00119033532202432,u:"../developing_with_spryker/module_guide/engines/step_engine/step_engine_workflow.html",a:"When you need to define a multi-step process using the StepEngine feature, you need to implement the following interfaces: StepInterface - here you implement the logic that needs to get executed when the defined step takes place SubFormInterface - defines the name of the form and the pathProperty ...",t:"Step Engine Workflow"},"106":{i:0.000993422715491739,u:"../developing_with_spryker/module_guide/infrastructure/about_infrastructure.html",a:"The following modules are used to establish the supporting infrastructure.   Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  Navigate previous ...",t:"About Infrastructure"},"107":{i:0.00101756618383631,u:"../developing_with_spryker/module_guide/inventory/availability.html",a:"For most of the e-commerce platforms stock updates is nothing reflective. Stock updates most of the time will come from partner merchants and the frequency of those can be very different from case to case. If stock is what defines for an e-commerce platform whether the product is available for sale ...",t:"Availability"},"108":{i:0.00101756618383631,u:"../developing_with_spryker/module_guide/inventory/stock.html",a:"Multiple storage locations Spryker allows to define several storage locations in which the products are being stored. For a product we can have associated multiple stock product entries associated, each of them associated to a storage location. Product stock A product is associated to at least one ...",t:"Stock"},"109":{i:0.00101756618383631,u:"../developing_with_spryker/module_guide/mail/mail.html",a:"Sending mail is a standard web application task. There are many cases where an action triggers an email to be sent. These actions can be newsletter subscriptions, order placement, refunds, customer account registration, etc. The Mail module helps you to create emails to be sent. To send an email you ...",t:"Mail"},"110":{i:0.00116641005426289,u:"../developing_with_spryker/module_guide/mail/mail_create_provider_plugin.html",a:"The provider class is used to define the Mail Provider you want to use. As each provider behaves differently the provider class will also look different accordingly. Create a class which implements MailProviderPluginInterface. After that  register  your provider in the Mail module.",t:"Create a MailProviderPlugin"},"111":{i:0.00116641005426289,u:"../developing_with_spryker/module_guide/mail/mail_create_type_plugin.html",a:"MailType is a class used to build the entire MailTransfer through an easy to use interface. Create the MailTypePlugin within the module which should send out a email and implement MailTypePluginInterface. Then just setup your email in the build() method. Within the build() method you have access to ...",t:"Create a MailTypePlugin"},"112":{i:0.00116641005426289,u:"../developing_with_spryker/module_guide/mail/mail_how_to_send.html",a:"Once you have completed all the steps above, you must call the MailFacade::handleMail() to activate the mail functionality. The following example represents a real-world scenario: CustomerRegistration. A Customer goes through the registration process in your frontend (Yves) and all customer ...",t:"How to send a Mail"},"113":{i:0.0143840917093761,u:"../developing_with_spryker/module_guide/mail/mail_register_provider.html",a:"To add your provider to the MailProviderCollection add it to MailDependencyProvider: \u003c?php\nnamespace Pyz\\Zed\\Mail;\n\n...\n\npublic function provideBusinessLayerDependencies(Container $container) \n{\n    ...\n    \n    $container-\u003eextend(self::MAIL_PROVIDER_COLLECTION, function ...",t:"Register the Mail Provider"},"114":{i:0.00116641005426289,u:"../developing_with_spryker/module_guide/mail/mail_register_type.html",a:"To add your MailType to the MailTypeCollection you need to add it in your MailDependencyProvider: \u003c?php\nnamespace Pyz\\Zed\\Mail;\n\n...\n\npublic function provideBusinessLayerDependencies(Container $container) \n{\n    ...\n    \n    $container-\u003eextend(self::MAIL_TYPE_COLLECTION, function ...",t:"Register a MailTypePlugin"},"115":{i:0.000993422715491739,u:"../developing_with_spryker/module_guide/products/about_products.html",a:"The following modules are used to establish product functionality. Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  Navigate previous button takes ...",t:"About Products"},"116":{i:0.00141966836641241,u:"../developing_with_spryker/module_guide/products/product/product.html",a:"Product data is central data for shops. It contains characteristics that describe the product as well as characteristics that control behavior of the shop. For example the color of a product is an important information that the customer might need, whereas the weight of the product can be used to ...",t:"Product"},"117":{i:0.00119454375437586,u:"../developing_with_spryker/module_guide/products/product/product_define_variants.html",a:"Spryker’s data structure for products allows to design a product hierarchy. The abstract product does not have stock, but can have a price. The concrete product has stock and price. This mechanism allows to create variants of a product. Consider the example of a T-Shirt that is available in the ...",t:"Defining Variants with Abstract and Concrete Products"},"118":{i:0.00119454375437586,u:"../developing_with_spryker/module_guide/products/product/product_bundles.html",a:"A bundle represents two or more products, sold as a set; it is a distinct product that incorporates other concrete products. Example: Bundles are handled in different ways: For example, a marketing bundle of two items that gives a 20% discount is purchased as a single item and then split for ...",t:"Product Bundles"},"119":{i:0.00119454375437586,u:"../developing_with_spryker/module_guide/products/product/product_attributes.html",a:"One way to describe a characteristic of a product is the attribute mechanism. It allows to store a list of key value pairs. There are 4 possible locations where attributes can be stored. Common attributes to all variant are stored on the level of the abstract product. However if they contain ...",t:"Product Attributes"},"120":{i:0.00119454375437586,u:"../developing_with_spryker/module_guide/products/product/product_options.html",a:"Product options allow to configure a product. For example if you want to choose the frame for a piece of artwork. Product Options allows you to define an option type (frame, paper, color e.g.) and every option type can have between 1 and n options values. Furthermore a price can be attached to an ...",t:"Product Options"},"121":{i:0.00119454375437586,u:"../developing_with_spryker/module_guide/products/product/product_domain_model.html",a:"The following domain model shows abstract product and concrete product. One abstract product has at least one up to n different products. A product belongs exactly to one abstract product. Both abstract and concrete product can have 0 to n product attributes. Remember a product attribute table ...",t:"Product Domain Model"},"122":{i:0.00119454375437586,u:"../developing_with_spryker/module_guide/products/product/product_lifecycle.html",a:"The touch tables are able create the snapshot of what’s currently loaded into the Yves data storages ( both key-value and search data storages) If a product was added into the Zed database after the last export, then there’s no corresponding entry in the touch table for that product. Once it’s ...",t:"Product Lifecycle"},"123":{i:0.00122413725499161,u:"../developing_with_spryker/module_guide/products/product_new.html",a:"Overview \n            New products feature extends product module by two date attributes: \"new from\" and \"new to\" dates. Between the\n            defined date range the product is considered new. New products on the frontend appear with a label on it that\n            displays this information for ...",t:"New Products"},"124":{i:0.00141563000719665,u:"../developing_with_spryker/module_guide/products/product_bundle.html",a:"Product bundles are two or more existing products combined into a new type of product for the sole purpose to be displayed as one product in the shop frontend and to be sold together. Typically the products are concrete products, because both need to be potential order items. The new (bundled) ...",t:"Product-Bundle Module"},"125":{i:0.00117799434709163,u:"../developing_with_spryker/module_guide/products/product_group/product_group.html",a:"The Product Groups feature allows to group together multiple abstract products for various reasons. One of the most common use cases of this feature is to group same products with different colors together to make user’s browsing more convenient. Once products are grouped together, on catalog and ...",t:"Product Group"},"126":{i:0.00149407358178631,u:"../developing_with_spryker/module_guide/products/product_group/product_group_feature_integration.html",a:"Prerequisites To prepare your project to work with Product groups: Require the Product Group bundles in your composer.json by running composer require spryker/product-group spryker/product-group-collector. Install the new database tables. By running vendor/bin/console propel:diff. Propel should ...",t:"Feature Integration - Product Group"},"127":{i:0.00149407358178631,u:"../developing_with_spryker/module_guide/products/product_group/product_group_under_the_hood.html",a:"Database schema The ProductGroup module provides spy_product_group table that stores product groups. Product group entities have only the id_product_group field, because we don’t need to display or refer to any groups in any way. The only necessary details for a group are the abstract products that ...",t:"Under The Hood"},"128":{i:0.00662214740944883,u:"../developing_with_spryker/module_guide/products/product_label/product_label.html",a:"Overview Product labels are used to show additional information for abstract products in shop front-ends. They can be managed through a dedicated Zed user interface and rendered in various ways in project implementations. Feature Integration Prerequisites To prepare your project for using Product ...",t:"Product Label"},"129":{i:0.00662214740944883,u:"../developing_with_spryker/module_guide/products/product_label/product_label_1_0.html",a:"The latest version of this module can be found here  Product Label Overview Product labels are used to show additional information for abstract products in shop front-ends. They can be managed through a dedicated Zed user interface and rendered in various ways in project implementations. Feature ...",t:"Product Label 1.0"},"130":{i:0.000993422715491739,u:"../developing_with_spryker/module_guide/products/product_option.html",a:"This module manages the product options. Each product can have one or more product option groups attached. A product option can have a price linked to it, which changes the total price of the product. Option Group The group name in the option group is a glossary key. The value and corresponding ...",t:"Product Option"},"131":{i:0.00145485179449148,u:"../developing_with_spryker/module_guide/products/product_relation/product_relation.html",a:"E-Commerce shops maximize value for their shop visitors by helping them explore products that are related to the one they are currently interested in. These relations appear in different ways such as displaying similar products, upgrades of products (Product-relations), or simply products that fit ...",t:"Product Relation"},"132":{i:0.00119952812488476,u:"../developing_with_spryker/module_guide/products/product_relation/product_relation_types.html",a:"In Spryker currently there are two types of relations:\n\n Related-products, related products displayed in the product detail page for the currently selected abstract product.\n Up-selling, related products displayed in the cart overview page, related products are from a list of abstract product ids or ...",t:"Product Relation Types"},"133":{i:0.00221913380797978,u:"../developing_with_spryker/module_guide/products/product_relation/product_relation_yves_datatastore.html",a:"The product relation collector exports relations to the Yves data store.  This collector is located in the ProductRelationCollector module.\n \nInclude this module in your composer.json file and update. Then add the plugin ProductRelationCollectorPlugin from this module to ...",t:"Yves Datastore Collector - Product Relation"},"134":{i:0.00119952812488476,u:"../developing_with_spryker/module_guide/products/product_relation/product_relation_integration.html",a:"Register a new collector plugin. How to is in  Yves Datastore Collector - Product Relation .\n Then register a new twig service plugin  \\Spryker\\Yves\\ProductRelation\\Plugin\\ProductRelationTwigServiceProvider inside the \\Pyz\\Yves\\Application\\YvesBootstrap::registerServiceProviders plugin stack.  This ...",t:"Product Relation Integration"},"135":{i:0.00119952812488476,u:"../developing_with_spryker/module_guide/products/product_relation/product_relation_db_entity_relation.html",a:"spy_product_relation.fk_product_abstract - is the product for which relation is build.  spy_product_relation.is_active - if relation is not active it will still be exported, but not visible.  spy_product_relation_product_abstract.fk_product_abstract - is the related product.  ...",t:"Database Entity Relation Schema - Product"},"136":{i:0.00119952812488476,u:"../developing_with_spryker/module_guide/products/product_relation/product_relation_building_your_own.html",a:"To create a new relation type, modify the Yves and Zed applications:\n\n Zed:\n\n Create new relation type in \\Spryker\\Shared\\ProductRelation\\ProductRelationTypes as a new constant type for example TYPE_RELATION_NEW also include to getAvailableRelationTypes returned array. After this you can able select ...",t:"Building Your Own Product Relation Type"},"137":{i:0.00119952812488476,u:"../developing_with_spryker/module_guide/products/product_relation/product_relation_query_builder.html",a:"Query build in Zed allows to select and bulid a dynamic related product query. The query ships with pre-set rules:\n\n sku - filter by abstract product sku.\n name - filter by abstract product name. The locale is Zed’s default locale. If a product matches in that locale it will be related in both ...",t:"Query Builder - Product Relation"},"138":{i:0.00172770153258868,u:"../developing_with_spryker/module_guide/products/product_set.html",a:"Overview The Product Sets feature allows you to put together multiple products for the purpose of emphasizing that the set of products can be bought together. Product Sets usually have their own separate list and detail pages in the shop frontend where customers can add containing products to the ...",t:"Product Set"},});