define({"206":{i:0.000830181311631054,u:"../developing_with_spryker/module_guide/yves_components/search/search_4_0.html",a:"The latest version of this module can be found in  Search  section One of the most important features in an e-commerce application is to give the customer the ability to find the specific products. Depending on how easy it is to find the products the customer is searching for and how relevant the ...",t:"Search 4.0"},"207":{i:0.000770110706684119,u:"../developing_with_spryker/module_guide/zed_api/zed_api.html",a:"The Spryker OS offers a flexible REST API for Zed. It maps basic REST functionality to the persistence layer of the Spryker backend.\n\n By default, the API accepts and returns JSON as format. But it can be extended to work with any format. As for JSON, the API specification is close to JSON API ...",t:"Zed API (BETA)"},"208":{i:0.000653763031170843,u:"../developing_with_spryker/module_guide/zed_api/zed_api_resources.html",a:"Each module can have a “{module}Api” module(e.g. CustomerApi for Customer). Such an API module exposes CRUD facade methods (find, get, add, update, remove) that can be mapped to a URL via REST resource/action resolution.\n\n The main Api module contains a dispatcher that delegates to those API module ...",t:"Zed API Resources"},"209":{i:0.000653763031170843,u:"../developing_with_spryker/module_guide/zed_api/zed_api_config.html",a:"First of all we need to decide on the resources being exposed. Those will be mapped inside the ApiDependencyProvider:\n\n \u003c?php\nuse Spryker\\Zed\\CustomerApi\\Communication\\Plugin\\Api\\CustomerApiResourcePlugin;\nuse Spryker\\Zed\\ProductApi\\Communication\\Plugin\\Api\\ProductApiResourcePlugin;\n\n    /**\n     * ...",t:"Zed API Configuration"},"210":{i:0.000653763031170843,u:"../developing_with_spryker/module_guide/zed_api/zed_api_processor_stack.html",a:"Request and pre processing\n We now need to decide further on the URL format. Should this be extension driven, which is easier to browse, or HTTP header driven, for example? What kind of URL query string transformation do we need, what kind of header parsing is required?\n\n In order to keep this ...",t:"Processor Stack - Zed API"},"211":{i:0.000653763031170843,u:"../developing_with_spryker/module_guide/zed_api/zed_api_crud_function.html",a:"Filtering\n For find action we return a paginated collection that can be limited and customized based on query string input or headers. So using the provided FilterPreProcessors one can enable filtering (conditions), sorting (and multi-sorting) and pagination.\n\n Condition filtering\n For the filtering ...",t:"CRUD Functionality - Zed API"},"212":{i:0.000653763031170843,u:"../developing_with_spryker/module_guide/zed_api/zed_api_additional_function.html",a:"Meta information\n Links as part of the meta information will be part of the response on the same level as the data: {\n    \"data\": ...,\n    \"links\": [\n        \"self\" =\u003e ...                         \n        ...\n    ],\n    ...\n}\n “self” URIs are included, for example for adding an item.\n\n",t:"Additional Functionality - Zed API"},"213":{i:0.000653763031170843,u:"../developing_with_spryker/module_guide/zed_api/zed_api_project_implementation.html",a:"For the API and the API bundles to get activated we need to configure our own service provider stack in the Zed ApplicationDependencyProvider class:\n\n \u003c?php\n    /**\n     * @param \\Spryker\\Zed\\Kernel\\Container $container\n     *\n     * @return \\Silex\\ServiceProviderInterface[]\n     */\n    protected ...",t:"Project Implementation - Zed API"},"214":{i:0.000653763031170843,u:"../developing_with_spryker/module_guide/zed_api/zed_api_appendix.html",a:"API Documentation\n We will soon provide an extensive documentation on the API resource URIs available and a tool to parse those to a standard.\n\n Logging\n By default all incoming requests and outgoing responses will be logged as “info” level.\n\n Security recommendations\n Secure the API with a token ...",t:"Appendix - Zed API"},"215":{i:0.000944632219954033,u:"../developing_with_spryker/module_guide/data_feed.html",a:"BETA version\n This module is still in development. For questions and inquiries please contact  academy@spryker.com DataFeed modules help to query abstract products, categories, prices, availability data and related information for exporting or processing. The data Feed is not dependent on ...",t:"Data Feed Modules"},"216":{i:0.00435638356354936,u:"../developing_with_spryker/module_guide/flysystem.html",a:"The Flysystem moduleintegrates Spryker with the  thephpleague/flysystem  vendor package. It handles operations, flysystem adapter configuration and provides a FlysystemFilesystemBuilderPluginInterface, where the build() method is expected to return a concrete implementation of the ...",t:"Flysystem"},"217":{i:0.000670090405027167,u:"../developing_with_spryker/module_guide/user_rights_management.html",a:"User and rights management is a general term that describes the security functionality for controlling user access to perform various roles throughout the system. In the Spryker Commerce OS user and rights management is implemented in the following three bundles: ACL - ACL stands for Access Control ...",t:"User and Rights Management"},"218":{i:0.00112719937382335,u:"../developing_with_spryker/migration_guides/migration_guides.html",a:"Migration Guides are simple instructions to guide you through the process of upgrading a module to a newer version.    Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top ...",t:"Migration Guides"},"219":{i:0.000672286777769104,u:"../developing_with_spryker/migration_guides/mg_availability.html",a:"Upgrading from version 3.* to version 4.*\n All Availability ui was moved to AvailabilitGui module, mostly Communication or Persistence were changed. If you have overwritten any of moved classes from those layers please change base class namespace from Availability to AvailabilityGui root.\n\n ...",t:"Migration Guide - Availability"},"220":{i:0.00526291462668551,u:"../developing_with_spryker/migration_guides/mg_calculation.html",a:"Upgrading from Version 3.* to Version 4.* To upgrade from 3* to 4*, composer update your calculator to version 4. Updating Calculator Stacks In the new version there are two new calculator stacks, getQuoteCalculatorPluginStack and getOrderCalculatorPluginStack. They are both defined in ...",t:"Migration Guide - Calculation"},"221":{i:0.000672286777769104,u:"../developing_with_spryker/migration_guides/mg_catalog.html",a:"Upgrading from version 3.* to version 4.*\n Due to introducing the Suggestion Search feature, the Catalog module now requires Search \u003e=5.2.\n\n To Upgrade from 3.* to 4.*:\n\n Before upgrading to the new version, make sure that you do not use any deprecated code from version 3.*. Check the description of ...",t:"Migration Guide - Catalog"},"222":{i:0.00435638356354936,u:"../developing_with_spryker/migration_guides/mg_category.html",a:"Upgrading from version 3.* to version 4.* Install new module Resolve deprecations Database migration Data migration 1. Install new module Install new module by adding the following into your composer.json \"spryker/category\": \"^4.0.0\" and running composer update. 2. Resolve deprecations \n    Before ...",t:"Migration Guide - Category"},"223":{i:0.000653763031170843,u:"../developing_with_spryker/migration_guides/mg_category_template_console.html",a:"\n\n\u003c?php\n\n/**\n * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.\n * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.\n */\n\nnamespace Pyz\\Zed\\Category\\Communication\\Console;\n\nuse Exception;\nuse ...",t:"Migration Guide - Category Template Migration Console"},"224":{i:0.000695315772425584,u:"../developing_with_spryker/migration_guides/mg_checkout.html",a:"Upgrading From Version 3.* To Version 4.* \n            If you extended \\Spryker\\Zed\\Checkout\\Dependency\\Plugin\\CheckoutPreConditionInterface: find those\n            plugins and make sure they return bool. Important: you can return true even if a plugin adds errors\n            to the checkout ...",t:"Migration Guide - Checkout"},"225":{i:0.00120947542911868,u:"../developing_with_spryker/migration_guides/mg_cms.html",a:"Upgrading from Version 4.* to Version 5.* Cms version 5.0 is responsible only for CMS pages and page versioning. CMS Block functionality became more flexible and moved to  CmsBlock module . If you used CMS Blocks before, you need to migrate your data to the new structure.\n    If you did not use CMS ...",t:"Migration Guide - CMS"},"226":{i:0.000866370661927392,u:"../developing_with_spryker/migration_guides/mg_cms_block_category_connector.html",a:"Upgrading from Version 1.* to Version 2.* Due to introducing the CMS Block positioning and CMS Block templates for Category, the CMS Block Category Connector module now requires Category \u003e=4.0. The migration will contain the following steps: New module installation Deprecations migration Database ...",t:"Migration Guide - CMS Block Category Connector"},"227":{i:0.00139020076856406,u:"../developing_with_spryker/migration_guides/mg_cms_block_category_connector_console.html",a:"\n\u003c?php\n\n/**\n * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.\n * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.\n */\n\nnamespace Pyz\\Zed\\CmsBlockCategoryConnector\\Communication\\Console;\n\nuse Exception;\nuse ...",t:"Migration Guide - CMS Block Category Connector Migration Console"},"228":{i:0.00168184603982356,u:"../developing_with_spryker/migration_guides/mg_cms_to_cms_block_console.html",a:"\n\u003c?php\n\n/**\n * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.\n * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.\n */\n\nnamespace Pyz\\Zed\\CmsBlock\\Communication\\Console;\n\nuse Orm\\Zed\\Cms\\Persistence\\SpyCmsPage;\nuse ...",t:"Migration Guide - CMS Block Migration Console"},"229":{i:0.000653763031170843,u:"../developing_with_spryker/migration_guides/mg_cms_collector.html",a:"Upgrading from Version 1.* to Version 2.* Upgrade spryker/cms module to at least 6.2 version. Check out the  CMS migration guide  for additional help. Upgrade spryker/cms-content-widget module to at least 1.1 version if you use CmsPageCollectorParameterMapExpanderPlugin plugin. CMS page data ...",t:"Migration Guide - CMS Collector"},"230":{i:0.000687982935733571,u:"../developing_with_spryker/migration_guides/mg_console.html",a:"Upgrading From Version 3.* To Version 4.* \n            Console version 4 has been prepared for a standalone usage. Now you are able to use Console module\n            even without a DB configuration.\n         \n            Find or create ConsoleDependencyProvider in a project. Make sure it extends ...",t:"Migration Guide - Console"},"231":{i:0.000672286777769104,u:"../developing_with_spryker/migration_guides/mg_collector.html",a:"Upgrading from version 3.* to version 4.* With version 4 of the Collector module, we fixed the collector:search:export and collector:search:update console commands to run for all available locales instead of just for the current one. This behavior is now consistent with the storage collector command ...",t:"Migration Guide - Collector"},"232":{i:0.00159785490865494,u:"../developing_with_spryker/migration_guides/mg_currency.html",a:"Upgrading From Version 2.* to Version 3.* \n            With the Currency module version 3 we have added  sp_currency database table to persist currencies in ZED.\n            Run the following SQL request:\n\n             \n                CREATE SEQUENCE \"spy_currency_pk_seq\";\n\n                CREATE ...",t:"Migration Guide - Currency"},"233":{i:0.000833815094180271,u:"../developing_with_spryker/migration_guides/mg_customer.html",a:"  Upgrading from version 6.* to version 7.0 Case insensitivity for queries containing filterByEmail conditions will be out of the box for the Customer module.\n 1. Regenerate Propel Models \n                    To apply the fix, you need to regenerate Propel models. During this migration table schemas ...",t:"Migration Guide - Customer"},"234":{i:0.00856142664077644,u:"../developing_with_spryker/migration_guides/mg_discount.html",a:"Upgrading from Version 4.* to Version 5.* \n            In discount module version 5 we have introduced multicurrency support for fixed discount calculation.\n\n            This update also includes: \n              Support for net/gross amounts.\n               Currency decision rule -  to filter ...",t:"Migration Guide - Discount"},"235":{i:0.00812705986996859,u:"../developing_with_spryker/migration_guides/mg_discount_amounts_migration_console.html",a:"\u003c?php\n \n/**\n           \n * Copyright © 2017-present Spryker Systems GmbH. All rights reserved.\n * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.\n */\n\nnamespace Pyz\\Zed\\Discount\\Communication\\Console;\n\nuse ...",t:"Migration Guide - Discount Amounts Migration Console Command"},"236":{i:0.000672286777769104,u:"../developing_with_spryker/migration_guides/mg_discount_calculator_connector.html",a:"Upgrading from version 4.* to version 5.* This module no longer has any calculator plugins, except the DiscountCalculatorPlugin. All other plugins were moved to separate repository in spryker/calculation-migration. To learn how to migrate to new structure see,  Upgrading from Version 3.* to Version ...",t:"Migration Guide - DiscountCalculatorConnector"},"237":{i:0.000672286777769104,u:"../developing_with_spryker/migration_guides/mg_discount_sales_aggregator_connector.html",a:"Migration Guide - DiscountSalesAggregatorConnector Upgrading from version 2.* to version 3.*\n The tax plugins are using the version 3.* of the Tax module. You need to upgrade the  Tax  module.",t:"Migration Guide - DiscountSalesAggregatorConnector"},"238":{i:0.000653763031170843,u:"../developing_with_spryker/migration_guides/mg_environment_config.html",a:"The environment configuration was restructured to solve a couple of inconsistencies and dependencies within the configuration itself. To untangle some of configuration options it was necessary to introduce a few new configuration constants. Although the Spryker core should be fully backward ...",t:"Migration Guide - Environment Configuration"},"239":{i:0.00703112699041906,u:"../developing_with_spryker/migration_guides/mg_navigation.html",a:"Upgrading from Version 1.* to Version 2.* Version 2 adds validity date fields to navigation nodes to support NavigationGui module to control the temporal visibility of nodes. Update the Navigation module to at least  version 2.0.0 in your composer.json. Install the new database fields by running ...",t:"Migration Guide - Navigation Module"},"240":{i:0.00894593716841609,u:"../developing_with_spryker/migration_guides/mg_navigation_gui.html",a:"Upgrading from Version 1.* to Version 2.* In version 2, validity dates allow to preset date boundaries for each navigation node to control their own and their descendants visibility. Upgrade Navigation module to at least 2.0.0 version. Click  here  to learn how to migrate the Navigation module. ...",t:"Migration Guide - NavigationGui Module"},"241":{i:0.00124374486274044,u:"../developing_with_spryker/migration_guides/mg_oms.html",a:"Upgrading from version 6.* to version 7.* In version 7, OMS no longer uses SalesAggregator  to calculate totals, it is now done via the Calculator module. Therefore, there is no more dependency with SalesAggregator. The Spryker\\Zed\\Oms\\Business\\Mail\\MailHandler dependency to SalesAggregatorFacade ...",t:"Migration Guide - OMS"},"242":{i:0.00145858698993197,u:"../developing_with_spryker/migration_guides/mg_payment.html",a:"Upgrading from version 3.* to version 4.*\n In the  Payment  module version 4 we added new payment tables to store order payment related information. To enable the new version: Composer update spryker/payment to new version\n  Run vendor/bin/console transfer:generate to generate new transfer objects\n ...",t:"Migration Guide - Payment"},"243":{i:0.000653763031170843,u:"../developing_with_spryker/migration_guides/mg_product.html",a:"Upgrading from version 2.* to version 3.*\n The Product module does not provide the tax functionality anymore. Upgrade  Migration Guide - Tax .\n\n Upgrading from version 3.* to version 4.*\n 1. Database migration\n vendor/bin/console propel:diff, also manual review is necessary for the generated ...",t:"Migration Guide - Product"},"244":{i:0.000653763031170843,u:"../developing_with_spryker/migration_guides/mg_product_bundle.html",a:"Upgrading from version 2.* to version 3.*\n\n In version 3 the calculator plugin changed together with new calculator version.\n\n The ProductBundlePriceAggregatorPlugin - moved to the SalesAggregator module, so you may need to change the namespace ...",t:"Migration Guide - Product Bundle"},"245":{i:0.000653763031170843,u:"../developing_with_spryker/migration_guides/mg_product_label.html",a:"Upgrading from version 1.* to version 2.* The following list describes the Backward Compatibility breaking changes in this version and how to upgrade. Product label rendering \n            We\u0027ve changed spyProductLabels twig function to work based on a list of product label IDs.\n            It\u0027s ...",t:"Migration Guide - Product Label"},"246":{i:0.000944632219954033,u:"../developing_with_spryker/migration_guides/mg_product_management.html",a:"Upgrading from Version 0.7.* to Version 0.8.*\n If you’re migrating the ProductManagement module from version 0.7.x to version 0.8.x, you need to follow the steps described below.\n\n ProductManagement module persistence layer was moved into the new ProductAttribute module. ORM Entities Changed The ...",t:"Migration Guide - ProductManagement"},"247":{i:0.00307526714227493,u:"../developing_with_spryker/migration_guides/mg_product_option.html",a:"Upgrading From Version 5.* To Version 6.* Update spryker/product-option to at least version 6.0.0. Install/Update spryker/currency to at least version 3.0.0. You can find additional information to currency module upgrade:  here . Install/Update spryker/price to at least version 5.0.0. Update ...",t:"Migration Guide - Product Option"},"248":{i:0.00196705653768973,u:"../developing_with_spryker/migration_guides/mg_product_option_cart_connector.html",a:"Upgrading From Version 4.* To Version 5.* Update spryker/product-option to at least version 6.0.0. You can find additional information to product option module upgrade:  here . Install/Update spryker/price to at least version 5.0.0.  Update spryker/product-option-cart-connector to version 5.0.0. \n   ...",t:"Migration Guide - Product Option Cart Connector"},"249":{i:0.000653763031170843,u:"../developing_with_spryker/migration_guides/mg_product_option_discount_connector.html",a:"Migration Guide - ProductOptionDiscountConnector Upgrading from version 2.* to version 3.* The tax plugins are using the version 3.* of the Tax module. Upgrade  Migration Guide - Tax .",t:"Migration Guide - ProductOptionDiscountConnector"},"250":{i:0.000653763031170843,u:"../developing_with_spryker/migration_guides/mg_product_option_exporter.html",a:"Migration Guide - ProductOptionExporter Upgrading from version 2.* to version 3.* The ProductOptionExporter module does not provide the tax functionality anymore. Upgrade  Migration Guide - Tax .",t:"Migration Guide - ProductOptionExporter"},"251":{i:0.000653763031170843,u:"../developing_with_spryker/migration_guides/mg_product_search.html",a:"Upgrading from version 3.* to version 4.* Requires version ^4.0.0 of Product and ^5.0.0 of Search bundles. ProductSearchFacade::activateProductSearch() and ProductSearchFacade::deactivateProductSearch() are not connected to searchableProduct anymore. ...",t:"Migration Guide - ProductSearch"},"252":{i:0.00169092737407509,u:"../developing_with_spryker/migration_guides/mg_rabbitmq.html",a:"Upgrading from Version 0.* to Version 1.* Version 1 of the RabbitMq module Configuration \n            The configuration codes have moved from RabbitMqDependencyProvider to RabbitMqConfiguration.\n         RabbitMqOption TransferObject \n            RabbitMqOption transfer has changed: `bindingQueue` ...",t:"Migration Guide - RabbitMQ"},"253":{i:0.000653763031170843,u:"../developing_with_spryker/migration_guides/mg_refund.html",a:"Upgrading from version 4.* to version 5.* Version 4 of the Refund module no longer uses SalesAggregatorFacade , it was replaced with SalesFacade. The RefundCalculator business class must now replace RefundToSalesAggregatorInterface with the RefundToSalesInterface bridge. To learn more see,  ...",t:"Migration Guide - Refund"},"254":{i:0.00255469043688974,u:"../developing_with_spryker/migration_guides/mg_sales.html",a:"Upgrading from Version 7.* to Version 8.* \n            In Sales module version 8 we have added multicurrency support, this release added two new fields to spy_sales table to persist \"currency\" and \"store\". Also Order saver now stores currency and store where order is placed.\n\n            Run the ...",t:"Migration Guide - Sales"},"255":{i:0.00177221351757677,u:"../developing_with_spryker/migration_guides/mg_sales_aggregator.html",a:"Upgrading from version 4.* to version 5.* SalesAggregator version 4 is last version to be released for this module. Apart from future bug fixes, it will no longer be developed and Core will no longer use it to get order totals anymore. There are two steps to the two migration process. The first is ...",t:"Migration Guide - SalesAggregator"},"256":{i:0.000653763031170843,u:"../developing_with_spryker/migration_guides/mg_sales_aggregator_migration_console.html",a:"\u003c?php\n/**\n * Copyright © 2017-present Spryker Systems GmbH. All rights reserved.\n * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.\n */\n\nnamespace Pyz\\Zed\\SalesAggregator\\Communication\\Console;\n\nuse Exception;\nuse ...",t:"Migration Guide - SalesAggregator Migration Console Command"},"257":{i:0.00209688670044912,u:"../developing_with_spryker/migration_guides/mg_shipment_and_customer_migration_console.html",a:"\u003c?php\n/**\n * Copyright © 2017-present Spryker Systems GmbH. All rights reserved.\n * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.\n */\n\nnamespace Pyz\\Zed\\Sales\\Communication\\Console;\n\nuse Exception;\nuse ...",t:"Migration Guide - Sales Migration Console Command"},"258":{i:0.000653763031170843,u:"../developing_with_spryker/migration_guides/mg_search.html",a:"Upgrading from version 3.* to version 4.* With the version 4 of the Search module, the logic and configuration of how the results are sorted are changed. Previously there were two request parameters that controlled what field are we sorting by and what is the direction of the sort (e.g ...",t:"Migration Guide - Search"},"259":{i:0.000653763031170843,u:"../developing_with_spryker/migration_guides/mg_setup.html",a:"Upgrading from version 3.* to version 4.*\n\n With this update the behavior of the setup:install command slightly changes. Instead of removing directories where generated files are stored, these directories will be kept and emptied.\n   \nThe setup:install command utilizes two new commands for cleaning ...",t:"Migration Guide - Setup"},"260":{i:0.004601830740806,u:"../developing_with_spryker/migration_guides/mg_shipment.html",a:"Upgrading from Version 5.* to Version 6.* In version 6, multi-currency prices are introduced for shipment methods, allowing to set up different net and gross price per shipment method for each preconfigured currency. The spy_shipment_method.default_price database column becomes deprecated. Shipment ...",t:"Migration Guide - Shipment"},"261":{i:0.000653763031170843,u:"../developing_with_spryker/migration_guides/mg_stepengine.html",a:"Upgrading from version 2.* to version 3.*\n \nIf you\u0027re migrating the StepEngine bundle from version 2 to version 3, you need to follow the steps described below.\n\n In Version 3 the StepCollectionInterface::getPreviousStep() has a new second optional argument (AbstractTransfer $dataTransfer). If you ...",t:"Migration Guide - Step Engine"},"262":{i:0.00577902086743168,u:"../developing_with_spryker/migration_guides/mg_tax.html",a:"Upgrading from version 4.* to version 5.* In version 5, tax calculation logic changed, tax amount for options, expenses and items are now calculated in the Tax module.  The plugins: ExpenseTaxCalculatorPlugin, ItemTaxCalculatorPlugin and TaxTotalsCalculatorPlugin were removed, and replaced with: ...",t:"Migration Guide - Tax"},"263":{i:0.000653763031170843,u:"../developing_with_spryker/migration_guides/mg_transfer.html",a:"Upgrading from version 2.* to version 3.* When upgrading to the new major version of the Transfer module, it is necessary to make sure that everywhere a $foo-\u003efromArray($bar-\u003etoArray()) statement is used the types are matching. From now on we are no longer silently ignoring when you try to set a ...",t:"Migration Guide - Transfer"},"264":{i:0.000653763031170843,u:"../developing_with_spryker/migration_guides/mg_wishlist.html",a:"Upgrading from version 2.* to version 3.*\n If you’re migrating the Wishlist module from version 2 to version 3, you need to follow the steps described below.\n\n Version 3 of the Wishlist module introduced new schema, and old tables have to be deleted while new created.\n\n First you need to drop old ...",t:"Migration Guide - Wishlist"},"265":{i:0.000933243951688158,u:"../developing_with_spryker/industry_partner_integration/partner_integration.html",a:"In this section you will find information about our Industry Partner Integration solutions. Please visit our Partners Registry for a complete list of our partners  https://spryker.com/find-a-partner/ Academy Navigation To navigate through content, click on an option from the right-hand table of ...",t:"Industry Partner Integration"},"266":{i:0.000689821199497725,u:"../developing_with_spryker/industry_partner_integration/factfinder/integration_search_factfinder.html",a:"Search Integration - Fact Finder (BETA) BETA version\n This module is still in development. For questions and inquiries please contact  academy@spryker.com Partner Information",t:"Search Integration - Fact Finder (BETA)"},"267":{i:0.000708344946095987,u:"../developing_with_spryker/industry_partner_integration/partner_analytics_netmind.html",a:"This integration is built and supported by our industry partner Mindlab Solutions. Partner Information Netmind Documentation Spryker customers can easily connect to Netmind and access comprehensive Netmind e-commerce reporting. On request, this can be individually adapted to customer-specific ...",t:"Netmind-Spryker Module"},"268":{i:0.00528037036258124,u:"../developing_with_spryker/industry_partner_integration/arvatorss/integration_arvato_rss.html",a:"Risk Solution Services Integration - Arvato Partner Information   See also: Risk Solution Services Integration - Arvato 2.0 Risk Check - Arvato Risk Solution Services 2.0 Store Order - Arvato Risk Solution Services 2.0   Last review date: Nov. 13th, 2017   ",t:"Risk Solution Services Integration - Arvato"},"269":{i:0.00579182285589137,u:"../developing_with_spryker/industry_partner_integration/arvatorss/v2_0/integration_arvato_rss_2.0.html",a:"The purpose of developing the risk solution services is to provide a complete and comprehensive risk management\n    for the eCommerce/mail-order industry, contributing to a high level of modularization and automation. Besides the use\n    of pre-configured service modules for risk management, risk ...",t:"Risk Solution Services Integration - Arvato 2.0"},"270":{i:0.0055606021298183,u:"../developing_with_spryker/industry_partner_integration/arvatorss/v2_0/integration_arvato_rss_risk_check_2.0.html",a:"\n    Accounted for by external credit agency data and internal existing customer- and order-details\n    the RiskCheck evaluates the probability of payment default for the customer orders.\n \n    The returned decision codes (Result – ActionCode – ResultCode) manage the definition of the eShop’s ...",t:"Risk Check - Arvato Risk Solution Services 2.0"},"271":{i:0.00525370568106023,u:"../developing_with_spryker/industry_partner_integration/arvatorss/v2_0/integration_arvato_rss_store_order_2.0.html",a:"\n    As soon as the order is activated in the eShop it has to be directly delivered by the service call StoreOrder in risk solution services.\n    Based on the transmitted data a limit check is processed again. The result and action codes returned by StoreOrder\n    should be analyzed and the order ...",t:"Store Order - Arvato Risk Solution Services 2.0"},"272":{i:0.000806168875011001,u:"../developing_with_spryker/industry_partner_integration/econda/integration_monitoring_econda.html",a:"Performance Monitoring - Econda (BETA) BETA version\n This module is still in development. For questions and inquiries please contact  academy@spryker.com Partner Information",t:"Performance Monitoring - Econda (BETA)"},"273":{i:0.000689821199497725,u:"../developing_with_spryker/industry_partner_integration/performance_monitoring_minubo.html",a:"Performance Monitoring - Minubo Partner Information Copyright and Disclaimer See  Disclaimer .",t:"Performance Monitoring - Minubo"},});