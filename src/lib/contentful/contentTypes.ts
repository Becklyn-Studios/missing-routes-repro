export const CONTENT_TYPES = {
    ACCORDION: "accordion",
    ACCORDION_ITEM: "accordionItem",
    CAMPAIGN_FORM: "energyCampaignForm",
    CARD: "card",
    CARD_COLLECTION: "cardCollection",
    CONTACT: "contact",
    CONTACT_COLLECTION: "contactCollection",
    CONTACT_FORM: "contactForm",
    COUNTDOWN: "countdown",
    EVENT: "event",
    EVENT_COLLECTION: "eventCollection",
    JOB_FORM: "jobForm",
    IMAGE: "image",
    SLIDER: "slider",
    LINK: "link",
    LINK_LIST: "linkList",
    PAGE_LINK: "pageLink",
    PAGE: "page",
    TEXT_MEDIA: "textImage",
    NEWS: "news",
    NEWS_COLLECTION: "newsCollection",
    VIDEO: "video",
    TEASER: "teaser",
    COUNTRY: "country",
    ARTICLE_LISTING: "articleListing",
    BLOGPOST: "blogpost",
    BLOG_COLLECTION: "blogCollection",
    TABLE: "table",
    PRODUCTFINDER_FEEDING_ELEMENT: "productFinderFeedingElement",
    PRODUCTFINDER: "productfinder",
    REGISTRATION_FORM: "registrationForm",
    TILE_COLLECTION: "tileCollection",
    TILE: "tile",
    QUOTE: "quote",
    QUOTE_SLIDER: "quoteSlider",
    IFRAME: "iframe",
    HTML_COMPONENT: "htmlmarkup",
    LOGO_SLIDER: "logoSlider",
    LOCALIZED_TEXT: "localizedText",
    LOCALIZED_RICHTEXT: "localizedRichtext",
    NEWSLETTER_SUBSCRIBE_PAGE: "newsletterSubscribePage",
    NEWSLETTER_UNSUBSCRIBE_PAGE: "newsletterUnsubscribePage",
    PRODUCT_PAGE: "productPage",
    SEARCH_PAGE: "searchPage",
};

export const isLink = (type: string) =>
    type === CONTENT_TYPES["PAGE_LINK"] || type === CONTENT_TYPES["LINK"];

export const isPage = (type: string) =>
    type === CONTENT_TYPES["PAGE"] ||
    type === CONTENT_TYPES["CONTACT_FORM"] ||
    type === CONTENT_TYPES["PRODUCTFINDER"] ||
    type === CONTENT_TYPES["PRODUCT_PAGE"] ||
    type === CONTENT_TYPES["NEWSLETTER_SUBSCRIBE_PAGE"] ||
    type === CONTENT_TYPES["NEWSLETTER_UNSUBSCRIBE_PAGE"] ||
    type === CONTENT_TYPES["REGISTRATION_FORM"];

export const isPageless = (type: string) =>
    type === CONTENT_TYPES["EVENT"] ||
    type === CONTENT_TYPES["NEWS"] ||
    type === CONTENT_TYPES["BLOGPOST"];
