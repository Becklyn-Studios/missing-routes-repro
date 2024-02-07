export const tracking = (innerText: string, href: string) => {
  if (!window.dataLayer) {
    return;
  }

  const trackingObject: Record<string, string> = {
    "cta-text": innerText,
    "cta-link": href,
    event: "",
  };

  if (href.startsWith("mailto:")) {
    trackingObject.event = "contact";
    trackingObject["contact-type"] = "mailto";
    trackingObject["cta-link"] = href.replace("mailto:", "");
  } else if (href.startsWith("tel:")) {
    trackingObject.event = "contact";
    trackingObject["contact-type"] = "call";
    trackingObject["cta-link"] = href.replace("tel:", "");
  } else if (href.includes(window.location.host) || href.startsWith("/")) {
    trackingObject.event = "cta-internal";
    const tempLinkElement = document.createElement("a");
    tempLinkElement.href = href;
    trackingObject["cta-link"] = tempLinkElement.pathname;
  } else if (href.startsWith("#")) {
    trackingObject.event = "cta-anchor";
    trackingObject["cta-link"] = `${window.location}${href}`;
  } else {
    trackingObject.event = "cta-external";
  }

  window.dataLayer.push(trackingObject);
};
