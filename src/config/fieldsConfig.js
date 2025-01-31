const registerFieldsConfig = [
    { label: "First Name *", type: "text", name: "name.first" },
    { label: "Middle Name", type: "text", name: "name.middle" },
    { label: "Last Name *", type: "text", name: "name.last" },
    { label: "Email *", type: "email", name: "email" },
    { label: "Phone *", type: "text", name: "phone" },
    { label: "Password *", type: "password", name: "password" },
    { label: "Confirm Password *", type: "password", name: "confirmPassword" },
    { label: "Image URL", type: "url", name: "image.url" },
    { label: "Image Alt Text", type: "text", name: "image.alt" },
    { label: "State", type: "text", name: "address.state" },
    { label: "Country *", type: "text", name: "address.country" },
    { label: "City *", type: "text", name: "address.city" },
    { label: "Street *", type: "text", name: "address.street" },
    { label: "House Number *", type: "text", name: "address.houseNumber" },
    { label: "ZIP Code *", type: "text", name: "address.zip" },
    { label: "Business Account", type: "checkbox", name: "isBusiness" },
];

const newBusinessCardFieldsConfig = [
    { label: "Title *", type: "text", name: "title" },
    { label: "Subtitle *", type: "text", name: "subtitle" },
    { label: "Description *", type: "text", name: "description" },
    { label: "Phone *", type: "text", name: "phone" },
    { label: "Email *", type: "email", name: "email" },
    { label: "Web", type: "url", name: "web" },
    { label: "Image URL", type: "url", name: "image.url" },
    { label: "Image Alt Text", type: "text", name: "image.alt" },
    { label: "State", type: "text", name: "address.state" },
    { label: "Country *", type: "text", name: "address.country" },
    { label: "City *", type: "text", name: "address.city" },
    { label: "Street *", type: "text", name: "address.street" },
    { label: "House Number *", type: "text", name: "address.houseNumber" },
    { label: "ZIP Code *", type: "text", name: "address.zip" },
];

export { registerFieldsConfig, newBusinessCardFieldsConfig };