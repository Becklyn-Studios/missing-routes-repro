import { NeoCmsContactCollection } from "@components/shared/Cms/NeoCmsContactCollection/NeoCmsContactCollection";
import { NeoContact } from "@components/shared/NeoContact/NeoContact";
import { normalizeHeadlineLevel, normalizeImage } from "@lib/contentful/util";
import React from "react";

export const ContactCollection: React.FC<any> = ({
  headline,
  headlineLevel,
  contacts = [],
  greyBackground,
}) => {
  const isSingle = contacts.length < 2;
  return (
    <NeoCmsContactCollection
      single={isSingle}
      headline={headline}
      headlineLevel={normalizeHeadlineLevel(headlineLevel)}
      background={greyBackground}
    >
      {contacts.map((contact: any, key: number) => (
        <NeoContact
          key={key}
          {...contact}
          headline={
            (contact.lastName &&
              `${contact.firstName ?? ""} ${contact.lastName ?? ""}`.trim()) ||
            contact.firstName
          }
          image={normalizeImage(contact.image)}
          single={isSingle}
          mail={contact.eMail}
          fax={contact.faxNumber}
          phone={contact.phoneNumber}
          subline={contact.jobTitle}
        />
      ))}
    </NeoCmsContactCollection>
  );
};
