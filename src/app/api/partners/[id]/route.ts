import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// GET /api/partners/[id] - get a partner by invite code (for referral counts etc.)
// Also supports lookup by invite_code via ?by=invite_code query
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { searchParams } = new URL(req.url);
    const by = searchParams.get("by"); // "invite_code" | "contact"

    let partner;
    if (by === "invite_code") {
      partner = await db.partner.findUnique({ where: { inviteCode: id } });
    } else if (by === "contact") {
      partner = await db.partner.findUnique({ where: { contactInfo: id } });
    } else {
      partner = await db.partner.findUnique({ where: { id: parseInt(id, 10) } });
    }

    if (!partner) {
      return NextResponse.json({ error: "Partner not found" }, { status: 404 });
    }

    // Count referrals (orders using this invite code)
    const referralCount = await db.order.count({
      where: { inviteCode: partner.inviteCode },
    });

    return NextResponse.json({ ...partner, referralCount });
  } catch (error) {
    console.error("Failed to fetch partner:", error);
    return NextResponse.json(
      { error: "Failed to fetch partner" },
      { status: 500 }
    );
  }
}

// PUT /api/partners/[id] - update partner contact info
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { contact_info } = body;

    if (!contact_info) {
      return NextResponse.json(
        { error: "Contact info is required" },
        { status: 400 }
      );
    }

    const partner = await db.partner.update({
      where: { id: parseInt(id, 10) },
      data: { contactInfo: contact_info },
    });

    return NextResponse.json(partner);
  } catch (error) {
    console.error("Failed to update partner:", error);
    return NextResponse.json(
      { error: "Failed to update partner. Contact info might be taken." },
      { status: 500 }
    );
  }
}
