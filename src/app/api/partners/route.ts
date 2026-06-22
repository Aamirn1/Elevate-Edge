import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// GET /api/partners - list all partners
export async function GET() {
  try {
    const partners = await db.partner.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(partners);
  } catch (error) {
    console.error("Failed to fetch partners:", error);
    return NextResponse.json(
      { error: "Failed to fetch partners" },
      { status: 500 }
    );
  }
}

// POST /api/partners - sign up / sign in a partner
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { contact_info, mode } = body; // mode: "signup" | "signin"

    if (!contact_info) {
      return NextResponse.json(
        { error: "Contact info is required" },
        { status: 400 }
      );
    }

    // Look up existing partner
    let partner = await db.partner.findUnique({
      where: { contactInfo: contact_info },
    });

    if (mode === "signin") {
      if (!partner) {
        return NextResponse.json(
          { error: "No account found with this contact info. Please sign up first." },
          { status: 404 }
        );
      }
    } else {
      // signup mode: create if not exists
      if (!partner) {
        const uniqueCode = "EED-" + Math.random().toString(36).slice(2, 8).toUpperCase();
        partner = await db.partner.create({
          data: {
            contactInfo: contact_info,
            inviteCode: uniqueCode,
          },
        });
      }
    }

    return NextResponse.json(partner, { status: 201 });
  } catch (error) {
    console.error("Failed to create/signin partner:", error);
    return NextResponse.json(
      { error: "Failed to process partner request" },
      { status: 500 }
    );
  }
}
