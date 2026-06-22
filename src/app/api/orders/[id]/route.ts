import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

// PUT /api/orders/[id] - update order status (and optionally other fields)
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { status } = body;

    const order = await db.order.update({
      where: { id: parseInt(id, 10) },
      data: {
        ...(status !== undefined && { status }),
      },
    });

    return NextResponse.json(order);
  } catch (error) {
    console.error("Failed to update order:", error);
    return NextResponse.json(
      { error: "Failed to update order" },
      { status: 500 }
    );
  }
}
