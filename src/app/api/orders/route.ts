import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// GET /api/orders - list all orders (newest first)
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search")?.toLowerCase().trim();

    const orders = await db.order.findMany({
      orderBy: { createdAt: "desc" },
    });

    let filtered = orders;
    if (search) {
      filtered = orders.filter(
        (o) =>
          o.clientEmail?.toLowerCase().includes(search) ||
          o.clientName?.toLowerCase().includes(search)
      );
    }

    return NextResponse.json(filtered);
  } catch (error) {
    console.error("Failed to fetch orders:", error);
    return NextResponse.json(
      { error: "Failed to fetch orders" },
      { status: 500 }
    );
  }
}

// POST /api/orders - create a new order (from the contact form)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      client_name,
      client_email,
      invite_code,
      business_type,
      services,
      budget,
      message,
    } = body;

    if (!client_name || !client_email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const order = await db.order.create({
      data: {
        clientName: client_name,
        clientEmail: client_email,
        inviteCode: invite_code || null,
        status: "pending",
        businessType: business_type || null,
        services: services || null,
        budget: budget || null,
        message,
      },
    });

    return NextResponse.json(order, { status: 201 });
  } catch (error) {
    console.error("Failed to create order:", error);
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}
