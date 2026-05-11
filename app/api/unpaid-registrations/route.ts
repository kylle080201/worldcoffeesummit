import { NextRequest, NextResponse } from "next/server";
import connectMongo from "../../../utils/mongodb";
import Unpaid from "../../../models/unpaid";

type FormData = {
  firstName?: string;
  lastName?: string;
  companyName?: string;
  jobTitle?: string;
  countryCode?: string;
  mobileNumber?: string;
  country?: string;
  email?: string;
};

type LineItem = {
  price?: string;
  quantity?: number;
  tax_rates?: string[];
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const formData: FormData = body?.formData ?? {};
    const rawEmail = typeof formData.email === "string" ? formData.email : "";
    const email = rawEmail.trim().toLowerCase();

    console.log("[unpaid-registrations] POST received", {
      email,
      hasLineItems: Array.isArray(body?.line_items),
    });

    if (!email) {
      return NextResponse.json(
        { error: { message: "Email is required" } },
        { status: 400 }
      );
    }

    await connectMongo();

    const $set: Record<string, unknown> = {
      email,
      firstName: formData.firstName,
      lastName: formData.lastName,
      companyName: formData.companyName,
      jobTitle: formData.jobTitle,
      countryCode: formData.countryCode,
      mobileNumber: formData.mobileNumber,
      country: formData.country,
      updatedAt: new Date(),
    };

    if (Array.isArray(body?.line_items)) {
      $set.line_items = (body.line_items as LineItem[]).map((item) => ({
        price: item.price,
        quantity: item.quantity,
        tax_rates: item.tax_rates,
      }));
    }

    if (
      typeof body?.checkoutSessionId === "string" &&
      body.checkoutSessionId.length > 0
    ) {
      $set.checkoutSessionId = body.checkoutSessionId;
    }

    const doc = await Unpaid.findOneAndUpdate(
      { email },
      { $set, $setOnInsert: { createdAt: new Date() } },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    );

    console.log("[unpaid-registrations] saved", {
      id: doc?._id?.toString?.(),
      email: doc?.email,
    });

    return NextResponse.json({ unpaid: doc }, { status: 200 });
  } catch (error: any) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    if (!(error instanceof Error)) console.log(error);
    console.log(`❌ Unpaid registration error: ${errorMessage}`);

    return NextResponse.json(
      { error: { message: errorMessage } },
      { status: 400 }
    );
  }
}
