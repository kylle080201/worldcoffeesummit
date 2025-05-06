export interface IResponseData {
  res: {
    checkoutSessionId: string;
    companyName: string;
    createdAt: string;
    email: string;
    firstName: string;
    jobTitle: string;
    lastName: string;
    paymentIntentId: string;
    event: string;
    ticketName: string | null;
    _id: string;
  };
}
