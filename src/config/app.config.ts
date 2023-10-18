interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Administrator'],
  tenantName: 'Publisher',
  applicationName: 'Book Story',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage users',
    'Manage publishers',
    'Manage books',
    'Manage reviews',
    'Manage categories',
    'Manage book categories',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/1a2c465b-ad8b-483f-836b-751b52c6db66',
};
